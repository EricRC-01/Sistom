import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../components/form-components/FormInputText";
import { FormInputCheckbox } from "./form-components/FormInputCheckbox";
import { FormInputDropdown } from "../components/form-components/FormInputDropdown";
import { FormInputDate } from "../components/form-components/FormInputDate";
import { FormInputRadio } from "../components/form-components/FormInputRadio";
import dayjs, { Dayjs } from "dayjs";

import { useMutation } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";

import { useQueryClient } from "@tanstack/react-query";

const defaultValues = {
  nome: "",
  rg: "",
  cpf: "",
  cns: "",
  sexo: "",
  dataNasc: dayjs(Date.now()),
  recadastro: "",
  tel: "",
  convenio: "",
  escolaridade: "",
  profissao: "",
  dataInsc: dayjs(Date.now()),
  esf: "",
};

export const ModalFormPaciente = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const queryClient = useQueryClient();

  const { registerPaciente, pb } = usePocket();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: registerPaciente,
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
      nome: data.nome,
      tel: data.tel,
      rg: data.rg,
      cpf: data.cpf,
      cns: data.cns,
      sexo: data.sexo,
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
          <FormInputText name="rg" control={control} label="RG" />
          <FormInputText name="cpf" control={control} label="CPF" />
          <FormInputText name="cns" control={control} label="CNS" />
          <FormInputCheckbox
            name="esf"
            control={control}
            label="Usa ESF?"
            setValue={setValue}
          />
          <FormInputRadio
            name={"sexo"}
            control={control}
            label={"Sexo"}
            options={[
              {
                label: "Masculino",
                value: "M",
              },
              {
                label: "Feminino",
                value: "F",
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
                value: "P",
              },
              {
                label: "Remoto",
                value: "R",
              },
            ]}
          />
          {/* Utiliza ESF */}
          <FormInputText name="tel" control={control} label="Telefone" />
          <FormInputDropdown
            name="convenio"
            control={control}
            label="Convênio"
          />
          <FormInputDropdown
            name="escolaridade"
            control={control}
            label="Escolaridade"
          />
          <FormInputDropdown
            name="profissao"
            control={control}
            label="Profissão"
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
