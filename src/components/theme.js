import React from "react";
import { ThemeProvider } from "styled-components";

import {
  colorBlack as B,
  colorBlack000 as B000,
  colorBlack100 as B100,
  colorBlack200 as B200,
  colorBlack300 as B300,
  colorBlack400 as B400,
  colorBlack500 as B500,
  colorBlack600 as B600,
  colorBlack700 as B700,
  colorBlack800 as B800,
  colorBlack900 as B900,
  colorPrimary as P,
  colorPrimary000 as P000,
  colorPrimary100 as P100,
  colorPrimary200 as P200,
  colorPrimary300 as P300,
  colorPrimary400 as P400,
  colorPrimary500 as P500
} from "./style";

export const Theme = ({
  colorBlack = B,
  colorBlack000 = B000,
  colorBlack100 = B100,
  colorBlack200 = B200,
  colorBlack300 = B300,
  colorBlack400 = B400,
  colorBlack500 = B500,
  colorBlack600 = B600,
  colorBlack700 = B700,
  colorBlack800 = B800,
  colorBlack900 = B900,
  colorPrimary = P,
  colorPrimary000 = P000,
  colorPrimary100 = P100,
  colorPrimary200 = P200,
  colorPrimary300 = P300,
  colorPrimary400 = P400,
  colorPrimary500 = P500,
  children
}) => (
  <ThemeProvider
    theme={{
      colorBlack,
      colorBlack000,
      colorBlack100,
      colorBlack200,
      colorBlack300,
      colorBlack400,
      colorBlack500,
      colorBlack600,
      colorBlack700,
      colorBlack800,
      colorBlack900,
      colorPrimary,
      colorPrimary000,
      colorPrimary100,
      colorPrimary200,
      colorPrimary300,
      colorPrimary400,
      colorPrimary500
    }}
  >
    <div>{children}</div>
  </ThemeProvider>
);
