import React from "react";

import { styled } from "styled-components";
import { Div } from "../style/LayoutStyle";

import NotificationListContainer from "../container/inNotificationPage/NotificationListContainer";
import AdminNotificationListContainer from "../container/inNotificationPage/AdminNotificationListContainer";

import userInfoAtom from "../recoil/userInfoAtom";
import { useRecoilValue } from "recoil";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;

const NotificationPage = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  console.log("관리자 유무 확인: ", userInfo.is_admin);

  return (
    <PageWrapper>
      {userInfo.is_admin ? <AdminNotificationListContainer /> : <NotificationListContainer />}
    </PageWrapper>
  );
};

export default NotificationPage;
