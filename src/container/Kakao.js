import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useFetch from "../hook/useFetch";

const Kakao = () => {
  const { data, status, request } = useFetch();
  const [code, setCode] = useState(null);
  const [, setCookies] = useCookies(["token"]);

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
  useEffect(() => {
    if (status === 200) {
      setCookies("token", data.token, { path: "/" });
      window.location = "/";
    }
    if (status === 500) {
      alert("네트워크가 불안정합니다 잠시후 다시 시도해주세요.");
    }
  }, [data]);

  return <></>;
};

export default Kakao;
