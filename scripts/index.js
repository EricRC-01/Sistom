function toggleMenu(toggleBtn) {
  var menuContent = toggleBtn.nextElementSibling;
  menuContent.style.display =
    menuContent.style.display === "block" ? "none" : "block";
}
