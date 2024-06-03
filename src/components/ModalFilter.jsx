import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { FormInputRadio } from "components/form-components/FormInputRadio";

const defaultValues = {
  sexo: "",
};

export const ModalFilter = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
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
        <FilterListRoundedIcon />
        <Typography sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          Filtrar
        </Typography>
      </IconButton>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          Filtrar
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
          <FormInputRadio
            name="sexo"
            control={control}
            label="Sexo"
            options={["Masculino", "Feminino"]}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleSubmit(onSubmit)}>
            Filtrar
          </Button>
          <Button color="inherit" onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
