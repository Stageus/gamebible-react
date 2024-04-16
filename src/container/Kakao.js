import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useFetch from "../hook/useFetch";

const Kakao = () => {
  const { data, status, request } = useFetch();
  const [code, setCode] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlCode = urlParams.get("code");
    setCode(urlCode);
  }, [code]);

  useEffect(() => {
    if (code) {
      request(`/account/kakao/callback?code=${code}`, "GET");
    }
  }, [code]);

  // useEffect(() => {
  //   const requestLogin = async (code) => {
  //     const response = await fetch(`http://127.0.0.1:3000/account/kakao/callback?code=${code}`);
  //     const result = await response;
  //     if (response.status === 200) {
  //       console.log(result);
  //     }
  //   };

  //   if (code) {
  //     console.log("gd");

  //     requestLogin(code);
  //   }
  // }, [code]);
  useEffect(() => {
    console.log(data);
    // window.location = "/";
  }, [data]);

  return <></>;
};

export default Kakao;
