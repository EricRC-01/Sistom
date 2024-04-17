import { useState } from "react";
import {
  Container,
  Box,
  Tab,
  Typography,
  Button,
  Modal,
  TextField,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { FormPaciente } from "../organisms/FormPaciente";

// Componente reutilizável para o Modal de Cadastro
const CadastroModal = ({
  open,
  handleClose,
  handleSubmit,
  title,
  inputs,
  handleChange,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {inputs.map((input) => (
          <TextField
            key={input.name}
            name={input.name}
            label={input.label}
            value={input.value}
            onChange={handleChange}
            fullWidth
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          Adicionar
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Componente reutilizável para o Card de Item
const ItemCard = ({ item }) => {
  return (
    <Card sx={{ my: 1, fullWidth: true }}>
      <CardContent>
        {Object.entries(item).map(([key, value]) => (
          <Typography key={key}>{`${key}: ${value}`}</Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export const Teste = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Header />
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
              <FormPaciente />
            </TabPanel>
            <TabPanel value="2">
              <Estomas />
            </TabPanel>
            <TabPanel value="3">
              <Consulta />
            </TabPanel>
            <TabPanel value="4">
              <Recebedor />
            </TabPanel>
            <TabPanel value="5">
              <Cirurgia />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
