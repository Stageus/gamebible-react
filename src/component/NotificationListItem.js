import React from "react";
import styled from "styled-components";
import { Span } from "../style/TextStyle";
import { Div, Article } from "../style/LayoutStyle";
import ImgTextBtnUtil from "../util/ImgTextBtnUtil";

import DeleteIcon from "../img/deleteIcon.svg";
import RejectIcon from "../img/rejectIcon.svg";
import ApproveIcon from "../img/approveIcon.svg";

const BorderStyleArticle = styled(Article)`
  border-radius: 5px;
`;

const NotificationListItem = () => {
  const BtnColor = "major";
  const BtnText = "DELETE";

  const dummyData = {
    date: "2024.02.29. 11:01",
    content: "사용자의 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!",
    admin: [true, false],
  };

  return (
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
        <Div $width="25%" $flex={dummyData.admin[0] ? "h_between_center" : "h_end_center"}>
          {dummyData.admin[0] ? (
            <>
              <ImgTextBtnUtil key="Reject" img={RejectIcon} text={"REJECT"} color={BtnColor} />
              <ImgTextBtnUtil key="Approve" img={ApproveIcon} text={"APPROVE"} color={BtnColor} />
            </>
          ) : (
            <ImgTextBtnUtil img={DeleteIcon} text={BtnText} color={BtnColor} />
          )}
        </Div>
      </BorderStyleArticle>
    </Div>
  );
};

export default NotificationListItem;
