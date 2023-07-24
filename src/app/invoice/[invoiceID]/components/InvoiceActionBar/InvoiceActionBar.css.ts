import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/themes.css";

export const wrapper = style({
  background: themeVars.colour.background.card,
  position: "fixed",
  bottom: 0,
  left: 0,
  inlineSize: "100vw",
  display: "flex",
  justifyContent: "center",
  gap: "0.5rem",
  paddingBlock: "1.5rem",

  "@media": {
    "(min-width: 600px)": {
      position: "revert",
      padding: 0,
      inlineSize: "revert",
      marginInlineStart: "auto",
    },
  },
});
