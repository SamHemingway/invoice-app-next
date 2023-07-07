import { style, globalStyle } from "@vanilla-extract/css";

export const wrapper = style({
  blockSize: "var(--size)",
  inlineSize: "var(--size)",
  cursor: "pointer",

  selectors: {
    "&:focus": {
      outline: "none",
    },
  },
});

globalStyle(`${wrapper} & > svg`, {
  display: "block",
  strokeWidth: "var(--stroke-width)",
});

globalStyle(`${wrapper} & > svg > path`, {
  stroke: "white",
});
