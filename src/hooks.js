import { useState, useEffect } from 'react';
import rp from 'request-promise';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      let options = {
        uri: url,
        json: true // Automatically parses the JSON string in the response
      };
      const response = await rp(options);
      setData(response);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loading, error];
};

function useCounter({initialCount = 0, step = 1} = {}) {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(c => c + step)
  const decrement = () => setCount(c => c - step)
  return {count, increment, decrement}
}
export { useFetch, useCounter};
