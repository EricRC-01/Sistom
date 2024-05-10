import { Box, IconButton } from "@mui/material";

import ContrastSharpIcon from "@mui/icons-material/ContrastSharp";
import TextDecreaseSharpIcon from "@mui/icons-material/TextDecreaseSharp";
import TextIncreaseSharpIcon from "@mui/icons-material/TextIncreaseSharp";
import SignLanguageRoundedIcon from "@mui/icons-material/SignLanguageRounded";
import { useContext } from "react";
import { ThemeContext } from "../../theme/Theme";

export const Accessibility = () => {

  const { colorMode, fontSize } = useContext(ThemeContext);

  return (
    
    <Box
      sx={{
        position: "fixed",
        right: ".5rem",
        top: "7rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IconButton
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "tertiary.main" },
          padding: ".5rem",
          marginBottom: ".2rem",
          color: "white"
        }}
        onClick={colorMode.toggleColorMode}
      >
        <ContrastSharpIcon fontSize="medium" />
      </IconButton>
      <IconButton
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "tertiary.main" },
          padding: ".5rem",
          marginBottom: ".2rem",
          color: "white"
        }}
        onClick={fontSize.decreaseFontSize}
      >
        <TextDecreaseSharpIcon fontSize="medium" />
      </IconButton>
      <IconButton
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "tertiary.main" },
          padding: ".5rem",
          marginBottom: ".2rem",
          color: "white"
        }}
        onClick={fontSize.increaseFontSize}
      >
        <TextIncreaseSharpIcon fontSize="medium" />
      </IconButton>
      {/* <IconButton
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "tertiary.main" },
          padding: ".5rem",
          marginBottom: ".2rem",
          color: "white"
        }}
      >
        <SignLanguageRoundedIcon fontSize="medium" />
      </IconButton> */}
    </Box>
  );
};
