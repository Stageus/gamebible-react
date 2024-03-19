import React from "react";
import SwitchTabItem from "../component/SwitchTabItem";
import PostDetailViewContainer from "../container/PostDetailViewContainer";
import { Div } from "../style/LayoutStyle";

const JunContentContainer = () => {
  const BtnText = ["커뮤니티", "위키"];
  return (
    <Div $width="100%" $padding="0 30px">
      <SwitchTabItem {...{ BtnText }} />
      <PostDetailViewContainer />
    </Div>
  );
};

export default JunContentContainer;
