import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { RemoveButton } from "components/RemoveButton";

import { formatPhoneNumber, formatCPF } from "../../utils/Format";

export const DisplayRecebedor = ({ query }) => {
  const { isLoading, isError, error, data } = query;

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;
  return (
    <>
      <Grid container spacing={2} mt={1}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card key={item.key} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CPF: {formatCPF(item.cpf)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sexo: {item.sexo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Telefone: {formatPhoneNumber(item.tel)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Representante: {item.orgao ? item.orgao : "Não informado"}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button size="small" variant="contained" color="primary">
                  Editar
                </Button>
                <RemoveButton table="recebedores" id={item.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
