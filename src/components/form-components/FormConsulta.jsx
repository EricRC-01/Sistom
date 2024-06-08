import { TextFieldElement } from "react-hook-form-mui";
import { DateTimePickerElement } from "react-hook-form-mui/date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SelectElement } from "react-hook-form-mui";

const optionsStatusConsulta = [
  {
    id: "Pendente",
    label: "Pendente",
  },
  {
    id: "Realizada",
    label: "Realizada",
  },
  {
    id: "Cancelada",
    label: "Cancelada",
  },
];

export const FormConsulta = ({ control, mode }) => {
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

      {mode === "edit" && (
        <SelectElement
          label="Status"
          name="status"
          control={control}
          required
          rules={{ required: "Campo obrigatório" }}
          options={optionsStatusConsulta}
        />
      )}
    </>
  );
};
