import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { TabelaPaciente } from "../organisms/TabelaPaciente";
import { FormPaciente } from "../organisms/FormPaciente";
import { ModalFormPaciente } from "../organisms/ModalFormPaciente";

import { Box, Button, Modal } from "@mui/material";

import { useState } from "react";

export const PaginaInicial = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <ModalFormPaciente />
      <TabelaPaciente />
    </>
  );
};
