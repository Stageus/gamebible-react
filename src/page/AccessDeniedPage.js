import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccessDeniedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 경고창을 띄우고 사용자를 다른 페이지로 이동
    alert("로그인 후 이용해주세요");
    navigate("/");
  }, [navigate]);

  // JSX를 반환
  return null; // 또는 다른 JSX를 반환할 수 있음
};

export default AccessDeniedPage;
