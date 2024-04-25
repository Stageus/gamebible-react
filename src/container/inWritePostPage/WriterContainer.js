import { React, useEffect, useRef, useState } from "react";

import ImgTextBtnItem from "../../component/ImgTextBtnItem";
import finishImg from "../../img/finishImg.svg";

import styled from "styled-components";
import { Div } from "../../style/LayoutStyle";
import { Input } from "../../style/InputStyle";
import { Img } from "../../style/ImgStyle";
import { setColor } from "../../style/SetStyle";

import { useInput } from "../../hook/useInput";
import { useCookies } from "react-cookie";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import AddPhotoBtnContainer from "../AddPhotoBtnContainer";

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
  const { status, request } = useFetch();

  const [preview, setPreview] = useState([]);

  const [content, setContent] = useState("");
  const [cookies] = useCookies(["token"]);
  const contentContainer = useRef(null);
  const { gameIdx } = useParams();
  const navigate = useNavigate();

  const regex = /^\s*$/;

  const postClickEvent = async () => {
    if (regex.test(title)) {
      alert("제목을 입력해주세요");
      return;
    } else if (contentContainer.current.innerText.trim() === "") {
      alert("내용을 입력해주세요");
      return;
    }
    await request(
      `/post?gameidx=${gameIdx}`,
      "POST",
      {
        title: title,
        content: content,
      },
      {
        Authorization: `Bearer ${cookies.token}`,
      }
    );
  };

  useEffect(() => {
    if (status === 201) {
      alert("게시글 작성이 완료되었습니다.");
      navigate(`/game/${gameIdx}/community?page=1`);
    }
  }, [status]);

  const nodeToString = (node) => {
    // div
    const tmpNode = document.createElement("div");

    // 노드 꾸겨넣기
    tmpNode.appendChild(node.cloneNode(true));

    // tmp안에 div조작하기
    const tag = tmpNode.querySelector("div");

    tag.contentEditable = false;
    tag.style.border = "none";

    // div안에있는 모든 HTML
    const str = tmpNode.innerHTML;
    return str;
  };

  const postContentChangeEvent = () => {
    const str = nodeToString(contentContainer.current);
    setContent(str);
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
          <AddPhotoBtnContainer {...{ setPreview }} />
          <Div $margin="0 0 0 20px">
            <ImgTextBtnItem
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
          key="contentContainer"
          contentEditable="true"
          $width="100%"
          $padding="4%"
        >
          {preview?.map((imageData) => (
            <Img
              key={imageData.id}
              src={imageData.imageURL}
              $margin="10px"
              className="writerImg"
              style={{
                width: "30%",
                display: "flex",
                margin: "0 0 2% 0",
              }}
            />
          ))}
        </EditorContainer>
      </Div>
    </EditorWrapper>
  );
};

export default WriterContainer;
