import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";

import { Box, CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material";
import { useTheme, ThemeContext } from "./theme/Theme.jsx";

const App = () => {
  const [theme, colorMode, fontSize] = useTheme();

  return (
    <ThemeContext.Provider value={{colorMode, fontSize}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: "100vh",
            position: "relative",
            paddingBottom: "2.5rem",
          }}
        >
          <RouterProvider router={router} />
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
