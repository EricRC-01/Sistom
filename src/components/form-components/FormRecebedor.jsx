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
      />

      <RadioButtonGroup
        label={"Sexo"}
        name={"sexo"}
        control={control}
        required
        rules={{ required: "Campo obrigatório" }}
        options={optionsSexoRecebedor}
        row
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

      <SelectElement
        label="Órgão Receptor"
        name="orgao"
        control={control}
        options={optionsOrgaoRecebedor}
      />
    </>
  );
};
