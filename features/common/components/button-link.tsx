import { FC, ReactNode } from "react";
import { NextLink } from "./next-link";
import { Button, ButtonProps, IconButton, IconButtonProps } from "@chakra-ui/react";
import { LinkProps as NextLinkProps } from "next/link";

type ButtonLinkProps = ButtonProps & { children: ReactNode } & Pick<NextLinkProps, "href">;

export const ButtonLink: FC<ButtonLinkProps> = ({ href, children, ...buttonProps }) => {
  return (
    <Button as={NextLink} href={href} {...buttonProps}>
      {children}
    </Button>
  );
};

type IconButtonLinkProps = IconButtonProps & Pick<NextLinkProps, "href">;

export function IconButtonLink({ href, ...iconButtonProps }: IconButtonLinkProps) {
  return <IconButton as={NextLink} href={href} {...iconButtonProps} />;
}
