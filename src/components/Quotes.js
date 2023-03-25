import React, { useState, useEffect } from 'react';

export default function Quotes() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [boolError, setBoolError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=cool',
          {
            method: 'GET',
            headers: { 'X-Api-Key': '8SSMZWYI21/6Rj0KXlch7A==FiOOQrXcbRQ0WIXK' },
          });
        const json = await response.json();
        setQuote(json[0].quote);
      } catch (error) {
        setBoolError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading, setBoolError]);

  return (
    boolError ? <h2>Error</h2> : <h2>{isLoading ? 'Loading' : quote}</h2>
  );
}
