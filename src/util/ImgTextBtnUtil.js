import React from "react";
import styled from "styled-components";
import { setColor } from "../style/SetStyle";
import { Button } from "../style/ButtonStyle";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

const ImgTextBtnUtil = ({ img, text, color, backgroundColor, onClick }) => {
  const ImgTextBtn = () => {
    return (
      <Button
        $flex="h_center_center"
        $backgroundColor={backgroundColor}
        $color={color}
        $padding="12px 20px"
        $fontWeight="bold"
        $borderRadius="20px"
        $borderStyle={`1px solid ${color}`}
        onClick={onClick}
      >
        <Div $margin="0 10px 0 0" $height="24px">
          <Img src={img} alt={text} />
        </Div>
        {text}
      </Button>
    );
  };
  return <ImgTextBtn />;
};

export default ImgTextBtnUtil;
