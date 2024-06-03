import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import "dayjs/locale/pt-br";

export const FormInputDate = ({ name, control, label, required }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Controller
        name={name}
        control={control}
        rules={{ required: { value: required, message: "Campo Obrigatório" } }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <DatePicker
              value={value}
              onChange={onChange}
              label={label.concat(required ? " *" : "")}
              disableFuture
              slotProps={{
                textField: {
                  helperText: !!error ? error.message : "",
                  error: !!error,
                },
              }}
            />
          </>
        )}
      />
    </LocalizationProvider>
  );
};
