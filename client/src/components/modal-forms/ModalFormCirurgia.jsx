import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form-components/FormInputText";
import { FormInputDropdown } from "../form-components/FormInputDropdown";
import { FormInputDate } from "../form-components/FormInputDate";
import dayjs, { Dayjs } from "dayjs";

import { useMutation } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";

import { useQueryClient } from "@tanstack/react-query";

import { useLocation } from "react-router-dom";

const defaultValues = {
  tipo: "",
  data: null,
  hospital: "",
};

export const ModalFormCirurgia = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  // Usando useLocation para obter a localização (URL)
  const location = useLocation();
  // Obtendo os parâmetros da URL
  const searchParams = new URLSearchParams(location.search);
  // Obtendo o valor do parâmetro 'userId'
  const userId = searchParams.get("userId");

  const queryClient = useQueryClient();

  const { registerField, pb } = usePocket();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: registerField,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cirurgias"] });
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
        hospital: data.hospital,
        data: data.data,
        tipo: data.tipo,
        "paciente": userId,
      },
      tabela: "cirurgias",
    });
  };

  return (
    <>
      <Tooltip title="Cadastrar">
        <IconButton onClick={handleOpen}>
          <AddBoxIcon />
        </IconButton>
      </Tooltip>

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
          <FormInputDropdown
            name="tipo"
            control={control}
            label="Tipo de cirurgia"
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
          <FormInputDate
            name="data"
            control={control}
            label="Data da cirurgia"
          />
          <FormInputText name="hospital" control={control} label="Hospital" />
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
