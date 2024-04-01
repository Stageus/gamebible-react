import { React, useEffect, useRef, useState } from "react";

import AddPhotoBtnItem from "../../component/AddPhotoBtnItem";
import ImgTextBtnUtil from "../../util/ImgTextBtnUtil";
import finishImg from "../../img/finishImg.svg";

import styled from "styled-components";
import { Div } from "../../style/LayoutStyle";
import { Input } from "../../style/InputStyle";
import { Img } from "../../style/ImgStyle";
import { setColor } from "../../style/SetStyle";

import { useInput } from "../../hook/useInput";
import { Cookies, useCookies } from "react-cookie";
import { useParams } from "react-router-dom";

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
  line-height: 30px;
`;

const WriterContainer = () => {
  const { value: title, onChangeEvent: onChangeTitltEvent } = useInput("");
  const [image, setImage] = useState([]);
  const [content, setContent] = useState("");
  const [cookies] = useCookies(["token"]);
  const contentContainer = useRef(null);
  const { idx } = useParams();
  console.log(cookies.token);

  const regex = /^\s*$/;

  useEffect(() => {}, []);

  const postClickEvent = () => {
    console.log(title);
    if (regex.test(title)) {
      alert("제목을 입력해주세요");
      return;
    } else if (contentContainer.current.innerText.trim() === "") {
      alert("내용을 입력해주세요");
      return;
    }
    postSubmitEvent();
  };

  const postContentChangeEvent = () => {
    setContent(contentContainer.current.innerHTML);
  };

  const postSubmitEvent = async () => {
    console.log(cookies);
    try {
      const response = await fetch(`http://192.168.0.18:3000/post/?gameidx=${idx}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
        query: {
          gameidx: { idx },
        },
      });
      if (response.status === 200) {
        console.log("응 성공");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
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
          onChange={onChangeTitltEvent}
          value={title}
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
          onInput={postContentChangeEvent}
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
