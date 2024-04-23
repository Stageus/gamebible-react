import { React, useEffect, useRef, useState } from "react";

import { styled } from "styled-components";
import { Div, Article, Section } from "../../style/LayoutStyle";
import { H1 } from "../../style/TextStyle";
import { Img } from "../../style/ImgStyle";
import { setColor } from "../../style/SetStyle";

import AddPhotoBtnContainer from "../AddPhotoBtnContainer";
import ImgTextBtnItem from "../../component/ImgTextBtnItem";
import finishImg from "../../img/finishImg.svg";

import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

import useFetch from "../../hook/useFetch";

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

const EditingContainer = (props) => {
  // const{title, content} = props.~~~

  const { wikiContentData } = props;
  const [cookies] = useCookies(["token"]);
  const { gameIdx } = useParams();

  const [바꾸기전, set바꾸기전] = useState("");
  const [바꾼후, set바꾼후] = useState("");

  // 이미지 보여주기
  const [preview, setPreview] = useState([]);
  const navigate = useNavigate();

  // ??
  const wikiContentContainer = useRef(null);
  const [content, setContent] = useState(null);

  // props로 받아온 초기값 입력
  useEffect(() => {
    setContent(wikiContentData[0]?.content);
    set바꾸기전(wikiContentData[0]?.content);
  }, [wikiContentData[0]?.content]);
  useEffect(() => {
    const searchString = `contenteditable="false"`;
    const replacement = `contenteditable="true"`;
    set바꾼후(바꾸기전?.replace(searchString, replacement));
  }, [바꾸기전]);

  // finish 버튼 클릭 시 새로운 데이터 저장하기 PUT
  const { status, request } = useFetch();
  const putWikiEvent = async () => {
    // 입력값이 아무것도 없을 때
    if (wikiContentContainer.current.innerText.trim() === null) {
      alert("내용을 입력해주세요.");
      return;
    }
    await request(
      `/game/${gameIdx}/wiki`,
      "PUT",
      {
        content: content,
      },
      {
        Authorization: `Bearer ${cookies.token}`,
      }
    );
  };
  useEffect(() => {
    if (status === 201) {
      navigate(`/game/${gameIdx}`);
      return alert("위키 수정이 완료되었습니다.");
    }
    if (status === 400) {
      return alert("변경사항이 없습니다.");
    }
    if (status === 401) {
      return alert("로그인 후에 이용해주세요");
    }
    if (status === 500) {
      console.log("서버 에러입니다.");
    }
  }, [status]);

  console.log("상태코드임", status);

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
    setContent(str);
  };

  // console.log("wikiContentContainer: ", wikiContentContainer);

  // console.log("newWikiContentData: ", newWikiContentData);

  // stringToNode
  // const parser = new DOMParser();
  // const doc = parser.parseFromString(wikiContentContainer.current.innerText, "text/html");
  // const node = doc.body.firstChild;

  // console.log("node: ", node);

  return (
    <Section $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
      <Article $width="100%">
        <Div $flex="h_between_start" $width="100%" $margin="0 0 20px 0">
          {/* 게임 제목 */}
          <GameTitleLayout $width="60%" $fontWeight="bold">
            {wikiContentData[0]?.title}
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
      <EditorContainer $width="100%" $padding="4%">
        <Div
          $width="100%"
          onInput={wikiContentChangeEvent}
          ref={wikiContentContainer}
          dangerouslySetInnerHTML={{ __html: 바꾼후 }}
        ></Div>
        {preview?.map((imageData) => {
          {
            console.log(imageData.imageURL);
          }
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
          />;
        })}
      </EditorContainer>
    </Section>
  );
};

export default EditingContainer;
