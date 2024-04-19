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
        right: "0",
        top: "110px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IconButton
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "tertiary.main" },
        }}
        color="secondary"
      >
        <ContrastSharpIcon />
      </IconButton>
      <IconButton
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "tertiary.main" },
        }}
        color="secondary"
      >
        <TextDecreaseSharpIcon />
      </IconButton>
      <IconButton
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "tertiary.main" },
        }}
        color="secondary"
      >
        <TextIncreaseSharpIcon />
      </IconButton>
      <IconButton
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "tertiary.main" },
        }}
        color="secondary"
      >
        <SignLanguageRoundedIcon />
      </IconButton>
    </Box>
  );
};
