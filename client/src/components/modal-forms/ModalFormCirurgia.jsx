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
import { FormInputDropdown } from "../form-components/FormInputDropdown";
import { FormInputDate } from "../form-components/FormInputDate";

import { useMutation } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
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

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const queryClient = useQueryClient();

  const { registerField } = usePocket();

  const { mutate } = useMutation({
    mutationFn: registerField,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cirurgias"] });
      handleClose();
    },
    onError: () => {
      alert("ERROR");
    },
  });

  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = async (data) => {
    mutate({
      data: {
        hospital: data.hospital,
        data: data.data,
        tipo: data.tipo,
        paciente: userId,
      },
      tabela: "cirurgias",
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
          <FormInputDropdown
            name="tipo"
            control={control}
            label="Tipo de cirurgia"
            options={[
              "Colostomia",
              "Urostomia",
              "Enterectomia",
              "Laparotomia",
              "Bricker",
              "Ileostomia",
              "Colectomia",
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
