import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";

import { FormCirurgia } from "./form-components/FormCirurgia";
import { FormPaciente } from "./form-components/FormPaciente";
import { FormEstoma } from "./form-components/FormEstoma";
import { FormRecebedor } from "./form-components/FormRecebedor";
import { FormConsulta } from "./form-components/FormConsulta";
import { FormEquipamento } from "./form-components/FormEquipamento";

import { useForm } from "react-hook-form";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { RegisterButton } from "components/RegisterButton";

import { OpenModalButton } from "components/OpenModalButton";

export const ModalForm = ({ table }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { handleSubmit, reset, control } = useForm();

  const form = () => {
    switch (table) {
      case "cirurgias":
        return <FormCirurgia control={control} />;
      case "pacientes":
        return <FormPaciente control={control} />;
      case "estomas":
        return <FormEstoma control={control} />;
      case "recebedores":
        return <FormRecebedor control={control} />;
      case "consultas":
        return <FormConsulta control={control} />;
      case "equipamentos":
        return <FormEquipamento control={control} />;
      default:
        return null;
    }
  };

  return (
    <>
      <OpenModalButton handleOpen={handleOpen} />
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          Registrar novo campo
          <IconButton onClick={handleClose} sx={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            display: "grid",
            gridRowGap: "20px",
            overflowY: "visible",
          }}
        >
          {form()}
        </DialogContent>
        <DialogActions>
          <RegisterButton
            table={table}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
          />
          <Button color="inherit" onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
