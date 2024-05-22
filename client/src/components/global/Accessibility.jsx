import { Box, IconButton } from "@mui/material";
import ContrastSharpIcon from "@mui/icons-material/ContrastSharp";
import TextDecreaseSharpIcon from "@mui/icons-material/TextDecreaseSharp";
import TextIncreaseSharpIcon from "@mui/icons-material/TextIncreaseSharp";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { useContext } from "react";
import { ThemeContext } from "../../theme/Theme";

export const Accessibility = () => {
  const { colorMode, fontSize } = useContext(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: ".5rem",
        top: "calc(50% + 20px)",
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
          mt: 1,
          color: "white",
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
          mt: 1,
          color: "white",
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
          mt: 1,
          color: "white",
        }}
        onClick={fontSize.increaseFontSize}
      >
        <TextIncreaseSharpIcon fontSize="medium" />
      </IconButton>
      <IconButton
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "tertiary.main" },
          padding: ".5rem",
          mt: 1,
          color: "white",
        }}
        onClick={scrollToTop}
      >
        <ArrowUpwardRoundedIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};
