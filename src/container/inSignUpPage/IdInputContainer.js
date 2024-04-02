import React, { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import { idValueValidation } from "../../util/ValidationUtil";

import InputItem from "../../component/InputItem";

const dummyIdData = {
  id: {
    key: "id",
    type: "id",
    label: "아이디",
    button: "중복확인",
    placeholder: "4 ~ 20글자 제한",
  },
};

const IdInputContainer = (props) => {
  const { idValue, onChangeIdEvent, idCheck, setIdCheck } = props;
  const { data, error, status, request } = useFetch();

  useEffect(() => {
    if (status === 200) {
      if (window.confirm("사용 가능한 아이디 입니다 사용하시겠습니까?")) {
        setIdCheck(true);
      } else {
        setIdCheck(false);
      }
    }
    if (status === 400) {
      alert("올바르지 않는 입력입니다.");
    }
    if (status === 409) {
      alert("존재하는 아이디입니다.");
    }
    if (error) {
      console.log(status);
      console.log(error);
    }
  }, [data, status, error]);

  // 인증 타입에 따른 인풋 비활성화
  const verificationClickEvent = (inputValue) => {
    if (idValueValidation(inputValue)) {
      submitIdCheckEvent();
    }
  };

  // /인증 타입에 따른 인풋 비활성화

  const submitIdCheckEvent = async () => {
    await request("/account/id/check", "POST", { id: idValue });
  };

  return (
    <>
      {/* 아이디 인풋 */}
      <InputItem
        {...{
          dummyInputData: dummyIdData,
          inputValue: idValue,
          inputChangeEvent: onChangeIdEvent,
          verificationCheckValue: idCheck,
          verificationClickEvent,
        }}
      ></InputItem>
      {/* /아이디 인풋 */}
    </>
  );
};

export default IdInputContainer;
