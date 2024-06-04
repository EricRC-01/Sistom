import { usePocket } from "contexts/PocketContext";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

export const RemoveButton = ({ table, id }) => {
  const { deleteRecord } = usePocket();
  const { mutate } = deleteRecord({ table });

  const navigate = useNavigate();

  const handleRemove = () => {
    mutate(
      { id },
      { onSuccess: () => (table === "pacientes" ? navigate("/") : null) }
    );
  };

  return (
    <Button onClick={handleRemove} variant="contained" color="error">
      Remover
    </Button>
  );
};
