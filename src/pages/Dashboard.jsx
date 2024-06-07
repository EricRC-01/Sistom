import { TabelaPaciente } from "../components/TabelaPaciente";
import { ToolbarTabelaPaciente } from "components/ToolbarTabelaPaciente";

import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { get, useForm } from "react-hook-form";

import { usePocket } from "contexts/PocketContext";

const Dashboard = () => {
  const [busca, setBusca] = useState("");

  const { handleSubmit, control } = useForm();
  const { getFullList } = usePocket();

  const onSubmit = (data) => {
    if (data.busca === undefined) {
      return;
    }
    if (data.busca === "") {
      setBusca("");
    } else {
      setBusca(`nome~"${data.busca}"`);
    }
  };

  const pacienteQuery = getFullList({
    table: "pacientes_completo",
    filter: busca,
  });

  return (
    <Box sx={{ pt: 1, pb: 10 }}>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <ToolbarTabelaPaciente
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <hr />
        <TabelaPaciente query={pacienteQuery} />
      </Container>
    </Box>
  );
};

export default Dashboard;
