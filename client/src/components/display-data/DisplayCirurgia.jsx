import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useEffect } from "react";

import { useAPI } from "contexts/API";

import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { useLocation } from "react-router-dom";

export const DisplayCirurgia = () => { 
  //const queryClient = useQueryClient();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
/* 
  const { getFilterData } = usePocket();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["cirurgias"],
    queryFn: () =>
      getFilterData({
        table: "cirurgias",
        id: userId,
      }),
  });

  useEffect(() => {
    return () => {
      queryClient.removeQueries(["cirurgias", userId]);
    };
  }, [queryClient, userId]);

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;
  */

  const { pacientes } = useAPI();
  
  const data = pacientes[userId].cirurgias;

  if (!data.length) return <div>Sem cirurgias cadastradas!</div>;

  return (
    <>
      <Grid container spacing={2} mt={1} aria-label="Lista de cirurgias">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.tipo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hospital: {item.hospital}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Data: {item.data}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button size="small" variant="contained" color="primary">
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
