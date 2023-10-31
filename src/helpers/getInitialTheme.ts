function getInitialTheme(): string {
  const preference = window.localStorage.getItem("theme");
  const hasPersistedPreference = typeof preference === "string";

  if (hasPersistedPreference) {
    return preference;
  }

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";

  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }

  return "light";
}

const theme = getInitialTheme();

document.documentElement.classList.add(theme === "light" ? "light" : "dark");

window.localStorage.setItem("theme", theme);
