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
import { FormInputDropdown } from "../form-components/FormInputDropdown";
import { FormInputDate } from "../form-components/FormInputDate";

import { usePocket } from "contexts/PocketContext";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { RegisterButton } from "components/RegisterButton";

import { OpenModalButton } from "components/OpenModalButton";

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

  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultValues,
  });

  return (
    <>
      <OpenModalButton handleOpen={handleOpen} />
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          Registrar Nova Cirurgia
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
            required={true}
          />
          <FormInputText name="hospital" control={control} label="Hospital" />
        </DialogContent>
        <DialogActions>
          <RegisterButton
            table="cirurgias"
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
