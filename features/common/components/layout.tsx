import { FC, PropsWithChildren } from "react";
import { Header, HeaderProps } from "./header";
import { Footer } from "./footer";
import { Box } from "@chakra-ui/react";
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";

type LayoutVariant = "default" | "filled-header";

const VARIANT_TO_PROPS_MAP: Record<LayoutVariant, { headerProps: HeaderProps }> = {
  default: {
    headerProps: {},
  },
  "filled-header": {
    headerProps: {
      backgroundColor: "copper.100",
    },
  },
};

export const Layout: FC<PropsWithChildren<{ variant?: LayoutVariant }>> = ({
  variant = "default",
  children,
}) => {
  const { headerProps } = VARIANT_TO_PROPS_MAP[variant];

  return (
    <>
      <SkipNavLink>Pojdi na vsebino</SkipNavLink>
      <Header {...headerProps} />
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
      <Footer />
    </>
  );
};
