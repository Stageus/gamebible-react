import { React } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./style/GlobalStyle";
import PrivateRouter from "./routes/PrivateRouter";
import PublicRouter from "./routes/PublicRouter";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <PublicRouter />
        <PrivateRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
