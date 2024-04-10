function toggleMenu(toggleBtn) {
  var icon = toggleBtn.querySelector("ion-icon");
  var menuContent = toggleBtn.nextElementSibling;

  if (icon.name === "caret-down-outline") {
    icon.name = "caret-up-outline"; // Troca para a seta para cima
  } else {
    icon.name = "caret-down-outline"; // Troca para a seta para baixo
  }

  menuContent.style.display =
    menuContent.style.display === "block" ? "none" : "block";
}
