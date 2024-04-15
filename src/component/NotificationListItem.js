import React from "react";

import styled from "styled-components";
import { Span } from "../style/TextStyle";
import { Div, Article } from "../style/LayoutStyle";

import ImgTextBtnItem from "./ImgTextBtnItem";

import DeleteIcon from "../img/deleteIcon.svg";

import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import timestampConversion from "../util/TimestampUtil";

const BorderStyleArticle = styled(Article)`
  border-radius: 5px;
`;

const NotificationListItem = (props) => {
  const { content, url, created_at } = props.data;
  const [cookies] = useCookies(["token"]);

  // (일반사용자) 알림 삭제하기 DELETE
  const deleteAlarmEvent = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_KEY}/account/notification/:idx`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
    });

    if (response.status === 200) {
      window.location.reload();
      alert("선택하신 알림이 삭제되었습니다");
    } else {
      alert(response.message);
    }
  };

  return (
    <Div $flex="v_start_start" $width="100%" $margin="70px 0 0 0">
      {/* 알람 시각 */}
      <Span $margin="0 0 10px 0">{timestampConversion(created_at)}</Span>

      {/* 알람 내용, 알람 클릭 시 해당 url로 이동 */}
      <Link to={`${url}`}>
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
      </Link>
    </Div>
  );
};

export default NotificationListItem;
