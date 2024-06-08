import { IconButton, Typography, Button } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

export const OpenModalButton = ({ handleOpen, mode }) => {
  if (mode === "edit")
    return (
      <Button onClick={handleOpen} variant="contained">
        Editar
      </Button>
    );
  else
    return (
      <IconButton
        onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: 5,
          marginRight: 1,
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <AddCircleRoundedIcon />
        <Typography sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          Adicionar
        </Typography>
      </IconButton>
    );
};
