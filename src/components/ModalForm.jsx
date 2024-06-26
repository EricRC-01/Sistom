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
import { usePocket } from "contexts/PocketContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import {
  defaultValuePaciente,
  defaultValueCirurgia,
  defaultValueConsulta,
  defaultValueEquipamento,
  defaultValueRecebedor,
  defaultValueEstoma,
} from "../utils/defaultValues";

import CloseIcon from "@mui/icons-material/Close";

import { RegisterButton } from "components/RegisterButton";
import { OpenModalButton } from "components/OpenModalButton";

export const ModalForm = ({ table, mode, defaultValuesEdit = {} }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  console.log(defaultValuesEdit);

  const queryClient = useQueryClient();

  var defaultValuesRegister = {};
  switch (table) {
    case "pacientes":
      defaultValuesRegister = defaultValuePaciente;
      break;
    case "cirurgias":
      defaultValuesRegister = defaultValueCirurgia;
      break;
    case "consultas":
      defaultValuesRegister = defaultValueConsulta;
      break;
    case "equipamentos":
      defaultValuesRegister = defaultValueEquipamento;
      break;
    case "recebedores":
      defaultValuesRegister = defaultValueRecebedor;
      break;
    case "estomas":
      defaultValuesRegister = defaultValueEstoma;
      break;
  }

  const defaultValues =
    mode === "edit" ? defaultValuesEdit : defaultValuesRegister;

  const { handleSubmit, reset, control, watch, setValue } = useForm({
    values: defaultValues,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { mutateRecord } = usePocket();
  const { mutate, isPending } = mutateRecord({ table, mode });

  const onSubmit = async (data) => {
    switch (mode) {
      case "register":
        data.paciente = userId;
        mutate(
          { data },
          {
            onSuccess: () => {
              if (table === "pacientes") {
                queryClient.invalidateQueries({
                  queryKey: ["pacientes_completo"],
                });
                queryClient.invalidateQueries({
                  queryKey: ["pacientes_ativos"],
                });
                queryClient.invalidateQueries({
                  queryKey: ["pacientes_consulta_atrasada"],
                });
                queryClient.invalidateQueries({
                  queryKey: ["pacientes_sem_consulta"],
                });
              }
              handleClose();
            },
          }
        );
        break;
      case "edit":
        if (mode === "edit" && table === "estomas" && data.fotos.length === 0) {
          delete data.fotos;
        }
        const id = defaultValuesEdit.id;
        console.log(data);
        mutate(
          { id, data },
          {
            onSuccess: () => {
              handleClose();
              queryClient.invalidateQueries([id, data]);
            },
          }
        );
        break;
      default:
        break;
    }
  };

  const form = () => {
    switch (table) {
      case "cirurgias":
        return <FormCirurgia control={control} />;
      case "pacientes":
        return (
          <FormPaciente
            control={control}
            mode={mode}
            watch={watch}
            setValue={setValue}
          />
        );
      case "estomas":
        return <FormEstoma control={control} mode={mode} setValue={setValue} />;
      case "recebedores":
        return <FormRecebedor control={control} />;
      case "consultas":
        return <FormConsulta control={control} mode={mode} />;
      case "equipamentos":
        return <FormEquipamento control={control} />;
      default:
        return null;
    }
  };

  return (
    <>
      <OpenModalButton handleOpen={handleOpen} mode={mode} />
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          {mode === "register" ? "Registrar novo campo" : "Editar campo"}
          <IconButton onClick={handleClose} sx={{ float: "right" }}>
            <CloseIcon color="primary" />
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
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            isPending={isPending}
          />
          <Button color="inherit" onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
