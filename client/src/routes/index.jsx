import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Relatorio from "pages/Relatorio.jsx";
import Auth from "pages/Auth.jsx";
import Dashboard from "pages/Dashboard.jsx";
import { Teste } from "pages/Teste.jsx";
import { PaginaPaciente } from "pages/PaginaPaciente.jsx";
import { Outlet } from "react-router-dom";
import { RequireAuth } from "../utils/RequireAuth";

import Header from "components/global/Header";
import Footer from "components/global/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }
    >
      <Route path="Auth" element={<Auth />} />
      <Route element={<RequireAuth />}>
        <Route index element={<Dashboard />} />
        <Route path="Paciente" element={<PaginaPaciente />} />
        <Route path="Relatorio" element={<Relatorio />} />
      </Route>
      <Route path="Teste" element={<Teste />} />
    </Route>
  )
);

export default router;
