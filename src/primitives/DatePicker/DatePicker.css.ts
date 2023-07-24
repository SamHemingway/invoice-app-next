import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars, vars } from "@/styles/themes.css";

export const day = style({
  inlineSize: "90%",
  blockSize: "90%",
  borderRadius: 9999,
});

export const selectedDay = style({
  backgroundColor: themeVars.colour.focus,
  color: vars.colour.mono[100],

  selectors: {
    "&:hover": {
      backgroundColor: "red",
    },
  },
});

globalStyle(`.rdp-button:hover:not([disabled]):not(.rdp-day_selected)`, {
  backgroundColor: themeVars.colour.background.scrollbar,
});

globalStyle(`.rdp-button:focus-visible:not([disabled])`, {
  backgroundColor: themeVars.colour.background.scrollbar,
  border: `2px solid ${themeVars.colour.focus}`,
});

globalStyle(`.rdp-button:hover:not([disabled])`, {
  backgroundColor: themeVars.colour.background.scrollbar,
  border: `2px solid ${themeVars.colour.focus}`,
});
