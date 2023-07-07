import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "@/styles/themes.css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const wrapper = style({
  alignSelf: "center",
  background: "none",
  border: "none",
  padding: "0",
  inlineSize: linearInterpolation(72, 100),
  aspectRatio: "1/1",
  borderInlineStart: `1px solid ${themeVars.colour.divider}`,
  cursor: "pointer",
  transitionProperty: "background",
  transitionDuration: "200ms",

  "@media": {
    "screen and (min-width: 900px)": {
      inlineSize: "100%",
      blockSize: "6.5rem",
      borderInlineStart: "none",
      borderBlockStart: `1px solid ${themeVars.colour.divider}`,
      borderBottomRightRadius: "28px",
    },
  },

  selectors: {
    "&:focus-visible": {
      border: `2px solid ${themeVars.colour.focus}`,
      outline: "none",
      background: themeVars.colour.background.headerButton,
    },

    "&:hover": {
      background: themeVars.colour.background.headerButton,
    },
  },
});

globalStyle(`${wrapper}:hover img`, {
  filter: "saturate(120%) brightness(120%)",
});

globalStyle(`${wrapper}:focus-visible img`, {
  filter: "saturate(120%) brightness(120%)",
});

export const avatar = style({
  inlineSize: "45%",
  blockSize: "45%",
  margin: "auto",
  borderRadius: "50%",
  transition: "filter 200ms",

  "@media": {
    "screen and (min-width: 900px)": {
      inlineSize: "2.5rem",
      blockSize: "2.5rem",
    },
  },
});
