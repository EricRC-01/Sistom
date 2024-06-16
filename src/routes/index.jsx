import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Auth from "pages/Auth.jsx";
import Dashboard from "pages/Dashboard.jsx";
import { PaginaPaciente } from "pages/PaginaPaciente.jsx";
import { Relatorio } from "pages/Relatorio";
import { Outlet } from "react-router-dom";
import { RequireAuth } from "../utils/RequireAuth";

import Header from "components/global/Header";
import Footer from "components/global/Footer";
import { Accessibility } from "components/global/Accessibility";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Header />
          <Outlet />
          <Accessibility />
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
    </Route>
  )
);

export default router;
