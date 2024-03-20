import React from "react";
import TestPage from "./page/TestPage";
import SignInPage from "./page/SignInPage";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SignUpPage from "./page/SignUpPage";
import PersonalInfoPage from "./page/PersonalInfoPage";
import EditPersonalInfoPage from "./page/EditPersonalInfoPage";
import ResetPWPage from "./page/ResetPWPage";
import ChangePWPage from "./page/ChangePWPage";
import FindIDPage from "./page/FindIDPage";
import WikiPage from "./page/WikiPage";
import NotificationPage from "./page/NotificationPage";
import ReadPostPage from "./page/ReadPostPage";

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
            <Route path="/wiki" element={<WikiPage />} />
            <Route path="/alarm" element={<NotificationPage />} />
            <Route path="/ReadPostPage" element={<ReadPostPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
