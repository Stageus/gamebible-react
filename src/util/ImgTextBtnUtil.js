import React from "react";
import styled from "styled-components";
import { setColor } from "../style/SetStyle";
import { Button } from "../style/ButtonStyle";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

const ImgTextBtnUtil = ({ img, text, color, backgroundColor, alt }) => {
  const AddPhotoBtnItemLayout = styled(Button)`
    border: 1px solid ${setColor(color)};
    border-radius: 20px;
  `;
  const ImgTextBtn = () => {
    return (
      <AddPhotoBtnItemLayout
        $flex="h_center_center"
        $backgroundColor={backgroundColor}
        $color={color}
        $padding="12px 20px"
        $fontWeight="bold"
      >
        <Div $margin="0 10px 0 0" $height="24px">
          <Img src={img} alt={alt} />
        </Div>
        {text}
      </AddPhotoBtnItemLayout>
    );
  };
  return <ImgTextBtn />;
};

export default ImgTextBtnUtil;
