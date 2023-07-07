import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "@/styles/themes.css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const wrapper = style({
  background: "none",
  border: "none",
  padding: "0",
  inlineSize: linearInterpolation(72, 100),
  blockSize: "100%",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media": {
    "screen and (min-width: 900px)": {
      inlineSize: "100%",
      blockSize: "6.5rem",
      borderInlineStart: "none",
    },
  },

  transitionProperty: "fill, background",
  transitionDuration: "200ms",

  selectors: {
    "&:hover": {
      background: themeVars.colour.background.headerButton,
    },

    "&:focus-visible": {
      border: `2px solid ${themeVars.colour.focus}`,
      outline: "none",
      background: themeVars.colour.background.headerButton,
    },
  },
});

globalStyle(`${wrapper} svg path`, {
  transition: "fill 200ms",
});

globalStyle(`${wrapper}:hover svg path`, {
  fill: "white",
  transition: "fill 200ms",
});

globalStyle(`${wrapper}:focus-visible svg path`, {
  fill: "white",
  transition: "fill 200ms",
});

export const path = style({
  fill: themeVars.colour.icon,
});
