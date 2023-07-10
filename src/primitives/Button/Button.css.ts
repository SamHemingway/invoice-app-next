import { globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars, vars } from "@/styles/themes.css";

export const button = recipe({
  base: {
    cursor: "pointer",
    border: "none",
    fontWeight: vars.font.weight.bold,
    fontSize: "0.9375rem",
    borderRadius: 9999,
    blockSize: "3rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    paddingInline: 24,
    transitionProperty: "background, color, outline, filter, rotate",
    transitionDuration: "200ms",
  },

  variants: {
    icon: {
      left: {
        paddingInlineStart: 18,
      },
      leftRound: {
        paddingInlineStart: 8,
      },
      right: {
        paddingInlineEnd: 18,
        flexDirection: "row-reverse",
      },
      rightRound: {
        paddingInlineEnd: 8,
        flexDirection: "row-reverse",
      },
    },
    color: {
      primary: {
        backgroundColor: themeVars.colour.button.primary.background,
        color: themeVars.colour.button.primary.text,
        selectors: {
          "&:hover": {
            backgroundColor: themeVars.colour.button.primary.hover.background,
          },
          "&:focus-visible": {
            backgroundColor: themeVars.colour.button.primary.hover.background,
            outlineColor: themeVars.colour.focus,
          },
        },
      },
      secondary: {
        backgroundColor: themeVars.colour.button.subdued.background,
        color: themeVars.colour.button.subdued.text,
        selectors: {
          "&:hover": {
            backgroundColor: themeVars.colour.button.subdued.hover.background,
            color: themeVars.colour.button.subdued.hover.text,
          },
          "&:focus-visible": {
            backgroundColor: themeVars.colour.button.subdued.hover.background,
            color: themeVars.colour.button.subdued.hover.text,
            outlineColor: themeVars.colour.focus,
          },
        },
      },
      danger: {
        backgroundColor: vars.colour.state.danger,
        color: vars.colour.mono[100],
        selectors: {
          "&:hover": {
            filter: "brightness(130%)",
          },
          "&:focus-visible": {
            filter: "brightness(130%)",
            outlineColor: vars.colour.state.danger,
          },
        },
      },
    },
    type: {
      fill: {
        outline: "2px solid transparent",
        outlineOffset: 3,
        selectors: {
          "&:focus-visible": {
            outlineStyle: "solid",
            outlineWidth: "2px",
          },
        },
      },
      ghost: {
        backgroundColor: themeVars.colour.button.ghost.background,
        color: themeVars.colour.button.ghost.text,
        outline: "2px solid transparent",
        outlineOffset: 3,
        selectors: {
          "&:hover": {
            backgroundColor: themeVars.colour.button.ghost.hover.background,
          },
          "&:focus-visible": {
            backgroundColor: themeVars.colour.button.ghost.hover.background,
          },
          "&[data-state='open']": {
            backgroundColor: themeVars.colour.button.subdued.hover.background,
            color: themeVars.colour.button.subdued.hover.text,
          },
        },
      },
    },
  },
});
