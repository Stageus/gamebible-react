import React from "react";

import { styled } from "styled-components";
import { Div } from "../style/LayoutStyle";

import NotificationListContainer from "../container/inNotificationPage/NotificationListContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;

const NotificationPage = () => {
  return (
    <PageWrapper>
      <NotificationListContainer />
    </PageWrapper>
  );
};

export default NotificationPage;
