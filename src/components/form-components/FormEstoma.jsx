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
import { Radio } from "@mui/material";

const optionsTipoEstoma = [
  { id: "Colostomia", label: "Colostomia" },
  { id: "Ileostomia", label: "Ileostomia" },
  { id: "Urostomia", label: "Urostomia" },
  { id: "Nefrectomia", label: "Nefrectomia" },
  { id: "Outro", label: "Outro" },
];

const optionsDemarcacaoEstoma = [
  { id: "Sim", label: "Sim" },
  { id: "Não", label: "Não" },
];

const optionsExteriorizacaoEstoma = [
  { id: "Terminal", label: "Terminal" },
  { id: "Derivação Urinária Bricker", label: "Derivação Urinária Bricker" },
  { id: "Em Alça", label: "Em Alça" },
  { id: "Urostomia", label: "Urostomia" },
  { id: "Duas bocas", label: "Duas bocas" },
];

const optionsAbdomeEstoma = [
  { id: "Plano", label: "Plano" },
  { id: "Globoso", label: "Globoso" },
  { id: "Escavado", label: "Escavado" },
  { id: "Semi Globoso", label: "Semi Globoso" },
];

const optionsPermanenciaEstoma = [
  { id: "Definitivo", label: "Definitivo" },
  { id: "Temporário", label: "Temporário" },
  { id: "Indeterminado", label: "Indeterminado" },
];

const optionsLocalizacaoEstoma = [
  { id: "QSE", label: "QSE" },
  { id: "QSD", label: "QSD" },
  { id: "QIE", label: "QIE" },
  { id: "QID", label: "QID" },
];

const optionsHigieneEstoma = [
  { id: "Boa", label: "Boa" },
  { id: "Satisfatória", label: "Satisfatória" },
  { id: "Ruim", label: "Ruim" },
];

const optionsFormatoEstoma = [
  { id: "Circular", label: "Circular" },
  { id: "Oval", label: "Oval" },
];

const optionsFormaEstoma = [
  { id: "Regular", label: "Regular" },
  { id: "Irregular", label: "Irregular" },
];

const optionsColoracaoEstoma = [
  { id: "Rosa", label: "Rosa" },
  { id: "Vermelho", label: "Vermelho" },
  { id: "Roxo", label: "Roxo" },
];

const optionsHasteEstoma = [
  { id: "Presente", label: "Presente" },
  { id: "Ausente", label: "Ausente" },
];

const optionsProtusaoEstoma = [
  { id: "Protuso-saliente", label: "Protuso-saliente" },
  { id: "Plano", label: "Plano" },
  { id: "Retraído", label: "Retraído" },
  { id: "Protuso - baixo perfil", label: "Protuso - baixo perfil" },
];

const optionsFuncaoEstoma = [
  { id: "Funcionante", label: "Funcionante" },
  { id: "Não funcionante", label: "Não funcionante" },
];

const optionsComplicacaoEstoma = [
  { id: "Ausente", label: "Ausente" },
  { id: "Fungo", label: "Fungo" },
  { id: "Retração", label: "Retração" },
  { id: "Sangramento", label: "Sangramento" },
  { id: "Prolapso", label: "Prolapso" },
  { id: "Edema", label: "Edema" },
  { id: "Vazamento", label: "Vazamento" },
  { id: "Estenose", label: "Estenose" },
  { id: "Hérnia", label: "Hérnia" },
  { id: "Hérnia periestomal", label: "Hérnia periestomal" },
  { id: "Hérnia umbilical", label: "Hérnia umbilical" },
  { id: "Granuloma", label: "Granuloma" },
  { id: "Infecção", label: "Infecção" },
  { id: "Deiscência", label: "Deiscência" },
  { id: "Dermatite", label: "Dermatite" },
  { id: "Tumor", label: "Tumor" },
  { id: "Necrose", label: "Necrose" },
  { id: "Lesão decorrente tubete", label: "Lesão decorrente tubete" },
  { id: "Corte inadequado", label: "Corte inadequado" },
  { id: "Maceração", label: "Maceração" },
  { id: "Descolamento", label: "Descolamento" },
  {
    id: "Saída de fezes pela parte inferior",
    label: "Saída de fezes pela parte inferior",
  },
  { id: "Isquemia", label: "Isquemia" },
  { id: "Outro", label: "Outro" },
];

const optionsEfluentePaciente = [
  {
    id: "Fezes formadas",
    label: "Fezes formadas",
  },
  {
    id: "Fezes pastosas",
    label: "Fezes pastosas",
  },
  {
    id: "Fezes líquidas",
    label: "Fezes líquidas",
  },
  {
    id: "Fezes semilíquidas",
    label: "Fezes semilíquidas",
  },
  {
    id: "Muco",
    label: "Muco",
  },
  {
    id: "Urina",
    label: "Urina",
  },
  {
    id: "Ausente",
    label: "Ausente",
  },
];

const optionsPeriestomaEstoma = [
  { id: "Integra", label: "Integra" },
  { id: "Dermatite", label: "Dermatite" },
  { id: "Hiperemiada", label: "Hiperemiada" },
  { id: "Granuloma", label: "Granuloma" },
  { id: "Macerada", label: "Macerada" },
  { id: "Hernia Paraestomal", label: "Hernia Paraestomal" },
  { id: "Lesao decorrente do tubete", label: "Lesao decorrente do tubete" },
  { id: "Infeccao fungica", label: "Infeccao fungica" },
  { id: "Friavel", label: "Friavel" },
  { id: "Pontos Escurecidos", label: "Pontos Escurecidos" },
  { id: "Deiscencia nos pontos", label: "Deiscencia nos pontos" },
];

export const FormEstoma = ({ control }) => {
  return (
    <>
      <SelectElement
        label="Tipo de Estoma"
        name="tipo"
        control={control}
        options={optionsTipoEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
      />

      <TextFieldElement
        label="CID"
        name="CID"
        control={control}
        rules={{
          pattern: {
            value: /^[A-Z]\d{2}$/,
            message: "CID inválido. Exemplo: A00",
          },
        }}
      />

      <TextFieldElement
        label="Doença de base para o estoma"
        name="doenca"
        control={control}
      />

      <RadioButtonGroup
        label={"Demarcação"}
        name={"demarcacao"}
        control={control}
        required
        rules={{ required: "Campo obrigatório" }}
        options={optionsDemarcacaoEstoma}
        row
      />

      <SelectElement
        label="Modo de exteriorização"
        name="exteriorizacao"
        control={control}
        options={optionsExteriorizacaoEstoma}
      />

      <RadioButtonGroup
        label={"Tipo de abdome"}
        name={"abdome"}
        control={control}
        options={optionsAbdomeEstoma}
      />

      <RadioButtonGroup
        label="Permanência"
        name="permanencia"
        control={control}
        options={optionsPermanenciaEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
      />

      <TextareaAutosizeElement
        label="Motivo para ser indeterminado"
        name="indeterminadoMotivo"
        control={control}
      />

      <RadioButtonGroup
        label="Localização abdominal"
        name="localizacao"
        control={control}
        options={optionsLocalizacaoEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
      />

      <RadioButtonGroup
        label="Como está a higiene do estoma?"
        name="higiene"
        control={control}
        options={optionsHigieneEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
      />

      <RadioButtonGroup
        label="Formato"
        name="formato"
        control={control}
        options={optionsFormatoEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
        row
      />

      <RadioButtonGroup
        label="Forma"
        name="forma"
        control={control}
        options={optionsFormaEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
        row
      />

      <RadioButtonGroup
        label="Coloração"
        name="coloracao"
        control={control}
        options={optionsColoracaoEstoma}
      />

      <RadioButtonGroup
        label="Haste"
        name="haste"
        control={control}
        options={optionsHasteEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
      />

      <RadioButtonGroup
        label="Protusão"
        name="protusao"
        control={control}
        options={optionsProtusaoEstoma}
      />

      <RadioButtonGroup
        label="É funcional?"
        name="funcional"
        control={control}
        options={optionsFuncaoEstoma}
        required
        rules={{ required: "Campo obrigatório" }}
      />

      <AutocompleteElement
        multiple
        label="Complicações presentes"
        name="complicacao"
        control={control}
        options={optionsComplicacaoEstoma}
      />

      <AutocompleteElement
        multiple
        label="Efluente"
        name="efluente"
        control={control}
        options={optionsEfluentePaciente}
      />

      <AutocompleteElement
        multiple
        label="Pele Periestoma"
        name="periestoma"
        control={control}
        options={optionsPeriestomaEstoma}
      />

      <CheckboxElement
        label="Usa cinto de sustentação?"
        name="cinto"
        control={control}
      />
    </>
  );
};
