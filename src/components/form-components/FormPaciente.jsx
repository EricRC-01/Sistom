import {
  AutocompleteElement,
  CheckboxButtonGroup,
  CheckboxElement,
  MultiSelectElement,
  RadioButtonGroup,
  SelectElement,
  SwitchElement,
  TextFieldElement,
} from "react-hook-form-mui";

import { TextField } from "@mui/material";

import { DatePickerElement } from "react-hook-form-mui/date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { Controller } from "react-hook-form";
import { Button } from "@mui/material";

import { MuiFileInput } from "mui-file-input";

import InputFileUpload from "components/InputFileUpload";

//import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
//SUS, Unimed, Humana, Amil, Medplan, GEAP, PLAMTA, IASPI/IAPEP, Intermédica, Hapvida

const optionsConvenioPaciente = [
  {
    id: "Unimed",
    label: "Unimed",
  },
  {
    id: "Humana",
    label: "Humana",
  },
  {
    id: "Amil",
    label: "Amil",
  },
  {
    id: "Medplan",
    label: "Medplan",
  },
  {
    id: "GEAP",
    label: "GEAP",
  },
  {
    id: "PLAMTA",
    label: "PLAMTA",
  },
  {
    id: "IASPI/IAPEP",
    label: "IASPI/IAPEP",
  },
  {
    id: "Intermédica",
    label: "Intermédica",
  },
  {
    id: "Hapvida",
    label: "Hapvida",
  },
  {
    id: "SUS",
    label: "SUS",
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

import { useData } from "contexts/PocketContext";
import { Key } from "@mui/icons-material";

// Território : 27 unidades federativas: SP, RJ, PI...
// Mesorregiao:
// Microrregião:
// Município:

export const FormPaciente = ({ control, mode, watch, setValue }) => {
  const inativo = watch("ativo");
  const territorioSelecionado = watch("territorio");
  const mesorregiaoSelecionado = watch("mesorregiao");
  const microrregiaoSelecionado = watch("microrregiao");

  const { data: territorio } = useData({
    tabela: "territorio",
  });

  const { data: mesorregiao } = useData({
    tabela: "mesorregiao",
    filtro: territorioSelecionado ? JSON.parse(territorioSelecionado).id : "",
  });

  const { data: microrregiao } = useData({
    tabela: "microrregiao",
    filtro: mesorregiaoSelecionado ? JSON.parse(mesorregiaoSelecionado).id : "",
  });

  const { data: municipio } = useData({
    tabela: "municipio",
    filtro: microrregiaoSelecionado
      ? JSON.parse(microrregiaoSelecionado).id
      : "",
  });

  console.log(watch("condicoes"));

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
          inputProps={{
            "aria-required": "true",
            "aria-role": "combobox",
            "aria-label": "Motivo da inatividade",
          }}
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
        inputProps={{
          "aria-required": "true",
          "aria-label": "Nome",
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
        inputProps={{
          "aria-required": "true",
          "aria-label": "Cartão Nacional de Saúde",
        }}
      />

      <CheckboxElement
        label="Participa da Estratégia Saúde da Família?"
        name="esf"
        control={control}
        inputProps={{
          "aria-label": "Participa da Estratégia Saúde da Família?",
        }}
      />

      <RadioButtonGroup
        label={"Sexo"}
        name={"sexo"}
        control={control}
        required
        rules={{ required: "Campo obrigatório" }}
        options={optionsSexoPaciente}
        row
        inputProps={{
          "aria-required": "true",
          "aria-label": "Sexo",
        }}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePickerElement
          label="Data de Nascimento"
          name="dataNasc"
          control={control}
          required
          rules={{ required: "Campo obrigatório" }}
          disableFuture
          inputProps={{
            "aria-required": "true",
            "aria-label": "Data de Nascimento",
          }}
        />
      </LocalizationProvider>

      <RadioButtonGroup
        label="Recadastro"
        name="recadastro"
        control={control}
        required
        rules={{ required: "Campo obrigatório" }}
        options={optionsRecadastroPaciente}
        inputProps={{
          "aria-required": "true",
          "aria-label": "Recadastro",
        }}
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
        inputProps={{
          "aria-required": "true",
          "aria-label": "Telefone",
        }}
      />

      <MultiSelectElement
        label="Condições clínicas e fatores associados"
        name="condicoes"
        control={control}
        options={optionsCondicoesPaciente}
        multiple
        /* inputProps={{
          "aria-multiselectable": "true",
          "aria-role": "combobox",
          "aria-label": "Condições clínicas e fatores associados",
        }} */
      />

      <SelectElement
        label="Convênio"
        name="convenio"
        control={control}
        options={optionsConvenioPaciente}
        inputProps={{
          "aria-role": "combobox",
          "aria-label": "Convênio",
        }}
      />

      <SelectElement
        label="Escolaridade"
        name="escolaridade"
        control={control}
        options={optionsEscolaridadePaciente}
        inputProps={{
          "aria-role": "combobox",
          "aria-label": "Escolaridade",
        }}
      />

      <TextFieldElement label="Profissão" name="profissao" control={control} />

      <SelectElement
        label="Renda"
        name="renda"
        control={control}
        options={optionsRendaPaciente}
        inputProps={{
          "aria-role": "combobox",
          "aria-label": "Renda",
        }}
      />

      <RadioButtonGroup
        label="Mobilidade"
        name="mobilidade"
        control={control}
        required
        rules={{ required: "Campo obrigatório" }}
        options={optionsMobilidadePaciente}
        inputProps={{
          "aria-required": "true",
          "aria-role": "combobox",
          "aria-label": "Mobilidade",
        }}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePickerElement
          label="Data de Inscrição"
          name="dataInsc"
          control={control}
          required
          rules={{ required: "Campo obrigatório" }}
          disableFuture
          inputProps={{
            "aria-required": "true",
            "aria-label": "Data de Inscrição",
          }}
        />
      </LocalizationProvider>

      <SelectElement
        label="Território"
        name="territorio"
        control={control}
        options={
          territorio
            ? territorio
                .map((item) => ({
                  id: JSON.stringify({ id: item.id, nome: item.nome }),
                  label: item.nome,
                }))
                .sort((a, b) => a.label.localeCompare(b.label))
            : []
        }
        onChange={() => {
          setValue("mesorregiao", "");
          setValue("microrregiao", "");
          setValue("municipio", "");
        }}
        required
        rules={{ required: "Campo obrigatório" }}
      />

      <SelectElement
        label="Mesorregião"
        name="mesorregiao"
        control={control}
        options={
          mesorregiao
            ? mesorregiao
                .map((item) => ({
                  id: JSON.stringify({ id: item.id, nome: item.nome }),
                  label: item.nome,
                }))
                .sort((a, b) => a.label.localeCompare(b.label))
            : []
        }
        onChange={() => {
          setValue("microrregiao", "");
          setValue("municipio", "");
        }}
        required
        rules={{ required: "Campo obrigatório" }}
        disabled={!territorioSelecionado}
      />

      <SelectElement
        label="Micorregião"
        name="microrregiao"
        control={control}
        options={
          microrregiao
            ? microrregiao
                .map((item) => ({
                  id: JSON.stringify({ id: item.id, nome: item.nome }),
                  label: item.nome,
                }))
                .sort((a, b) => a.label.localeCompare(b.label))
            : []
        }
        onChange={() => {
          setValue("municipio", "");
        }}
        required
        rules={{ required: "Campo obrigatório" }}
        disabled={!mesorregiaoSelecionado}
      />

      <SelectElement
        label="Município"
        name="municipio"
        control={control}
        options={
          municipio
            ? municipio
                .map((item) => ({
                  id: JSON.stringify({ id: item.id, nome: item.nome }),
                  label: item.nome,
                }))
                .sort((a, b) => a.label.localeCompare(b.label))
            : []
        }
        required
        rules={{ required: "Campo obrigatório" }}
        disabled={!microrregiaoSelecionado}
      />

      <Controller
        name="pfp"
        control={control}
        render={({ field, fieldState }) => (
          <MuiFileInput
            {...field}
            helperText={fieldState.invalid ? "File is invalid" : ""}
            error={fieldState.invalid}
            label="Foto do Paciente"
          />
        )}
      />
    </>
  );
};
