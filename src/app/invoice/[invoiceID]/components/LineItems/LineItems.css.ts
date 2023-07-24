import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars, vars } from "@/styles/themes.css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const table = style({
  borderCollapse: "collapse",
  background: themeVars.colour.background.cardSubdued,
  inlineSize: "100%",
  borderRadius: vars.border.s,
  fontSize: vars.font.size.s,
  color: vars.themeVars.colour.text.secondary,
  tableLayout: "fixed",
});

export const row = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: linearInterpolation(24, 32, 375, 768),
  fontWeight: vars.font.weight.bold,

  "@media": {
    "(min-width: 601px)": {
      display: "revert",
    },
  },
});

export const strong = style({
  fontWeight: vars.font.weight.bold,
  color: vars.themeVars.colour.text.heading,
});

export const summary = style({
  background: themeVars.colour.background.cardStrong,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  padding: linearInterpolation(24, 32, 375, 768),
  borderBottomLeftRadius: vars.border.s,
  borderBottomRightRadius: vars.border.s,
  color: "white",

  "@media": {
    "(min-width: 600px)": {
      display: "revert",
    },
  },
});

export const total = style({
  fontSize: "1.5rem",
  fontWeight: vars.font.weight.bold,
  textAlign: "right",
  borderBottomRightRadius: vars.border.s,

  "@media": {
    "(min-width: 600px)": {
      padding: linearInterpolation(24, 32, 375, 768),
      paddingInlineStart: 0,
    },
  },
});

export const tableHeader = style({
  display: "none",
  color: themeVars.colour.text.heading,
  fontWeight: vars.font.weight.regular,
  fontSize: vars.font.size.xs,

  "@media": {
    "(min-width: 600px)": {
      display: "revert",
    },
  },
});

export const quantityColumn = style({
  textAlign: "center",
  color: themeVars.colour.text.heading,
  inlineSize: "10%",
});

export const priceColumn = style({
  textAlign: "right",
  color: themeVars.colour.text.heading,
  inlineSize: "15%",
});

export const amountDue = style({
  "@media": {
    "(min-width: 600px)": {
      padding: linearInterpolation(24, 32, 375, 768),
      paddingInlineEnd: 0,
      borderBottomLeftRadius: vars.border.s,
    },
  },
});

globalStyle(`${tableHeader} th`, {
  fontWeight: vars.font.weight.regular,
  paddingBlock: "2rem",
});

globalStyle(`${tableHeader} th:first-of-type`, {
  textAlign: "left",
  paddingInlineStart: "2rem",
});

globalStyle(`${tableHeader} th:last-of-type`, {
  textAlign: "right",
  paddingInlineEnd: "2rem",
  inlineSize: "25%",
});

globalStyle(`${row} td`, {
  "@media": {
    "(min-width: 600px)": {
      paddingBlockEnd: "2rem",
    },
  },
});

globalStyle(`${row} td:first-of-type`, {
  "@media": {
    "(min-width: 600px)": {
      paddingInlineStart: "2rem",
    },
  },
});

globalStyle(`${row} td:last-of-type`, {
  "@media": {
    "(min-width: 600px)": {
      textAlign: "right",
      paddingInlineEnd: "2rem",
    },
  },
});
