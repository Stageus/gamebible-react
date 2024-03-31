import React, { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import { useInput } from "../../hook/useInput";
import { useNavigate } from "react-router-dom";

import InputItem from "../../component/InputItem";

import { emailValueValidation } from "../../util/ValidationUtil";

const dummyEmailData = {
  email: {
    key: "email",
    type: "email",
    label: "이메일",
    button: "인증전송",
    placeholder: "이메일 주소 입력",
  },
};

const EmailInputContainer = (props) => {
  const { data, error, status, request } = useFetch();

  const { emailValue, onChangeEmailEvent, emailCheck, setEmailCheck } = props;

  // 인풋 상태

  // /인풋 상태

  useEffect(() => {
    console.log(data);
    if (status === 200) {
      alert("이메일을 전송했습니다.");
      setEmailCheck(true);
    } else {
      return;
    }
  }, [data, error, status]);

  // 인증 타입에 따른 인풋 비활성화

  const verificationClickEvent = (inputValue) => {
    if (emailValueValidation(inputValue)) {
      submitEmailCheckEvent();
    }
  };

  // /인증 타입에 따른 인풋 비활성화

  const submitEmailCheckEvent = async () => {
    await request("/account/email/check", "POST", { email: emailValue });
  };

  return (
    <>
      {/* 이메일 인풋 */}
      <InputItem
        {...{
          dummyInputData: dummyEmailData,
          inputValue: emailValue,
          inputChangeEvent: onChangeEmailEvent,
          verificationCheckValue: emailCheck,
          verificationClickEvent,
        }}
      ></InputItem>
      {/* /이메일 인풋 */}
    </>
  );
};

export default EmailInputContainer;
