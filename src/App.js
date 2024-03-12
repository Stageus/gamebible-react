import React from "react";
import TestPage from "./page/TestPage";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<TestPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
