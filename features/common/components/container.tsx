import { FC, PropsWithChildren } from "react";
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
  ResponsiveObject,
} from "@chakra-ui/react";
import { useTheme } from "@/theme";

interface ContainerProps extends PropsWithChildren, Pick<ChakraContainerProps, "position"> {
  paddingHorizontal?: ResponsiveObject<number>;
  paddingVertical?: ResponsiveObject<number>;
}

export const Container: FC<ContainerProps> = ({
  paddingHorizontal = {},
  paddingVertical = {},
  children,
}) => {
  const { breakpoints } = useTheme();

  return (
    <ChakraContainer
      maxWidth={[
        "100%",
        breakpoints.sm,
        breakpoints.md,
        breakpoints.lg,
        breakpoints.xl,
        breakpoints["2xl"],
      ]}
      px={{
        base: 4,
        lg: 8,
        ...paddingHorizontal,
      }}
      py={paddingVertical}
    >
      {children}
    </ChakraContainer>
  );
};
