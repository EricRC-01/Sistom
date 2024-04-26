import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

import { useState, useEffect, useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const FormModal = ({
  open,
  setOpen,
  fieldsConfig,
  apiRef
}) => {
  const [postData, setPostData] = useState(null);
/* 
  useEffect(() => {
    import(`../../api/${apiRef}`).then((module) => {
      setPostData(() => module.postData);
    });
  }, []) */

  const initialFormData = useMemo(
    () =>
      fieldsConfig.reduce((acc, { name }) => {
        acc[name] = "";
        return acc;
      }, {}),
    []
  );
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    setFormError(Object.values(errors).some((error) => !!error));
  }, [errors]);

  const handleClose = () => {
    setOpen(false);
    setFormData(initialFormData);
    setErrors({});
  };

  const validateField = (name, value) => {
    const fieldConfig = fieldsConfig.find((field) => field.name === name);
    if (
      fieldConfig.validationRegex &&
      !fieldConfig.validationRegex.test(value)
    ) {
      return fieldConfig.errorMessage;
    }
    return "";
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [apiRef] });
    },
  });

  const handleSubmitForm = () => {
    const newErrors = {};
    let hasEmptyRequiredFields = false;

    fieldsConfig.filter(field => field.required).forEach(({ name }) => {
      if (!formData[name].trim()) {
        newErrors[name] = `${
          fieldsConfig.find((field) => field.name === name).label
        } é obrigatório`;
        hasEmptyRequiredFields = true;
      }
    });

    setErrors(newErrors);
    
    if (!hasEmptyRequiredFields) {
      mutation.mutate(JSON.stringify(formData));
      handleClose();
    }
  };

  const isSubmitDisabled = () => {
    return Object.values(errors).some((error) => !!error);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastrar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Campos marcados com * são obrigatórios.
          </DialogContentText>
          {fieldsConfig.map((field) => (
            <TextField
              key={field.name}
              name={field.name}
              label={field.label}
              value={formData[field.name]}
              onChange={handleFieldChange}
              error={!!errors[field.name]}
              helperText={errors[field.name]}
              fullWidth
              required={field.required}
              sx={{
                my: "0.2rem",
              }}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmitForm}
            disabled={formError}
          >
            Cadastrar
          </Button>
          <Button onClick={handleClose} color="primary">
            Descartar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
