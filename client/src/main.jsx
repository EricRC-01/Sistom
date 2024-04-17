import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Theme } from "./components/themes/Theme.js";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Box } from "@mui/material";

import { Relatorio } from "./components/pages/Relatorio.jsx";
import { Login } from "./components/pages/Login.jsx";
import { PaginaInicial } from "./components/pages/PaginaInicial.jsx";
import { Teste } from "./components/pages/Teste.jsx";
import { PaginaPaciente } from "./components/pages/PaginaPaciente.jsx";
import { Header } from "./components/organisms/Header.jsx";
import { Footer } from "./components/organisms/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/relatorio",
    element: <Relatorio />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/",
    element: <PaginaInicial />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/teste",
    element: <Teste />,
  },
  {
    path: "/paciente",
    element: <PaginaPaciente />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: "100vh",
            position: "relative",
            paddingBottom: "2.5rem",
          }}
        >
          <RouterProvider router={router} />

          <Footer />
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
