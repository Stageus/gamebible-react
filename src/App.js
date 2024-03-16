import React from "react";
import TestPage from "./page/TestPage";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import FindIDPage from "./page/FindIDPage";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="/FindIDPage" element={<FindIDPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
