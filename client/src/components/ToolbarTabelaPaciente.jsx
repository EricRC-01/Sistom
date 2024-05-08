import {
  Toolbar,
  Tooltip,
  Typography,
  Input,
  Button,
  IconButton,
  InputBase,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";


import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";

import { styled, alpha } from "@mui/material/styles";

import { ModalFormPaciente } from "./modal-forms/ModalFormPaciente";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const ToolbarTabelaPaciente = () => {
  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Input
          sx={{
            border: ".3rem solid #cccccc",
            borderRadius: "1rem",
            marginRight: "-1.5rem",
            height: "2.2rem",
            padding: "0.5rem",
            width: "50%",
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


        <Tooltip title="Cadastrar">
          <IconButton>
            <ModalFormPaciente />
          </IconButton>
        </Tooltip>

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
      </Toolbar>
    </>
  );
};
