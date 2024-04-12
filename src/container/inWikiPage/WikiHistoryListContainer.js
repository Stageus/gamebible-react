import { React, useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import { styled } from "styled-components";
import { setColor } from "../../style/SetStyle";
import { Button } from "../../style/ButtonStyle";
import { Article, Section, Div } from "../../style/LayoutStyle";
import { H1, P, Span } from "../../style/TextStyle";

import backImg from "../../img/backImg.svg";
import ImgTextBtnItem from "../../component/ImgTextBtnItem";
import BannerImgItem from "../../component/BannerImgItem";

import useFetch from "../../hook/useFetch";

const TabBtn = styled(Button)`
  border-right: 1px solid ${setColor("major")};
  border-left: 1px solid ${setColor("major")};
`;
const SwitchTabLayout = styled(Div)``;
const GameTitleLayout = styled(H1)`
  font-size: 45px;
`;
const HistoryListLayout = styled(Div)`
  line-height: 30px;
`;
const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;

const WikiHistoryListContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  let { gameIdx } = useParams();

  // 게임제목, 위키 수정 리스트 가져오기 GET
  const [historyListData, setHistoryListData] = useState([]);

  const { data, error, status, request } = useFetch();
  useEffect(() => {
    request(`/game/${gameIdx}/history/all`, "GET", null);
  }, []);

  useEffect(() => {
    if (status === 200) {
      setHistoryListData(data?.data);
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
                  {historyListData?.title}
                </GameTitleLayout>
                <Link to={`/game/${gameIdx}/wiki`}>
                  <Div $flex="h_end_start">
                    <ImgTextBtnItem
                      img={backImg}
                      text={"BACK"}
                      color={"major"}
                      backgroundColor={"white"}
                    />
                  </Div>
                </Link>
              </Div>
              <HistoryListLayout $flex="v_center_start" $width="100%">
                {historyListData.historyList ? (
                  historyListData?.historyList?.map((elem) => {
                    return (
                      <Link key={`${elem.idx}`} to={`./${elem.idx}`}>
                        <li>
                          {elem.createdAt} | {elem.nickname}
                        </li>
                      </Link>
                    );
                  })
                ) : (
                  <P>수정 내역이 없습니다.</P>
                )}
              </HistoryListLayout>
            </Article>
          </Section>
        </Article>
      </Section>
    </GameContentLayout>
  );
};

export default WikiHistoryListContainer;
