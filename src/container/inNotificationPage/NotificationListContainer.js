import { React, useState, useEffect } from "react";

import styled from "styled-components";
import { Div, Section, Article } from "../../style/LayoutStyle";
import { H1 } from "../../style/TextStyle";
import { Img } from "../../style/ImgStyle";

import noAlarmImg from "../../img/noAlarmImg.svg";
import NotificationListItem from "../../component/NotificationListItem";

import useFetch from "../../hook/useFetch";

const OverFlowDiv = styled(Section)`
  overflow: auto;
`;
const NotiListLayout = styled(Article)`
  width: 100%;
  min-height: 700px;
`;

const NotificationListContainer = () => {
  // 일반사용자 알림 목록보기 GET
  const [notiListData, setNotiListData] = useState([]);
  const [page, setPage] = useState(1);

  const { data, error, status, request } = useFetch();
  useEffect(() => {
    request(`/account/notification?lastIdx=:lastIdx`, "GET", null);
  }, []);

  useEffect(() => {
    if (status === 200) {
      setNotiListData(data.data);
    } else if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    } else if (status === 401) {
      alert("권한이 없는 사용자입니다.");
    } else if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data]);

  console.log("notiListData lastIdx: ", notiListData.lastIdx);

  // 일반사용자 알림 목록 백엔드 state가 업데이트 될 때 마다, page를 1 증가시키기
  useEffect(() => {
    setPage(page + 1);
  }, [notiListData]);

  return (
    <OverFlowDiv $height="100%" $flex="v_start_center" $margin="100px 0 0 0" $width="100vw">
      <Div $flex="v_start_center" $width="1320px">
        <Div $flex="h_start_center" $width="100%">
          <H1 $fontSize="large" $fontWeight="bold">
            알림함
          </H1>
        </Div>
        <NotiListLayout $flex="v_center_center">
          {notiListData.length > 0 ? (
            notiListData.map((elem) => {
              return <NotificationListItem key={elem.idx} data={elem} />;
            })
          ) : (
            <Div>
              <Img src={noAlarmImg} alt="no alarm" />
            </Div>
          )}
        </NotiListLayout>
      </Div>
    </OverFlowDiv>
  );
};

export default NotificationListContainer;
