import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

const Kakao = () => {
  const [cookies, setCookies] = useCookies(["token"]);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("code");

    setCookies("token", token, { path: "/" });
    window.location.pathname = "/";
  }, [setCookies]);
  return <></>;
};

export default Kakao;
