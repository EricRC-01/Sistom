import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormHelperText
} from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputRadio = ({ name, control, label, options, rules, required }) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        key={singleOption.label}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}{required && '*'}</FormLabel>
        <Controller
        name={name}
        control={control}
        rules={{ required: { value: required, message: 'Campo Obrigatório' } }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <RadioGroup value={value} onChange={onChange} >
              {generateRadioOptions()}
            </RadioGroup>
            <FormHelperText error={!!error}>{error ? error.message : ''}</FormHelperText>
          </>
        )}
      />
    </FormControl>
  );
};
