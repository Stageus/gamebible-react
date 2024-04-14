import { React, useState, useEffect } from "react";

import styled from "styled-components";
import { Div, Section, Article } from "../../style/LayoutStyle";
import { H1 } from "../../style/TextStyle";
import { Img } from "../../style/ImgStyle";

import noAlarmImg from "../../img/noAlarmImg.svg";
import AdminNotificationListItem from "../../component/AdminNotificationListItem";

import userInfoAtom from "../../recoil/userInfoAtom";
import { useRecoilValue } from "recoil";

import useFetch from "../../hook/useFetch";

import { useNavigate } from "react-router-dom";

const OverFlowDiv = styled(Section)`
  overflow: auto;
`;
const NotiListLayout = styled(Article)`
  width: 100%;
  min-height: 700px;
`;

const AdminNotificationListContainer = () => {
  const userAdminInfo = useRecoilValue(userInfoAtom).is_admin;
  const navigate = useNavigate();
  console.log("관리자 유무 확인: ", userAdminInfo);

  if (!userAdminInfo) {
    alert("관리자용 알람 페이지입니다.");
    navigate("./");
  }

  // 관리자 승인요청 온 게임 목록보기 GET
  const [adminNotiListData, setAdminNotiListData] = useState([]);
  const [page, setPage] = useState(1);

  const { data, error, status, request } = useFetch();
  useEffect(() => {
    request(`/admin/game/request/all`, "GET", null);
  }, []);

  useEffect(() => {
    if (status === 200) {
      setAdminNotiListData(data?.data);
    } else if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    } else if (status === 401) {
      alert("권한이 없는 사용자입니다.");
    } else if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data]);

  console.log("adminNotiListData: ", adminNotiListData);

  // 관리자 승인요청 온 게임 목록 백엔드 state가 업데이트 될 때 마다, page를 1 증가시키기
  useEffect(() => {
    setPage(page + 1);
  }, [adminNotiListData]);

  return (
    <OverFlowDiv $height="100%" $flex="v_start_center" $margin="100px 0 0 0" $width="100vw">
      <Div $flex="v_start_center" $width="1320px">
        <Div $flex="h_start_center" $width="100%">
          <H1 $fontSize="large" $fontWeight="bold">
            관리자 알림함
          </H1>
        </Div>
        <NotiListLayout $flex="v_center_center">
          {adminNotiListData.length > 0 ? (
            adminNotiListData.map((elem) => {
              return <AdminNotificationListItem key={elem.idx} data={elem} />;
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

export default AdminNotificationListContainer;
