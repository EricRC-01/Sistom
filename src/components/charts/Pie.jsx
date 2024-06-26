import { Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { usePocket } from "contexts/PocketContext";

const permanenciaEstoma = () => {
  const { getFullList } = usePocket();
  const { data, isLoading } = getFullList({
    table: "permanencia_estoma",
  });
  return { data: data, isLoading: isLoading };
};

const escolaridade = () => {
  const { getFullList } = usePocket();
  const { data, isLoading } = getFullList({
    table: "escolaridade",
  });

  const updatedArray = data?.map((item) => {
    if (item.label === "") {
      return { ...item, label: "Não informado" };
    } else {
      return item;
    }
  });
  console.log(updatedArray, isLoading);
  return { data: updatedArray, isLoading: isLoading };
};

const tipoEstoma = () => {
  const { getFullList } = usePocket();
  const { data, isLoading } = getFullList({
    table: "tipo_estoma",
  });
  return { data: data, isLoading: isLoading };
};

const genero = () => {
  const { getFullList } = usePocket();
  const { data, isLoading } = getFullList({
    table: "genero",
  });
  return { data: data, isLoading: isLoading };
};

export const Pie = ({ table, label }) => {
  let updatedArray = [];
  let isLoading = true;

  switch (table) {
    case "escolaridade":
      updatedArray = escolaridade().data;
      isLoading = escolaridade().isLoading;
      break;
    case "tipo_estoma":
      updatedArray = tipoEstoma().data;
      isLoading = tipoEstoma().isLoading;
      break;
    case "genero":
      updatedArray = genero().data;
      isLoading = genero().isLoading;
      break;
    case "permanencia_estoma":
      updatedArray = permanenciaEstoma().data;
      isLoading = permanenciaEstoma().isLoading;
      break;
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  console.log(updatedArray);

  return (
    <>
      <Typography variant="h5" component="div" mb={2}>
        {label}
      </Typography>
      <PieChart
        series={[
          {
            data: updatedArray,
            paddingAngle: 3,
            innerRadius: 30,
            cornerRadius: 10,
            cx: 100,
          },
        ]}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "top", horizontal: "right" },
            padding: 0,
          },
        }}
        width={400}
        height={200}
      />
    </>
  );
};
