import { FC, PropsWithChildren } from "react";
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
  ResponsiveObject,
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
    >
      {children}
    </ChakraContainer>
  );
};
