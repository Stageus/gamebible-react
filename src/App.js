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
import CommunityPage from "./page/CommunityPage";
import WikiPage from "./page/WikiPage";
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
            <Route path="/game/:idx/community/page/:pageIdx" element={<CommunityPage />} />
            <Route path="/game/:idx/wiki/" element={<WikiPage />} />
            <Route path="/alarm" element={<NotificationPage />} />
            <Route
              path="/game/:idx/community/page/:pageIdx/post/:postIdx"
              element={<ReadPostPage />}
            />
            <Route path="/searchResults" element={<SearchResultsPage />} />
            <Route path="/game/:idx/writePost" element={<WritePostPage />} />
            <Route path="/game/:idx/wiki/history" element={<WikiHistoryPage />} />
            <Route path="/game/:idx/wiki/history/:idx" element={<WikiHistoryContentPage />} />
            <Route path="/game/:idx/wiki/edit" element={<EditWikiPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
