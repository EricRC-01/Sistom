import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useEffect } from "react";

import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Paper,
} from "@mui/material";

import { useLocation } from "react-router-dom";

export const DisplayPaciente = () => {
  const queryClient = useQueryClient();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const { getSinglePaciente } = usePocket();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["pacientes"],
    queryFn: () =>
      getSinglePaciente({
        table: "pacientes",
        id: userId,
      }),
  });

  useEffect(() => {
    return () => {
      // Reset the data in the query cache when the component unmounts
      queryClient.removeQueries(["pacientes", userId]);
    };
  }, [queryClient, userId]);

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

  return (
    <>
      <Grid container spacing={2} component={Paper}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Typography variant="h5" component="div">
              {item.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              CNS: {item.cns}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sexo: {item.sexo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Telefone: {item.tel}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Data de Nascimento: {item.dataNasc.split(" ")[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Data de Inscrição: {item.dataInsc.split(" ")[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Forma de Recadastro: {item.recadastro}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Convênio: {item.convenio}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Utiliza ESF: {item.esf}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Escolaridade: {item.escolaridade}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Profissão: {item.profissao}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mobilidade: {item.mobilidade}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Usa cinto: {item.cinto}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Efluente: {item.efluente}
            </Typography>

            <Button size="small" variant="contained" color="info">
              Editar
            </Button>
            <Button size="small">Remover</Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
