function toggleDarkMode() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute("data-theme");

  if (currentTheme === "dark") {
    // Mudar para tema claro
    root.setAttribute("data-theme", "light");
  } else {
    // Mudar para tema escuro
    root.setAttribute("data-theme", "dark");
  }
}

toggleDarkMode();
toggleDarkMode();
