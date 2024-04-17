import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Link } from "react-router-dom";

export const TabelaPaciente = () => {
  const pacientes = [
    {
      nome: "João Silva",
      email: "joao@example.com",
      rg: "1234567",
      cpf: "123.456.789-01",
      cns: "123456789012345",
      sexo: "Masculino",
      dataNascimento: "01/01/1980",
      dataInscricao: "01/01/2020",
    },
    {
      nome: "Maria Oliveira",
      email: "maria@example.com",
      rg: "9876543",
      cpf: "987.654.321-09",
      cns: "987654321098765",
      sexo: "Feminino",
      dataNascimento: "15/05/1975",
      dataInscricao: "01/02/2019",
    },
    {
      nome: "Carlos Santos",
      email: "carlos@example.com",
      rg: "4567890",
      cpf: "456.789.123-45",
      cns: "456789012345678",
      sexo: "Masculino",
      dataNascimento: "10/11/1990",
      dataInscricao: "05/06/2021",
    },
    {
      nome: "Ana Pereira",
      email: "ana@example.com",
      rg: "2345678",
      cpf: "234.567.890-12",
      cns: "234567890123456",
      sexo: "Feminino",
      dataNascimento: "20/03/1985",
      dataInscricao: "10/07/2018",
    },
    {
      nome: "Pedro Costa",
      email: "pedro@example.com",
      rg: "3456789",
      cpf: "345.678.901-23",
      cns: "345678901234567",
      sexo: "Masculino",
      dataNascimento: "05/09/1978",
      dataInscricao: "03/04/2022",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>RG</TableCell>
            <TableCell>CPF</TableCell>
            <TableCell>CNS</TableCell>
            <TableCell>Sexo</TableCell>
            <TableCell>Data de Nascimento</TableCell>
            <TableCell>Data de Inscrição</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pacientes.map((paciente, index) => (
            <TableRow key={index}>
              <TableCell>{paciente.nome}</TableCell>
              <TableCell>{paciente.email}</TableCell>
              <TableCell>{paciente.rg}</TableCell>
              <TableCell>{paciente.cpf}</TableCell>
              <TableCell>{paciente.cns}</TableCell>
              <TableCell>{paciente.sexo}</TableCell>
              <TableCell>{paciente.dataNascimento}</TableCell>
              <TableCell>{paciente.dataInscricao}</TableCell>
              <TableCell>
                <Button component={Link} to={"/paciente"} startIcon={<MoreHorizIcon />} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
