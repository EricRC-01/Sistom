import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

import { RemoveButton } from "components/RemoveButton";

import { formatPhoneNumber, formatCPF } from "../../utils/Format";
import { ModalForm } from "components/ModalForm";

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
              <CardMedia
                component="img"
                height="140"
                image={
                  item.pfp
                    ? `https://sistom.pockethost.io/api/files/recebedores/${item.id}/${item.pfp}`
                    : "../../global/sem_imagem.jpg"
                }
                alt="Foto do Recebedor"
                sx={{ paddingTop: 2, objectFit: "contain" }}
              />
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
                <ModalForm
                  table="recebedores"
                  mode="edit"
                  defaultValuesEdit={item}
                />
                <RemoveButton table="recebedores" id={item.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
