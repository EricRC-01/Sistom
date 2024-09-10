import { Grid } from "@mui/material";
import { RelatorioCustos } from "./relatorio.custos";

export const RelatorioCustosPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid>
        <RelatorioCustos table="custo_permanencia" label="Permanência" />
        <RelatorioCustos table="custo_tipo_estoma" label="Tipo Estoma" />
        <RelatorioCustos table="custo_idade" label="Idade" />
        <RelatorioCustos table="custo_sexo" label="Sexo" />
        <RelatorioCustos table="custo_municipio" label="Munícipio" />
      </Grid>
    </Grid>
  );
};
