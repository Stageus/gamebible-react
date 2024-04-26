import React, { useEffect } from "react";
import useFetch from "../../hook/useFetch";
import { nicknameValueValidation } from "../../util/ValidationUtil";

import InputItem from "../../component/InputItem";

const NickInputContainer = (props) => {
  const { nicknameValue, onChangeNicknameEvent, nicknameCheck, setNicknameCheck } = props;
  const { data, error, status, request } = useFetch();

  useEffect(() => {
    if (status === 200) {
      if (window.confirm("사용 가능한 닉네임 입니다 사용하시겠습니까?")) {
        setNicknameCheck(true);
      } else {
        setNicknameCheck(false);
      }
    }
    if (status === 400) {
      alert("올바르지 않는 입력입니다.");
    }
    if (status === 409) {
      alert("중복된 닉네임입니다.");
    }
    if (error) {
      console.log(status);
      console.log(error);
    }
  }, [data, status, error]);

  // 인증 타입에 따른 인풋 비활성화
  const verificationClickEvent = (inputValue) => {
    if (nicknameValueValidation(inputValue)) {
      submitNicknameCheckEvent();
    }
  };

  // /인증 타입에 따른 인풋 비활성화

  const submitNicknameCheckEvent = async () => {
    await request("/account/nickname/check", "POST", { nickname: nicknameValue });
  };

  return (
    <>
      {/* 닉네임 인풋 */}
      <InputItem
        {...{
          key: "nickname",
          type: "nickname",
          label: "닉네임",
          placeholder: "2 ~ 20글자 제한",
          button: "중복확인",
          inputValue: nicknameValue,
          inputChangeEvent: onChangeNicknameEvent,
          verificationCheckValue: nicknameCheck,
          verificationClickEvent,
        }}
      ></InputItem>
      {/* /닉네임 인풋 */}
    </>
  );
};

export default NickInputContainer;
