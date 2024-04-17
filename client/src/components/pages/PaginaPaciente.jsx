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
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { FormPaciente } from "../organisms/FormPaciente";

export const Consulta = ({ listaConsultas, handleAddConsulta }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [newConsulta, setNewConsulta] = useState({
    hospital: "",
    medico: "",
    data: "",
    motivo: "",
    observacao: "",
  });
  const handleAddNewConsulta = () => {
    handleAddConsulta(newConsulta);
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewConsulta({ ...newConsulta, [name]: value });
  };

  return (
    <>
      <Typography variant="h5">Lista de Consultas</Typography>
      <Button onClick={handleOpenModal}>Cadastrar Consulta</Button>
      {listaConsultas.map((c, index) => (
        <Card key={index} sx={{ my: 1, fullWidth: true }}>
          <CardContent>
            <Typography>Hospital: {c.hospital}</Typography>
            <Typography>Médico: {c.medico}</Typography>
            <Typography>Data: {c.data}</Typography>
            <Typography>Motivo da consulta: {c.data}</Typography>
            <Typography>Observações: {c.observacao}</Typography>
          </CardContent>
        </Card>
      ))}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Cadastrar Nova Consulta</DialogTitle>
        <DialogContent>
          <TextField
            name="hospital"
            label="Hospital"
            value={newConsulta.name}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="medico"
            label="Nome do Médico"
            value={newConsulta.painLevel}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="data"
            label=""
            type="date"
            value={newConsulta.date}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="motivo"
            label="Motivo da consulta"
            value={newConsulta.painLevel}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="observacao"
            label="Observações"
            value={newConsulta.painLevel}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddNewConsulta} color="primary">
            Adicionar
          </Button>
          <Button onClick={handleCloseModal} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Recebedor = ({ listaRecebedores, handleAddRecebedor }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [newRecebedor, setNewRecebedor] = useState({
    hospital: "",
    medico: "",
    data: "",
    motivo: "",
    observacao: "",
  });
  const handleAddNewRecebedor = () => {
    handleAddRecebedor(newRecebedor);
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecebedor({ ...newRecebedor, [name]: value });
  };

  return (
    <>
      <Typography variant="h5">Lista de Recebedores</Typography>
      <Button onClick={handleOpenModal}>Cadastrar Recebedor</Button>
      {listaRecebedores.map((c, index) => (
        <Card key={index} sx={{ my: 1, fullWidth: true }}>
          <CardContent>
            <Typography>Hospital: {c.hospital}</Typography>
            <Typography>Médico: {c.medico}</Typography>
            <Typography>Data: {c.data}</Typography>
            <Typography>Motivo da consulta: {c.data}</Typography>
            <Typography>Observações: {c.data}</Typography>
          </CardContent>
        </Card>
      ))}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Cadastrar Nova Recebedor</DialogTitle>
        <DialogContent>
          <TextField
            name="hospital"
            label="Hospital"
            value={newRecebedor.name}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="medico"
            label="Nome do Médico"
            value={newRecebedor.painLevel}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="data"
            label=""
            type="date"
            value={newRecebedor.date}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="motivo"
            label="Motivo da consulta"
            value={newRecebedor.painLevel}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="observacao"
            label="Observações"
            value={newRecebedor.painLevel}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddNewRecebedor} color="primary">
            Adicionar
          </Button>
          <Button onClick={handleCloseModal} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Cirurgia = ({ listaCirurgias, handleAddCirurgia }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [newCirurgia, setNewCirurgia] = useState({
    hospital: "",
    medico: "",
    data: "",
    motivo: "",
    observacao: "",
  });
  const handleAddNewCirurgia = () => {
    handleAddCirurgia(newCirurgia);
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCirurgia({ ...newCirurgia, [name]: value });
  };

  return (
    <>
      <Typography variant="h5">Lista de Cirurgias</Typography>
      <Button onClick={handleOpenModal}>Cadastrar Cirurgia</Button>
      {listaCirurgias.map((c, index) => (
        <Card key={index} sx={{ my: 1, fullWidth: true }}>
          <CardContent>
            <Typography>Hospital: {c.hospital}</Typography>
            <Typography>Médico: {c.medico}</Typography>
            <Typography>Data: {c.data}</Typography>
            <Typography>Motivo da consulta: {c.data}</Typography>
            <Typography>Observações: {c.data}</Typography>
          </CardContent>
        </Card>
      ))}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Cadastrar Nova Cirurgia</DialogTitle>
        <DialogContent>
          <TextField
            name="hospital"
            label="Hospital"
            value={newCirurgia.name}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="medico"
            label="Nome do Médico"
            value={newCirurgia.painLevel}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="data"
            label=""
            type="date"
            value={newCirurgia.date}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="motivo"
            label="Motivo da consulta"
            value={newCirurgia.painLevel}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="observacao"
            label="Observações"
            value={newCirurgia.painLevel}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddNewCirurgia} color="primary">
            Adicionar
          </Button>
          <Button onClick={handleCloseModal} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const Estomas = () => {
  const [estomas, setEstomas] = useState([]);

  const handleAddEstoma = (estoma) => {
    setEstomas([...estomas, estoma]);
  };

  const [openModal, setOpenModal] = useState(false);
  const [novoEstoma, setNovoEstoma] = useState({
    doençaDeBase: "",

    name: "",
    date: "",
    painLevel: "",
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoEstoma({ ...novoEstoma, [name]: value });
  };

  const handleAddNovoEstoma = () => {
    handleAddEstoma(novoEstoma);
    handleCloseModal();
  };

  return (
    <div>
      <Typography variant="h5">Lista de Estomas</Typography>
      <Button onClick={handleOpenModal}>Cadastrar Estoma</Button>
      {estomas.map((estoma, index) => (
        <Card key={index} sx={{ my: 1, fullWidth: true }}>
          <CardContent>
            <Typography>{estoma.name}</Typography>
            <Typography>Date: {estoma.date}</Typography>
            <Typography>Pain Level: {estoma.painLevel}</Typography>
          </CardContent>
        </Card>
      ))}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Cadastrar Novo Estoma</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            value={novoEstoma.name}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="date"
            label="Date"
            type="date"
            value={novoEstoma.date}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="painLevel"
            label="Pain Level"
            value={novoEstoma.painLevel}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddNovoEstoma} color="primary">
            Adicionar
          </Button>
          <Button onClick={handleCloseModal} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const PaginaPaciente = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [listaCirurgias, setListaCirurgias] = useState([]);
  const handleAddCirurgia = (c) => {
    setListaCirurgias([...listaCirurgias, c]);
  };

  const [listaConsultas, setListaConsultas] = useState([]);
  const handleAddConsulta = (c) => {
    setListaConsultas([...listaConsultas, c]);
  };

  const [listaRecebedores, setListaRecebedores] = useState([]);
  const handleAddRecebedor = (c) => {
    setListaRecebedores([...listaRecebedores, c]);
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
              <Consulta
                listaConsultas={listaConsultas}
                handleAddConsulta={handleAddConsulta}
              />
            </TabPanel>
            <TabPanel value="4">
              <Recebedor
                listaRecebedores={listaRecebedores}
                handleAddRecebedor={handleAddRecebedor}
              />
            </TabPanel>
            <TabPanel value="5">
              <Cirurgia
                listaCirurgias={listaCirurgias}
                handleAddCirurgia={handleAddCirurgia}
              />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
