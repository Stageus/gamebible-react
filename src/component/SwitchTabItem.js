import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { setColor } from "../style/SetStyle";
import { Div } from "../style/LayoutStyle";
import { Button } from "../style/ButtonStyle";
import { Span } from "../style/TextStyle";

const TabBtn = styled(Button)`
  border: none;
  border-right: 1px solid ${setColor("major")};
  border-left: 1px solid ${setColor("major")};
`;

const SwitchTabItem = (props) => {
  const { BtnText, tab, setTab } = props;

  const BtnClickEvent = (btnText) => {
    setTab(btnText);
  };

  return (
    <Div $width="100%" $flex="h_start_start">
      {BtnText.map((elem) => (
        <TabBtn
          $width="150px"
          $height="50px"
          $margin="0 -1px 0 0"
          $backgroundColor={tab === elem ? "major" : "white"}
          $fontSize="large"
          $flex="h_center_center"
          key={elem}
          onClick={() => BtnClickEvent(elem)}
        >
          <Span $color={tab === elem ? "white" : "black"} $fontSize="12px">
            {elem}
          </Span>
        </TabBtn>
      ))}
    </Div>
  );
};

export default SwitchTabItem;
