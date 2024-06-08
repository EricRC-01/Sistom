import {
  AutocompleteElement,
  CheckboxButtonGroup,
  CheckboxElement,
  RadioButtonGroup,
  SelectElement,
  SwitchElement,
  TextFieldElement,
} from "react-hook-form-mui";
import { DatePickerElement } from "react-hook-form-mui/date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const optionsSexoPaciente = [
  {
    id: "Masculino",
    label: "Masculino",
  },
  {
    id: "Feminino",
    label: "Feminino",
  },
];

const optionsRecadastroPaciente = [
  {
    id: "Presencial",
    label: "Presencial",
  },
  {
    id: "Remoto",
    label: "Remoto",
  },
];

const optionsCondicoesPaciente = [
  {
    id: "Neoplasia",
    label: "Neoplasia",
  },
  {
    id: "DM",
    label: "DM",
  },
  {
    id: "HAS",
    label: "HAS",
  },
  {
    id: "NEGA",
    label: "NEGA",
  },
  {
    id: "Sepse",
    label: "Sepse",
  },
  {
    id: "Cardiopatia",
    label: "Cardiopatia",
  },
  {
    id: "Endométrio",
    label: "Endométrio",
  },
  {
    id: "Hidrocefaia",
    label: "Hidrocefaia",
  },
  {
    id: "Espinha bífida",
    label: "Espinha bífida",
  },
  {
    id: "Renal",
    label: "Renal",
  },
  {
    id: "Tabagismo",
    label: "Tabagismo",
  },
  {
    id: "Doença neurológica",
    label: "Doença neurológica",
  },
  {
    id: "Etilismo",
    label: "Etilismo",
  },
  {
    id: "Cirrose",
    label: "Cirrose",
  },
  {
    id: "Hernia",
    label: "Hernia",
  },
  {
    id: "Arritmia",
    label: "Arritmia",
  },
  {
    id: "AVE",
    label: "AVE",
  },
  {
    id: "Obesidade",
    label: "Obesidade",
  },
  {
    id: "Traqueostomia",
    label: "Traqueostomia",
  },
  {
    id: "Marca-passo",
    label: "Marca-passo",
  },
  {
    id: "Ex-tabagista",
    label: "Ex-tabagista",
  },
  {
    id: "Tuberculose",
    label: "Tuberculose",
  },
  {
    id: "Trombose",
    label: "Trombose",
  },
  {
    id: "HIV",
    label: "HIV",
  },
  {
    id: "Acuidade visual diminuída",
    label: "Acuidade visual diminuída",
  },
  {
    id: "AVC",
    label: "AVC",
  },
  {
    id: "Mal de Parkinson",
    label: "Mal de Parkinson",
  },
  {
    id: "Depressão",
    label: "Depressão",
  },
  {
    id: "Alzheimer",
    label: "Alzheimer",
  },
  {
    id: "Fibromialgia",
    label: "Fibromialgia",
  },
  {
    id: "Doença de Chagas",
    label: "Doença de Chagas",
  },
  {
    id: "Sopro",
    label: "Sopro",
  },
  {
    id: "Fístula Perineal",
    label: "Fístula Perineal",
  },
  {
    id: "Hidrocefalia",
    label: "Hidrocefalia",
  },
  {
    id: "Gastrite",
    label: "Gastrite",
  },
  {
    id: "Doença de Cronh",
    label: "Doença de Cronh",
  },
  {
    id: "Anemia falciforme",
    label: "Anemia falciforme",
  },
  {
    id: "Lupus",
    label: "Lupus",
  },
  {
    id: "Megacolon congênito",
    label: "Megacolon congênito",
  },
  {
    id: "DVE",
    label: "DVE",
  },
  {
    id: "Asma",
    label: "Asma",
  },
  {
    id: "Epilepsia",
    label: "Epilepsia",
  },
  {
    id: "Pneumonia recorrente",
    label: "Pneumonia recorrente",
  },
  {
    id: "Caquexia",
    label: "Caquexia",
  },
  {
    id: "Paciente especial",
    label: "Paciente especial",
  },
];

const optionsConvenioPaciente = [
  {
    id: "Amil",
    label: "Amil",
  },
  {
    id: "Unimed",
    label: "Unimed",
  },
  {
    id: "Outro",
    label: "Outro",
  },
];

const optionsEscolaridadePaciente = [
  {
    id: "Ausente",
    label: "Ausente",
  },
  {
    id: "Ensino Fundamental",
    label: "Ensino Fundamental",
  },
  {
    id: "Ensino Médio",
    label: "Ensino Médio",
  },
  {
    id: "Ensino Superior",
    label: "Ensino Superior",
  },
];

const optionsProfissaoPaciente = [
  {
    id: "Placeholder 1",
    label: "Placeholder 1",
  },
  {
    id: "Placeholder 2",
    label: "Placeholder 2",
  },
];

const optionsMobilidadePaciente = [
  {
    id: "Deambula",
    label: "Deambula",
  },
  {
    id: "Deambula com auxílio",
    label: "Deambula com auxílio",
  },
  {
    id: "Não deambula",
    label: "Não deambula",
  },
];

const optionsRendaPaciente = [
  {
    id: "<1 salário mínimo",
    label: "<1 salário mínimo",
  },
  {
    id: "Entre 1 e 2 salários mínimos",
    label: "Entre 1 e 2 salários mínimos",
  },
  {
    id: "Entre 2 e 3 salários mínimos",
    label: "Entre 2 e 3 salários mínimos",
  },
  {
    id: "Entre 3 e 4 salários mínimos",
    label: "Entre 3 e 4 salários mínimos",
  },
  {
    id: ">4 salários mínimos",
    label: ">4 salários mínimos",
  },
];

const optionsMotivoInatividadePaciente = [
  {
    id: "Óbito",
    label: "Óbito",
  },
  {
    id: "Transferência",
    label: "Transferência",
  },
  {
    id: "Abandono",
    label: "Abandono",
  },
];

export const FormPaciente = ({ control, mode, watch }) => {
  const inativo = watch("ativo");
  return (
    <>
      {mode === "edit" && (
        <SwitchElement label="Ativo" name="ativo" control={control} />
      )}

      {inativo ? (
        <></>
      ) : (
        <SelectElement
          label="Motivo da inatividade"
          name="motivoInatividade"
          control={control}
          required
          rules={{
            required: "Campo obrigatório",
          }}
          options={optionsMotivoInatividadePaciente}
        />
      )}

      <TextFieldElement
        label="Nome"
        name="nome"
        control={control}
        required
        rules={{
          required: "Campo obrigatório",
          pattern: {
            value: /^[a-zA-ZÀ-ú\s]+( [a-zA-ZÀ-ú\s]+)+$/i,
            message: "Nome deve ser completo e válido",
          },
        }}
      />

      <TextFieldElement
        label="Cartão Nacional de Saúde"
        name="cns"
        control={control}
        required
        rules={{
          required: "Campo obrigatório",
          pattern: {
            value: /^\d{15}$/,
            message: "CNS deve conter 15 dígitos",
          },
        }}
      />

      <CheckboxElement
        label="Participa da Estratégia Saúde da Família?"
        name="esf"
        control={control}
      />

      <RadioButtonGroup
        label={"Sexo"}
        name={"sexo"}
        control={control}
        required
        rules={{ required: "Campo obrigatório" }}
        options={optionsSexoPaciente}
        row
      />

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePickerElement
          label="Data de Nascimento"
          name="dataNasc"
          control={control}
          required
          rules={{ required: "Campo obrigatório" }}
          disableFuture
        />
      </LocalizationProvider>

      <RadioButtonGroup
        label="Recadastro"
        name="recadastro"
        control={control}
        required
        rules={{ required: "Campo obrigatório" }}
        options={optionsRecadastroPaciente}
      />

      <TextFieldElement
        label="Telefone"
        name="tel"
        control={control}
        required
        rules={{
          required: "Campo obrigatório",
          pattern: {
            value: /^\d{10,11}$/,
            message: "Telefone deve conter 10 ou 11 dígitos",
          },
        }}
      />

      <AutocompleteElement
        label="Condições clínicas e fatores associados"
        name="condicoes"
        control={control}
        options={optionsCondicoesPaciente}
        multiple
      />

      <SelectElement
        label="Convênio"
        name="convenio"
        control={control}
        options={optionsConvenioPaciente}
      />

      <SelectElement
        label="Escolaridade"
        name="escolaridade"
        control={control}
        options={optionsEscolaridadePaciente}
      />

      <SelectElement
        label="Profissão"
        name="profissao"
        control={control}
        options={optionsProfissaoPaciente}
      />

      <SelectElement
        label="Renda"
        name="renda"
        control={control}
        options={optionsRendaPaciente}
      />

      <RadioButtonGroup
        label="Mobilidade"
        name="mobilidade"
        control={control}
        required
        rules={{ required: "Campo obrigatório" }}
        options={optionsMobilidadePaciente}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePickerElement
          label="Data de Inscrição"
          name="dataInsc"
          control={control}
          required
          rules={{ required: "Campo obrigatório" }}
          disableFuture
        />
      </LocalizationProvider>
    </>
  );
};
