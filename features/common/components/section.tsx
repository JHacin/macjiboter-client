import { forwardRef, PropsWithChildren } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

const spacingMap = {
  none: { base: 0 },
  xs: { base: 4, sm: 6, md: 8, lg: 12 },
  sm: { base: 10, sm: 14, md: 20, lg: 24 },
  md: { base: 20, sm: 24, md: 28, lg: 32 },
  lg: { base: 24, sm: 28, md: 32, lg: 36 },
} as const;

type SectionSpacing = keyof typeof spacingMap;

interface SectionProps extends PropsWithChildren, BoxProps {
  spacing?: SectionSpacing | { top?: SectionSpacing; bottom?: SectionSpacing };
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
  ({ spacing, children, ...boxProps }, ref) => {
    return (
      <Box as="section" {...boxProps} {...createSpacingProps(spacing)} ref={ref}>
        {children}
      </Box>
    );
  }
);

Section.displayName = "Section";
