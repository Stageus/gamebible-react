import React from "react";

import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";

import ImgTextBtnUtil from "../../util/ImgTextBtnUtil";

import noGameImg from "../../img/noGameImg.svg";
import addGameImg from "../../img/addGameImg.svg";

const NoResultNoGameContainer = () => {
  return (
    <Div $flex="v_center_center">
      <Img src={noGameImg} $margin="0 0 30px 0" />
      <ImgTextBtnUtil
        img={addGameImg}
        text={"새로운 게임 요청하기"}
        color={"white"}
        backgroundColor={"major"}
      />
    </Div>
  );
};

export default NoResultNoGameContainer;
