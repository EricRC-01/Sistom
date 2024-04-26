import { useState } from "react";
import {
  Container,
  Box,
  Tab,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { FormPaciente } from "components/FormPaciente";
import { CadastroGeral } from "components/CadastroGeral";

import { DisplayDataCards } from "components/DisplayDataCards";
import { ModalFormCirurgia } from "components/ModalFormCirurgia";


const fieldsConfigConsulta = [
    {
      name: "hospital",
      label: "Hospital",
      validationRegex: /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
      errorMessage: "Campo Hospital deve conter apenas letras",
      required: true,
    },
    {
      name: "medico",
      label: "Nome do médico",
      validationRegex: /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
      errorMessage: "Nome do médico deve conter apenas letras",
      required: true,
    },
    {
      name: "data",
      label: "Data da consulta",
      validationRegex: /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
      errorMessage: "Data deve ser no formato DD-MM-AAAA",
      required: true,
    },
    {
      name: "motivo",
      label: "Motivação da consulta",
      validationRegex: "",
      errorMessage: "",
      required: false,
    },
    {
      name: "obs",
      label: "Observações",
      validationRegex: "",
      errorMessage: "",
      required: false,
    },
  ];

  const fieldsConfigCirurgia = [
    {
      name: "tipo",
      label: "Tipo de cirurgia",
      validationRegex: /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
      errorMessage: "Hospital deve conter apenas letras",
      required: true,
    },
    {
      name: "medico",
      label: "Nome do médico",
      validationRegex: /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
      errorMessage: "Hospital deve conter apenas letras",
      required: true,
    },
    {
      name: "data",
      label: "Data da cirurgia",
      validationRegex: /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
      errorMessage: "Data deve ser no formato DD-MM-AAAA",
      required: true,
    },
  ];

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
                <Tab label="Consultas" value="3" />
                <Tab label="Recebedores" value="4" />
                <Tab label="Cirurgias" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {/* <FormPaciente /> */}
            </TabPanel>
            <TabPanel value="2">
              
            </TabPanel>
            <TabPanel value="3">
                {/* <CadastroGeral fieldsConfig={fieldsConfigConsulta} apiRef={"Consulta"}/> */}
            </TabPanel>
            <TabPanel value="4">
              
            </TabPanel>
            <TabPanel value="5">
              <ModalFormCirurgia />
              <DisplayDataCards tabela="cirurgias" />
            {/* <CadastroGeral fieldsConfig={fieldsConfigCirurgia} apiRef={"Cirurgia"}/> */}
              
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};
