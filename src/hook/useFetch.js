import { useState } from "react";

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
      const response = await fetch(`http://192.168.0.228:3000${path}`, option);

      // const response = await fetch(`${process.env.REACT_APP_API_KEY}${path}`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(body),
      // });

      // console.log(response);

      setStatus(response.status);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(`내정보 수정 에러 : ${error}`);
      setError(error);
    }
  };

  return { data, error, status, request };
};

export default useFetch;
