import React, { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import { useInput } from "../../hook/useInput";

import InputItem from "../../component/InputItem";

const EmailAuthInputContainer = (props) => {
  const { data, error, status, request } = useFetch();
  const { value: emailAuthValue, onChangeEvent: onChangeEmailAuthEvent } = useInput("");

  const { emailAuthCheck, setEmailAuthCheck, emailValue } = props;

  useEffect(() => {
    if (status === 200) {
      if (window.confirm("인증 되었습니다.")) {
        setEmailAuthCheck(true);
      } else {
        setEmailAuthCheck(false);
      }
    }
    if (status === 204) {
      alert("올바르지 않는 입력입니다.");
    }
    if (status === 400) {
      alert("유효하지 않은 값입니다.");
    }
    if (error) {
      console.log(status);
      console.log(error);
    }
  }, [data, status, error]);

  const submitEmailAuthEvent = async () => {
    await request("/account/email/auth", "POST", { email: emailValue, code: emailAuthValue });
  };

  return (
    <>
      {/* 이메일 인증 인풋 */}
      <InputItem
        {...{
          key: "emailAuthCode",
          type: "emailAuthCode",
          label: "인증번호",
          button: "인증확인",
          inputValue: emailAuthValue,
          inputChangeEvent: onChangeEmailAuthEvent,
          verificationCheckValue: emailAuthCheck,
          verificationClickEvent: submitEmailAuthEvent,
        }}
      ></InputItem>
      {/* /이메일 인증 인풋 */}
    </>
  );
};

export default EmailAuthInputContainer;
