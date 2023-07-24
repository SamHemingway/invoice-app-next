import { style } from "@vanilla-extract/css";
import linearInterpolation from "@/helpers/linearInterpolation";
import { vars, themeVars } from "@/styles/themes.css";

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

export const formWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: linearInterpolation(16, 24, 375, 768),
});

export const sectionHeader = style({
  color: themeVars.colour.text.subheading,
  fontSize: vars.font.size.s,
});

export const sectionWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
});
