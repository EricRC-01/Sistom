import "@fontsource/varela-round";
import "@fontsource/inter";

import { createTheme } from "@mui/material";
const Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00715D",
    },
    secondary: {
      main: "#ffffff",
    },
    tertiary: {
      main: "#004f41",
    },
    text: {
      primary: "#000000",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default Theme;