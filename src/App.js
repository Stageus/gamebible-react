import { React } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./style/GlobalStyle";
import PrivateRouter from "./routes/PrivateRouter";
import PubilcRouter from "./routes/PublicRouter";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <PubilcRouter />
        <PrivateRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
