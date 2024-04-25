import { React, useState, useEffect } from "react";

import { styled } from "styled-components";
import { Div, Article, Section } from "../../style/LayoutStyle";
import { Button } from "../../style/ButtonStyle";
import { Span } from "../../style/TextStyle";
import { setColor } from "../../style/SetStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import { Link, useParams } from "react-router-dom";

import BannerImgItem from "../../component/BannerImgItem";
import EditingContainer from "./EditingContainer";

import useFetch from "../../hook/useFetch";

const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;
const TabBtn = styled(Button)`
  border-right: 1px solid ${setColor("major")};
  border-left: 1px solid ${setColor("major")};
  border-top: 1px solid ${setColor("major")};
`;
const SwitchTabLayout = styled(Div)``;

const EditWikiContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  // 탭이동을 위한 gameIdx 추출
  const { gameIdx } = useParams();

  // 데이터(게임제목, 기존위키내용) 가져오기 GET
  const [wikiContentData, setWikiContentData] = useState([]);

  const { data, status, request } = useFetch();
  useEffect(() => {
    request(`/game/${gameIdx}/history`, "GET", null);
  }, []);

  useEffect(() => {
    if (status === 200) {
      setWikiContentData(data?.data);
    }
    if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    }
    if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data]);
  // console.log("wikiContentData: ", wikiContentData);

  return (
    <GameContentLayout $flex="v_center_center" $padding={navToggle && "0 0 0 250px"}>
      <BannerImgItem {...{ gameIdx }} />
      <Section $flex="v_center_start" $width="100%">
        <SwitchTabLayout $flex="h_center_center">
          <Link to={`/game/${gameIdx}/community?page=1`}>
            <TabBtn
              $width="150px"
              $height="50px"
              $margin="0 -1px 0 0"
              $backgroundColor="white"
              $fontSize="large"
              $flex="h_center_center"
            >
              <Span $color="black" $fontSize="12px">
                커뮤니티
              </Span>
            </TabBtn>
          </Link>
          <TabBtn
            $width="150px"
            $height="50px"
            $margin="0 -1px 0 0"
            $backgroundColor="major"
            $fontSize="large"
            $flex="h_center_center"
          >
            <Span $color="white" $fontSize="12px">
              위키
            </Span>
          </TabBtn>
        </SwitchTabLayout>

        <Article $flex="h_center_center" $backgroundColor="major" $width="100%" $padding="50px">
          <EditingContainer {...{ wikiContentData }} />
        </Article>
      </Section>
    </GameContentLayout>
  );
};

export default EditWikiContainer;
