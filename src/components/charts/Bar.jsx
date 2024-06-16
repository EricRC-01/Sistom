import { Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { usePocket } from "contexts/PocketContext";

const chartSetting = {
  xAxis: [
    {
      label: "Quantidade de Pacientes",
    },
  ],
  width: 500,
  height: 500,
};

export const Bar = ({ table, label }) => {
  const { getFullList } = usePocket();
  const { data, isLoading } = getFullList({
    table: table,
    sort: "-value",
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }
  const formattedData = data.map((item) => ({
    ...item,
    label: item.label.nome,
  }));

  return (
    <>
      <Typography variant="h5" component="div" mb={2}>
        {label}
      </Typography>
      <BarChart
        margin={{ left: 125 }}
        dataset={formattedData}
        yAxis={[{ scaleType: "band", dataKey: "label" }]}
        series={[{ dataKey: "value", label: "Pacientes" }]}
        layout="horizontal"
        {...chartSetting}
      />
    </>
  );
};
