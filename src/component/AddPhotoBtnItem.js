import React, { useState } from "react";

import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Button } from "../style/ButtonStyle";
import { Input } from "../style/InputStyle";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

import addPhotoImg from "../img/addPhotoImg.svg";

const AddPhotoBtnItemLayout = styled(Button)``;

const AddPhotoBtnItem = (props) => {
  const { addPhotoClickEvent, fileInput, fileChangeEvent } = props;

  return (
    <>
      <Input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={fileChangeEvent}
      />

      <AddPhotoBtnItemLayout
        $flex="h_center_center"
        $backgroundColor="initial"
        $height="50px"
        $padding="15px 20px"
        $color="black"
        $fontWeight="bold"
        $borderRadius="20px"
        $borderStyle={`1px solid ${setColor("black")}`}
        onClick={addPhotoClickEvent}
      >
        <Div $margin="0 10px 0 0" $height="24px">
          <Img src={addPhotoImg} alt="사진 업로드하기" />
        </Div>
        PHOTO
      </AddPhotoBtnItemLayout>
    </>
  );
};

export default AddPhotoBtnItem;
