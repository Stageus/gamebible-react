import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(0);
  const [cookie, ,] = useCookies(["token"]);

  const request = async (path, method, body, headers) => {
    try {
      const option = {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie.token}`,
          ...headers,
        },
      };
      if (body) {
        option.body = JSON.stringify(body);
      }

      const response = await fetch(`${process.env.REACT_APP_API_KEY}${path}`, option);
      setStatus(response.status);
      const responseContentType = response.headers.get("Content-Type")?.split(";")[0];

      // console.log(`${path} ${response.status}`);

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
