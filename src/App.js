import React from "react";
import TestPage from "./page/TestPage";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import WikiPage from "./page/WikiPage";
import NotificationPage from "./page/NotificationPage";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="/wiki" element={<WikiPage />} />
            <Route path="/alarm" element={<NotificationPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
