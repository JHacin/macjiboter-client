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
import "@fontsource/poppins/800.css";
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
        500: "#cfbbaa",
        600: "#b8a697",
        700: "#a19284",
        800: "#8a7d71",
        900: "#73685f",
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
      purple: {
        50: "#ebe7f1",
        100: "#e1dbea",
        200: "#cdc3dc",
        300: "#b8aacd",
        400: "#a492bf",
        500: "#9a86b8",
        600: "#7b6b93",
        700: "#6c5e81",
        800: "#4d435c",
        900: "#2e2837",
      },
      blue: {
        50: "#f0f3f4",
        100: "#d1dcde",
        200: "#b3c4c8",
        300: "#94acb1",
        400: "#85a1a6",
        500: "#668990",
        600: "#526e73",
        700: "#476065",
        800: "#334548",
        900: "#1f292b",
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
      Textarea: {
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
        ".react-datepicker__close-icon::after": {
          backgroundColor: "orange.500",
        },
        ".react-datepicker__day--selected": {
          backgroundColor: "orange.500",
          height: "14px",
          width: "14px",
          fontSize: "14px",
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
