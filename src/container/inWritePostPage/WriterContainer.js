import { React, useEffect, useRef, useState } from "react";

import AddPhotoBtnItem from "../../component/AddPhotoBtnItem";
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
  const { data, error, status, request } = useFetch();
  const [postIdx, setPostIdx] = useState(0);
  const [image, setImage] = useState([]);
  const [content, setContent] = useState("");
  const [cookies] = useCookies(["token"]);
  const contentContainer = useRef(null);
  const { gameIdx } = useParams();
  const navigate = useNavigate();

  const regex = /^\s*$/;

  useEffect(() => {
    if (!cookies.token) {
      navigate("/");
    }
  }, [cookies.token]);

  const postClickEvent = () => {
    if (regex.test(title)) {
      alert("제목을 입력해주세요");
      return;
    } else if (contentContainer.current.innerText.trim() === "") {
      alert("내용을 입력해주세요");
      return;
    }
  };

  //처음 들어왔을 때 임시저장을 만들고
  //그것을 리코일로 보내서 저장해놓기
  //그리고 피니시 버튼을 누를 때 다시 api 호출

  const postContentChangeEvent = () => {
    setContent(contentContainer.current);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await request(`/post?gameidx=${gameIdx}`, "POST", null, {
          Authorization: `Bearer ${cookies.token}`,
        });
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.data) {
      setPostIdx(data.data.idx);
    }
  }, [data]);

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
          contentEditable="true"
          $width="100%"
          $padding="4%"
        ></EditorContainer>
      </Div>
    </EditorWrapper>
  );
};

export default WriterContainer;
