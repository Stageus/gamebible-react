import React from "react";
import styled from "styled-components";
import { Img } from "../style/ImgStyle";
import { Span } from "../style/TextStyle";
import { setColor } from "../style/SetStyle";
import { Button } from "../style/ButtonStyle";
import { Div, Article } from "../style/LayoutStyle";

import DeleteIcon from "../img/deleteIcon.svg";

const BorderStyleArticle = styled(Article)`
  border-radius: 5px;
`;

const BorderStyleBtn = styled(Button)`
  border: 1px soild ${setColor("major")};
`;

const NotificationListItem = () => {
  const dummyData = {
    date: "2024.02.29. 11:01",
    content: "사용자의 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!",
  };
  return (
    <Div $width="100vw" $padding="0 3%">
      <Div $flex="v_start_start" $width="100%">
        <Span>{dummyData.date}</Span>
        <BorderStyleArticle
          $flex="h_start_center"
          $width="100%"
          $backgroundColor="lightGray"
          $height="70px"
          $padding="0 3%"
        >
          <Div>
            <Span $fontWeight="bold">{dummyData.content}</Span>
          </Div>
          <Div>
            <BorderStyleBtn $backgroundColor="none">
              <Div>
                <Img $color="major" src={DeleteIcon} alt="DeleteIcon" />
              </Div>
            </BorderStyleBtn>
          </Div>
        </BorderStyleArticle>
      </Div>
    </Div>
  );
};

export default NotificationListItem;
