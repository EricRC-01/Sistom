import { usePocket } from "contexts/PocketContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingButton from "@mui/lab/LoadingButton";

export const RemoveButton = ({ table, id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { deleteRecord } = usePocket();
  const { mutate, isPending } = deleteRecord({ table });

  const navigate = useNavigate();

  const handleRemove = () => {
    mutate(
      { id },
      {
        onSuccess: () => {
          handleClose();
          if (table === "pacientes") navigate("/");
        },
      }
    );
  };
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="error">
        Remover
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Atenção</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja remover este registro?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            onClick={handleRemove}
            variant="contained"
            color="error"
            loading={isPending}
          >
            Tenho certeza
          </LoadingButton>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
