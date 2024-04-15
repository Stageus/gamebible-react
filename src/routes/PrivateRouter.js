import { React, useEffect } from "react";

import { Route, Routes, useNavigate, useLocation, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import useFetch from "../hook/useFetch";
import HeaderItem from "../component/HeaderItem";

import AccessDeniedPage from "../page/AccessDeniedPage";
import ReadPostPage from "../page/ReadPostPage";
import NotificationPage from "../page/NotificationPage";
import PersonalInfoPage from "../page/PersonalInfoPage";
import EditPersonalInfoPage from "../page/EditPersonalInfoPage";
import WritePostPage from "../page/WritePostPage";
import EditWikiPage from "../page/EditWikiPage";

import { useRecoilState } from "recoil";
import userInfoAtom from "../recoil/userInfoAtom";

const PrivateRouter = () => {
  const { data, request } = useFetch();
  const [cookies] = useCookies(["token"]);
  const [, setUserInfo] = useRecoilState(userInfoAtom);
  const navigate = useNavigate();

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
      <HeaderItem />
      <Routes>
        <Route
          path="/personalInfo"
          element={cookies.token ? <PersonalInfoPage /> : <AccessDeniedPage />}
        />
        <Route
          path="/editPersonalInfo"
          element={cookies.token ? <EditPersonalInfoPage /> : <AccessDeniedPage />}
        />
        <Route
          path="/alarm"
          element={cookies.token ? <NotificationPage /> : <AccessDeniedPage />}
        />
        <Route
          path="/game/:gameIdx/community/page/:pageIdx/post/:postIdx"
          element={cookies.token ? <ReadPostPage /> : <AccessDeniedPage />}
        />
        <Route
          path="/game/:gameIdx/writePost"
          element={cookies.token ? <WritePostPage /> : <AccessDeniedPage />}
        />
        <Route
          path="/game/:gameIdx/wiki/edit"
          element={cookies.token ? <EditWikiPage /> : <AccessDeniedPage />}
        />
      </Routes>
    </>
  );
};

export default PrivateRouter;
