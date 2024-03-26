import React from "react";
import { useClick } from "../../hook/useClick";

import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";

import ImgTextBtnUtil from "../../util/ImgTextBtnUtil";
import SuggestGameContainer from "./SuggestGameContainer";

import noGameImg from "../../img/noGameImg.svg";
import addGameImg from "../../img/addGameImg.svg";

const NoResultNoGameContainer = () => {
  const { click: suggestNewGame, ClickEvent: suggestGameEvent } = useClick(false);

  return (
    <Div $flex="v_center_center">
      <Img src={noGameImg} $margin="0 0 30px 0" />
      <ImgTextBtnUtil
        img={addGameImg}
        text={"새로운 게임 요청하기"}
        color={"white"}
        backgroundColor={"major"}
        onClick={suggestGameEvent}
      />
      {suggestNewGame && <SuggestGameContainer {...{ suggestGameEvent }} />}
    </Div>
  );
};

export default NoResultNoGameContainer;
