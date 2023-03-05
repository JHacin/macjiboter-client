import { FC, PropsWithChildren } from "react";
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
  ResponsiveObject,
  Theme,
} from "@chakra-ui/react";
import { useTheme } from "@/theme";
import * as CSS from "csstype";

interface ContainerProps extends PropsWithChildren, Pick<ChakraContainerProps, "position"> {
  paddingHorizontal?: ResponsiveObject<number | CSS.Property.PaddingInline>;
  paddingVertical?: ResponsiveObject<number | CSS.Property.PaddingBlock>;
  paddingBottom?: ResponsiveObject<number | CSS.Property.PaddingBottom>;
  maxWidthOverride?: ChakraContainerProps["maxWidth"];
}

export const Container: FC<ContainerProps> = ({
  paddingHorizontal = {},
  paddingVertical = {},
  paddingBottom = {},
  maxWidthOverride,
  position,
  children,
}) => {
  const { breakpoints } = useTheme();

  return (
    <ChakraContainer
      maxWidth={
        maxWidthOverride ?? [
          "100%",
          breakpoints.sm,
          breakpoints.md,
          breakpoints.lg,
          breakpoints.xl,
          breakpoints["2xl"],
        ]
      }
      px={{
        base: 4,
        lg: 8,
        ...paddingHorizontal,
      }}
      pt={paddingVertical}
      pb={{
        ...paddingVertical,
        ...paddingBottom,
      }}
      position={position}
    >
      {children}
    </ChakraContainer>
  );
};

type ContainerIndent = 0 | 1 | 2;

const getIndentMap = (
  breakpoints: Theme["breakpoints"]
): Record<ContainerIndent, ChakraContainerProps["maxWidth"]> => ({
  0: ["100%", breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl, breakpoints["2xl"]],
  1: ["100%", breakpoints.sm, breakpoints.md, breakpoints.md, breakpoints.lg, breakpoints.xl],
  2: ["100%", breakpoints.sm, breakpoints.md, breakpoints.md, breakpoints.md, breakpoints.lg],
});

export const ContainerNew: FC<
  PropsWithChildren & Pick<ChakraContainerProps, "position"> & { indent?: 0 | 1 | 2 }
> = ({ indent = 0, position, children }) => {
  const { breakpoints } = useTheme();
  const maxWidth = getIndentMap(breakpoints)[indent];

  return (
    <ChakraContainer position={position} maxWidth={maxWidth} px={{ base: 4, lg: 8 }}>
      {children}
    </ChakraContainer>
  );
};
