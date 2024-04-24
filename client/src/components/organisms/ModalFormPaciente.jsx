import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import { useState } from "react";
// import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";
import SearchBar from "./SearchBar";

import { FormPaciente } from "./FormPaciente";

export const ModalFormPaciente = () => {
  const width = "70vw";
  const marginLeft = `calc((100vw - ${width}) / 2)`;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      textAlign={"left"}
      sx={{ my: "1rem" }}
      width={width}
      marginLeft={marginLeft}
    >
      {/* <Button
        startIcon={<AddBoxIcon />}
        onClick={handleOpen}
        variant="contained"
      >
        Cadastrar
      </Button> */}

      <SearchBar />

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          Registrar Novo Paciente
          <IconButton onClick={handleClose} sx={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <FormPaciente />
        </DialogContent>
        <DialogActions>
          <Button color="success" form="my-form" type="submit">
            Registrar
          </Button>
          <Button color="inherit" onClick={handleClose}>
            Descartar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
