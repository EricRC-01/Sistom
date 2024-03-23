// Função para adicionar a máscara do cartão SUS
function mascaraCartaoSUS(campoCartao) {
  campoCartao.value = campoCartao.value
    .replace(/\D/g, "") // Remove caracteres não numéricos
    .replace(/(\d{3})(\d)/, "$1 $2") // Adiciona o primeiro espaço
    .replace(/(\d{4})(\d)/, "$1 $2") // Adiciona o segundo espaço
    .replace(/(\d{4})(\d)/, "$1 $2"); // Adiciona o terceiro espaço
}

function mascaraCPF(campoCPF) {
  campoCPF.value = campoCPF.value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2");
}

function mascaraTelefone(campoTelefone) {
  campoTelefone.value = campoTelefone.value
    .replace(/\D/g, "") // Remove todos os caracteres que não são dígitos
    .replace(/^(\d{2})(\d)/, "($1) $2") // Coloca parênteses em volta dos dois primeiros dígitos
    .replace(/(\d{4})(\d)/, "$1-$2") // Adiciona o hífen depois dos quatro dígitos seguintes (fixo)
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3"); // Ajusta o hífen para a posição correta em números de celular
}
function mascaraCEP(campoCEP) {
  campoCEP.value = campoCEP.value
    .replace(/\D/g, "") // Remove todos os caracteres que não são dígitos
    .replace(/^(\d{5})(\d)/, "$1-$2");
}

function openSection(evt, sectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("paginacao");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Chame esta função para abrir a primeira tab por padrão ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
});

function showHideInput(selectId, inputId) {
  var selectElement = document.getElementById(selectId);
  var inputContainer = document.getElementById(inputId);
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption === "i") {
    inputContainer.style.display = "flex";
  } else {
    inputContainer.style.display = "none";
  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

// Chamada de funções ao carregar
openSection(event, "paciente");

showHideInput("tempo_estoma", "causa");
