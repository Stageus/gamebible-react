import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { setColor } from "../style/SetStyle";
import { Div } from "../style/LayoutStyle";
import { Button } from "../style/ButtonStyle";

import { useRecoilState } from "recoil";
import { TabBtnAton } from "../recoil/TabBtnAtom";

const TabBtn = styled(Button)`
  border: 1px solid ${setColor("major")};
`;

const SwitchTabItem = (props) => {
  const { BtnText } = props;
  const BtnTextTest = ["연관 게임", "연관 게시글", "커뮤니티", "위키"];
  const [tabBtnText, setTabBtnText] = useRecoilState(TabBtnAton);
  const BtnClickEvent = (btnText) => {
    setTabBtnText(btnText);
    console.log(tabBtnText);
  };
  useEffect(() => {
    if (!tabBtnText) {
      setTabBtnText(BtnTextTest[0]);
    }
  }, [tabBtnText, BtnTextTest, setTabBtnText]);

  return (
    <Div $width="100%">
      {BtnTextTest.map((Btn) => (
        <TabBtn
          $width="150px"
          $height="50px"
          $margin="0 -1px 0 0"
          $color={tabBtnText === Btn ? "white" : "black"}
          $backgroundColor={tabBtnText === Btn ? "major" : "white"}
          $fontSize="large"
          $flex="h_center_center"
          key={Btn}
          onClick={() => BtnClickEvent(Btn)}
        >
          {Btn}
        </TabBtn>
      ))}
    </Div>
  );
};

export default SwitchTabItem;
