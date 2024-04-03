import React from "react";
import FooterItem from "../component/FooterItem";
import EditPersonalInfoContainer from "../container/inEditPersonalInfoPage/EditPersonalInfoContainer";

import { Section } from "../style/LayoutStyle";

const EditPersonalInfoPage = () => {
  return (
    <>
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <EditPersonalInfoContainer />
      </Section>
      <FooterItem />
    </>
  );
};

export default EditPersonalInfoPage;
