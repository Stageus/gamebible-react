import { React, useEffect } from "react";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { useCookies } from "react-cookie";
import useFetch from "./hook/useFetch";

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
import Kakao from "./container/Kakao";

import HeaderItem from "./component/HeaderItem";
import GameListContainer from "./container/GameListNavContainer";
import { useRecoilState } from "recoil";
import userInfoAtom from "./recoil/userInfoAtom";

const App = () => {
  // useEffect 사용해서 1. Cookie 유무 파악 / 2. 쿠키가 있다면 내 정보 불러오기 api 호출
  // ㄴ 이 useEffect의 구독 리스트에 쿠키를 넣음

  // 쿠키를 만드는 건 login 성공할 때 함

  // 로그아웃하면 atom에 들어있던 유저 정보 비워주기 useResetRecoilState()
  const { data, status, request } = useFetch();
  const [cookies] = useCookies(["token"]);
  const [, setUserInfo] = useRecoilState(userInfoAtom);

  useEffect(() => {
    if (cookies.token) {
      request("/account/info", "GET", null, {
        Authorization: `Bearer ${cookies.token}`,
      });
    }
  }, [cookies]);

  useEffect(() => {
    if (data) {
      setUserInfo({
        email: data.data.email,
        nickname: data.data.nickname,
        is_admin: data.data.is_admin,
        user_idx: data.data.user_idx,
      });
    }
  }, [data]);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <HeaderItem />
        <GameListContainer />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/personalInfo" element={<PersonalInfoPage />} />
          <Route path="/editPersonalInfo" element={<EditPersonalInfoPage />} />
          <Route path="/findID" element={<FindIDPage />} />
          <Route path="/resetPW" element={<ResetPWPage />} />
          <Route path="/changePW" element={<ChangePWPage />} />
          <Route path="/game/:gameIdx/community/page/:pageIdx" element={<CommunityPage />} />
          <Route path="/game/:gameIdx/wiki" element={<WikiPage />} />
          <Route path="/alarm" element={<NotificationPage />} />
          <Route
            path="/game/:gameIdx/community/page/:pageIdx/post/:postIdx"
            element={<ReadPostPage />}
          />
          <Route path="/searchResults" element={<SearchResultsPage />} />
          <Route path="/game/:gameIdx/writePost" element={<WritePostPage />} />
          <Route path="/game/:gameIdx/wiki/history" element={<WikiHistoryPage />} />
          <Route
            path="/game/:gameIdx/wiki/history/:historyIdx"
            element={<WikiHistoryContentPage />}
          />
          <Route path="/game/:gameIdx/wiki/edit" element={<EditWikiPage />} />
          <Route path="/account/kakao/callback" element={<Kakao />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
