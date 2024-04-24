import { React, useEffect } from "react";

import { styled } from "styled-components";
import { Div } from "../style/LayoutStyle";

import NotificationListContainer from "../container/inNotificationPage/NotificationListContainer";
import AdminNotificationListContainer from "../container/inNotificationPage/AdminNotificationListContainer";

import userInfoAtom from "../recoil/userInfoAtom";
import { useRecoilValue } from "recoil";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;

const NotificationPage = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/");
    }
  }, [cookies.token]);

  return (
    <PageWrapper>
      {userInfo.is_admin ? <AdminNotificationListContainer /> : <NotificationListContainer />}
    </PageWrapper>
  );
};

export default NotificationPage;
