import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import dayjs from "dayjs";

import { ModalForm } from "components/ModalForm";

import { formatDate } from "../../utils/Format.js";

import { RemoveButton } from "components/RemoveButton";

export const DisplayMaterialRetirado = ({ query }) => {
  const { isLoading, isError, error, data } = query;

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

  console.log(data);
  return (
    <>
      <Grid container spacing={2} mt={1}>
        {data.map((item) => (
          <Grid item md={6} key={item.id}>
            <Card key={item.key} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h4" component="div" mb={2}>
                  {item.estoma} - {formatDate(item.data)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.qtdBolsas
                    ? `Quantidade de bolsas: ${item.qtdBolsas}`
                    : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.pastaHidrocoloide
                    ? `Pasta de hidrocolóide: ${item.pastaHidrocoloide}`
                    : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.poEstoma ? `Pó para estoma: ${item.poEstoma}` : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.cremeDermatite
                    ? `Creme para dermatite: ${item.cremeDermatite}`
                    : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.sprayBarreiraPele
                    ? `Spray barreira de pele: ${item.sprayBarreiraPele}`
                    : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.anelMoldavel
                    ? `Anel moldável: ${item.anelMoldavel}`
                    : ""}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.removedorAdesivo
                    ? `Removedor de adesivo: ${item.removedorAdesivo}`
                    : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.cremeBarreira
                    ? `Creme barreira: ${item.cremeBarreira}`
                    : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.fitaAdesivaCircular
                    ? `Fita adesiva circular: ${item.fitaAdesivaCircular}`
                    : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.cinto ? `Cinto: ${item.cinto}` : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.phmb ? `PHMB: ${item.phmb}` : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.placaProtetora
                    ? `Placa protetora: ${item.placaProtetora}`
                    : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.limpadorPele
                    ? `Limpador para a pele: ${item.limpadorPele}`
                    : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.obs ? `Observações: ${item.obs}` : "Sem observações"}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <ModalForm
                  table="materialRetirado"
                  mode="edit"
                  defaultValuesEdit={{ ...item, data: dayjs(data.data) }}
                />
                <RemoveButton table="materialRetirado" id={item.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
