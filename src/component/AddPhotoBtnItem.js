import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import addPhotoImg from "../img/addPhotoImg.svg";
import { Button } from "../style/ButtonStyle";
import { Div } from "../style/LayoutStyle";

const AddPhotoBtnItemLayout = styled(Button)`
  border: 1px solid ${setColor("black")};
  border-radius: 20px;
`;

const AddPhotoBtnItem = () => {
  return (
    <AddPhotoBtnItemLayout
      $flex="h_center_center"
      $backgroundColor="white"
      $padding="15px 20px"
      $fontWeight="bold"
    >
      <Div $margin="0 10px 0 0" $height="24px">
        <img src={addPhotoImg} alt="사진 첨부하기" />
      </Div>
      PHOTO
    </AddPhotoBtnItemLayout>
  );
};

export default AddPhotoBtnItem;
