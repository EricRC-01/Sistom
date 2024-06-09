import { SelectElement, TextFieldElement } from "react-hook-form-mui";
import { DatePickerElement } from "react-hook-form-mui/date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";

const optionsUFCirurgia = [
  { id: "AC", label: "AC" },
  { id: "AL", label: "AL" },
  { id: "AP", label: "AP" },
  { id: "AM", label: "AM" },
  { id: "BA", label: "BA" },
  { id: "CE", label: "CE" },
  { id: "DF", label: "DF" },
  { id: "ES", label: "ES" },
  { id: "GO", label: "GO" },
  { id: "MA", label: "MA" },
  { id: "MT", label: "MT" },
  { id: "MS", label: "MS" },
  { id: "MG", label: "MG" },
  { id: "PA", label: "PA" },
  { id: "PB", label: "PB" },
  { id: "PR", label: "PR" },
  { id: "PE", label: "PE" },
  { id: "PI", label: "PI" },
  { id: "RJ", label: "RJ" },
  { id: "RN", label: "RN" },
  { id: "RS", label: "RS" },
  { id: "RO", label: "RO" },
  { id: "RR", label: "RR" },
  { id: "SC", label: "SC" },
  { id: "SP", label: "SP" },
  { id: "SE", label: "SE" },
  { id: "TO", label: "TO" },
];

const optionsTipoCirurgia = [
  {
    id: "Colostomia",
    label: "Colostomia",
  },
  {
    id: "Urostomia",
    label: "Urostomia",
  },
  {
    id: "Enterectomia",
    label: "Enterectomia",
  },
  {
    id: "Laparotomia",
    label: "Laparotomia",
  },
  {
    id: "Bricker",
    label: "Bricker",
  },
  {
    id: "Ileostomia",
    label: "Ileostomia",
  },
  {
    id: "Colectomia",
    label: "Colectomia",
  },
];

export const FormCirurgia = ({ control }) => {
  return (
    <>
      <SelectElement
        label="Tipo de cirurgia"
        name="tipo"
        control={control}
        options={optionsTipoCirurgia}
        required
        rules={{ required: "Campo obrigatório" }}
        inputProps={{"aria-required":"true",
          "aria-role":"combobox",
          "aria-label":"Tipo de cirurgia",
        }}
        
      />

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePickerElement
          label="Data da cirurgia"
          name="data"
          control={control}
          required
          rules={{ required: "Campo obrigatório" }}
          disableFuture
          inputProps={{"aria-required":"true",
            "aria-label":"Data da cirurgia",
          }}
        />
      </LocalizationProvider>

      <TextFieldElement label="Hospital" name="hospital" control={control} />
      <TextFieldElement
        label="Médico responsável"
        name="medico"
        control={control}
        required
        rules={{
          required: "Campo obrigatório",
          pattern: {
            value: /^[a-zA-ZÀ-ú\s]+( [a-zA-ZÀ-ú\s]+)+$/i,
            message: "Nome deve ser completo e válido",
          },
        }}
        inputProps={{"aria-required":"true",
          "aria-label":"Médico responsável",
        }}
      />

      <Box sx={{ flexDirection: "row" }}>
        <SelectElement
          label="UF"
          name="uf"
          control={control}
          options={optionsUFCirurgia}
          required
          rules={{ required: "Campo obrigatório" }}
          sx={{ width: "20%" }}
          inputProps={{"aria-required":"true",
            "aria-role":"combobox",
            "aria-label":"UF",
          }}
        />

        <TextFieldElement
          label="CRM"
          name="crm"
          control={control}
          required
          rules={{
            required: "Campo obrigatório",
            pattern: {
              value: /^\d{6}$/,
              message: "CRM deve conter 6 dígitos",
            },
          }}
          sx={{ width: "80%" }}
          inputProps={{"aria-required":"true",
            "aria-label":"CRM",
          }}
        />
      </Box>
    </>
  );
};
