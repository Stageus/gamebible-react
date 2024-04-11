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

const AdminNotificationListItem = (props) => {
  const { idx, userIdx, title, isConfirmed, createdAt } = props.data;

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const navigate = useNavigate();

  const { click: acceptGame, clickEvent: setGameImgEvent } = useClick(false);

  const [cookies] = useCookies("token");
  const timestamp = timestampConversion(createdAt);

  // (관리자) 게임 승인요청 거부하기 DELETE
  const rejectRequestEvent = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_KEY}/admin/game/request/${idx}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
    });

    const result = await response.json();
    if (response.status === 400) {
      alert(result.message);
    } else if (response.status === 401) {
      alert(result.message);
    } else if (response.status === 500) {
      alert(result.message);
    }
  };

  return (
    <Div $flex="v_start_start" $width="100%" $margin="70px 0 0 0">
      <Span $margin="0 0 10px 0">{timestamp}</Span>
      <BorderStyleArticle
        $flex="h_between_center"
        $width="100%"
        $backgroundColor="lightGray"
        $height="100px"
        $padding="0 3%"
      >
        <Div>
          <Span $fontWeight="bold">새로운 게임 "{title}" 생성이 요청되었습니다.</Span>
        </Div>
        <Div $flex="h_between_center" $width="30%">
          <ImgTextBtnItem
            key="Reject"
            img={RejectIcon}
            text="REJECT"
            color="major"
            backgroundColor="default"
            onClick={() => rejectRequestEvent(idx)}
          />
          <ImgTextBtnItem
            key="Approve"
            img={ApproveIcon}
            text="APPROVE"
            color="major"
            backgroundColor="default"
            onClick={setGameImgEvent}
          />
        </Div>
      </BorderStyleArticle>
      {acceptGame && <GameImgSettingContainer {...{ setGameImgEvent }} />}
    </Div>
  );
};

export default AdminNotificationListItem;
