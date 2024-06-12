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

import { RadioButtonGroup } from "react-hook-form-mui";

export const ModalFilter = ({ setFiltro }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    if (data.filtro === undefined) {
      return;
    }
    if (data.filtro === "") {
      setFiltro("pacientes_completo");
    } else {
      setFiltro(data.filtro);
    }
    handleClose();
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
          <RadioButtonGroup
            name="filtro"
            control={control}
            options={[
              { id: "", label: "Sem filtros" },
              { id: "pacientes_ativos", label: "Ativos" },
              {
                id: "pacientes_consulta_atrasada",
                label: "Com consulta atrasada",
              },
              { id: "pacientes_sem_consulta", label: "Sem consulta" },
            ]}
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
