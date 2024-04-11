import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useFetch from "../hook/useFetch";

const Kakao = () => {
  const [cookies, setCookies] = useCookies(["token"]);

  const { data, status, request } = useFetch();
  const [code, setCode] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    const urlCode = urlParams.get("code");
    setCode(urlCode);

    const requestPath = `${path}?code=${code}`;
    console.log(requestPath);
  }, []);

  useEffect(() => {
    request(`/account/kakao/callback?code=${code}`, "GET");
  }, [code]);

  useEffect(() => {
    if (data) {
    }
    window.location = "/";
  }, [data]);

  // useEffect(() => {
  //   const requestLogin = async (code) => {
  //     const response = await fetch(`http://192.168.0.228:3000/account/kakao/callback?code=${code}`);
  //     const result = await response.json();
  //     if (response.status === 200) {
  //       console.log(result);
  //     }
  //   };

  //   if (code) requestLogin(code);
  // }, [code]);

  return <></>;
};

export default Kakao;
