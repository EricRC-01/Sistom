import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { usePocket } from "contexts/PocketContext";

export const TabelaPaciente = () => {
  const { getAllData } = usePocket();

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
                <TableCell>{d.cns}</TableCell>
                <TableCell>{d.sexo.toString()}</TableCell>
                <TableCell>{d.dataNasc.split(' ')[0]}</TableCell>
                <TableCell>{d.dataInsc.split(' ')[0]}</TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/Paciente?userId=${d.id}`}
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
