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
import EditWikiPage from "./page/EditWikiPage";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/personalInfo" element={<PersonalInfoPage />} />
            <Route path="/editPersonalInfo" element={<EditPersonalInfoPage />} />
            <Route path="/findID" element={<FindIDPage />} />
            <Route path="/resetPW" element={<ResetPWPage />} />
            <Route path="/changePW" element={<ChangePWPage />} />
            <Route path="/game/:idx" element={<GamePage />} />
            <Route path="/alarm" element={<NotificationPage />} />
            <Route path="/game/:idx/post/:idx" element={<ReadPostPage />} />
            <Route path="/searchResults" element={<SearchResultsPage />} />
            <Route path="/writePost" element={<WritePostPage />} />
            <Route path="/game/:idx/history" element={<WikiHistoryPage />} />
            <Route path="/game/:idx/history/:idx" element={<WikiHistoryContentPage />} />
            <Route path="/game/editWiki" element={<EditWikiPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
