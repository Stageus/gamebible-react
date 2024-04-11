import { React, useState, useEffect } from "react";

import styled from "styled-components";
import { Span } from "../style/TextStyle";
import { Div, Article } from "../style/LayoutStyle";

import ImgTextBtnItem from "./ImgTextBtnItem";

import DeleteIcon from "../img/deleteIcon.svg";
import RejectIcon from "../img/rejectIcon.svg";
import ApproveIcon from "../img/approveIcon.svg";

import { useClick } from "../hook/useClick";
import GameImgSettingContainer from "../container/inNotificationPage/GameImgSettingContainer";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { useRecoilState } from "recoil";
import userInfoAtom from "../recoil/userInfoAtom";

import timestampConversion from "../util/TimestampUtil";

const BorderStyleArticle = styled(Article)`
  border-radius: 5px;
`;

const NotificationListItem = (props) => {
  const { content, url, created_at } = props.data;

  const navigate = useNavigate();

  const { click: acceptGame, clickEvent: setGameImgEvent } = useClick(false);

  const [cookies] = useCookies("token");

  // (일반사용자) 알림 삭제하기 DELETE
  const deleteAlarmEvent = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_KEY}/account/notification/:idx`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
    });
    const result = await response.json();
    if (response.status === 200) {
      alert(result.message);
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <Div $flex="v_start_start" $width="100%" $margin="70px 0 0 0">
      <Span $margin="0 0 10px 0">{timestampConversion(created_at)}</Span>
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

        <ImgTextBtnItem
          img={DeleteIcon}
          text="DELETE"
          color="major"
          backgroundColor="default"
          onClick={() => deleteAlarmEvent(":idx")}
        />
      </BorderStyleArticle>
      {acceptGame && <GameImgSettingContainer {...{ setGameImgEvent }} />}
    </Div>
  );
};

export default NotificationListItem;
