import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputCheckbox = ({ name, control, label, setValue }) => {
  useEffect(() => {
    setValue(name, false);
  }, [name, setValue]);
  return (
    <FormControlLabel
      component="fieldset"
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.checked}
              onChange={(e) => field.onChange(e.target.checked)}
              label={label}
            />
          )}
        />
      }
      label={label}
    />
  );
};
