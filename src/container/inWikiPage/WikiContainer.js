import { React, useState, useEffect } from "react";

import { styled } from "styled-components";
import { Article, Section, Div } from "../../style/LayoutStyle";
import { H1, Span } from "../../style/TextStyle";
import { Button } from "../../style/ButtonStyle";
import { setColor } from "../../style/SetStyle";

import ImgTextBtnUtil from "../../util/ImgTextBtnUtil";
import historyImg from "../../img/historyImg.svg";
import editImg from "../../img/editImg.svg";
import BannerImgItem from "../../component/BannerImgItem";

import { Link, useParams } from "react-router-dom";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

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

  let { idx } = useParams();

  const [wikiContentData, setWikiContentData] = useState(null);

  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const wikiContent = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/${idx}/wiki`);
      const result = await response.json();
      setTitle(result.data[0].title);
      setContent(result.data[0].content);

      if (response.status === 200) {
        setWikiContentData(result.data);
      } else {
        alert(result.message);
      }
    };

    wikiContent();
  }, []);

  useEffect(() => {}, [wikiContentData]);

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
                  {title}
                </GameTitleLayout>
                <Div $flex="h_between_start" $width="30%">
                  <Link to="./history">
                    <ImgTextBtnUtil
                      img={historyImg}
                      text={"HISTORY"}
                      color={"major"}
                      backgroundColor={"white"}
                    />
                  </Link>
                  <Link to="./edit">
                    <ImgTextBtnUtil
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
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </Article>
          </Section>
        </Article>
      </Section>
    </GameContentLayout>
  );
};

export default WikiContainer;
