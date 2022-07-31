import React from "react";
import Quotes from "./Quotes";

function QuoteContainer({quotes, addToFavorites}) {
  return (
    <div className="quotes-container">
      {quotes.map(quote => {
        return (
          <Quotes 
            quote={quote} 
            addToFavorites={addToFavorites} 
          />
        )
        })}
    </div>
  );
}

export default QuoteContainer;