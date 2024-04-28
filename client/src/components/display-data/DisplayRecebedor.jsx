import { useQuery } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

export const DisplayRecebedor = () => {
  const { getAllData } = usePocket();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["recebedores"],
    queryFn: () => getAllData("recebedores"),
  });

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

  console.log(data);

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
