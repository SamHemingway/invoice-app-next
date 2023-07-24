import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars, vars } from "@/styles/themes.css";

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
