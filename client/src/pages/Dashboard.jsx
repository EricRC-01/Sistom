import { TabelaPaciente } from "../components/TabelaPaciente";
import { ToolbarTabelaPaciente } from "components/ToolbarTabelaPaciente";

import { Paper } from "@mui/material";

import { Container } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        component={Paper}
        sx={{ mb: 10, mt: 5 }}
      >
        <ToolbarTabelaPaciente />
        <hr />
        <TabelaPaciente />
      </Container>
    </>
  );
};

export default Dashboard;
