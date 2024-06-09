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

const optionsSistemaQtdEquipamento = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
];

const optionsSistemaOpacidade = [
  { id: "Opaco", label: "Opaco" },
  { id: "Transparente", label: "Transparente" },
];

const optionsTipoPlacaEstoma = [
  { id: "Convexa", label: "Convexa" },
  { id: "Plana", label: "Plana" },
];

const optionsAdjuvanteEquipamento = [
  { id: "Pasta de hidrocolóide", label: "Pasta de hidrocolóide" },
  { id: "Pó para estoma", label: "Pó para estoma" },
  { id: "Creme para dermatite", label: "Creme para dermatite" },
  { id: "Spray barreira de pele", label: "Spray barreira de pele" },
  { id: "Anel moldável", label: "Anel moldável" },
  { id: "Removedor de adesivo", label: "Removedor de adesivo" },
  { id: "Creme barreira", label: "Creme barreira" },
  { id: "Fita adesiva circular", label: "Fita adesiva circular" },
  { id: "Cinto", label: "Cinto" },
  { id: "PHMB", label: "PHMB" },
  { id: "Placa protetora", label: "Placa protetora" },
  { id: "Limpador para a pele", label: "Limpador para a pele" },
];

const optionsAdaptacaoEquipamento = [
  { id: "Boa", label: "Boa" },
  { id: "Regular", label: "Regular" },
  { id: "Ruim", label: "Ruim" },
];

const optionsTipoEstoma = [
  { id: "Colostomia", label: "Colostomia" },
  { id: "Ileostomia", label: "Ileostomia" },
  { id: "Urostomia", label: "Urostomia" },
  { id: "Nefrectomia", label: "Nefrectomia" },
  { id: "Outro", label: "Outro" },
];

export const FormEquipamento = ({ control }) => {
  return (
    <>
      <SelectElement
        label="Estoma"
        name="estoma"
        control={control}
        options={optionsTipoEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
        inputProps={{"aria-required":"true",
          "aria-role":"combobox",
          "aria-label":"Estoma",
        }}
      />

      <TextFieldElement
        label="Diâmetro do equipamento em mm"
        name="diametro"
        control={control}
        required
        rules={{
          required: "Campo obrigatório",
          pattern: {
            value: /^\d{1,3}$/,
            message: "Diâmetro deve ser um número inteiro de até 3 dígitos",
          },
        }}
        inputProps={{"aria-required":"true",
          "aria-role":"combobox",
          "aria-label":"Diâmetro do equipamento em mm",
        }}
      />

      <RadioButtonGroup
        label="Quantidade de peças do sistema"
        name="sistemaQtd"
        control={control}
        options={optionsSistemaQtdEquipamento}
        required
        rules={{ required: "Campo obrigatório" }}
        row
        inputProps={{"aria-required":"true",
          "aria-label":"Quantidade de peças do sistema",
        }}
      />

      <RadioButtonGroup
        label="Opacidade do sistema"
        name="sistemaOpacidade"
        control={control}
        options={optionsSistemaOpacidade}
        row
        inputProps={{
          "aria-label":"Opacidade do sistema",
        }}
      />

      <CheckboxElement
        label="O sistema é drenável"
        name="sistemaDrenavel"
        control={control}
        inputProps={{
          "aria-label":"O sistema é drenável",
        }}
      />

      <RadioButtonGroup
        label="Tipo de Placa"
        name="tipoPlaca"
        control={control}
        options={optionsTipoPlacaEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
        row
        inputProps={{
          "aria-label":"Tipo de Placa",
          "aria-required":"true"
        }}
      />

      <CheckboxElement
        label="A placa é recortável"
        name="placaRecortavel"
        control={control}
        inputProps={{
          "aria-label":"A placa é recortável",
        }}
      />

      <AutocompleteElement
        multiple
        label="Adjuvante"
        name="adjuvante"
        control={control}
        options={optionsAdjuvanteEquipamento}
        inputProps={{
          "aria-multiselectable": "true",
          "aria-role":"combobox",
          "aria-label":"Adjuvante",
        }}
      />

      <TextFieldElement
        label="Custo Extra"
        name="custoExtra"
        control={control}
        inputProps={{
          "aria-label":"Custo Extra",
        }}
      />

      {/* TODO */}
      <TextFieldElement
        label="Equipamentos indicados"
        name="equipamento"
        control={control}
        inputProps={{
          "aria-label":"Equipamentos indicados",
        }}
      />

      <SelectElement
        label="Adaptação"
        name="adaptacao"
        control={control}
        options={optionsAdaptacaoEquipamento}
        inputProps={{
          "aria-label":"Adaptação",
          "aria-role":"combobox",
        }}
      />

      <TextareaAutosizeElement
        label="Observações do avaliador"
        name="obs"
        control={control}
        inputProps={{
          "aria-label":"Observações do avaliador",
        }}
      />
    </>
  );
};
