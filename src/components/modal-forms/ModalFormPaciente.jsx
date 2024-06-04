import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form-components/FormInputText";
import { FormInputCheckbox } from "../form-components/FormInputCheckbox";
import { FormInputDropdown } from "../form-components/FormInputDropdown";
import { FormInputDate } from "../form-components/FormInputDate";
import { FormInputRadio } from "../form-components/FormInputRadio";
import { FormInputMultiCheckbox } from "components/form-components/FormInputMultiCheckbox";

import { RegisterButton } from "components/RegisterButton";
import { OpenModalButton } from "components/OpenModalButton";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

import { useQueryClient } from "@tanstack/react-query";

const defaultValues = {
  nome: "",
  cns: "",
  sexo: "",
  dataNasc: null,
  recadastro: "",
  tel: "",
  convenio: "",
  escolaridade: "",
  profissao: "",
  dataInsc: null,
  esf: "",
  mobilidade: "",
  cinto: "",
  efluente: "",
};

export const ModalFormPaciente = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { handleSubmit, reset, control, setValue } = useForm({
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
            name="cns"
            control={control}
            label="CNS"
            required={true}
            pattern={/^\d{15}$/}
          />
          <FormInputCheckbox
            name="esf"
            control={control}
            label="Usa ESF?"
            setValue={setValue}
          />
          <FormInputCheckbox
            name="cinto"
            control={control}
            label="Usa cinto de sustentação?"
            setValue={setValue}
          />
          <FormInputRadio
            name={"sexo"}
            control={control}
            label={"Sexo"}
            required={true}
            options={["Masculino", "Feminino"]}
          />
          <FormInputDate
            name="dataNasc"
            control={control}
            label="Data de Nascimento"
            required={true}
          />
          <FormInputRadio
            name={"recadastro"}
            control={control}
            label={"Forma de Recadastro"}
            required={true}
            options={["Presencial", "Remoto"]}
          />
          <FormInputText
            name="tel"
            control={control}
            label="Telefone"
            required={true}
            pattern={/^\d{10,11}$/}
          />
          <FormInputDropdown
            name="convenio"
            control={control}
            label="Convênio"
            options={["Placeholder 1", "Placeholder 2"]}
          />
          <FormInputDropdown
            name="escolaridade"
            control={control}
            label="Escolaridade"
            options={[
              "Ausente",
              "Ensino Fundamental",
              "Ensino Médio",
              "Ensino Superior",
            ]}
          />
          <FormInputDropdown
            name="profissao"
            control={control}
            label="Profissão"
            options={["Placeholder 1", "Placeholder 2"]}
          />
          <FormInputRadio
            name="mobilidade"
            control={control}
            label="Mobilidade"
            required={true}
            options={["Deambula", "Deambula com auxílio", "Não deambula"]}
          />
          <FormInputMultiCheckbox
            name="efluente"
            control={control}
            label="Efluente"
            setValue={setValue}
            options={[
              {
                label: "Fezes formadas",
                value: "Fezes formadas",
              },
              {
                label: "Fezes pastosas",
                value: "Fezes pastosas",
              },
              {
                label: "Fezes líquidas",
                value: "Fezes líquidas",
              },
              {
                label: "Fezes semilíquidas",
                value: "Fezes semilíquidas",
              },
              {
                label: "Muco",
                value: "Muco",
              },
              {
                label: "Urina",
                value: "Urina",
              },
            ]}
          />
          <FormInputDate
            name="dataInsc"
            control={control}
            label="Data de Inscrição"
            required={true}
          />
        </DialogContent>
        <DialogActions>
          <RegisterButton
            table="pacientes"
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
