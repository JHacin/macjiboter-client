import { FC, ReactNode, useRef } from "react";
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  Icon,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { CaretRight, IconProps, List } from "@phosphor-icons/react";
import { NextLink } from "./next-link";
import { FOOTER_LINKS, NAV_LINK_GROUPS, SOCIAL_LINKS } from "../constants";

const LinkGroupDivider = () => <Divider borderColor="blackAlpha.300" my={4} />;

const MobileNavLink: FC<{
  href: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  icon?: FC<IconProps>;
  children: ReactNode;
}> = ({ href, onClick, variant = "primary", icon, children }) => {
  return (
    <Flex
      as={NextLink}
      href={href}
      alignItems="center"
      justifyContent="space-between"
      height="44px"
      _hover={{ textDecoration: "underline" }}
      onClick={onClick}
    >
      <Flex alignItems="center" gap={3}>
        {icon && <Icon as={icon} boxSize={5} />}
        {children}
      </Flex>

      {variant === "primary" && <Icon as={CaretRight} weight="bold" />}
    </Flex>
  );
};

export const MobileNav: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        aria-label="Menu"
        fontSize={{ base: "4xl", sm: "5xl" }}
        icon={<List />}
        variant="ghost"
        colorScheme="gray"
        size="lg"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerBody pt={10} bgColor="copper.50">
            <LinkGroupDivider />
            {NAV_LINK_GROUPS.map((group) =>
              (group.links ?? [group]).map((link) => (
                <MobileNavLink key={link.label} href={link.href} onClick={onClose} icon={link.icon}>
                  {link.label}
                </MobileNavLink>
              ))
            )}
            <LinkGroupDivider />
            {FOOTER_LINKS.map((link) => (
              <MobileNavLink
                key={link.label}
                href={link.href}
                onClick={onClose}
                variant="secondary"
              >
                {link.label}
              </MobileNavLink>
            ))}
            <LinkGroupDivider />
            <ButtonGroup variant="ghost" alignItems="center" spacing={3} mt={3}>
              {SOCIAL_LINKS.map((link) => (
                <IconButton
                  key={link.label}
                  aria-label={link.label}
                  as="a"
                  href={link.href}
                  color="orange.600"
                  icon={<link.icon size={24} />}
                  bgColor="orange.100"
                />
              ))}
            </ButtonGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
