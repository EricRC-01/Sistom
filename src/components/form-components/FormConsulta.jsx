import { TextFieldElement } from "react-hook-form-mui";
import { DateTimePickerElement } from "react-hook-form-mui/date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const FormConsulta = ({ control }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DateTimePickerElement
          label="Data e horário da Consulta"
          name="data"
          control={control}
          required
          rules={{ required: "Campo obrigatório" }}
        />
      </LocalizationProvider>

      <TextFieldElement
        label="Hospital"
        name="hospital"
        control={control}
        required
        rules={{
          required: "Campo obrigatório",
        }}
      />
    </>
  );
};
