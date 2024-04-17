import React from "react";

import styled from "styled-components";
import { Span } from "../style/TextStyle";
import { Div, Article } from "../style/LayoutStyle";

import ImgTextBtnItem from "./ImgTextBtnItem";

import RejectIcon from "../img/rejectIcon.svg";
import ApproveIcon from "../img/approveIcon.svg";

import { useClick } from "../hook/useClick";
import GameImgSettingContainer from "../container/inNotificationPage/GameImgSettingContainer";

import { useCookies } from "react-cookie";

import TimeStampUtil from "../util/TimeStampUtil";

const BorderStyleArticle = styled(Article)`
  border-radius: 5px;
`;

const AdminNotificationListItem = (props) => {
  const { idx, userIdx, title, isConfirmed, createdAt } = props.data;
  const [cookies] = useCookies("token");

  // 게임요청 승인 시 게임이미지 설정 모달창 열림
  const { click: acceptGame, clickEvent: setGameImgEvent } = useClick(false);

  // (관리자) 게임 승인요청 거부하기 DELETE
  const rejectRequestEvent = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_KEY}/admin/game/request/${idx}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
    });

    if (response.status === 200) {
      window.location.reload();
    }
    if (response.status === 400) {
      alert(response.message);
    }
    if (response.status === 401) {
      alert(response.message);
    }
    if (response.status === 500) {
      alert(response.message);
    }
  };

  return (
    <Div $flex="v_start_start" $width="100%" $margin="70px 0 0 0">
      <Span $margin="0 0 10px 0">{TimeStampUtil(createdAt)}</Span>
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
      {acceptGame && <GameImgSettingContainer {...{ setGameImgEvent, idx }} />}
    </Div>
  );
};

export default AdminNotificationListItem;
