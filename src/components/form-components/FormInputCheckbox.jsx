import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputCheckbox = ({ name, control, label, setValue }) => {
  useEffect(() => {
    setValue(name, false);
  }, [name, setValue]);
  return (
    <FormControlLabel
      component="fieldset"
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.checked}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
      }
    />
  );
};