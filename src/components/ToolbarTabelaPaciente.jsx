import {
  Toolbar,
  Typography,
  Input,
  IconButton,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";

import { ModalFormPaciente } from "./modal-forms/ModalFormPaciente";
import { ModalFilter } from "./ModalFilter";

export const ToolbarTabelaPaciente = () => {
  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          justifyContent: "space-between",
        }}
      >
        <Input
          sx={{
            border: "0.1rem solid #cccccc",
            borderRadius: 4,
            marginRight: "-1.5rem",
            height: "2.2rem",
            padding: "0.5rem",
            width: "75%",
          }}
          placeholder="Digite o nome do paciente"
          disableUnderline
        />

        <IconButton
          onClick={() => alert("Buscando...")}
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
          <SearchRoundedIcon />
          <Typography sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            Buscar
          </Typography>
        </IconButton>

        <ModalFilter />

        <ModalFormPaciente />

        <IconButton
          variant="contained"
          onClick={() => alert("Estatisticando...")}
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
          <LeaderboardRoundedIcon />
          <Typography sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            Estatísticas
          </Typography>
        </IconButton>
      </Toolbar>
    </>
  );
};
