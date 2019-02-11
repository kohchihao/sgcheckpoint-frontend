import { useState, useEffect } from "react";
import rp from 'request-promise';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {

    let options = {
      uri: url,
      json: true // Automatically parses the JSON string in the response
    };
    const response = await rp(options);
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loading];
};

export { useFetch };