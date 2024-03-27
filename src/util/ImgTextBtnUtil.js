import React from "react";
import { Button } from "../style/ButtonStyle";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";
import { setColor } from "../style/SetStyle";

const ImgTextBtnUtil = ({ img, text, color, backgroundColor, onClick }) => {
  return (
    <Button
      $flex="h_center_center"
      $backgroundColor={backgroundColor}
      $color={color}
      $padding="15px 20px"
      $height="50px"
      $fontWeight="bold"
      $borderRadius="20px"
      $borderStyle={`1px solid ${setColor(color)}`}
      onClick={onClick}
    >
      <Div $margin="0 10px 0 0" $height="25px">
        <Img src={img} alt={text} />
      </Div>
      {text}
    </Button>
  );
};

export default ImgTextBtnUtil;
