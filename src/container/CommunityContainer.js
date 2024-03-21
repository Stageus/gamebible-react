import React from "react";
import PostListContainer from "../container/PostListContainer";
import { styled } from "styled-components";
import { Section, Div } from "../style/LayoutStyle";
import { Span } from "../style/TextStyle";
import { setColor } from "../style/SetStyle";

const CommunityTitleContainer = styled(Div)`
  border: none;
  border-bottom: 1px solid ${setColor("white")};
`;

const CommunityContainer = () => {
  return (
    <Section $flex="v_center_center" $width="100%">
      <CommunityTitleContainer
        $width="100%"
        $height="60px"
        $flex="h_center_center"
        $padding="0 30px"
        $margin="0 0 1px 0"
        $backgroundColor="major"
      >
        <Div $flex="h_between_center" $width="100%" $height="40px" $padding="10px 40px 10px 40px">
          <Span $fontSize="large" $width="50%" $color="white">
            제목
          </Span>
          <Div $flex="h_end_center" $width="50%">
            <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
              작성자
            </Span>
            <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
              조회
            </Span>
            <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
              작성일
            </Span>
          </Div>
        </Div>
      </CommunityTitleContainer>
      <PostListContainer />
    </Section>
  );
};

export default CommunityContainer;
