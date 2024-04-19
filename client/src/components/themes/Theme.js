import { createTheme } from "@mui/material";
export const Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00715D",
    },
    secondary: {
      main: "#f50057",
    },
    textPrimary: {
      main: "#ffffff",
    },
    textSecondary: {
      main: "#dddddd",
    },
  },

  typography: {
    fontFamily: "Inter",
  },
});
