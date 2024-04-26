import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";

import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          paddingBottom: "2.5rem",
        }}
      >
        <RouterProvider router={router} />
      </Box>
    </>
  );
};

export default App;