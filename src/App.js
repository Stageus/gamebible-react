import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import GlobalStyle from "./style/GlobalStyle";

import MainPage from "./page/MainPage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";
import FindIDPage from "./page/FindIDPage";
import ResetPWPage from "./page/ResetPWPage";
import ChangePWPage from "./page/ChangePWPage";
import ReadPostPage from "./page/ReadPostPage";
import GamePage from "./page/GamePage";
import NotificationPage from "./page/NotificationPage";
import PersonalInfoPage from "./page/PersonalInfoPage";
import EditPersonalInfoPage from "./page/EditPersonalInfoPage";
import SearchResultsPage from "./page/SearchResultsPage";
import WritePostPage from "./page/WritePostPage";
import WikiHistoryPage from "./page/WikiHistoryPage";
import WikiHistoryContentPage from "./page/WikiHistoryContentPage";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="/SignInPage" element={<SignInPage />} />
            <Route path="/PersonalInfoPage" element={<PersonalInfoPage />} />
            <Route path="/EditPersonalInfoPage" element={<EditPersonalInfoPage />} />
            <Route path="/FindIDPage" element={<FindIDPage />} />
            <Route path="/ResetPWPage" element={<ResetPWPage />} />
            <Route path="/ChangePWPage" element={<ChangePWPage />} />
            <Route path="/game/:idx" element={<GamePage />} />
            <Route path="/alarm" element={<NotificationPage />} />
            <Route path="/ReadPostPage" element={<ReadPostPage />} />
            <Route path="/SearchResultsPage" element={<SearchResultsPage />} />
            <Route path="/WritePostPage" element={<WritePostPage />} />
            <Route path="/game/:idx/history" element={<WikiHistoryPage />} />
            <Route path="/editContent" element={<WikiHistoryContentPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
