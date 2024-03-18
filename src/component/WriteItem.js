import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import ImgTextBtnUtil from "../util/ImgTextBtnUtil";
import AddPhotoBtnItem from "./AddPhotoBtnItem";
import finishImg from "../img/finishImg.svg";

const WriteItem = () => {
  return (
    <>
      <AddPhotoBtnItem />
      <ImgTextBtnUtil
        img={finishImg}
        text="FINISH"
        alt="작성완료"
        color={"white"}
        backgroundColor={"major"}
      />
    </>
  );
};

export default WriteItem;
