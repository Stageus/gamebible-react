import React, { useRef, useState } from "react";

import AddPhotoBtnItem from "../../component/AddPhotoBtnItem";
import ImgTextBtnUtil from "../../util/ImgTextBtnUtil";
import finishImg from "../../img/finishImg.svg";

import styled from "styled-components";
import { Div } from "../../style/LayoutStyle";
import { Input } from "../../style/InputStyle";
import { Img } from "../../style/ImgStyle";
import { setColor } from "../../style/SetStyle";
import { useInput } from "../../hook/useInput";

const EditorWrapper = styled(Div)`
  border-radius: 4px;
`;
const BorderNoneInput = styled(Input)`
  border-style: none;
  outline: none;
`;
const EditorContainer = styled(Div)`
  border: 1px solid ${setColor("black")};
  border-radius: 4px;
  outline: none;
  min-height: 500px;
`;

const WriterContainer = () => {
  const { change, changeEvent } = useInput("");
  const [image, setImage] = useState([]);
  const [content, setContent] = useState("");
  const contentContainer = useRef(null);

  const regex = /^\s*$/;

  const postClickEvent = () => {
    console.log(change);
    if (regex.test(change)) {
      alert("제목을 입력해주세요");
      return;
    } else if (contentContainer.current.innerText.trim() === "") {
      alert("내용을 입력해주세요");
      return;
    }
    console.log("content" + content);
    console.log("성공!");
  };

  const postChangeEvent = () => {
    content.replace("$nbsp;", "안녕하세요").trim();
    console.log(contentContainer.current.innerText);
    setContent(contentContainer.current.innerHTML);
  };

  return (
    <EditorWrapper $backgroundColor="white" $width="100%" $height="100%" $padding="50px">
      <Div $margin="0 0 20px 0" $width="100%">
        <BorderNoneInput
          $width="100%"
          $height="30px"
          $fontSize="large"
          placeholder="제목"
          type="text"
          onChange={changeEvent}
        />
        <Div $width="100%" $height="1px" $backgroundColor="black" $margin="2% 0" />
      </Div>
      <Div $width="100%" $flex="v_center_end">
        <Div $flex="h_between_center" $margin="0 0 2% 0">
          <AddPhotoBtnItem {...{ setImage }} />
          <Div $margin="0 0 0 20px">
            <ImgTextBtnUtil
              img={finishImg}
              text={"FINISH"}
              color={"white"}
              backgroundColor={"major"}
              onClick={postClickEvent}
            />
          </Div>
        </Div>
        <EditorContainer
          onInput={postChangeEvent}
          ref={contentContainer}
          contentEditable="true"
          $width="100%"
          $padding="4%"
        >
          {image.map((imageData) => (
            <Img
              key={imageData.id}
              src={imageData.imageURL}
              $height="300px"
              $margin="10px"
              alt={imageData.file.name}
            />
          ))}
        </EditorContainer>
      </Div>
    </EditorWrapper>
  );
};

export default WriterContainer;
