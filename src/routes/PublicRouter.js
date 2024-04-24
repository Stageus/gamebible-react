import { React, useEffect } from "react";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import HeaderNavContainer from "../container/HeaderNavContainer";

import MainPage from "../page/MainPage";
import SignInPage from "../page/SignInPage";
import SignUpPage from "../page/SignUpPage";
import FindIDPage from "../page/FindIDPage";
import ResetPWPage from "../page/ResetPWPage";
import ChangePWPage from "../page/ChangePWPage";
import CommunityPage from "../page/CommunityPage";
import WikiPage from "../page/WikiPage";
import SearchResultsPage from "../page/SearchResultsPage";
import WikiHistoryPage from "../page/WikiHistoryPage";
import WikiHistoryContentPage from "../page/WikiHistoryContentPage";
import Kakao from "../container/Kakao";

const PubilcRouter = () => {
  return (
    <>
      <HeaderNavContainer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/findID" element={<FindIDPage />} />
        <Route path="/resetPW" element={<ResetPWPage />} />
        <Route path="/changePW" element={<ChangePWPage />} />
        <Route path="/game/:gameIdx/community" element={<CommunityPage />} />
        <Route path="/game/:gameIdx" element={<WikiPage />} />
        <Route path="/searchResults" element={<SearchResultsPage />} />
        <Route path="/game/:gameIdx/wiki/history" element={<WikiHistoryPage />} />
        <Route
          path="/game/:gameIdx/wiki/history/:historyIdx"
          element={<WikiHistoryContentPage />}
        />
        <Route path="/account/kakao/callback" element={<Kakao />} />
      </Routes>
    </>
  );
};

export default PubilcRouter;
