import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form-components/FormInputText";

import { OpenModalButton } from "components/OpenModalButton";
import { RegisterButton } from "components/RegisterButton";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { FormInputRadio } from "components/form-components/FormInputRadio";

const defaultValues = {
  nome: "",
  cpf: "",
  sexo: "",
};

export const ModalFormRecebedor = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultValues,
  });

  return (
    <>
      <OpenModalButton handleOpen={handleOpen} />

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          Registrar Novo Paciente
          <IconButton onClick={handleClose} sx={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            display: "grid",
            gridRowGap: "20px",
            padding: "20px",
            margin: "10px 10px",
          }}
        >
          <FormInputText
            name="nome"
            control={control}
            label="Nome"
            required={true}
            pattern={/^[a-zA-ZÀ-ú\s]+( [a-zA-ZÀ-ú\s]+)+$/i}
          />
          <FormInputText
            name="cpf"
            control={control}
            label="CPF"
            required={true}
            pattern={/^\d{11}$/}
          />
          <FormInputRadio
            name="sexo"
            control={control}
            label="Sexo"
            options={["Masculino", "Feminino"]}
            required={true}
          />
        </DialogContent>
        <DialogActions>
          <RegisterButton
            table="recebedores"
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
