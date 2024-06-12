import { TabelaPaciente } from "../components/TabelaPaciente";
import { ToolbarTabelaPaciente } from "components/ToolbarTabelaPaciente";

import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { get, useForm } from "react-hook-form";

import { usePocket } from "contexts/PocketContext";

const Dashboard = () => {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("pacientes_completo");

  const { getFullList } = usePocket();

  const pacienteQuery = getFullList({
    table: filtro,
    filter: busca,
  });

  return (
    <Box sx={{ pt: 1, pb: 10 }}>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <ToolbarTabelaPaciente setBusca={setBusca} setFiltro={setFiltro} />
        <hr />
        <TabelaPaciente query={pacienteQuery} />
      </Container>
    </Box>
  );
};

export default Dashboard;
