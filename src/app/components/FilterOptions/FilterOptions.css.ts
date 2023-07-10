import { style, globalStyle } from "@vanilla-extract/css";
import { vars, themeVars } from "@/styles/themes.css";

export const formWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.125rem",
  minInlineSize: "9rem",
});

export const optionWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

export const input = style({
  appearance: "none",
  background: themeVars.colour.input.background,
  margin: 0,
  font: "inherit",
  color: "currentColor",
  width: "1em",
  height: "1em",
  border: `0.1em solid`,
  borderColor: "transparent",
  borderRadius: "0.15em",
  transform: "translateY(-0.075em)",
  display: "grid",
  placeContent: "center",
  selectors: {
    "&:checked": {
      background: vars.colour.primary[400],
    },

    "&:checked::before": {
      content: "",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='11' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 4.5l2.124 2.124L8.97 1.28' stroke='%23FFF' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "0.65em",
      backgroundPosition: "0.15em 0.25em",
      blockSize: "1em",
      inlineSize: "1em",
    },
  },
});

export const label = style({
  fontWeight: vars.font.weight.bold,
  flex: 1,
  userSelect: "none",
});

globalStyle(`${optionWrapper}:hover input`, {
  borderColor: vars.colour.primary[400],
});

globalStyle(`${optionWrapper}:hover label`, {
  color: themeVars.colour.text.heading,
});
