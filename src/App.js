import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import GlobalStyle from "./style/GlobalStyle";

import TestPage from "./page/TestPage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";
import FindIDPage from "./page/FindIDPage";
import ResetPWPage from "./page/ResetPWPage";
import ChangePWPage from "./page/ChangePWPage";
import ReadPostPage from "./page/ReadPostPage";
import CommunityPage from "./page/CommunityPage";
import GamePage from "./page/GamePage";

import NotificationPage from "./page/NotificationPage";
import PersonalInfoPage from "./page/PersonalInfoPage";
import EditPersonalInfoPage from "./page/EditPersonalInfoPage";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="/SignInPage" element={<SignInPage />} />
            <Route path="/PersonalInfoPage" element={<PersonalInfoPage />} />
            <Route path="/EditPersonalInfoPage" element={<EditPersonalInfoPage />} />
            <Route path="/FindIDPage" element={<FindIDPage />} />
            <Route path="/ResetPWPage" element={<ResetPWPage />} />
            <Route path="/ChangePWPage" element={<ChangePWPage />} />
            <Route path="/game/:idx" element={<GamePage />} />
            <Route path="/alarm" element={<NotificationPage />} />
            <Route path="/CommunityPage/:pageIdx" element={<CommunityPage />} />
            <Route path="/ReadPostPage" element={<ReadPostPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
