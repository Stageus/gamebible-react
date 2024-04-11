import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(0);

  const request = async (path, method, body, headers) => {
    try {
      const option = {
        method: method,
        headers: { "Content-Type": "application/json", ...headers },
      };
      if (body) {
        option.body = JSON.stringify(body);
      }
      const response = await fetch(`${process.env.REACT_APP_API_KEY}${path}`, option);
      setStatus(response.status);

      const responseContentType = response.headers.get("Content-Type")?.split(";")[0];

      if (responseContentType === "application/json") {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.log(`fetchERROR : ${error}`);
      setError(error);
    }
  };

  return { data, error, status, request };
};

export default useFetch;
