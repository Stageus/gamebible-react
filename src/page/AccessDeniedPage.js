import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccessDeniedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert("로그인 후 이용해주세요");
    navigate("/");
  }, [navigate]);

  return null;
};

export default AccessDeniedPage;
