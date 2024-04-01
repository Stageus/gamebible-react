import React from "react";
import HeaderItem from "../component/HeaderItem";
import FooterItem from "../component/FooterItem";
import PersonalInfoContainer from "../container/inPersonalInfoPage/PersonalInfoContainer";

import { Section } from "../style/LayoutStyle";

const PersonalInfoPage = () => {
  return (
    <>
      <HeaderItem />
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <PersonalInfoContainer />
      </Section>
      <FooterItem />
    </>
  );
};

export default PersonalInfoPage;
