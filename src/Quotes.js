import React, { useState } from 'react';


function Quotes({quote, addToFavorites}) {
  const {text, author} = quote;
  const [isRead, setIsRead] = useState(false)


  return (
    <div>
      <p>{text}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={() => setIsRead(!isRead)} >
        Mark as {isRead ? "unread" : "read" }
      </button>

      <button onClick={() => addToFavorites(quote)}>
        {quote.isFavorite ? "Unfavorite" : "♥ Favorite" }
      </button>
    </div>
  );
}

export default Quotes;