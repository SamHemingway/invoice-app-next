import { style, keyframes } from "@vanilla-extract/css";
import { vars, themeVars } from "@/styles/themes.css";

const slideUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0px)",
  },
});

export const wrapper = style({
  background: themeVars.colour.background.card,
  boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.25)",
  padding: "1.5rem",
  borderRadius: vars.border.s,
  animationName: slideUp,
  animationDuration: "200ms",
});
