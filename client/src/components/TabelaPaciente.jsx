import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  Card,
  CardContent,
  CardActions,
  Container,
  TableHead,
  TableRow,
  Button, Typography,
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
      <Container sx={{ display: {xs: "none", sm: "none", md:"block"} }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="body1" color="initial">Nome</Typography></TableCell>
              <TableCell><Typography variant="body1" color="initial">Telefone</Typography></TableCell>
              <TableCell><Typography variant="body1" color="initial">CNS</Typography></TableCell>
              <TableCell><Typography variant="body1" color="initial">Sexo</Typography></TableCell>
              <TableCell><Typography variant="body1" color="initial">Data de Nascimento</Typography></TableCell>
              <TableCell><Typography variant="body1" color="initial">Data de Inscrição</Typography></TableCell>
              <TableCell><Typography variant="body1" color="initial">Ações</Typography></TableCell>
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
        </Container>
      <Container sx={{ display: {xs: "block", sm: "block", md:"none"}, py: 3 }}>
        {data.map((d) => (
        <Card sx={{ mb: 3 }} key={d.id}>
          <CardContent>
            <Typography variant="h6" color="initial">Nome: {d.nome}</Typography>
            <Typography variant="body1" color="initial">Telefone: {d.tel}</Typography>
            <Typography variant="body1" color="initial">CNS: {d.cns}</Typography>
            <Typography variant="body1" color="initial">Sexo: {d.sexo.toString()}</Typography>
            <Typography variant="body1" color="initial">Data de Nascimento: {d.dataNasc.split(' ')[0]}</Typography>
            <Typography variant="body1" color="initial">Data de Inscrição: {d.dataInsc.split(' ')[0]}</Typography>
          </CardContent>
          <CardActions>
            <Button
              component={Link}
              to={`/Paciente?userId=${d.id}`}
              startIcon={<MoreHorizIcon />}
            />
          </CardActions>
        </Card>
        ))}
      </Container>
    </>
  );
};