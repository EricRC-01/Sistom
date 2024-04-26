import { Box, IconButton } from "@mui/material";

import ContrastSharpIcon from "@mui/icons-material/ContrastSharp";
import TextDecreaseSharpIcon from "@mui/icons-material/TextDecreaseSharp";
import TextIncreaseSharpIcon from "@mui/icons-material/TextIncreaseSharp";
import SignLanguageRoundedIcon from "@mui/icons-material/SignLanguageRounded";

export const Accessibility = () => {
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
        }}
        color="secondary"
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
        }}
        color="secondary"
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
        }}
        color="secondary"
      >
        <TextIncreaseSharpIcon fontSize="medium" />
      </IconButton>
      <IconButton
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "tertiary.main" },
          padding: ".5rem",
          marginBottom: ".2rem",
        }}
        color="secondary"
      >
        <SignLanguageRoundedIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};
