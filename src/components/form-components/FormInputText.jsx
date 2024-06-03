import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
export const FormInputText = ({ name, control, label, required, pattern }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: { value: required, message: 'Campo Obrigatório' },
      pattern: { value: pattern, message: 'Campo inválido' }
    }}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          required={required}
        />
      )}
    />
  );
};
