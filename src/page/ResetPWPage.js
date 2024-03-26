import React from "react";
import HeaderItem from "../component/HeaderItem";
import ResetPWContainer from "../container/inResetPWPage/ResetPWContainer";
import FooterItem from "../component/FooterItem";

import { Section } from "../style/LayoutStyle";

const userIdx = "null";

const ResetPWPage = () => {
  return (
    <>
      <HeaderItem {...{ userIdx }} />
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <ResetPWContainer />
      </Section>
      <FooterItem />
    </>
  );
};

export default ResetPWPage;
