import React from "react";
import styled from "styled-components";
import { Span } from "../style/TextStyle";
import { Div, Article } from "../style/LayoutStyle";
import ImgTextBtnUtil from "../util/ImgTextBtnUtil";

import DeleteIcon from "../img/deleteIcon.svg";

const BorderStyleArticle = styled(Article)`
  border-radius: 5px;
`;

const NotificationListItem = () => {
  const BtnColor = "major";
  const BtnText = "DELETE";

  const dummyData = {
    date: "2024.02.29. 11:01",
    content: "사용자의 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!",
  };

  return (
    <Div $width="100vw" $padding="0 3%" $flex="v_start_start">
      <Div $flex="v_start_start" $width="100%" $margin="5% 0 0 0">
        <Span $margin="0 0 10px 0">{dummyData.date}</Span>
        <BorderStyleArticle
          $flex="h_between_center"
          $width="100%"
          $backgroundColor="lightGray"
          $height="100px"
          $padding="0 3%"
        >
          <Div>
            <Span $fontWeight="bold">{dummyData.content}</Span>
          </Div>
          <Div>
            <ImgTextBtnUtil img={DeleteIcon} text={BtnText} color={BtnColor} />
          </Div>
        </BorderStyleArticle>
      </Div>
    </Div>
  );
};

export default NotificationListItem;
