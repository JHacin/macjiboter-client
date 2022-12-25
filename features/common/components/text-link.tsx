import { FC, PropsWithChildren } from "react";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { NextLink } from "./next-link";
import { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { EXTERNAL_LINKS } from "../constants";

export enum LinkVariant {
  Default,
  UnEmphasized,
}

interface TextLinkProps extends Omit<ChakraLinkProps, "href" | "variant">, PropsWithChildren {
  href: string;
  variant?: LinkVariant;
  isExternal?: boolean;
}

const variantProps: Record<LinkVariant, Partial<LinkProps>> = {
  [LinkVariant.Default]: {
    color: "orange.500",
    textDecoration: "underline",
    _hover: {
      color: "orange.600",
    },
  },
  [LinkVariant.UnEmphasized]: {
    _hover: {
      textDecoration: "underline",
    },
  },
};

export const TextLink: FC<TextLinkProps> = ({
  href,
  variant = LinkVariant.Default,
  isExternal = false,
  children,
  ...linkProps
}) => {
  return (
    <ChakraLink
      as={NextLink}
      {...linkProps}
      {...variantProps[variant]}
      href={href}
      isExternal={isExternal}
    >
      {children}
    </ChakraLink>
  );
};

export const ContactEmailTextLink: FC = () => {
  return (
    <TextLink href={`mailto:${EXTERNAL_LINKS.ContactEmail}`}>
      {EXTERNAL_LINKS.ContactEmail}
    </TextLink>
  );
};
