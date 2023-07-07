import { style } from "@vanilla-extract/css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const wrapper = style({
  background: "var(--colour-background-header)",
  blockSize: linearInterpolation(72, 80),
  display: "flex",

  "@media": {
    "screen and (min-width: 900px)": {
      flexDirection: "column",
      inlineSize: "6.25rem",
      borderTopRightRadius: 28,
      borderBottomRightRadius: 28,
    },
  },
});

export const logoWrapper = style({
  blockSize: "100%",
  aspectRatio: "1/1",
  lineHeight: 0,

  "@media": {
    "screen and (min-width: 900px)": {
      blockSize: "min-content",
      inlineSize: "100%",
    },
  },
});
