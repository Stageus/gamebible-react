import React, { useState } from "react";

import SwitchTabItem from "../component/SwitchTabItem";
import PostDetailViewContainer from "../container/PostDetailViewContainer";

import { Div } from "../style/LayoutStyle";

const ReadPostContainer = () => {
  // const BtnText = ["커뮤니티", "위키"];

  // const [tabBtnValue, setTabBtnValue] = useState(BtnText[0]);

  // const BtnClickEvent = (btnText) => {
  //   setTabBtnValue(btnText);
  //   console.log(tabBtnValue);
  // };

  return (
    // <Div $width="100%" $padding="0 30px">
    //   <SwitchTabItem {...{ BtnText, tabBtnValue, BtnClickEvent }} />
    //   {tabBtnValue === BtnText[0] ? <PostDetailViewContainer /> : null}
    // </Div>
    <PostDetailViewContainer />
  );
};

export default ReadPostContainer;
