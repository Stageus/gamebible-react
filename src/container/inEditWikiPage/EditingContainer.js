import { React, useEffect, useRef, useState } from "react";

import { styled } from "styled-components";
import { Div, Article, Section } from "../../style/LayoutStyle";
import { H1 } from "../../style/TextStyle";
import { Img } from "../../style/ImgStyle";
import { setColor } from "../../style/SetStyle";

import AddPhotoBtnContainer from "../AddPhotoBtnContainer";
import ImgTextBtnItem from "../../component/ImgTextBtnItem";
import finishImg from "../../img/finishImg.svg";

import { useInput } from "../../hook/useInput";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const GameTitleLayout = styled(H1)`
  font-size: 45px;
`;
const EditorContainer = styled(Div)`
  border: 1px solid ${setColor("black")};
  border-radius: 4px;
  outline: none;
  min-height: 500px;
  line-height: 30px;
`;

const EditingContainer = () => {
  const [startEditingData, setStartEditingData] = useState(null);
  const [cookies] = useCookies(["token"]);

  const [newWikiContentData, setNewWikiContentData] = useState("");

  const { change, changeEvent } = useInput("");
  const [preview, setPreview] = useState([]);
  const navigate = useNavigate();
  const wikiContentContainer = useRef(null);

  const { gameIdx } = useParams();
  console.log("gameIdx: ", gameIdx);

  // 로그인 안 되어있으면 홈화면으로 이동
  useEffect(() => {
    if (!cookies.token) {
      navigate("/");
    }
  }, [cookies.token]);

  // 새로운 데이터 저장하기 PUT
  const putWikiEvent = async () => {
    // 입력값이 아무것도 없을 때
    if (!wikiContentContainer.current) {
      alert("내용을 입력해주세요.");
      return;
    }

    const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/${gameIdx}/wiki`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
      body: JSON.stringify({
        content: newWikiContentData,
      }),
    });

    const result = await response.json();

    if (response.status === 200) {
      setStartEditingData(result.data);
      navigate(`/game/${gameIdx}`);
      return alert("위키 수정이 완료되었습니다.");
    }
    if (response.status === 400) {
      alert(`Request Error: ${result.message}`);
    }
    if (response.status === 401) {
      alert(`User Error: ${result.message}`);
    }
    if (response.status === 500) {
      alert(`Server Error: ${result.message}`);
    }
  };

  // 사용자가 수정입력한 내용(node 형태)을 string화 하기
  const nodeToString = (node) => {
    // div 태그 만들기
    const tmpNode = document.createElement("div");
    // 태그 안에 노드 집어넣기
    tmpNode.appendChild(node.cloneNode(true));
    // tmpNode 안에 있던 div를 'tag'로 골라서 조작하기
    const tag = tmpNode.querySelector("div");
    tag.contentEditable = false;
    // div안에있는 모든 HTML
    const str = tmpNode.innerHTML;
    return str;
  };

  const wikiContentChangeEvent = (e) => {
    const str = nodeToString(wikiContentContainer.current);
    setNewWikiContentData(str);
  };

  return (
    <Section $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
      <Article $width="100%">
        <Div $flex="h_between_start" $width="100%" $margin="0 0 20px 0">
          {/* 게임 제목 */}
          <GameTitleLayout $width="60%" $fontWeight="bold">
            {startEditingData?.title}
          </GameTitleLayout>

          <Div $flex="h_between_center" $margin="0 0 2% 0">
            {/* 이미지 삽입 버튼 */}
            <AddPhotoBtnContainer {...{ setPreview }} />
            {/* 작성 완료 버튼 */}
            <Div $margin="0 0 0 20px">
              <ImgTextBtnItem
                img={finishImg}
                text={"FINISH"}
                color={"white"}
                backgroundColor={"major"}
                onClick={putWikiEvent}
              />
            </Div>
          </Div>
        </Div>
      </Article>

      {/* 위키 수정 입력 칸 */}
      <EditorContainer
        onChange={changeEvent}
        onInput={wikiContentChangeEvent}
        ref={wikiContentContainer}
        contentEditable="true"
        $width="100%"
        $padding="4%"
        dangerouslySetInnerHTML={{ __html: startEditingData?.content }}
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
    </Section>
  );
};

export default EditingContainer;
