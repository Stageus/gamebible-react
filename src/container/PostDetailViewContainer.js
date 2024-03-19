import React, { useState } from "react";

import styled from "styled-components";
import { Input } from "../style/InputStyle";
import { H1, P, Span } from "../style/TextStyle";
import { Div } from "../style/LayoutStyle";
import { Button } from "../style/ButtonStyle";
import { Section } from "../style/LayoutStyle";

import CommentListItem from "../component/CommentListItem";

const CommentInput = styled(Input)`
  &:focus {
    outline: none;
  }
  border-style: none;
  background: none;
  border-bottom: 1px solid white;
`;

const StyleBtn = styled(Button)`
  border-radius: 4px;
`;

const dummyData = {
  title: "신입 유저라서 궁금한데, 카이사 좋은가요?",
  nickname: "홍길동",
  date: "23/04/23",
  htmlContent: `<Div $padding="5% 0">
  <img src="data:image/jpeg;base64,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" />
  <p>1. 간편한 조작과 높은 생존 능력</p>
  <p>
    카이사는 기본적으로 간편한 스킬 조작과 뛰어난 생존 능력을 가지고 있습니다. 그녀의 Q
    스킬인 "칼나르"는 상대를 추적하여 공격하는데, 쉽게 사용할 수 있어 신입 유저도 적응하기
    쉽습니다. 또한 W 스킬인 "슬로우타임"과 R 스킬인 "무협화"를 활용하여 전투 중 생존할 수
    있는 능력이 뛰어납니다.
  </p>
  <p>2. 다양한 전투 스타일에 적합</p>
  <p>
    카이사는 다양한 전투 스타일에 적합한 챔피언입니다. 그녀의 스킬 세트는 근접 전투와 원거리
    공격을 모두 수행할 수 있도록 설계되어 있어,
  </p>
  <p>
    상황에 따라 유동적으로 전략을 변화시킬 수 있습니다. 따라서 새로운 유저들이 다양한 전투
    상황에 적응하기에 좋은 선택입니다.
  </p>
  <p>3. 인기 있는 메타 챔피언</p>
  <p>
    카이사는 현재 인기 있는 메타 챔피언 중 하나입니다. 그녀의 높은 기동성과 데미지로 인해
    많은 유저들이 그녀를 선호하며,
  </p>
  <p>
    프로게이머들도 자주 픽하는 챔피언 중 하나입니다. 따라서 카이사를 플레이함으로써 메타를
    따라갈 수 있는 기회를 가질 수 있습니다.
  </p>
  <p>
    하지만 카이사를 선택하기 전에 몇 가지 주의할 점도 있습니다. 그녀의 전투 스타일은
    적응하기 어려울 수 있으며, 정확한 타이밍과 위치 선정이 필요합니다. 또한 상대방의
    챔피언과의 상성을 고려하여 픽하는 것이 중요합니다.
  </p>
  <p>
    결론적으로, 카이사는 신입 유저들에게도 적합한 챔피언 중 하나입니다. 그녀의 간편한 조작과
    다양한 전투 스타일에 적합한 플레이 스타일은 많은 유저들의 선택으로 자리잡고 있습니다.
    하지만 그녀를 플레이하기 전에 자신의 플레이 스타일과 적응력을 고려하여 신중하게 선택하는
    것이 좋습니다.
  </p>
  <p>이상으로, 카이사에 대한 간략한 소개였습니다. 다음에 또 만나요!</p>
</Div>`,
};

const dummyCommentData = [
  {
    title: "댓글 좋아요",
    nickname: "민수",
    createdAt: "23/04/12",
  },
  {
    title: "안녕하세요",
    nickname: "용수",
    createdAt: "23/04/12",
  },
  {
    title: "세 번째 댓글입니다",
    nickname: "용광",
    createdAt: "23/04/12",
  },
  {
    title: "자신 댓글입니다",
    nickname: "작성자닉네임_2",
    createdAt: "23/04/12",
  },
];

const dummyUserData = { userName: "홍길금" };

const TitleDiv = styled(Div)`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;
const PostDetailViewContainer = (props) => {
  return (
    <>
      <Section
        $width="100%"
        $backgroundColor="major"
        $margin="0 0 1px 0"
        $padding="0 30px"
        $height="100px"
      >
        <TitleDiv $width="100%" $height="100%">
          <Div $flex="h_start_start">
            <P $fontSize="large" $color="white">
              제목:
            </P>
            <H1 $fontSize="large" $color="white">
              {dummyData.title}
            </H1>
          </Div>
          <Div>
            <Div $flex="h_start_start">
              <P $fontSize="small" $color="white">
                작성자: {dummyData.nickname} | {dummyData.date}
              </P>
            </Div>
          </Div>
        </TitleDiv>
      </Section>
      <Section
        $width="100%"
        $backgroundColor="major"
        $flex="v_center_center"
        $padding="5%"
        $margin="0 0 1px 0"
      >
        <Div $padding="5%" dangerouslySetInnerHTML={{ __html: dummyData.htmlContent }}></Div>
      </Section>
      <Section
        $width="100%"
        $padding="5% 30px"
        $backgroundColor="minorDark"
        $flex="v_center_center"
      >
        <Div $width="85%">
          <Div>
            <Span $fontSize="large" $color="white">
              댓글: {dummyCommentData.length}개
            </Span>
          </Div>
          <Div $flex="h_center_center" $width="100%">
            <Span $width="10%" $color="white">
              {dummyUserData.userName}
            </Span>
            <CommentInput
              type="text"
              $color="white"
              $margin="3% 0"
              $width="85%"
              $height="40px"
              $backgroundColor="none"
            />
            <StyleBtn
              $flex="h_center_center"
              $width="10%"
              $height="40px"
              $backgroundColor="white"
              $margin="0 0 0 1%"
            >
              댓글 추가
            </StyleBtn>
          </Div>
          {dummyCommentData.map((elem) => {
            return (
              <CommentListItem
                key={elem.nickname}
                {...{ title: elem.title, nickname: elem.nickname, createdAt: elem.createdAt }}
              />
            );
          })}
        </Div>
      </Section>
    </>
  );
};

export default PostDetailViewContainer;
