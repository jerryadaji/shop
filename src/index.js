import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import GlobalStyle from "./theme/globalStyles";
import Theme from "./theme/theme";
import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
