import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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

      console.log(object);

      const response = await fetch(`${process.env.REACT_APP_API_KEY}${path}`, object);

      if (!response.ok) {
        throw new Error("네트워크 상태가 올바르지 않습니다.");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    }
  };

  return { data, error, request };
};

export default useFetch;
