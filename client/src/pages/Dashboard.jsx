import { TabelaPaciente } from "../components/TabelaPaciente";
import { ModalFormPaciente } from "../components/ModalFormPaciente";
import { ToolbarTabelaPaciente } from "components/ToolbarTabelaPaciente";

import { Paper } from "@mui/material";

import { Container } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        component={Paper}
        sx={{ mt: 5, minHeight: "calc(100vh - 10rem)" }}
      >
        <ToolbarTabelaPaciente />
        <hr />
        <TabelaPaciente />
      </Container>
    </>
  );
};

export default Dashboard;
