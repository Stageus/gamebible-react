import React, { useState } from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Button } from "../style/ButtonStyle";
import { Input } from "../style/InputStyle";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";
import addPhotoImg from "../img/addPhotoImg.svg";

// const ShowPhotosLayout = styled(Div)`
//   // border: 1px solid ${setColor("black")};
//   border-radius: 10px;
// `;

const AddPhotoBtnItem = () => {
  const [image, setImage] = useState([]);
  const fileInput = React.useRef(null);
  console.log(fileInput, "💥💥💥파일 선택창(input) 클릭💥💥💥");

  const handleBtnClick = () => {
    fileInput.current.click();
    console.log("💥💥💥파일 선택창(input) 클릭될 때 사용자 버튼 클릭💥💥💥");
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file, "💥💥💥파일명💥💥💥");
    if (file) {
      const uniqueId = Date.now();
      console.log("업로드시점", uniqueId);
      const imageURL = URL.createObjectURL(file);
      setImage((prevImages) => [...prevImages, { file, imageURL, id: uniqueId }]);
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

      <Button
        $flex="h_center_center"
        $backgroundColor="initial"
        $color="black"
        $padding="12px 20px"
        $margin="20px"
        $fontWeight="bold"
        $borderStyle={`1px solid ${setColor("black")}`}
        $borderRadius="20px"
        onClick={handleBtnClick}
      >
        <Div $margin="0 10px 0 0" $height="24px">
          <Img src={addPhotoImg} alt="사진 업로드하기" />
        </Div>
        PHOTO
      </Button>

      {/* <ShowPhotosLayout $flex="v_center_center" $width="1136px" $padding="50px">
        {image.map((imageData) => (
          <Img
            key={imageData.id}
            src={imageData.imageURL}
            $height="300px"
            $margin="10px"
            alt={imageData.file.name}
          />
        ))}
      </ShowPhotosLayout> */}
    </>
  );
};

export default AddPhotoBtnItem;
