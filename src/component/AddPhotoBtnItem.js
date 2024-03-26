import React, { useState } from "react";

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

const AddPhotoBtnItem = (props) => {
  const { setImage } = props;
  const fileInput = React.useRef(null);
  const [uniqueId, setUniqueId] = useState(Date.now());

  const handleBtnClick = () => {
    setUniqueId(Date.now());
    fileInput.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage((prevImages) => [...prevImages, { file, imageURL, id: uniqueId + 1 }]);
    }
  };

  return (
    <>
      <Input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={handleChange}
      />

      <AddPhotoBtnItemLayout
        $flex="h_center_center"
        $backgroundColor="initial"
        $width="120px"
        $height="50px"
        $color="black"
        $fontWeight="bold"
        onClick={handleBtnClick}
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
