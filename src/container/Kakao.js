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
    request(`/account/kakao/callback?code=${code}`, "GET");
    console.log("gdgd");
  }, [code]);

  // useEffect(() => {
  //   const requestLogin = async (code) => {
  //     const response = await fetch(`http://127.0.0.1/account/kakao/callback?code=${code}`);
  //     const result = await response.json();
  //     if (response.status === 200) {
  //       console.log(result);
  //     }
  //   };

  //   if (code) requestLogin(code);
  // }, [code]);

  useEffect(() => {
    console.log(data);
    window.location = "/";
  }, [data]);

  return <></>;
};

export default Kakao;
