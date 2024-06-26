import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { ModalForm } from "components/ModalForm";

import { RemoveButton } from "components/RemoveButton";

export const DisplayEquipamento = ({ query }) => {
  const { isLoading, isError, error, data } = query;

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;
  return (
    <>
      <Grid container spacing={2} mt={1}>
        {data.map((item) => (
          <Grid item md={6} key={item.id}>
            <Card key={item.key} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h4" component="div" mb={2}>
                  {item.estoma}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Diâmetro: {item.diametro}mm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Peça: {item.sistemaQtd}{" "}
                  {item.sistemaQtd === "1" ? "peça" : "peças"}{" "}
                  {item.sistemaOpacidade}{" "}
                  {item.sistemaDrenavel ? "drenável" : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Placa: {item.tipoPlaca}{" "}
                  {item.placaRecortavel ? "recortável" : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Adjuvantes:{" "}
                  {item.adjuvante.length
                    ? item.adjuvante.join(", ")
                    : "Não informado"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Custo extra:{" "}
                  {item.custoExtra ? item.custoExtra : "Não informado"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Adaptação: {item.adaptacao}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Observações: {item.obs ? item.obs : "Sem observações"}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <ModalForm
                  table="equipamentos"
                  mode="edit"
                  defaultValuesEdit={item}
                />
                <RemoveButton table="equipamentos" id={item.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
