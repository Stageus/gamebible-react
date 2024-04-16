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
import { useCookies } from "react-cookie";

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
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    // 관리자 / 일반사용자 파악
    if (!userAdminInfo) {
      alert("관리자용 알람 페이지입니다.");
      navigate("/");
    }

    // 토큰 유무 파악을 통해 로그아웃 버튼 클릭 시 홈화면으로 이동
    if (!cookies.token) {
      navigate("/");
    }
  }, [userAdminInfo, cookies.token]);

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
    }
    if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    }
    if (status === 401) {
      alert("권한이 없는 사용자입니다.");
    }
    if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data]);

  useEffect(() => {
    console.log("adminNotiListData: ", adminNotiListData);
  });

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

        {adminNotiListData.length > 0 ? (
          // 알람 있을 때
          <NotiListLayout $flex="v_start_center">
            {adminNotiListData?.map((elem) => {
              return <AdminNotificationListItem key={elem.idx} data={elem} />;
            })}
          </NotiListLayout>
        ) : (
          // 알람 없을 때
          <NotiListLayout $flex="v_center_center">
            <Img src={noAlarmImg} alt="no alarm" />
          </NotiListLayout>
        )}
      </Div>
    </OverFlowDiv>
  );
};

export default AdminNotificationListContainer;
