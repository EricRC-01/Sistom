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
} from "@mui/material";

import { useLocation } from "react-router-dom";

export const DisplayRecebedor = () => {

  const queryClient = useQueryClient();
    
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const { getFilterData } = usePocket();
  
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["recebedores"],
    queryFn: () => getFilterData({
      table: "recebedores",
      id: userId,
    }),
  });

  useEffect(() => {
    return () => {
      // Reset the data in the query cache when the component unmounts
      queryClient.removeQueries(["recebedores", userId]);
    };
  }, [queryClient, userId]);

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

  if(!data.length) return <div>Sem recebedores cadastrados!</div>

  return (
    <>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card key={item.key} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CPF: {item.cpf}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sexo: {item.sexo}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button size="small" variant="contained" color="info">
                  Editar
                </Button>
                <Button size="small">Remover</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
