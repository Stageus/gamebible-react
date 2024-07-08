import React from "react";

import styled from "styled-components";
import { Span } from "../style/TextStyle";
import { Div, Article } from "../style/LayoutStyle";

import ImgTextBtnItem from "./ImgTextBtnItem";

import DeleteIcon from "../img/deleteIcon.svg";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import TimeStampUtil from "../util/TimestampUtil";

const BorderStyleArticle = styled(Article)`
  border-radius: 5px;
`;

const NotificationListItem = (props) => {
  const { idx, type, post_idx, game_idx, created_at, post_title, game_title } = props.data;
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const moveURLEvent = () => {
    navigate(`${url}`);
  };

  // (일반사용자) 알림 삭제하기 DELETE
  const deleteAlarmEvent = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_KEY}/account/notification/${idx}`, {
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
      return alert("유효하지 않은 요청입니다.");
    }
    if (response.status === 401) {
      return alert("권한이 없는 사용자입니다.");
    }
    if (response.status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  };

  // 알림 내용과 URL 설정
  let content, url;
  if (type === 1) {
    content = `사용자의 "${post_title}" 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!`;
    url = `/game/${game_idx}/post/${post_idx}`;
  }
  if (type === 2) {
    content = `사용자가 작성했던 "${game_title}" 위키가 다른 사용자에 의해 수정되었습니다. 어떻게 바뀌었나 궁금하지 않으세요?`;
    url = `/game/${game_idx}`;
  }
  if (type === 3) {
    content = `요청하신 "${game_title}" 게임 생성이 거절되었습니다..ㅠㅠ `;
    url = `./`;
  }

  return (
    <Div $flex="v_start_start" $width="100%" $margin="70px 0 0 0">
      {/* 알람 시각 */}
      <Span $margin="0 0 10px 0">{TimeStampUtil(created_at)}</Span>

      {/* 알람 내용, 알람 클릭 시 해당 url로 이동 */}
      <BorderStyleArticle
        $flex="h_between_center"
        $width="100%"
        $backgroundColor="lightGray"
        $padding="20px 30px"
        onClick={(e) => moveURLEvent(e)}
      >
        <Div $width="60%">
          <Span $fontWeight="bold">{content}</Span>
        </Div>

        <ImgTextBtnItem
          img={DeleteIcon}
          text="DELETE"
          color="major"
          backgroundColor="default"
          onClick={(event) => deleteAlarmEvent(event, idx)}
        />
      </BorderStyleArticle>
    </Div>
  );
};

export default NotificationListItem;
