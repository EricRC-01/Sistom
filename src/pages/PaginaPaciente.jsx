import { useState } from "react";
import { Container, Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { DisplayCirurgia } from "components/display-data/DisplayCirurgia";
import { DisplayEstoma } from "components/display-data/DisplayEstoma";
import { DisplayPaciente } from "components/display-data/DisplayPaciente";
import { DisplayRecebedor } from "components/display-data/DisplayRecebedor";

import { ModalFormCirurgia } from "components/modal-forms/ModalFormCirurgia";
import { ModalFormEstoma } from "components/modal-forms/ModalFormEstoma";
import { ModalFormRecebedor } from "components/modal-forms/ModalFormRecebedor";

export const PaginaPaciente = () => {
  const [tabValue, setTabValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const queryClient = useQueryClient();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const { getFullDataById, getDataById } = usePocket();

  const pacienteQuery = getDataById({ table: "pacientes", id: userId });
  const estomaQuery = getFullDataById({ table: "estomas", id: userId });
  const recebedorQuery = getFullDataById({ table: "recebedores", id: userId });
  const cirurgiaQuery = getFullDataById({ table: "cirurgias", id: userId });

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
              </TabList>
            </Box>
            <TabPanel value="1">
              <DisplayPaciente query={pacienteQuery} />
            </TabPanel>
            <TabPanel value="2">
              <ModalFormEstoma />
              <DisplayEstoma query={estomaQuery} />
            </TabPanel>
            <TabPanel value="3">
              <ModalFormRecebedor />
              <DisplayRecebedor query={recebedorQuery} />
            </TabPanel>
            <TabPanel value="4">
              <ModalFormCirurgia />
              <DisplayCirurgia query={cirurgiaQuery} />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};
