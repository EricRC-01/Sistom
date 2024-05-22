import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useEffect } from "react";

import { Grid, Typography, Button, Paper, Box } from "@mui/material";

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
      queryClient.removeQueries(["pacientes", userId]);
    };
  }, [queryClient, userId]);

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

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
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Typography variant="h4" component="div" mb={2}>
              {item.nome}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              CNS: {item.cns}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Sexo: {item.sexo}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Telefone: {item.tel}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Data de Nascimento: {item.dataNasc.split(" ")[0]}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Data de Inscrição: {item.dataInsc.split(" ")[0]}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Forma de Recadastro: {item.recadastro}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Convênio: {item.convenio}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Utiliza ESF: {item.esf ? "Sim" : "Não"}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Escolaridade:{" "}
              {item.escolaridade ? item.escolaridade : "Não informado"}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Profissão: {item.profissao ? item.profissao : "Não informado"}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Mobilidade: {item.mobilidade}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Usa cinto: {item.cinto ? "Sim" : "Não"}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              Efluente: {item.efluente ? item.efluente.join(", ") : "Ausente"}
            </Typography>
          </Grid>
        ))}
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
