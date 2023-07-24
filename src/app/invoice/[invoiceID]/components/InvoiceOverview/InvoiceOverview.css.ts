import { style } from "@vanilla-extract/css";
import { themeVars, vars } from "@/styles/themes.css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: themeVars.colour.background.card,
  paddingBlock: "1.5rem",
  paddingInline: linearInterpolation(24, 32, 375, 768),
  borderRadius: vars.border.s,
  fontSize: vars.font.size.xs,
  color: themeVars.colour.text.heading,
  boxShadow: vars.shadow.m,

  "@media": {
    "(min-width: 600px)": {
      justifyContent: "start",
      gap: "1.25rem",
    },
  },
});
