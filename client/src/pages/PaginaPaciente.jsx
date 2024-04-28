import { useState } from "react";
import { Container, Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { ModalFormCirurgia } from "components/modal-forms/ModalFormCirurgia";

import { DisplayCirurgia } from "components/display-data/DisplayCirurgia";
import { DisplayRecebedor } from "components/display-data/DisplayRecebedor";

export const PaginaPaciente = () => {

  const [tabValue, setTabValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleTabChange}>
                <Tab label="Informações Pessoais" value="1" />
                <Tab label="Estomas" value="2" />
                <Tab label="Recebedores" value="3" />
                <Tab label="Cirurgias" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">{/* <FormPaciente /> */}</TabPanel>
            <TabPanel value="2"></TabPanel>
            <TabPanel value="3">
              <DisplayRecebedor />
            </TabPanel>
            <TabPanel value="4">
              <ModalFormCirurgia />
              <DisplayCirurgia />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};
