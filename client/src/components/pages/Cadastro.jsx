import { Header } from "../organisms/Header";
import { FormPaciente } from "../organisms/FormPaciente";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Footer } from "../organisms/Footer";

export const Cadastro = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header />
        <FormPaciente />
      </LocalizationProvider>
    </>
  );
};
