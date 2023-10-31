"use client";

import { ThemeProvider as Provider } from "next-themes";
import { lightTheme, darkTheme } from "@/styles/themes.css";

function ThemeProvider({ children }) {
  return (
    <Provider
      attribute="class"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
      themes={["light", "dark"]}
    >
      {children}
    </Provider>
  );
}

export default ThemeProvider;
