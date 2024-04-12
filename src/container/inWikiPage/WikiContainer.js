import { React, useState, useEffect } from "react";

import { styled } from "styled-components";
import { Article, Section, Div } from "../../style/LayoutStyle";
import { H1, Span } from "../../style/TextStyle";
import { Button } from "../../style/ButtonStyle";
import { setColor } from "../../style/SetStyle";

import ImgTextBtnItem from "../../component/ImgTextBtnItem";
import historyImg from "../../img/historyImg.svg";
import editImg from "../../img/editImg.svg";
import BannerImgItem from "../../component/BannerImgItem";

import { Link, useParams } from "react-router-dom";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import useFetch from "../../hook/useFetch";

const TabBtn = styled(Button)`
  border-right: 1px solid ${setColor("major")};
  border-left: 1px solid ${setColor("major")};
`;
const SwitchTabLayout = styled(Div)``;
const MainContentLayout = styled(Div)`
  line-height: 30px;
`;
const GameTitleLayout = styled(H1)`
  font-size: 45px;
`;
const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;

const WikiContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  let { gameIdx } = useParams();

  // 데이터(게임제목, 기존위키내용) 가져오기 GET
  const [wikiContentData, setWikiContentData] = useState([]);

  const { data, error, status, request } = useFetch();
  useEffect(() => {
    request(`/game/${gameIdx}/history`, "GET", null);
  }, []);

  useEffect(() => {
    if (status === 200) {
      setWikiContentData(data?.data);
    } else if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    } else if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data]);

  if (!data) return "...Loading";

  if (error) return "Error";

  return (
    <GameContentLayout $flex="v_center_center" $padding={navToggle && "0 0 0 250px"}>
      <BannerImgItem />
      <Section $flex="v_center_start" $width="100%">
        <SwitchTabLayout $flex="h_center_center">
          <Link to={`/game/${gameIdx}/community/page/1`}>
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
          <Section $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
            <Article $width="100%">
              <Div $flex="h_between_start" $width="100%" $margin="0 0 20px 0">
                <GameTitleLayout $width="60%" $fontWeight="bold">
                  {wikiContentData[0]?.title}
                </GameTitleLayout>
                <Div $flex="h_between_start">
                  <Link to="./history">
                    <Div $margin="0 20px 0 0">
                      <ImgTextBtnItem
                        img={historyImg}
                        text={"HISTORY"}
                        color={"major"}
                        backgroundColor={"white"}
                      />
                    </Div>
                  </Link>
                  <Link to="./edit">
                    <ImgTextBtnItem
                      img={editImg}
                      text={"EDIT"}
                      color={"major"}
                      backgroundColor={"white"}
                    />
                  </Link>
                </Div>
              </Div>
              <MainContentLayout
                $flex="v_start_start"
                $width="100%"
                $margin="20px 0 0 0"
                dangerouslySetInnerHTML={{ __html: wikiContentData[0]?.content }}
              />
            </Article>
          </Section>
        </Article>
      </Section>
    </GameContentLayout>
  );
};

export default WikiContainer;
