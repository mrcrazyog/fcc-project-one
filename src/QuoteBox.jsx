import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FaQuoteLeft } from 'react-icons/fa';

function QuoteBox() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [buttonClicked, setButtonClicked] = useState(true);

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  useEffect(() => {
    if (buttonClicked) {
      fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
          // console.log(JSON.stringify(data));
          setQuote(data.content);
          setAuthor(data.author);
        })
        .catch((error) => console.log(error))
        .finally(() => setButtonClicked(false)); // toggle button state after fetch
    }
  }, [buttonClicked]);

  return (
    <div>
      <div id='quote-box'>
        <div id='text'>
          <FaQuoteLeft /> {quote}
        </div>
        <div id='author'>-- {author} </div>
        <div className='buttons'>
          <Button
            variant='outline-primary'
            id='new-quote'
            onClick={handleButtonClick}
            className='button'
          >
            Generate new quote
          </Button>
          <Button variant='outline-primary' className='button'>
            <a href='https://twitter.com/intent/tweet' id='tweet-quote'>
              Tweet quote
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
