import {
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { ModalForm } from "components/ModalForm";

import { RemoveButton } from "components/RemoveButton";

export const DisplayEstoma = ({ query }) => {
  const { isLoading, isError, error, data } = query;

  console.log(data);

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;
  return (
    <>
      <Grid container spacing={2} mt={1}>
        {data.map((item) => (
          <Grid item sx={{ width: "100%" }} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="div" mb={2}>
                  {item.tipo}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  CID: {item.CID ? item.CID : "Não informado"}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Doença de base: {item.doenca ? item.doenca : "Não informado"}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Houve demarcação?{" "}
                  {item.demarcacao ? item.demarcacao : "Não informado"}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Modo de exteriorização:{" "}
                  {item.exteriorizacao ? item.exteriorizacao : "Não informado"}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Tipo de abdome: {item.abdome ? item.abdome : "Não informado"}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Permanência: {item.permanencia}{" "}
                  {item.permanencia === "Indeterminado"
                    ? `(${item.indeterminadoMotivo})`
                    : ""}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Localização abdominal: {item.localizacao}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Higiene: {item.higiene}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Forma: {item.formato} e {item.forma}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Coloração: {item.coloracao ? item.coloracao : "Não informado"}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Haste: {item.haste}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Protusão: {item.protusao ? item.protusao : "Não informado"}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  É funcional? {item.funcional}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Complicações:{" "}
                  {item.complicacao.length
                    ? item.complicacao.join(", ")
                    : "Não informado"}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Pele periestoma:{" "}
                  {item.periestoma.length
                    ? item.periestoma.join(", ")
                    : "Não informado"}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Usa cinto: {item.cinto ? "Sim" : "Não"}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Efluente:{" "}
                  {item.efluente.length
                    ? item.efluente.join(", ")
                    : "Não informado"}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <ModalForm
                  table="estomas"
                  mode="edit"
                  defaultValuesEdit={item}
                />
                <RemoveButton table="estomas" id={item.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
