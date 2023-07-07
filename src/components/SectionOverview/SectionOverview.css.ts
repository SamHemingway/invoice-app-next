import { style } from "@vanilla-extract/css";
import { themeVars, vars } from "@/styles/themes.css";

export const wrapper = style({
  display: "flex",
  gap: 8,
  alignItems: "center",
});

export const headingWrapper = style({
  display: "flex",
  flexDirection: "column",
  marginInlineEnd: "auto",
});

export const heading = style({
  color: themeVars.colour.text.heading,
  fontSize: vars.font.size.xl,
  lineHeight: "1.38rem",
});

export const subheading = style({
  fontSize: "0.8125rem",
});
