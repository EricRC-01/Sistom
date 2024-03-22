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

// Chamada de funções ao carregar
openSection(event, "paciente");

showHideInput("tempo_estoma", "causa");
