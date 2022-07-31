import React, { useState, useEffect } from 'react';
import QuoteContainer from "./QuoteContainer";
import NewQuoteForm from "./NewQuoteForm";


function App() {
  const [quotes, setQuotes] = useState([]);
  const [formVisible, setFormVisible] = useState(true);
  const [favoriteVisible, setFavoriteVisible] = useState(true);
  const quotesToDisplay = quotes.filter((quote) => favoriteVisible || quote.isFavorite);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => setQuotes(data))
  }, []);

  function addQuote(newQuote) {
    setQuotes([...quotes, newQuote]);
  }


  function addToFavorites(favQuote) {
    setQuotes(quotes.map(quote => {
      return quote.id === favQuote.id ? {...favQuote, isFavorite: !favQuote.isFavorite} : quote
      }  
    ))
  }

  function renderQuoteView() {
    if (quotesToDisplay.length === 0 && !favoriteVisible) {
      return (<h1>You have no favorites in this section</h1>)
    } else {
      return (
        <QuoteContainer 
          quotes={quotesToDisplay}
          addToFavorites={addToFavorites}
        />
      )
    }
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button 
          onClick={() => setFormVisible(!formVisible)} >
          Show/hide new poem form
        </button>
        {formVisible ? <NewQuoteForm addQuote={addQuote} /> : null}

        <button onClick={() => setFavoriteVisible(!favoriteVisible)} >
          Show/hide Favorite Quotes
        </button>
      </div>
      {renderQuoteView()}
    </div>
  );
}

export default App;