import { forwardRef, ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

const spacingMap = {
  none: { base: 0 },
  xs: { base: 4, sm: 6, md: 8, lg: 10 },
  sm: { base: 8, sm: 12, md: 16, lg: 20 },
  md: { base: 12, sm: 16, md: 24, lg: 32 },
  lg: { base: 16, sm: 24, md: 32, lg: 40 },
  xl: { base: 20, sm: 28, md: 36, lg: 44 },
  "2xl": { base: 24, sm: 32, md: 40, lg: 48 },
  "3xl": { base: 28, sm: 36, md: 44, lg: 52 },
} as const;

type SectionSpacing = keyof typeof spacingMap;

interface SectionProps {
  children: ReactNode;
  spacing?: SectionSpacing | { top?: SectionSpacing; bottom?: SectionSpacing };
  position?: BoxProps["position"];
  bg?: BoxProps["bg"];
  as?: BoxProps["as"];
}

const createSpacingProps = (spacing: SectionProps["spacing"] | undefined) => {
  const defaultSpacing = "md";

  if (!spacing) {
    return {
      py: spacingMap[defaultSpacing],
    };
  }

  if (typeof spacing === "object") {
    return {
      pt: spacingMap[spacing.top ?? defaultSpacing],
      pb: spacingMap[spacing.bottom ?? defaultSpacing],
    };
  }

  return {
    py: spacingMap[spacing],
  };
};

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ spacing, children, position, bg, as = "section" }, ref) => {
    return (
      <Box {...createSpacingProps(spacing)} as={as} position={position} bg={bg} ref={ref}>
        {children}
      </Box>
    );
  }
);

Section.displayName = "Section";
