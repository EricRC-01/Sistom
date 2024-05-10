import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  DialogContentText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form-components/FormInputText";
import { FormInputCheckbox } from "../form-components/FormInputCheckbox";
import { FormInputDropdown } from "../form-components/FormInputDropdown";
import { FormInputDate } from "../form-components/FormInputDate";
import { FormInputRadio } from "../form-components/FormInputRadio";
import { FormInputMultiCheckbox } from "components/form-components/FormInputMultiCheckbox";
import dayjs, { Dayjs } from "dayjs";

import { useMutation } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
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

  const queryClient = useQueryClient();

  const { registerField, pb } = usePocket();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: registerField,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pacientes"] });
      handleClose();
    },
    onError: () => {
      alert("ERROR");
    },
  });

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = async (data) => {
    mutate({
      data: {
        nome: data.nome,
        cns: data.cns,
        sexo: data.sexo,
        tel: data.tel,
        escolaridade: data.escolaridade,
        esf: data.esf,
        convenio: data.convenio,
        profissao: data.profissao,
        recadastro: data.recadastro,
        dataNasc: data.dataNasc,
        dataInsc: data.dataInsc,
        mobilidade: data.mobilidade,
        cinto: data.cinto,
        efluente: data.efluente,
      },
      tabela: "pacientes",
    });
  };

  return (
    <>
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
            pattern={
              /^[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ][a-záéíóúâêîôûãõç]+(\s[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ][a-záéíóúâêîôûãõç]+)+$/
            }
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
            options={[
              {
                label: "Masculino",
                value: "Masculino",
              },
              {
                label: "Feminino",
                value: "Feminino",
              },
            ]}
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
            options={[
              {
                label: "Presencial",
                value: "Presencial",
              },
              {
                label: "Remoto",
                value: "Remoto",
              },
            ]}
          />
          <FormInputText
            name="tel"
            control={control}
            label="Telefone"
            required={true}
          />
          <FormInputDropdown
            name="convenio"
            control={control}
            label="Convênio"
            options={[
              {
                label: "Placeholder 1",
                value: "1",
              },
              {
                label: "Placeholder 2",
                value: "2",
              },
            ]}
          />
          <FormInputDropdown
            name="escolaridade"
            control={control}
            label="Escolaridade"
            options={[
              {
                label: "Ausente",
                value: "Ausente",
              },
              {
                label: "Ensino Fundamental",
                value: "Ensino Fundamental",
              },
              {
                label: "Ensino Médio",
                value: "Ensino Médio",
              },
              {
                label: "Ensino Superior",
                value: "Ensino Superior",
              },
            ]}
          />
          <FormInputDropdown
            name="profissao"
            control={control}
            label="Profissão"
            options={[
              {
                label: "Placeholder 1",
                value: "1",
              },
              {
                label: "Placeholder 2",
                value: "2",
              },
            ]}
          />
          <FormInputRadio
            name="mobilidade"
            control={control}
            label="Mobilidade"
            required={true}
            options={[
              {
                label: "Deambula",
                value: "Deambula",
              },
              {
                label: "Deambula com auxílio",
                value: "Deambula com auxílio",
              },
              {
                label: "Não deambula",
                value: "Não deambula",
              },
            ]}
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
          <Button color="success" onClick={handleSubmit(onSubmit)}>
            Registrar
          </Button>
          <Button color="inherit" onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
