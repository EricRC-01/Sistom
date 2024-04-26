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
  import { FormInputDropdown } from "../components/form-components/FormInputDropdown";
  import { FormInputDate } from "../components/form-components/FormInputDate";
  import dayjs, { Dayjs } from "dayjs";
  
  import { useMutation } from "@tanstack/react-query";
  import { usePocket } from "contexts/PocketContext";
  
  import { useState } from "react";
  import AddBoxIcon from "@mui/icons-material/AddBox";
  import CloseIcon from "@mui/icons-material/Close";
  
  import { useQueryClient } from "@tanstack/react-query";
  
  const defaultValues = {
    tipo: "",
    data: dayjs(Date.now()),
    hospital: "",
  };
  
  export const ModalFormCirurgia = () => {
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
            <FormInputDropdown
              name="tipo"
              control={control}
              label="Tipo de cirurgia"
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
  