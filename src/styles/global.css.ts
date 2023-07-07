import { globalStyle } from "@vanilla-extract/css";
import { themeVars, vars } from "./themes.css";

globalStyle("html", {
  vars: {
    backgroundColor: themeVars.colour.background.page,
    transitionProperty: "background, color",
    transitionDuration: "var(--theme-transition-speed)",
    color: themeVars.colour.text.body,
  },
});
