import "@fontsource/varela-round";
import "@fontsource/inter";

import { createTheme, responsiveFontSizes } from "@mui/material";
import { createContext } from "react";

import { useMemo, useState } from "react";

export const themeSettings = (mode, size) => {
  return {
    palette: {
      mode: mode,
      primary: {
        main: "#005C4B",
      },
      tertiary: {
        main: "#004f41",
      },
      text: {
        primary: "#000000",
      },
    },

    typography: {
      fontSize: size,
      fontFamily: "Inter, sans-serif",
    },
  };
};

export const ThemeContext = createContext({
  toggleColorMode: () => {},
  increaseFontSize: () => {},
  decreaseFontSize: () => {},
});

export const useTheme = () => {
  const [mode, setMode] = useState("light");
  const [size, setSize] = useState(16);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const fontSize = useMemo(
    () => ({
      increaseFontSize: () => setSize((prev) => (prev === 24 ? 24 : prev + 1)),
      decreaseFontSize: () => setSize((prev) => (prev === 16 ? 16 : prev - 1)),
    }),
    []
  );

  const theme = useMemo(
    () => responsiveFontSizes(createTheme(themeSettings(mode, size))),
    [mode, size]
  );
  return [theme, colorMode, fontSize];
};
