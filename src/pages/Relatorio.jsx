import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab } from "@mui/material";
import { ChartContainer, ResponsiveChartContainer } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";
import { PiePlot } from "@mui/x-charts/PieChart";
import Grid from "@mui/material/Unstable_Grid2";

import { Pie } from "components/charts/Pie";
import { Bar } from "components/charts/Bar";

export const Relatorio = () => {
  const [tabValue, setTabValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleTabChange} variant="scrollable">
              <Tab label="Perfil geral dos usuários" value="1" />
              <Tab label="Estomias" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Pie table="genero" label="Gênero" />
              </Grid>
              <Grid xs={6}>
                <Pie table="escolaridade" label="Escolaridade" />
              </Grid>
              <Grid xs={6}>
                <Bar table="territorio" label="Território" />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Pie table="tipo_estoma" label="Tipo de Estoma" />
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
};
