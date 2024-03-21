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

const NotificationListItem = (props) => {
  const BtnColor = "major";
  const BtnText = "DELETE";

  const { date, content } = props.data;
  const { isAdmin } = props;

  return (
    <Div $flex="v_start_start" $width="100%" $margin="70px 0 0 0">
      <Span $margin="0 0 10px 0">{date}</Span>
      <BorderStyleArticle
        $flex="h_between_center"
        $width="100%"
        $backgroundColor="lightGray"
        $height="100px"
        $padding="0 3%"
      >
        <Div>
          <Span $fontWeight="bold">{content}</Span>
        </Div>
        <Div $width="25%" $flex={isAdmin ? "h_between_center" : "h_end_center"}>
          {isAdmin ? (
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
