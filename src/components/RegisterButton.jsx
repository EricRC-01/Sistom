import { usePocket } from "contexts/PocketContext";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useLocation } from "react-router-dom";

export const RegisterButton = ({ table, handleSubmit, handleClose }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const { registerField } = usePocket();
  const { mutate, isPending } = registerField({ table });

  const onSubmit = async (data) => {
    if (table !== "pacientes") {
      data = { ...data, paciente: userId };
    }
    if (table === "consultas") {
      data = { ...data, status: "Pendente" };
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
    <div>
      <LoadingButton
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        loading={isPending}
      >
        Registrar
      </LoadingButton>
    </div>
  );
};
