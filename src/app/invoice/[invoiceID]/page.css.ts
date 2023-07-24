import { style } from "@vanilla-extract/css";
import linearInterpolation from "@/helpers/linearInterpolation";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: linearInterpolation(16, 24, 375, 768),

  "@media": {
    "(min-width: 900px)": {
      paddingBlockEnd: "6rem",
    },
  },
});
