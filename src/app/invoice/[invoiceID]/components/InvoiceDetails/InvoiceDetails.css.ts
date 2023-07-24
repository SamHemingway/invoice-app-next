import { style } from "@vanilla-extract/css";
import { themeVars, vars } from "@/styles/themes.css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const wrapper = style({
  background: themeVars.colour.background.card,
  padding: linearInterpolation(24, 32, 375, 768),
  borderRadius: vars.border.s,
  fontSize: vars.font.size.xs,
  display: "flex",
  flexDirection: "column",
  gap: linearInterpolation(32, 48, 375, 768),
  marginBlockEnd: "6rem",
  boxShadow: vars.shadow.m,
  color: themeVars.colour.text.secondary,

  "@media": {
    "(min-width: 600px)": {
      marginBlockEnd: "revert",
    },
  },
});

export const mainDetails = style({
  display: "flex",
  justifyContent: "space-between",
});

export const extraDetails = style({
  display: "flex",
  flexWrap: "wrap",
  gap: linearInterpolation(60, 120, 375, 768),
});

export const address = style({
  textAlign: "right",
});

export const dataSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const dataSectionTitle = style({
  fontSize: vars.font.size.xs,
  color: themeVars.colour.text.heading,
  marginBlockEnd: "0.75rem",
  lineHeight: 1,
});
