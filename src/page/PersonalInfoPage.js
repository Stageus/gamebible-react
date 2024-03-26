import React from "react";
import HeaderItem from "../component/HeaderItem";
import FooterItem from "../component/FooterItem";
import PersonalInfoContainer from "../container/inPersonalInfoPage/PersonalInfoContainer";

import { Section } from "../style/LayoutStyle";

const dummyUserData = {
  id: {
    key: "id",
    label: "아이디",
    text: "qwer1234",
  },
  email: {
    key: "email",
    label: "이메일",
    text: "qwer@email.com",
  },
  nickname: {
    key: "nickname",
    label: "닉네임",
    text: "홍길동",
  },
};

const PersonalInfoPage = () => {
  return (
    <>
      <HeaderItem {...{ userIdx: dummyUserData.nickname.text }} />
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <PersonalInfoContainer />
      </Section>
      <FooterItem />
    </>
  );
};

export default PersonalInfoPage;
