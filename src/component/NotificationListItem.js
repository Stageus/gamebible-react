import React from "react";

import styled from "styled-components";
import { Span } from "../style/TextStyle";
import { Div, Article } from "../style/LayoutStyle";

import ImgTextBtnUtil from "../util/ImgTextBtnUtil";

import DeleteIcon from "../img/deleteIcon.svg";
import RejectIcon from "../img/rejectIcon.svg";
import ApproveIcon from "../img/approveIcon.svg";

import { useClick } from "../hook/useClick";
import GameImgSettingContainer from "../container/inNotificationPage/GameImgSettingContainer";

import { useCookies } from "react-cookie";

const BorderStyleArticle = styled(Article)`
  border-radius: 5px;
`;

const NotificationListItem = (props) => {
  const { date, content } = props.data;
  const { isAdmin } = props;

  const { click: acceptGame, ClickEvent: setGameImgEvent } = useClick(false);

  const [cookies] = useCookies();

  useEffect(() => {
    const deleteAlarmEvent = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/account/notification/${notificationId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );
      const result = await response.json();
    };
    deleteAlarmEvent();
  }, []);

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
        {isAdmin ? (
          <Div $flex="h_between_center" $width="30%">
            <ImgTextBtnUtil
              key="Reject"
              img={RejectIcon}
              text="REJECT"
              color="major"
              backgroundColor="default"
            />
            <ImgTextBtnUtil
              key="Approve"
              img={ApproveIcon}
              text="APPROVE"
              color="major"
              backgroundColor="default"
              onClick={setGameImgEvent}
            />
          </Div>
        ) : (
          <ImgTextBtnUtil
            img={DeleteIcon}
            text="DELETE"
            color="major"
            backgroundColor="default"
            onClick="deleteAlarmEvent()"
          />
        )}
      </BorderStyleArticle>
      {acceptGame && <GameImgSettingContainer {...{ setGameImgEvent }} />}
    </Div>
  );
};

export default NotificationListItem;
