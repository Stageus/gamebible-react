import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(0);

  const request = async (path, method, body) => {
    try {
      const object = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (body) {
        object.body = JSON.stringify(body);
      }

      const response = await fetch(`${process.env.REACT_APP_API_KEY}${path}`, object);
      setStatus(response.status);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return { data, error, status, request };
};

export default useFetch;
