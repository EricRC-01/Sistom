import {
  AutocompleteElement,
  CheckboxButtonGroup,
  CheckboxElement,
  FormContainer,
  MultiSelectElement,
  PasswordElement,
  PasswordRepeatElement,
  RadioButtonGroup,
  SelectElement,
  SwitchElement,
  TextFieldElement,
  TextareaAutosizeElement,
} from "react-hook-form-mui";
import { DatePickerElement } from "react-hook-form-mui/date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid, Typography, Box } from "@mui/material";

const optionsTipoEstoma = [
  { id: "Colostomia", label: "Colostomia" },
  { id: "Ileostomia", label: "Ileostomia" },
  { id: "Urostomia", label: "Urostomia" },
  { id: "Nefrectomia", label: "Nefrectomia" },
  { id: "Outro", label: "Outro" },
];

export const FormMaterialRetirado = ({ control }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePickerElement
          label="Data de Retirada"
          name="data"
          control={control}
          required
          rules={{ required: "Campo obrigatório" }}
          disableFuture
        />
      </LocalizationProvider>
      <SelectElement
        label="Estoma"
        name="estoma"
        control={control}
        options={optionsTipoEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
        inputProps={{
          "aria-required": "true",
          "aria-role": "combobox",
          "aria-label": "Estoma",
        }}
      />
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          Quantidade de bolsas:
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement type="number" control={control} name="qtdBolsas" />
        </Grid>
        <Grid item xs={6}>
          Pasta de hidrocolóide:
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="pastaHidrocoloide"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Pó para estoma:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="poEstoma"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Creme para dermatite:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="cremeDermatite"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Spray barreira de pele:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="sprayBarreiraPele"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Anel moldável:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="anelMoldavel"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Removedor de adesivo:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="removedorAdesivo"
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle1">Creme barreira:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="cremeBarreira"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Fita adesiva circular:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="fitaAdesivaCircular"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Cinto:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="cinto"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">PHMB:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="phmb"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Placa protetora:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="placaProtetora"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Limpador para a pele:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextFieldElement
            type="number"
            control={control}
            name="limpadorPele"
            fullWidth
          />
        </Grid>
      </Grid>
      <TextareaAutosizeElement
        label="Observações do avaliador"
        name="obs"
        control={control}
        inputProps={{
          "aria-label": "Observações do avaliador",
        }}
      />
    </>
  );
};
