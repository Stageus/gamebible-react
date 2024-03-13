import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import addPhotoImg from "../img/addPhotoImg.svg";
import { Button } from "../style/ButtonStyle";
import { Div } from "../style/LayoutStyle";
import { Span } from "../style/TextStyle";

const AddPhotoBtnItemLayout = styled(Button)`
  border: 1px solid ${setColor("black")};
  border-radius: 20px;
`;
const AddPhotoBtnItemContent = styled(Div)``;
const AddPhotoBtnItemImg = styled(Div)``;
const AddPhotoBtnItemText = styled(Span)``;

const AddPhotoBtnItem = () => {
  return (
    <AddPhotoBtnItemLayout
      $flex="h_center_center"
      $backgroundColor="white"
      $padding="20px 30px 20px 30px"
    >
      <AddPhotoBtnItemContent $flex="h_between_center">
        <AddPhotoBtnItemImg $margin="0 8px 0 0" $width="30px" $height="30px">
          <img src={addPhotoImg} alt="사진 첨부하기" />
        </AddPhotoBtnItemImg>
        <AddPhotoBtnItemText $fontSize="large" $fontWeight="bold">
          PHOTO
        </AddPhotoBtnItemText>
      </AddPhotoBtnItemContent>
    </AddPhotoBtnItemLayout>
  );
};

export default AddPhotoBtnItem;
