import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/themes.css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const wrapper = style({
  background: themeVars.colour.background.header,
  inlineSize: "100%",
  blockSize: linearInterpolation(72, 100, 375, 900),
  display: "flex",

  "@media": {
    "screen and (min-width: 900px)": {
      flexDirection: "column",
      inlineSize: "6.25rem",
      blockSize: "100%",
      borderTopRightRadius: 28,
      borderBottomRightRadius: 28,
      position: "fixed",
      top: 0,
    },
  },
});

export const logoWrapper = style({
  blockSize: "100%",
  aspectRatio: "1/1",
  marginInlineEnd: "auto",
  lineHeight: 0,

  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${themeVars.colour.icon}`,
    },
  },

  "@media": {
    "screen and (min-width: 900px)": {
      blockSize: "revert",
      inlineSize: "100%",
      marginBlockEnd: "auto",
    },
  },
});
