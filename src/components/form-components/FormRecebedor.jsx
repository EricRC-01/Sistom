import {
  RadioButtonGroup,
  TextFieldElement,
  SelectElement,
} from "react-hook-form-mui";

const optionsSexoRecebedor = [
  {
    id: "Masculino",
    label: "Masculino",
  },
  {
    id: "Feminino",
    label: "Feminino",
  },
];

const optionsOrgaoRecebedor = [
  {
    id: "Orgão 1",
    label: "Orgão 1",
  },
  {
    id: "Orgão 2",
    label: "Orgão 2",
  },
];

export const FormRecebedor = ({ control }) => {
  return (
    <>
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
          "aria-required":"true",
          "aria-label":"Nome",
        }}
      />

      <TextFieldElement
        label="CPF"
        name="cpf"
        control={control}
        required
        rules={{
          required: "Campo obrigatório",
          pattern: {
            value: /^\d{11}$/,
            message: "CPF deve conter 11 dígitos",
          },
        }}
        inputProps={{
          "aria-required":"true",
          "aria-label":"CPF",
        }}
      />

      <RadioButtonGroup
        label={"Sexo"}
        name={"sexo"}
        control={control}
        required
        rules={{ required: "Campo obrigatório" }}
        options={optionsSexoRecebedor}
        row
        inputProps={{
          "aria-required":"true",
          "aria-label":"Sexo",
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
          "aria-required":"true",
          "aria-label":"Telefone",
        }}
      />

      <SelectElement
        label="Órgão Receptor"
        name="orgao"
        control={control}
        options={optionsOrgaoRecebedor}
        inputProps={{
          "aria-role":"combobox",
          "aria-label":"Órgão Receptor",
        }}
      />
    </>
  );
};
