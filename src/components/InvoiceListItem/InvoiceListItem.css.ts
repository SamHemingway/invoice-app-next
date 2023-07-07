import { style, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars, vars } from "@/styles/themes.css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const wrapper = style({
  background: themeVars.colour.background.card,
  boxShadow: "0px 10px 10px -10px rgba(72, 84, 159, 0.10)",
  padding: linearInterpolation(24, 32),
  borderRadius: vars.border.s,
  fontSize: vars.font.size.xs,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateAreas: `
    'invoiceNum clientName'
    'dueDate status'
    'amountDue status'
  `,
  alignItems: "center",
  gap: "1.5rem",

  "@media": {
    "screen and (min-width: 601px)": {
      gridTemplateColumns: "repeat(5, 1fr)",
      gridTemplateAreas: "revert",
      alignItems: "center",
    },
  },
});

export const invoiceNumber = style({
  color: themeVars.colour.text.heading,
  fontSize: vars.font.size.s,
  letterSpacing: "-0.015625rem",
  gridArea: "invoiceNum",

  "@media": {
    "screen and (min-width: 601px)": {
      gridArea: "revert",
    },
  },

  selectors: {
    "&::before": {
      content: "#",
      color: themeVars.colour.text.secondary,
    },
  },
});

export const clientName = style({
  color: themeVars.colour.text.heading,
  gridArea: "clientName",
  justifySelf: "end",

  "@media": {
    "screen and (min-width: 601px)": {
      gridArea: "revert",
      justifySelf: "revert",
    },
  },
});

export const dueDate = style({
  gridArea: "dueDate",
  marginBlockEnd: "-1.25rem",

  "@media": {
    "screen and (min-width: 601px)": {
      gridArea: "revert",
      marginBlockEnd: "0",
    },
  },
});

export const amountDue = style({
  color: themeVars.colour.text.heading,
  fontWeight: vars.font.weight.bold,
  gridArea: "amountDue",

  "@media": {
    "screen and (min-width: 601px)": {
      gridArea: "revert",
    },
  },
});

export const statusWrapper = recipe({
  base: {
    inlineSize: "6.25rem",
    blockSize: "2.5rem",
    fontSize: vars.font.size.s,
    textTransform: "capitalize",
    borderRadius: vars.border.xs,
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: vars.font.weight.bold,
    alignSelf: "end",
    gridArea: "status",
    justifySelf: "end",

    "@media": {
      "screen and (min-width: 601px)": {
        gridArea: "revert",
        alignSelf: "revert",
      },
    },
  },

  variants: {
    status: {
      paid: {
        backgroundColor: vars.colour.state.transparent.success,
        color: vars.colour.state.success,
      },
      pending: {
        backgroundColor: vars.colour.state.transparent.warning,
        color: vars.colour.state.warning,
      },
      draft: {
        backgroundColor: themeVars.colour.background.cardSubdued,
      },
    },
  },
});

export const statusCircleWrapper = style({
  inlineSize: "0.5rem",
  aspectRatio: "1/1",
});

export const statusCircle = style({
  fill: "currentcolor",
});
