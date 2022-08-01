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
        {isRead ? "unread" : "read" }
      </button>

      <button onClick={() => addToFavorites(quote)}>
        {quote.isFavorite ? "Like" : "♥ Liked" }
      </button>
    </div>
  );
}

export default Quotes;