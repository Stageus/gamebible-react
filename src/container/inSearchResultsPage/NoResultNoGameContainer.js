import React from "react";
import { useClick } from "../../hook/useClick";

import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";

import ImgTextBtnItem from "../../component/ImgTextBtnItem";
import SuggestGameContainer from "./SuggestGameContainer";

import noGameImg from "../../img/noGameImg.svg";
import addGameImg from "../../img/addGameImg.svg";

const NoResultNoGameContainer = () => {
  const { click: suggestNewGame, clickEvent: suggestNewGameEvent } = useClick(false);

  return (
    <Div $flex="v_center_center">
      <Img src={noGameImg} $margin="0 0 30px 0" />
      <ImgTextBtnItem
        img={addGameImg}
        text={"새로운 게임 요청하기"}
        color={"white"}
        backgroundColor={"major"}
        onClick={suggestNewGameEvent}
      />
      {suggestNewGame && <SuggestGameContainer {...{ suggestNewGameEvent }} />}
    </Div>
  );
};

export default NoResultNoGameContainer;
