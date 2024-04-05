import { React, useEffect, useRef, useState } from "react";

import { styled } from "styled-components";
import { Div, Article, Section } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { H1 } from "../../style/TextStyle";
import { setColor } from "../../style/SetStyle";

import AddPhotoBtnItem from "../../component/AddPhotoBtnItem";
import ImgTextBtnItem from "../../component/ImgTextBtnItem";
import finishImg from "../../img/finishImg.svg";

import { useInput } from "../../hook/useInput";
import { useNavigate } from "react-router";
// import { useCookies } from "react-cookie";
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

// const dummyData = {
//   title: "리그오브레전드(League of legends)",
//   htmlContent: `<Div $width="100%" $margin="10px 0">
//       5명의 플레이어가 각자 다른 포지션에서 성장을 통해 아이템과 레벨을 올려 상대의
//       기지를 파괴하는 MOBA 장르의 게임. 게임 명칭의 앞 철자들을 따서 LoL(롤),
//       영어권에서는 League 등의 약칭으로도 불린다.
//     </Div>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_JfyXzhMr90VQ7C6Eex9V6NG3z4k9aaekA&usqp=CAU" />
//     <Div $width="100%" $margin="10px 0">
//       소환사들의 티어 변동에 영향을 주는 게임으로, 2018 시즌까지는
//       브론즈/실버/골드/플래티넘/다이아몬드/마스터/챌린저의 티어가 있었고 브론즈부터
//       다이아몬드 티어까지는 각각의 티어를 세분화한 단계가 1단계(가장 상위)부터
//       5단계(가장 하위)까지 있었다.
//     </Div>
//     <Div>
//       2019 시즌부터는 아이언/브론즈/실버/골드/플래티넘/다이아몬드/마스터/그랜드 마스터/챌린저로 구분되며
//       2023년에는 다이아몬드와 플래티넘 사이에 에메랄드 티어가 새롭게 도입되었다. 또한
//       아이언부터 다이아몬드 티어까지의 단계 구분이 4단계로 줄어들었다. 랭크 게임 플레이
//       조건은 기존의 만렙이었던 30레벨 이상이고, 자신이 직접 소유한 챔피언 20개 이상이다.
//       리그 오브 레전드에서는 1년이 1시즌이다. 이는 다른 게임들과 비교하면 긴 기간이다.
//       배치를 받은 후 시즌이 끝날 때까지 랭크를 올리는 것이 랭크 게임의 주 플레이
//       목적으로, 시즌 종료후 다음 시즌이 시작되면 다시 배치 게임을 치러야 한다. 물론 저번
//       시즌에 받은 최종 랭크를 반영하여 배치 게임 점수가 계산되기 때문에 높은 랭크를
//       달성했다면 다음 시즌을 좀 더 유리하게 플레이할 수 있다.
//     </Div>
//     <Div>
//       배치 게임은 2018 시즌까지는 모든 배치 게임을 치른 후 최종 랭크가 나오는 방식이지만 2019 시즌부터는
//       '임시 랭크'라는 게 생겼다. 임시 랭크란 첫 번째 배치 게임을 치르면 받는 랭크로,
//       저번 시즌의 최종 랭크를 반영해 계산된다. 임시 랭크를 받고 이후 랭크 게임을 돌리게
//       되면 배치 게임 도중에는 승리 시 약 60LP를 얻고(승리 횟수가 누적될수록 얻는 LP의
//       양이 30점대까지 감소한다.), 패배 시 LP를 잃지 않는다. 승급전은 치르지 않는다.
//       따라서 임시 랭크 이하로는 배치 게임 도중 크게 강등되지 않는다.
//     </Div>`,
// };

const EditingContainer = () => {
  const [title, setTitle] = useState("");
  const [prevContent, setPrevContent] = useState(null);
  // const [getGameWiki, setGetGamwWiki] = useState(null);

  const [historyIdx, setHistoryIdx] = useState(null);
  const [cookies] = useCookies(["token"]); // 쿠키 이름을 대상으로, 이를 state처럼 저장해주는 라이브러리

  const [newData, setNewData] = useState("");
  const { change, changeEvent } = useInput("");
  const [image, setImage] = useState([]);
  const contentContainer = useRef(null);
  const navigate = useNavigate();

  let { gameIdx } = useParams();

  useEffect(() => {
    // 기존 데이터(게임제목, 기존위키내용) 가져오기
    const getPreviousData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/${gameIdx}/wiki`);
      const result = await response.json();

      if (response.status === 200) {
        setTitle(result.data[0].title);
        setPrevContent(result.data[0].content);
      } else {
        alert(result.message);
      }
    };

    // historyIdx 생성하기 POST
    const getWikiHistoryIdx = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/${gameIdx}/wiki`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
      });
      // const result = await response.json();
      // console.log("historyIdx: ", result.data);

      switch (response.status) {
        case 201:
          const result = await response.json();
          console.log("historyIdx: ", result.data);
          setHistoryIdx(result.data);
          break;
        case 400:
          // 내가 하고 싶은 예외처리
          console.log(`Error: ${result.message}`);
          break;
        case 500:
          // 내가 하고 싶은 예외처리
          console.log(`Error: ${result.message}`);
          break;
      }
    };

    getPreviousData();
    getWikiHistoryIdx();
  }, []);

  // 새로운 데이터 저장하기 PUT
  const putWikiEvent = async () => {
    console.log(newData);
    console.log(typeof newData);

    const response = await fetch(
      `${process.env.REACT_APP_API_KEY}/game/${gameIdx}/wiki/${historyIdx}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: {
          content: newData,
        },
      }
    );

    const result = await response.json();
    switch (response.status) {
      case 200:
        navigate(-1);
        break;
      case 400:
        // 내가 하고 싶은 예외처리
        console.log(`Error: ${result.message}`);
        break;
      case 401:
        // 내가 하고 싶은 예외처리
        console.log(`Error: ${result.message}`);
        break;
    }
  };

  const postChangeEvent = (e) => {
    console.log(contentContainer.current.innerText);
    setNewData(contentContainer.current.innerHTML);
  };

  return (
    <Section $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
      <Article $width="100%">
        <Div $flex="h_between_start" $width="100%" $margin="0 0 20px 0">
          <GameTitleLayout $width="60%" $fontWeight="bold">
            {title}
          </GameTitleLayout>
          <Div $flex="h_between_center" $margin="0 0 2% 0">
            <AddPhotoBtnItem {...{ setImage }} />
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
      <EditorContainer
        onChange={changeEvent}
        onInput={postChangeEvent}
        ref={contentContainer}
        contentEditable="true"
        $width="100%"
        $padding="4%"
        dangerouslySetInnerHTML={{ __html: prevContent }}
      />
    </Section>
  );
};

export default EditingContainer;
