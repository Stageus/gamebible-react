import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/LayoutStyle";

import HeaderItem from "../component/HeaderItem";
import GameListContainer from "../container/GameListNavContainer";
import FooterItem from "../component/FooterItem";
import NotificationListContainer from "../container/NotificationListContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;
const FooterWrapper = styled(Div)`
  position: absolute;
  bottom: 0;
`;

const NotificationPage = () => {
  return (
    <PageWrapper>
      <HeaderItem />
      <GameListContainer />
      <NotificationListContainer />
      <FooterWrapper>
        <FooterItem />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default NotificationPage;
