import { style } from "@vanilla-extract/css";
import { themeVars, vars } from "@/styles/themes.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  flex: 1,
  minInlineSize: "9rem",
  position: "relative",
});

export const inputLabel = style({
  fontSize: vars.font.size.xs,
  color: themeVars.colour.text.secondary,
});

export const input = style({
  background: themeVars.colour.background.card,
  border: `1px solid ${themeVars.colour.border.form}`,
  fontWeight: vars.font.weight.bold,
  fontSize: vars.font.size.s,
  borderRadius: vars.border.xs,
  padding: "1rem",
  lineHeight: 0,
  textAlign: "left",
});

export const iconEl = style({
  position: "absolute",
  top: 44,
  right: 16,
  pointerEvents: "none",
});
