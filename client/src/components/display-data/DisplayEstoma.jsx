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

import { useAPI } from "contexts/API";

export const DisplayEstoma = () => {

  const { pacientes } = useAPI();

  //const queryClient = useQueryClient();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
/* 
  const { getFilterData } = usePocket();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["estomas"],
    queryFn: () =>
      getFilterData({
        table: "estomas",
        id: userId,
      }),
  });

  useEffect(() => {
    return () => {
      queryClient.removeQueries(["estomas", userId]);
    };
  }, [queryClient, userId]);

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;
 */

  const data = pacientes[userId].estomas;

  if (!data.length) return <div>Sem estomas cadastrados!</div>;

  console.log(data)

  return (
    <>
      <Grid container spacing={2} mt={1} position={"relative"}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={12} md={12} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="div" mb={2}>
                  {item.tipoEstoma}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Realizado demarcação no pré-operatório: {item.demarcacao}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Modo de exteriorização: {item.exteriorizacao}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Tipo de abdome: {item.abdome}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Tempo de permanência do estoma: {item.permanencia}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Localização abdominal: {item.localizacao}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Higiene: {item.higiene}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Medida do Estoma: {item.medida}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Formato do Estoma: {item.formato}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Forma do Estoma: {item.forma}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Coloração do Estoma: {item.coloracao}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Tubete/haste fixa: {item.haste}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Estoma: {item.estoma}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Função: {item.funcao}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Complicações presentes: {item.complicacao}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Pele periestoma: {item.periestoma}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Diâmetro do equipamento em mm: {item.diametro}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Sistema: {item.sistema}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Tipo de placa: {item.tipoPlaca}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Uso de adjuvante: {item.adjuvante}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Custo extra com equipamento/adjuvante: {item.custoExtra}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Como está sua adaptação: {item.adaptacao}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  Equipamentos indicados: {item.equipamento}
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
