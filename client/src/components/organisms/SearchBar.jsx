import { Box, Button, Input } from "@mui/material";
import React from "react";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";

export const ModalFormPaciente = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
};

const SearchBar = () => {
  return (
    <Box>
      <Input
        sx={{
          border: ".3rem solid #cccccc",
          borderRadius: "1rem",
          marginRight: "1rem",
          height: "2.2rem",
          padding: "0.5rem",
          marginRight: "-1.5rem",
        }}
        placeholder="Digite o nome do paciente"
        disableUnderline
      />
      <Button
        startIcon={<SearchRoundedIcon />}
        // onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: "1rem",
          marginRight: "1rem",
        }}
      >
        Pesquisar
      </Button>
      <Button
        startIcon={<FilterListRoundedIcon />}
        // onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: "1rem",
          marginRight: "1rem",
        }}
      >
        Filtrar
      </Button>
      <Button
        startIcon={<AddCircleRoundedIcon />}
        // onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: "1rem",
          marginRight: "1rem",
        }}
      >
        Adicionar
      </Button>
      <Button
        startIcon={<LeaderboardRoundedIcon />}
        // onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: "1rem",
        }}
      >
        Estatística
      </Button>
    </Box>
  );
};

export default SearchBar;
