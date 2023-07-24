import { style } from "@vanilla-extract/css";
import { themeVars, vars } from "@/styles/themes.css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const linkWrapper = style({
  textDecoration: "none",
  color: "inherit",
  borderRadius: vars.border.s,
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.colour.primary[400]}`,
      outlineOffset: 5,
    },
  },
});

export const wrapper = style({
  background: themeVars.colour.background.card,
  boxShadow: vars.shadow.m,
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
  outline: `1px solid transparent`,
  transition: "outline 500ms",

  "@media": {
    "screen and (min-width: 601px)": {
      gridTemplateColumns: "repeat(5, 1fr)",
      gridTemplateAreas: "revert",
      alignItems: "center",
    },
  },

  selectors: {
    "&:hover": {
      outline: `1px solid ${vars.colour.primary[400]}`,
      transition: "outline 100ms",
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
