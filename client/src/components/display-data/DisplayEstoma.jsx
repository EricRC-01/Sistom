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

export const DisplayEstoma = () => {
  const queryClient = useQueryClient();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

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
      // Reset the data in the query cache when the component unmounts
      queryClient.removeQueries(["estomas", userId]);
    };
  }, [queryClient, userId]);

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

  if (!data.length) return <div>Sem estomas cadastrados!</div>;

  return (
    <>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ minWidth:'800px' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.diagnostico}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Realizado demarcação no pré-operatório: {item.demarcacao}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tipo de estoma: {item.tipo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Modo de exteriorização: {item.exteriorizacao}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tipo de abdome: {item.abdome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tempo de permanência do estoma: {item.permanencia}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Localização abdominal: {item.localizacao}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Higiene: {item.higiene}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Medida do Estoma: {item.medida}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Formato do Estoma: {item.formato}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Forma do Estoma: {item.forma}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Coloração do Estoma: {item.coloracao}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tubete/haste fixa: {item.haste}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Estoma: {item.estoma}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Função: {item.funcao}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Complicações presentes: {item.complicacao}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pele periestoma: {item.periestoma}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Diâmetro do equipamento em mm: {item.diametro}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sistema: {item.sistema}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tipo de placa: {item.tipoPlaca}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Uso de adjuvante: {item.adjuvante}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Custo extra com equipamento/adjuvante: {item.custoExtra}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Como está sua adaptação: {item.adaptacao}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Equipamentos indicados: {item.equipamento}
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
