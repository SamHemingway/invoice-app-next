import { style } from "@vanilla-extract/css";
import { themeVars, vars } from "@/styles/themes.css";

export const wrapper = style({
  color: themeVars.colour.text.heading,
  gridArea: "invoiceNum",

  "@media": {
    "screen and (min-width: 601px)": {
      gridArea: "revert",
    },
  },

  selectors: {
    "&::before": {
      content: "#",
      color: themeVars.colour.text.secondary,
    },
  },
});
