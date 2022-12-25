import { FC, PropsWithChildren } from "react";
import { NextLink } from "./next-link";
import { Button, ButtonProps } from "@chakra-ui/react";
import { LinkProps as NextLinkProps } from "next/link";

interface ButtonLinkProps extends ButtonProps, PropsWithChildren {
  href: NextLinkProps["href"];
}

export const ButtonLink: FC<ButtonLinkProps> = ({ href, children, ...buttonProps }) => {
  return (
    <Button as={NextLink} href={href} {...buttonProps}>
      {children}
    </Button>
  );
};
