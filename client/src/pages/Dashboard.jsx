import { TabelaPaciente } from "../components/TabelaPaciente";
import { ToolbarTabelaPaciente } from "components/ToolbarTabelaPaciente";

import { Box, Container } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{pt:1, pb: 10}} >
      <Container
        maxWidth="lg"
        sx={{ mt: 5, mt: 3 }}
      >
        <ToolbarTabelaPaciente />
        <hr />
        <TabelaPaciente />
      </Container>
    </Box>
  );
};

export default Dashboard;
