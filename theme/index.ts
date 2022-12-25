import {
  extendTheme,
  StyleFunctionProps,
  useTheme as useChakraTheme,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

type ColorPalette = Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;

interface Theme {
  breakpoints: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  colors: {
    transparent: string;
    current: string;
    black: string;
    white: string;
    whiteAlpha: ColorPalette;
    blackAlpha: ColorPalette;
    gray: ColorPalette;
    red: ColorPalette;
    orange: ColorPalette;
    yellow: ColorPalette;
    green: ColorPalette;
    teal: ColorPalette;
    blue: ColorPalette;
    cyan: ColorPalette;
    purple: ColorPalette;
    pink: ColorPalette;
    linkedin: ColorPalette;
    facebook: ColorPalette;
    messenger: ColorPalette;
    whatsapp: ColorPalette;
    twitter: ColorPalette;
    telegram: ColorPalette;
    copper: ColorPalette;
  };
}

export const theme = extendTheme(
  {
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
    },
    colors: {
      copper: {
        50: "#fcfaf8",
        100: "#f6efe9",
        200: "#f1e5da",
        300: "#ead8c8",
        400: "#e6d0bd",
      },
      orange: {
        50: "#faf1ed",
        100: "#f6e3da",
        200: "#ecc7b6",
        300: "#e3aa91",
        400: "#d98e6d",
        500: "#d07248",
        600: "#a65b3a",
        700: "#7d442b",
        800: "#532e1d",
        900: "#2a170e",
      },
      green: {
        50: "#eef7f1",
        100: "#cbe7d4",
        200: "#a8d7b8",
        300: "#85c79c",
        400: "#62b77f",
        500: "#50af71",
        600: "#408c5a",
        700: "#306944",
        800: "#20462d",
        900: "#102317",
      },
      blue: {
        50: "#ebe9fb",
        100: "#c3bdf4",
        200: "#9b92ed",
        300: "#7366e6",
        400: "#4b3adf",
        500: "#3724db",
        600: "#2c1daf",
        700: "#211683",
        800: "#160e58",
        900: "#0b072c",
      },
    },
    components: {
      Button: {
        defaultProps: {
          colorScheme: "orange",
        },
        variants: {
          subtle: (props: StyleFunctionProps) => {
            return {
              bg: props.theme.colors[props.colorScheme][100],
              color: props.theme.colors[props.colorScheme][600],
              _hover: {
                bg: props.theme.colors[props.colorScheme][200],
              },
            };
          },
        },
      },
      Box: {
        variants: {
          section: {
            py: [32],
          },
        },
      },
      Input: {
        defaultProps: {
          focusBorderColor: "orange.500",
        },
      },
      Select: {
        defaultProps: {
          focusBorderColor: "orange.500",
        },
      },
      Checkbox: {
        defaultProps: {
          colorScheme: "orange",
        },
      },
      Radio: {
        defaultProps: {
          colorScheme: "orange",
        },
      },
      VStack: {
        baseStyle: {
          align: "flex-start",
        },
      },
    },
    layerStyles: {
      highlight: {
        backgroundColor: "orange.100",
        px: 2,
        py: 0.5,
        rounded: "md",
        color: "inherit",
      },
    },
    styles: {
      global: {
        ".swiper-button-prev, .swiper-button-next": {
          boxSize: {
            base: "32px",
            md: "40px",
          },
          rounded: "full",
          backgroundColor: "orange.500",

          "&:after": {
            color: "white",
            fontSize: {
              base: "md",
              md: "xl",
            },
          },

          "&.swiper-button-disabled": {
            opacity: "0.3",
          },
        },
        ".swiper-button-prev": {
          left: "1rem",
        },
        ".swiper-button-next": {
          right: "1rem",
        },
        ".swiper-pagination-bullet": {
          "&.swiper-pagination-bullet-active": {
            backgroundColor: "orange.500",
          },
        },
      },
    },
  },
  withProse({
    baseStyle: {
      p: {
        fontSize: "inherit",
        lineHeight: 1.5,
      },
      li: {
        my: 2,
      },
      a: {
        color: "orange.500",
        textDecoration: "underline",
        _hover: {
          color: "orange.600",
        },
      },
    },
  })
);

export const useTheme = () => useChakraTheme<Theme>();

VStack.defaultProps = { ...VStack.defaultProps, align: "start" };
