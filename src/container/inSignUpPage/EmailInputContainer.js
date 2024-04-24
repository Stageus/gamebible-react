import React, { useEffect } from "react";
import useFetch from "../../hook/useFetch";
import InputItem from "../../component/InputItem";

import { emailValueValidation } from "../../util/ValidationUtil";

const EmailInputContainer = (props) => {
  const { data, status, request } = useFetch();

  const { emailValue, onChangeEmailEvent, emailCheck, setEmailCheck } = props;

  // 인풋 상태

  // /인풋 상태

  useEffect(() => {
    if (status === 200) {
      alert("이메일을 전송했습니다.");
      setEmailCheck(true);
    }
    if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    }
    if (status === 409) {
      alert("중복된 이메일입니다.");
    }
    if (status === 500) {
      alert("예상치 못한 에러 발생 잠시후 다시 이용해주세요.");
    }
  }, [data, status]);

  const submitEmailCheckEvent = () => {
    request("/account/email/check", "POST", { email: emailValue });
  };

  // 인증 타입에 따른 인풋 비활성화

  const verificationClickEvent = (inputValue) => {
    if (emailValueValidation(inputValue)) {
      submitEmailCheckEvent();
    }
  };

  // /인증 타입에 따른 인풋 비활성화

  return (
    <>
      {/* 이메일 인풋 */}
      <InputItem
        {...{
          key: "email",
          type: "email",
          label: "이메일",
          button: "인증전송",
          placeholder: "이메일 주소 입력",
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
