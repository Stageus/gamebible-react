import React from "react";
import HeaderItem from "../component/HeaderItem";
import FooterItem from "../component/FooterItem";
import ChangePWContainer from "../container/inChangePWPage/ChangePWContainer";

import { Section } from "../style/LayoutStyle";

const userIdx = "null";

const ChangePWPage = () => {
  return (
    <>
      <HeaderItem {...{ userIdx }} />
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <ChangePWContainer />
      </Section>
      <FooterItem />
    </>
  );
};

export default ChangePWPage;
