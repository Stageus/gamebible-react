import React from "react";
import FindIDContainer from "../container/inFindIDPage/FindIDContainer";
import FooterItem from "../component/FooterItem";

import { Section } from "../style/LayoutStyle";

const FindIDPage = () => {
  return (
    <>
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <FindIDContainer />
      </Section>
      <FooterItem />
    </>
  );
};

export default FindIDPage;
