export function formatDate(isoDateString) {
  // Cria um objeto Date a partir da string ISO
  const date = new Date(isoDateString);

  // Obtém o dia, mês e ano
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Mês é zero-indexado
  const year = date.getFullYear();

  // Retorna a data no formato DD/MM/AAAA
  return `${day}/${month}/${year}`;
}

export function formatDateTime(isoDateString) {
  // Cria um objeto Date a partir da string ISO
  const date = new Date(isoDateString);

  // Obtém o dia, mês e ano
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Mês é zero-indexado
  const year = date.getFullYear();

  // Obtém as horas e minutos
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Formata a data no formato DD/MM/AAAA
  const formattedDate = `${day}/${month}/${year}`;

  // Formata o horário no formato HH:MM
  const formattedTime = `${hours}:${minutes}`;

  // Retorna a data e o horário formatados
  return `${formattedDate} ${formattedTime}`;
}

export function formatPhoneNumber(phoneNumber) {
  // Remove qualquer caractere não numérico da string
  phoneNumber = phoneNumber.replace(/\D/g, "");

  // Verifica o comprimento da string e aplica a formatação apropriada
  if (phoneNumber.length === 11) {
    return `(${phoneNumber.slice(0, 2)})${phoneNumber.slice(
      2,
      7
    )}-${phoneNumber.slice(7)}`;
  } else if (phoneNumber.length === 10) {
    return `(${phoneNumber.slice(0, 2)})${phoneNumber.slice(
      2,
      6
    )}-${phoneNumber.slice(6)}`;
  } else {
    // Retorna um erro ou mensagem caso a string não tenha 10 ou 11 dígitos
    return "Número de telefone inválido. Deve ter 10 ou 11 dígitos.";
  }
}

export function formatCPF(cpf) {
  // Converte o CPF para string se não for
  cpf = String(cpf);

  // Verifica se a string tem exatamente 11 dígitos
  if (cpf.length !== 11) {
    throw new Error("O CPF deve conter exatamente 11 dígitos.");
  }

  // Formata o CPF no formato 000.000.000-00
  const formattedCPF = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
    6,
    9
  )}-${cpf.slice(9, 11)}`;

  return formattedCPF;
}
