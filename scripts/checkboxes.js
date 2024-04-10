function texto(id, novoTexto) {
  // Encontra o elemento input pelo seu ID
  var checkbox = document.getElementById(id);

  // Encontra o elemento label que está imediatamente após o input
  var label = checkbox.nextElementSibling;

  // Verifica se o label existe e tem o atributo for correspondente ao id do input
  if (label && label.tagName === "LABEL" && label.getAttribute("for") === id) {
    // Define o novo texto usando o atributo data-content, mas somente altera o visual quando marcado
    label.setAttribute("data-content", novoTexto);
  }
}
