export const paciente = [
  {
    name: "nome",
    label: "Nome",
    required: true,
    pattern: /^[a-zA-ZÀ-ú\s]+( [a-zA-ZÀ-ú\s]+)+$/i,
  },
  {
    name: "cns",
    label: "CNS",
    required: true,
    pattern: /^\d{15}$/,
  },
  { name: "esf", label: "Usa ESF?" },
  { name: "cinto", label: "Usa cinto de sustentação?" },
  {
    name: "sexo",
    label: "Sexo",
    required: true,
    options: ["Masculino", "Feminino"],
  },
  { name: "dataNasc", label: "Data de Nascimento", required: true },
  {
    name: "recadastro",
    label: "Forma de Recadastro",
    required: true,
    options: ["Presencial", "Remoto"],
  },
  {
    name: "tel",
    label: "Telefone",
    required: true,
    pattern: /^\d{10,11}$/,
  },
  {
    name: "convenio",
    label: "Convênio",
    required: true,
    options: ["Amil", "Unimed", "Outro"],
  },
  {
    name: "profissao",
    label: "Profissão",
    options: ["Placeholder 1", "Placeholder 2"],
  },
  {
    name: "mobilidade",
    label: "Mobilidade",
    required: true,
    options: ["Deambula", "Deambula com auxílio", "Não deambula"],
  },
  {},
];
