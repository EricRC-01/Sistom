//<Typography>Foto do Paciente:</Typography>
//<InputFileUpload setPhoto={setPfp}/>
//
//<Typography>Documentos de Inscrição:</Typography>
//<InputFileUpload setPhoto={setDocInsc}/>

import {
  Container,
  Typography,
  Paper,
  Box,
  Select,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useState, useEffect, useRef } from "react";
import InputFileUpload from "../molecules/InputFileUpload";
import DoneIcon from "@mui/icons-material/Done";

const convenioArr = ["teste1", "teste2"];

const profissaoArr = ["teste1", "teste2"];

export const FormPaciente = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    rg: "",
    cpf: "",
    cartaoSus: "",
    sexo: "",
    dataNasc: dayjs("01-01-1900"),
    telefone: "",
    recadastro: "",
    convenio: "",
    escolaridade: "",
    profissao: "",
    dataInsc: dayjs(),
    pfp: "",
    docInsc: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cep: "",
    macroRegiao: "",
    regiao: "",
    territorio: "",
    municipio: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [macroRegiaoArr, setMacroRegiaoArr] = useState([]); //Macrorregião: Norte, Sul, Sudeste etc
  const [regiaoArr, setRegiaoArr] = useState([]); //UF: São Paulo, Piauí etc
  const [territorioArr, setTerritorioArr] = useState([]); //Mesorregião: Ribeirão Preto, Araraquara, Metropolitana de São Paulo
  const [municipioArr, setMunicipioArr] = useState([]);

  useEffect(() => {
    getMacroRegioes();
  }, []);

  useEffect(() => {
    setFormData({
      ...formData,
      ["regiao"]: "",
      ["territorio"]: "",
      ["municipio"]: "",
    });
    setRegiaoArr([]);
    setTerritorioArr([]);
    setMunicipioArr([]);
    getRegioes();
  }, [formData.macroRegiao]);

  useEffect(() => {
    setFormData({ ...formData, ["territorio"]: "", ["municipio"]: "" });
    setTerritorioArr([]);
    setMunicipioArr([]);
    getTerritorios();
  }, [formData.regiao]);

  useEffect(() => {
    setFormData({ ...formData, ["municipio"]: "" });
    setMunicipioArr([]);
    getMunicipios();
  }, [formData.territorio]);

  const getMacroRegioes = async () => {
    try {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/regioes"
      );
      const data = await response.json();
      setMacroRegiaoArr(data);
    } catch (error) {
      console.error("Erro ao obter as macrorregiões:", error);
    }
  };

  const getRegioes = async () => {
    try {
      if (formData.macroRegiao !== "") {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${formData.macroRegiao}/estados`
        );
        const data = await response.json();
        setRegiaoArr(data);
      }
    } catch (error) {
      console.error("Erro ao obter as macrorregiões:", error);
    }
  };

  const getTerritorios = async () => {
    try {
      if (formData.regiao !== "") {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${formData.regiao}/mesorregioes`
        );
        const data = await response.json();
        setTerritorioArr(data);
      }
    } catch (error) {
      console.error("Erro ao obter as macrorregiões:", error);
    }
  };

  const getMunicipios = async () => {
    try {
      if (formData.territorio !== "") {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/${formData.territorio}/municipios`
        );
        const data = await response.json();
        setMunicipioArr(data);
      }
    } catch (error) {
      console.error("Erro ao obter as macrorregiões:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

    let error = false;

    switch (name) {
      case "nome":
        if (!/^[a-zA-ZÀ-ú\s]*$/.test(value)) error = true;
        break;

      case "cpf":
        if (!/^\d*$/.test(value)) error = true;
        break;

      case "rg":
        if (!/^\d*$/.test(value)) error = true;
        break;

      default:
        break;
    }

    setFormErrors({ ...formErrors, [name]: error });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
        <Box
          component="form"
          onSubmit={handleSubmit}
          id="my-form"
          sx={{ p: 5, align: "center" }}
        >
          <Typography>Informações Básicas</Typography>
          <hr />
          <TextField
            label="Nome"
            value={formData.nome}
            name="nome"
            onChange={handleChange}
            margin="dense"
            type="text"
            error={formErrors.nome}
            helperText={
              formErrors.nome ? "O nome deve conter apenas letras" : ""
            }
            fullWidth
            required
          />

          <DatePicker
            label="Data de Nascimento"
            value={formData.dataNasc}
            name="dataNasc"
            onChange={handleChange}
            format="DD-MM-YYYY"
            slotProps={{ textField: { fullWidth: true } }}
            sx={{ mt: 1 }}
          />

          <FormControl fullWidth margin="dense" required>
            <InputLabel>Sexo</InputLabel>
            <Select
              label="Sexo"
              value={formData.sexo}
              name="sexo"
              onChange={handleChange}
            >
              <MenuItem value={"m"}>Masculino</MenuItem>
              <MenuItem value={"f"}>Feminino</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="RG"
            value={formData.rg}
            name="rg"
            onChange={handleChange}
            margin="dense"
            error={formErrors.rg}
            helperText={formErrors.rg ? "O RG deve conter apenas números" : ""}
            inputProps={{ maxLength: 9 }}
            fullWidth
            required
          />
          <TextField
            label="CPF"
            value={formData.cpf}
            name="cpf"
            onChange={handleChange}
            margin="dense"
            error={formErrors.cpf}
            helperText={
              formErrors.cpf ? "O CPF deve conter apenas números" : ""
            }
            inputProps={{ maxLength: 11 }}
            fullWidth
            required
          />
          <TextField
            label="Cartão do SUS"
            value={formData.cartaoSus}
            name="cartaoSus"
            onChange={handleChange}
            margin="dense"
            fullWidth
          />
          <TextField
            label="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            margin="dense"
            type="email"
            fullWidth
            required
          />
          <TextField
            label="Telefone"
            value={formData.telefone}
            name="telefone"
            onChange={handleChange}
            margin="dense"
            type="tel"
            inputProps={{ maxLength: 11 }}
            fullWidth
            required
          />

          <FormControl fullWidth margin="dense">
            <InputLabel>Forma de Recadastro</InputLabel>
            <Select
              label="Forma de Recadastro"
              value={formData.recadastro}
              name="recadastro"
              onChange={handleChange}
            >
              <MenuItem value={"p"}>Presencial</MenuItem>
              <MenuItem value={"r"}>Remoto</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Convênio</InputLabel>
            <Select
              label="Convênio"
              value={formData.convenio}
              name="convenio"
              onChange={handleChange}
            >
              {convenioArr.map((el, i) => (
                <MenuItem key={i} value={i}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Nível de Escolaridade</InputLabel>
            <Select
              label="Nível de Escolaridade"
              value={formData.escolaridade}
              name="escolaridade"
              onChange={handleChange}
            >
              <MenuItem value={0}>Sem Escolaridade</MenuItem>
              <MenuItem value={1}>Ensino Fundamental Incompleto</MenuItem>
              <MenuItem value={2}>Ensino Fundamental Completo</MenuItem>
              <MenuItem value={3}>Ensino Médio Incompleto</MenuItem>
              <MenuItem value={4}>Ensino Médio Completo</MenuItem>
              <MenuItem value={5}>Ensino Superior Incompleto</MenuItem>
              <MenuItem value={6}>Ensino Superior Completo</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Profissão</InputLabel>
            <Select
              label="Profissão"
              value={formData.profissao}
              name="profissao"
              onChange={handleChange}
            >
              {profissaoArr.map((el, i) => (
                <MenuItem key={i} value={i}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <DatePicker
            label="Data de Inscrição"
            value={formData.dataInsc}
            name="dataInsc"
            onChange={handleChange}
            format="DD-MM-YYYY"
            slotProps={{ textField: { fullWidth: true } }}
            sx={{ mt: 1 }}
            required
          />

          <Typography>Endereço do Paciente:</Typography>

          <TextField
            label="Logradouro"
            value={formData.logradouro}
            name="logradouro"
            onChange={handleChange}
            margin="dense"
            type="text"
            fullWidth
            required
          />
          <TextField
            label="Número"
            value={formData.numero}
            name="numero"
            onChange={handleChange}
            margin="dense"
            type="text"
            fullWidth
            required
          />
          <TextField
            label="Complemento"
            value={formData.complemento}
            name="complemento"
            onChange={handleChange}
            margin="dense"
            type="text"
            fullWidth
          />
          <TextField
            label="CEP"
            value={formData.cep}
            name="cep"
            onChange={handleChange}
            margin="dense"
            type="text"
            fullWidth
            required
          />

          <FormControl fullWidth margin="dense" required>
            <InputLabel>Macrorregião</InputLabel>
            <Select
              label="Macrorregião"
              value={formData.macroRegiao}
              name="macroRegiao"
              onChange={handleChange}
            >
              {macroRegiaoArr.map((el) => (
                <MenuItem key={el.id} value={el.id}>
                  {el.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            margin="dense"
            required
            disabled={formData.macroRegiao === "" ? true : false}
          >
            <InputLabel>Região</InputLabel>
            <Select
              label="Região"
              value={formData.regiao}
              name="regiao"
              onChange={handleChange}
            >
              {regiaoArr.map((el) => (
                <MenuItem key={el.id} value={el.id}>
                  {el.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            margin="dense"
            required
            disabled={formData.regiao === "" ? true : false}
          >
            <InputLabel>Território</InputLabel>
            <Select
              label="Território"
              value={formData.territorio}
              name="territorio"
              onChange={handleChange}
            >
              {territorioArr.map((el) => (
                <MenuItem key={el.id} value={el.id}>
                  {el.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            margin="dense"
            required
            disabled={formData.territorio === "" ? true : false}
          >
            <InputLabel>Município</InputLabel>
            <Select
              label="Município"
              value={formData.municipio}
              name="municipio"
              onChange={handleChange}
            >
              {municipioArr.map((el) => (
                <MenuItem key={el.id} value={el.id}>
                  {el.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
  );
};
