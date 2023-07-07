import linearInterpolation from "@/helpers/linearInterpolation";
import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

const global = createGlobalTheme("html", {
  colour: {
    primary: {
      300: "hsla(252, 100%, 73%, 1)",
      400: "hsla(252, 94%, 67%, 1)",
      700: "hsla(233, 30%, 21%, 1)",
      800: "hsla(233, 31%, 17%, 1)",
      900: "hsla(233, 30%, 11%, 1)",
    },
    mono: {
      100: "hsla(0, 0%, 100%, 1)",
      200: "hsla(240, 27%, 98%, 1)",
      300: "hsla(231, 67%, 99%, 1)",
      400: "hsla(231, 75%, 93%, 1)",
      500: "hsla(231, 36%, 63%, 1)",
      600: "hsla(231, 20%, 61%, 1)",
      650: "hsla(231, 20%, 36%, 1)",
      700: "hsla(231, 20%, 27%, 1)",
      800: "hsla(231, 28%, 7%, 1)",
    },
    state: {
      danger: "hsla(0, 80%, 63%, 1)",
      success: "hsla(160, 67%, 52%, 1)",
      warning: "hsla(34, 100%, 50%, 1)",
      transparent: {
        danger: "hsla(0, 80%, 63%, 0.06)",
        success: "hsla(160, 67%, 52%, 0.06)",
        warning: "hsla(34, 100%, 50%, 0.06)",
      },
    },
  },
  font: {
    family: '"League Spartan", sans-serif',
    weight: {
      regular: "400",
      bold: "700",
    },
    size: {
      xs: "0.8125rem",
      s: "0.9375rem",
      m: linearInterpolation(16, 20),
      l: linearInterpolation(18, 24),
      xl: linearInterpolation(24, 36),
      xxl: linearInterpolation(64, 128),
    },
  },
  size: {
    xxs: "8px",
    xs: "12px",
    s: linearInterpolation(16, 32),
    m: linearInterpolation(24, 32),
    l: linearInterpolation(24, 48),
    xl: linearInterpolation(32, 64),
    "2xl": linearInterpolation(32, 60),
    "3xl": linearInterpolation(48, 76),
  },
  border: {
    xs: "6px",
    s: "8px",
    l: "24px",
  },
});

export const themeVars = createThemeContract({
  colour: {
    background: {
      page: "",
      card: "",
      cardSubdued: "",
      cardStrong: "",
      header: "",
      headerButton: "",
      form: "",
      scrollbar: "",
    },
    button: {
      primary: {
        text: "",
        background: "",
        hover: {
          background: "",
        },
      },
      subdued: {
        text: "",
        background: "",
        hover: {
          background: "",
          text: "",
        },
      },
      ghost: {
        text: "",
        background: "",
        hover: {
          background: "",
        },
      },
    },
    icon: "",
    divider: "",
    border: {
      form: "",
    },
    text: {
      body: "",
      heading: "",
      subheading: "",
      secondary: "",
    },
    focus: "",
  },
});

export const darkTheme = createTheme(themeVars, {
  colour: {
    background: {
      page: global.colour.primary[900],
      card: global.colour.primary[800],
      cardSubdued: global.colour.primary[700],
      cardStrong: global.colour.mono[800],
      header: global.colour.primary[800],
      headerButton: global.colour.primary[700],
      form: global.colour.primary[800],
      scrollbar: global.colour.primary[700],
    },
    button: {
      primary: {
        text: global.colour.mono[100],
        background: global.colour.primary[400],
        hover: {
          background: global.colour.primary[300],
        },
      },
      subdued: {
        text: global.colour.mono[500],
        background: global.colour.primary[800],
        hover: {
          background: global.colour.primary[700],
          text: global.colour.mono[900],
        },
      },
      ghost: {
        text: global.colour.mono[100],
        background: "transparent",
        hover: {
          background: global.colour.primary[700],
        },
      },
    },
    icon: global.colour.mono[500],
    divider: global.colour.mono[650],
    border: {
      form: global.colour.primary[700],
    },
    text: {
      body: global.colour.mono[400],
      heading: global.colour.mono[100],
      subheading: global.colour.primary[400],
      secondary: global.colour.mono[500],
    },
    focus: global.colour.primary[400],
  },
});

export const lightTheme = createTheme(themeVars, {
  colour: {
    background: {
      page: global.colour.mono[200],
      card: global.colour.mono[100],
      cardSubdued: global.colour.mono[300],
      cardStrong: global.colour.mono[700],
      header: global.colour.primary[800],
      headerButton: global.colour.primary[700],
      form: global.colour.mono[100],
      scrollbar: global.colour.primary[700],
    },
    button: {
      primary: {
        text: global.colour.mono[100],
        background: global.colour.primary[400],
        hover: {
          background: global.colour.primary[300],
        },
      },
      subdued: {
        text: global.colour.mono[900],
        background: global.colour.primary[700],
        hover: {
          background: global.colour.mono[400],
          text: global.colour.mono[900],
        },
      },
      ghost: {
        text: global.colour.mono[800],
        background: "transparent",
        hover: {
          background: global.colour.mono[400],
        },
      },
    },
    icon: global.colour.mono[500],
    divider: global.colour.mono[650],
    border: {
      form: global.colour.mono[400],
    },
    text: {
      body: global.colour.mono[800],
      heading: global.colour.mono[800],
      subheading: global.colour.mono[600],
      secondary: global.colour.mono[600],
    },
    focus: global.colour.primary[400],
  },
});

export const vars = { ...global, themeVars };
