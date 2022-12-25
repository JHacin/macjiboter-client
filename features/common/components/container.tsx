import { FC, PropsWithChildren } from "react";
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from "@chakra-ui/react";
import { useTheme } from "@/theme";

interface ContainerProps extends PropsWithChildren, ChakraContainerProps {}

export const Container: FC<ContainerProps> = ({ children, ...containerProps }) => {
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
      }}
      {...containerProps}
    >
      {children}
    </ChakraContainer>
  );
};
