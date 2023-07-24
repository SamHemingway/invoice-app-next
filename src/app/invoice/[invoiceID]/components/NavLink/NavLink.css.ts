import { style, keyframes } from "@vanilla-extract/css";
import { vars, themeVars } from "@/styles/themes.css";

export const wrapper = style({
  background: "none",
  border: "none",
  display: "flex",
  gap: 8,
  paddingInlineStart: 0,
  paddingInlineEnd: "1.5rem",
  paddingBlockEnd: "1rem",
  fontWeight: vars.font.weight.bold,
  cursor: "pointer",
  inlineSize: "max-content",
});

const nudge = keyframes({
  "0%": {
    transform: "translateX(0px)",
  },
  "50%": {
    transform: "translateX(-5px)",
  },
  "100%": {
    transform: "translateX(0px)",
  },
});

export const iconWrapper = style({
  selectors: {
    [`${wrapper}:hover &`]: {
      animation: `${nudge} 500ms`,
    },
  },
});
