import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { setColor } from "../style/SetStyle";
import { Div } from "../style/LayoutStyle";
import { Button } from "../style/ButtonStyle";
import { Span } from "../style/TextStyle";

const TabBtn = styled(Button)`
  border: 1px solid ${setColor("major")};
`;
const BtnTextTest = ["연관 게임", "연관 게시글", "커뮤니티", "위키"];

const SwitchTabItem = (props) => {
  // const { BtnText } = props;

  const [tabBtnValue, setTabBtnValue] = useState(BtnTextTest[0]);

  const BtnClickEvent = (btnText) => {
    setTabBtnValue(btnText);
  };

  return (
    <Div $width="100%">
      {BtnTextTest.map((Btn) => (
        <TabBtn
          $width="150px"
          $height="50px"
          $margin="0 -1px 0 0"
          $backgroundColor={tabBtnValue === Btn ? "major" : "white"}
          $fontSize="large"
          $flex="h_center_center"
          key={Btn}
          onClick={() => BtnClickEvent(Btn)}
        >
          <Span $color={tabBtnValue === Btn ? "white" : "black"} $fontSize="12px">
            {Btn}
          </Span>
        </TabBtn>
      ))}
    </Div>
  );
};

export default SwitchTabItem;
