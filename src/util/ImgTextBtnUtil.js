import React from "react";
import { Button } from "../style/ButtonStyle";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

const ImgTextBtnUtil = ({ img, text, color, backgroundColor, onClick }) => {
  return (
    <Button
      $flex="h_center_center"
      $backgroundColor={backgroundColor}
      $color={color}
      $width="120px"
      $height="50px"
      $fontWeight="bold"
      $borderRadius="20px"
      $border={`1px solid ${color}`}
      onClick={onClick}
    >
      <Div $margin="0 10px 0 0" $height="15px">
        <Img src={img} alt={text} />
      </Div>
      {text}
    </Button>
  );
};

export default ImgTextBtnUtil;
