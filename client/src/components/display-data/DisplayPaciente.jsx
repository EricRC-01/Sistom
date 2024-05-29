import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useEffect } from "react";

import { Grid, Typography, Button, Paper, Box } from "@mui/material";

import { useLocation } from "react-router-dom";

import { useAPI } from "contexts/API";

export const DisplayPaciente = () => {
  //const queryClient = useQueryClient();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  /* const { getSinglePaciente } = usePocket();

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
      queryClient.removeQueries(["pacientes", userId]);
    };
  }, [queryClient, userId]);

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;
 */

  const { pacientes } = useAPI();

  const data = pacientes[userId];
  console.log(data);
  
  return (
    <>
      <Grid
        container
        spacing={2}
        component={Paper}
        mb={10}
        pb={3}
        position={"relative"}
      >
        {
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h4" component="div" mb={2}>
              {data.nome}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              CNS: {data.cns}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Sexo: {data.sexo}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Telefone: {data.tel}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Data de Nascimento: {data.dataNasc}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Data de Inscrição: {data.dataInsc}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Forma de Recadastro: {data.recadastro}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Convênio: {data.convenio}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Utiliza ESF: {data.esf ? "Sim" : "Não"}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Escolaridade:{" "}
              {data.escolaridade ? data.escolaridade : "Não informado"}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Profissão: {data.profissao ? data.profissao : "Não informado"}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Mobilidade: {data.mobilidade}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Usa cinto: {data.cinto ? "Sim" : "Não"}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Efluente: {data.efluente ? data.efluente.join(", ") : "Ausente"}
            </Typography>
          </Grid>
        }
        <Box sx={{ position: "absolute", right: 10, bottom: 10 }}>
          <Button size="small" variant="contained" color="primary">
            Editar
          </Button>
          <Button size="small">
            Remover
          </Button>
        </Box>
      </Grid>
    </>
  );
};
