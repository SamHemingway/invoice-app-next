import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars, vars } from "@/styles/themes.css";

export const wrapper = style({
  blockSize: "var(--size)",
  inlineSize: "var(--size)",
  cursor: "pointer",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",

  selectors: {
    "&:focus": {
      outline: "none",
    },
  },
});

globalStyle(`${wrapper} > svg`, {
  display: "block",
  strokeWidth: "var(--stroke-width)",
});

globalStyle(`${wrapper} > svg > path`, {
  display: "block",
  strokeWidth: "var(--stroke-width)",
  fill: vars.colour.primary[400],
});
