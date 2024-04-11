import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hook/useInput";

import InputItem from "../../component/InputItem";
import HeaderLogo from "../../img/HeaderLogo.svg";

import { Link } from "react-router-dom";
import { Img } from "../../style/ImgStyle";
import { Div, Section } from "../../style/LayoutStyle";
import { Button } from "../../style/ButtonStyle";
import { idValueValidation, pwValueValidation } from "../../util/ValidationUtil";
import { useCookies } from "react-cookie";

import useFetch from "../../hook/useFetch";
import SocialSignInBtnContainer from "./SocialSignInBtnContainer";

const SignInContainer = () => {
  const { data, status, request } = useFetch();

  // 인풋 값
  const { value: idValue, onChangeEvent: onChangeIdValue } = useInput("");
  const { value: pwValue, onChangeEvent: onChangePwValue } = useInput("");
  // /인풋 값

  const [cookies, setCookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token) {
      navigate("/");
    }
  }, [cookies.token, navigate]);

  useEffect(() => {
    if (data && data.token) {
      setCookies("token", data.token, { path: "/" });
      navigate("/");
      console.log(data);
    }
    if (status === 204) {
      alert("아이디 혹은 비밀번호가 존재하지 않습니다");
    }
    if (status === 400) {
      alert("유효하지 않은 아이디 입니다.");
    }
    if (status === 401) {
      alert("유효하지 않은 비밀번호 입니다.");
    }
  }, [status, data]);

  const submitData = async () => {
    if (!idValueValidation(idValue)) {
      return;
    }
    if (!pwValueValidation(pwValue)) {
      return;
    }
    await request(`/account/auth`, "POST", {
      id: idValue,
      pw: pwValue,
    });
  };

  return (
    <Section $flex="v_center_center" $width="350px">
      <Img src={HeaderLogo} alt="HeaderLogo" />
      <InputItem
        {...{
          type: "id",
          placeholder: "아이디",
          inputValue: idValue,
          inputChangeEvent: onChangeIdValue,
        }}
      ></InputItem>
      <InputItem
        {...{
          type: "pw",
          placeholder: "비밀번호",
          inputValue: pwValue,
          inputChangeEvent: onChangePwValue,
        }}
      ></InputItem>
      <Button
        $flex="h_center_center"
        $width="100%"
        $height="50px"
        $color="white"
        $margin="0 0 20px 0"
        $borderRadius="4px"
        onClick={submitData}
      >
        로그인
      </Button>
      <Div $width="100%" $flex="h_between_center" $margin="0 0 20px 0">
        <Link to="/signUp">계정이 없으세요? 회원가입</Link>
        <Div>
          <Link to="/findID">아이디 찾기/</Link>
          <Link to="/resetPW">비밀번호 찾기</Link>
        </Div>
      </Div>
      <SocialSignInBtnContainer />
    </Section>
  );
};
export default SignInContainer;
