import { globalStyle } from "@vanilla-extract/css";

// Box sizing rules
globalStyle("*,:before,:after", {
  boxSizing: "border-box",
});

// Remove default margin
globalStyle("body,h1,h2,h3,h4,p,figure,blockquote,dl,dd", {
  margin: 0,
});

// Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed
globalStyle('ul[role="list"],ol[role="list"]', {
  listStyle: "none",
});

// Set core root defaults
globalStyle("html:focus-within", {
  scrollBehavior: "smooth",
});

// Set core body defaults
globalStyle("body", {
  height: "100vh",
  textRendering: "optimizeSpeed",
  lineHeight: "1.5",
});

// A elements that don't have a class get default styles
globalStyle("a:not([class])", {
  textDecorationSkipInk: "auto",
});

// Make images easier to work with
globalStyle("img,picture", {
  maxWidth: "100%",
  display: "block",
});

// Inherit fonts for inputs and buttons
globalStyle("input,button,textarea,select", {
  font: "inherit",
});
