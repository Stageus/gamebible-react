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
import ImgTextBtnUtil from "../../util/ImgTextBtnUtil";
import BannerImgItem from "../../component/BannerImgItem";

const TabBtn = styled(Button)`
  border-right: 1px solid ${setColor("major")};
  border-left: 1px solid ${setColor("major")};
`;
const SwitchTabLayout = styled(Div)``;
const GameTitleLayout = styled(H1)`
  font-size: 45px;
`;
const HistoryListLayout = styled(P)`
  line-height: 30px;
`;
const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;

const WikiHistoryListContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  let { idx } = useParams();

  const [historyListData, setHistoryListData] = useState(null);

  useEffect(() => {
    const wikiEditHistory = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/${idx}/history`);
      const result = await response.json();

      if (response.status === 200) {
        setHistoryListData(result.data);
      } else {
        alert(result.message);
      }
    };
    wikiEditHistory();
  }, []);

  useEffect(() => {}, [historyListData]);

  return (
    <GameContentLayout $flex="v_center_center" $padding={navToggle && "0 0 0 250px"}>
      <BannerImgItem />
      <Section $flex="v_center_start" $width="100%">
        <SwitchTabLayout $flex="h_center_center">
          <Link to={`/game/${idx}/community`}>
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
                  리그오브레전드(League of legends)
                </GameTitleLayout>
                <Link to={`/game/${idx}/wiki`}>
                  <Div $flex="h_end_start" $width="30%">
                    <ImgTextBtnUtil
                      img={backImg}
                      text={"BACK"}
                      color={"major"}
                      backgroundColor={"white"}
                    />
                  </Div>
                </Link>
              </Div>
              <HistoryListLayout $flex="v_center_start" $width="100%">
                {historyListData?.map((elem) => {
                  return (
                    <Link key={`${elem.idx}`} to={`./${elem.idx}`}>
                      <li>{elem.title}</li>
                    </Link>
                  );
                })}
              </HistoryListLayout>
            </Article>
          </Section>
        </Article>
      </Section>
    </GameContentLayout>
  );
};

export default WikiHistoryListContainer;
