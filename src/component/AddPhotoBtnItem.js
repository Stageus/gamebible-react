import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Button } from "../style/ButtonStyle";
import { Input } from "../style/InputStyle";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";
import addPhotoImg from "../img/addPhotoImg.svg";

const AddPhotoBtnItemLayout = styled(Button)`
  border: 1px solid ${setColor("black")};
  border-radius: 20px;
`;

const AddPhotoBtnItem = () => {
  const fileInput = React.useRef(null);
  console.log(fileInput);

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <>
      <AddPhotoBtnItemLayout
        $flex="h_center_center"
        $backgroundColor="initial"
        $color="black"
        $padding="12px 20px"
        $fontWeight="bold"
        onClick={handleButtonClick}
      >
        <Div $margin="0 10px 0 0" $height="24px">
          <Img src={addPhotoImg} alt="사진 업로드하기" />
        </Div>
        PHOTO
      </AddPhotoBtnItemLayout>

      <Input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={handleChange}
      />
    </>
  );
};

export default AddPhotoBtnItem;
