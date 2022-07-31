import React, { useState } from 'react';

function NewQuoteForm({addQuote}) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://type.fit/api/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        author,
      }),
    })
      .then((r) => r.json())
      .then((newQuote) => addQuote(newQuote));

    setText("");
    setAuthor("");
  }

  return (
    <form className="new-Quote-form" onSubmit={handleSubmit} >
      
      <input 
        placeholder="Author" 
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <textarea 
        placeholder="Write your text here..." 
        rows={10} 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <input 
        type="submit" 
        value="Share your Quote" 
      />
    </form>
  );
}

export default NewQuoteForm;