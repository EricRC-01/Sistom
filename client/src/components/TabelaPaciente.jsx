import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Toolbar,
  Tooltip,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FilterListIcon from "@mui/icons-material/FilterList";


import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { usePocket } from "contexts/PocketContext";

export const TabelaPaciente = () => {
  const { getAllData, pb } = usePocket();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["pacientes"],
    queryFn: () => getAllData("pacientes"),
  });

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

  return (
    <>
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Telefone</TableCell>
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
            {data.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.nome}</TableCell>
                <TableCell>{d.tel}</TableCell>
                <TableCell>{d.rg}</TableCell>
                <TableCell>{d.cpf}</TableCell>
                <TableCell>{d.cns}</TableCell>
                <TableCell>{d.sexo.toString()}</TableCell>
                <TableCell>{d.dataNasc}</TableCell>
                <TableCell>{d.dataInsc}</TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={"/Paciente"}
                    startIcon={<MoreHorizIcon />}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
