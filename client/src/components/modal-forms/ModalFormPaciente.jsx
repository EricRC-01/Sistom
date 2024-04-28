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
    console.log(data);
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
      <AddBoxIcon onClick={handleOpen} />

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
          <FormInputText name="nome" control={control} label="Nome" />
          <FormInputText name="cns" control={control} label="CNS" />
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
            options={[
              {
                label: "Masculino",
                value: "masculino",
              },
              {
                label: "Feminino",
                value: "feminino",
              },
            ]}
          />
          <FormInputDate
            name="dataNasc"
            control={control}
            label="Data de Nascimento"
          />
          <FormInputRadio
            name={"recadastro"}
            control={control}
            label={"Forma de Recadastro"}
            options={[
              {
                label: "Presencial",
                value: "presencial",
              },
              {
                label: "Remoto",
                value: "remoto",
              },
            ]}
          />
          {/* Utiliza ESF */}
          <FormInputText name="tel" control={control} label="Telefone" />
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
                value: "ausente",
              },
              {
                label: "Ensino Fundamental",
                value: "fundamental",
              },
              {
                label: "Ensino Médio",
                value: "medio",
              },
              {
                label: "Ensino Superior",
                value: "superior",
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
          <FormInputDropdown
            name="mobilidade"
            control={control}
            label="Mobilidade"
            options={[
              {
                label: "Deambula",
                value: "deambula",
              },
              {
                label: "Deambula com auxílio",
                value: "auxilio",
              },
              {
                label: "Não deambula",
                value: "nao",
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
                value: "formada",
              },
              {
                label: "Fezes pastosas",
                value: "pastosa",
              },
              {
                label: "Fezes líquidas",
                value: "liquida",
              },
              {
                label: "Fezes semilíquidas",
                value: "semiliquida",
              },
              {
                label: "Muco",
                value: "muco",
              },
              {
                label: "Urina",
                value: "urina",
              },
            ]}
          />
          <FormInputDate
            name="dataInsc"
            control={control}
            label="Data de Inscrição"
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
