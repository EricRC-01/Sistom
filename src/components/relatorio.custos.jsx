import { Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { usePocket } from "contexts/PocketContext";

export const RelatorioCustos = ({ table, label }) => {
  console.log(table, label);

  const chartSettingPacientes = {
    xAxis: [
      {
        label: `Preço por ${label}`,
      },
    ],
    width: 500,
    height: 500,
  };

  const { getFullList } = usePocket();
  const { data, isLoading } = getFullList({
    table: table,
    sort: "-value",
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }
  const formattedData =
    table === "custo_municipio" &&
    data.map((item) => ({
      ...item,
      label: item.label.nome,
    }));

  console.log(formattedData);

  return (
    <>
      <Typography variant="h5" component="div" mb={2}>
        {label}
      </Typography>
      <BarChart
        margin={{ left: 125 }}
        dataset={table === "custo_municipio" ? formattedData : data}
        yAxis={[{ scaleType: "band", dataKey: "label" }]}
        series={[{ dataKey: "value", label: "R$" }]}
        layout="horizontal"
        {...chartSettingPacientes}
      />
    </>
  );
};
