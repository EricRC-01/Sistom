import { Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, IconButton } from "@mui/material";
import { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close"

import { FormPaciente } from "./FormPaciente";

export const ModalFormPaciente = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <Box textAlign={'left'} sx={{ my:'1rem' }}>
        <Button
          startIcon={<AddBoxIcon />}
          onClick={handleOpen}
          variant="contained"
        >
          Cadastrar
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md'>
          <DialogTitle>
            Registrar Novo Paciente
            <IconButton onClick={handleClose} sx={{ float:'right' }}>
                <CloseIcon color="primary"></CloseIcon>
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <FormPaciente />
          </DialogContent>
          <DialogActions>
            <Button
              color="success"
              form="my-form"
              type="submit"
            >
              Registrar
            </Button>
            <Button
              color="inherit"
              onClick={handleClose}
            >
              Descartar
            </Button>
          </DialogActions>
        </Dialog>
    </Box>
    );
}