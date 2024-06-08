import {
  Toolbar,
  Typography,
  Input,
  IconButton,
  TextField,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";

import { Controller } from "react-hook-form";

import { ModalForm } from "./ModalForm";
import { ModalFilter } from "./ModalFilter";

export const ToolbarTabelaPaciente = ({ control, handleSubmit, onSubmit }) => {
  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          justifyContent: "space-between",
        }}
      >
        <Controller
          control={control}
          name="busca"
          render={({ field: { onChange, onBlur, value, ref } }) => (
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
              onChange={onChange}
            />
          )}
        />

        <IconButton
          onClick={handleSubmit(onSubmit)}
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

        <ModalForm table={"pacientes"} mode={"register"} />

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
