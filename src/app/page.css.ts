import { style } from "@vanilla-extract/css";
import { themeVars, vars } from "@/styles/themes.css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const mainWrapper = style({
  marginBlock: vars.size.xl,
  marginInline: linearInterpolation(24, 48),
  display: "flex",
  flexDirection: "column",
  gap: linearInterpolation(32, 64),

  "@media": {
    "screen and (min-width: 900px)": {
      marginInline: "auto",
      inlineSize: "45.625rem",
    },
  },
});

export const layout = style({
  display: "flex",
  flexDirection: "column",

  "@media": {
    "screen and (min-width: 900px)": {
      flexDirection: "row",
      blockSize: "100vh",
    },
  },
});
