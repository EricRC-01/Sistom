import { useState } from "react";
import { Container, Box, Tab, Modal } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { DisplayCirurgia } from "components/display-data/DisplayCirurgia";
import { DisplayEstoma } from "components/display-data/DisplayEstoma";
import { DisplayPaciente } from "components/display-data/DisplayPaciente";
import { DisplayRecebedor } from "components/display-data/DisplayRecebedor";
import { DisplayConsulta } from "components/display-data/DisplayConsulta";
import { DisplayEquipamento } from "components/display-data/DisplayEquipamento";

import { ModalForm } from "components/ModalForm";

export const PaginaPaciente = () => {
  const [tabValue, setTabValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const queryClient = useQueryClient();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const { getDataById, getFullList } = usePocket();

  const pacienteQuery = getDataById({
    table: "pacientes_completo",
    id: userId,
  });
  const estomaQuery = getFullList({
    table: "estomas",
    filter: `paciente.id="${userId}"`,
  });
  const recebedorQuery = getFullList({
    table: "recebedores",
    filter: `paciente.id="${userId}"`,
  });
  const cirurgiaQuery = getFullList({
    table: "cirurgias",
    filter: `paciente.id="${userId}"`,
  });
  const consultaQuery = getFullList({
    table: "consultas",
    filter: `paciente.id="${userId}"`,
  });
  const equipamentoQuery = getFullList({
    table: "equipamentos",
    filter: `paciente.id="${userId}"`,
  });

  useEffect(() => {
    return () => {
      queryClient.removeQueries([userId]);
    };
  }, [userId]);

  return (
    <>
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleTabChange} variant="scrollable">
                <Tab label="Informações Pessoais" value="1" />
                <Tab label="Estomas" value="2" />
                <Tab label="Recebedores" value="3" />
                <Tab label="Cirurgias" value="4" />
                <Tab label="Consultas" value="5" />
                <Tab label="Equipamentos" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <DisplayPaciente query={pacienteQuery} />
            </TabPanel>
            <TabPanel value="2">
              <ModalForm table={"estomas"} mode={"register"} />
              <DisplayEstoma query={estomaQuery} />
            </TabPanel>
            <TabPanel value="3">
              <ModalForm table={"recebedores"} mode={"register"} />
              <DisplayRecebedor query={recebedorQuery} />
            </TabPanel>
            <TabPanel value="4">
              <ModalForm table={"cirurgias"} mode={"register"} />
              <DisplayCirurgia query={cirurgiaQuery} />
            </TabPanel>
            <TabPanel value="5">
              <ModalForm table={"consultas"} mode={"register"} />
              <DisplayConsulta query={consultaQuery} />
            </TabPanel>
            <TabPanel value="6">
              <ModalForm table={"equipamentos"} mode={"register"} />
              <DisplayEquipamento query={equipamentoQuery} />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};
