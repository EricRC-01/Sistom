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
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

import { useMutation } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useAPI } from "contexts/API";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { useQueryClient } from "@tanstack/react-query";

import { useLocation } from "react-router-dom";
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

  const { adicionarRecebedor } = useAPI();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  /* const queryClient = useQueryClient();

  const { registerField } = usePocket();

  const { mutate } = useMutation({
    mutationFn: registerField,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recebedores"] });
      handleClose();
    },
    onError: () => {
      alert("ERROR");
    },
  }); */

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: defaultValues,
  });

  /* const onSubmit = async (data) => {
    mutate({
      data: {
        nome: data.nome,
        cpf: data.cpf,
        sexo: data.sexo,
        paciente: userId,
      },
      tabela: "recebedores",
    });
  }; */

  const onSubmit = (data) => {
    adicionarRecebedor(userId,{
      nome: data.nome,
      cpf: data.cpf,
      sexo: data.sexo,
    });

    console.log(data);
    handleClose();
  }

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
          <FormInputText name="nome" control={control} label="Nome" />
          <FormInputText name="cpf" control={control} label="CPF" />
          <FormInputRadio
            name="sexo"
            control={control}
            label="Sexo"
            options={["Masculino", "Feminino"]}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleSubmit(onSubmit)}>
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
