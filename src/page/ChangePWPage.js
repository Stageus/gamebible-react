import React from "react";
import FooterItem from "../component/FooterItem";
import ChangePWContainer from "../container/inChangePWPage/ChangePWContainer";

import { Section } from "../style/LayoutStyle";

const ChangePWPage = () => {
  return (
    <>
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <ChangePWContainer />
      </Section>
      <FooterItem />
    </>
  );
};

export default ChangePWPage;
