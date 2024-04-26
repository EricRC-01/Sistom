import { createTheme } from "@mui/material";
export const Theme = createTheme({
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
      secondary: "#ffffff",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
