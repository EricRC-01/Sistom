import { usePocket } from "contexts/PocketContext";
import { Button } from "@mui/material";

import { useLocation } from "react-router-dom";

export const RegisterButton = ({ table, handleSubmit, handleClose }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const { registerField } = usePocket();
  const { mutate } = registerField({ table });

  const onSubmit = async (data) => {
    if (table !== "pacientes") {
      data = { ...data, paciente: userId };
    }
    mutate(
      {
        data,
      },
      {
        onSuccess: () => {
          handleClose();
        },
      }
    );
  };

  return (
    <Button
      onClick={handleSubmit(onSubmit)}
      variant="contained"
      color="primary"
    >
      Registrar
    </Button>
  );
};
