import { FC, useRef } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Icon,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  usePopoverContext,
  VStack,
} from "@chakra-ui/react";
import { CaretDown } from "@phosphor-icons/react";
import { ButtonLink } from "./button-link";
import { NextLink } from "./next-link";
import { NavLinkGroupChildLink, NavLinkGroupProps } from "../types";
import { NAV_LINK_GROUPS } from "../constants";
import { useRouter } from "next/router";

const DesktopNavDropdownItem: FC<NavLinkGroupChildLink> = ({ label, href, icon, description }) => {
  const { onClose } = usePopoverContext();

  return (
    <NextLink href={href}>
      <Box
        onClick={onClose}
        w="full"
        cursor="pointer"
        _hover={{ textDecoration: "none", bg: "orange.50" }}
        rounded="md"
      >
        <HStack spacing={4} py={3} px={4}>
          <Icon as={icon} w={8} h={8} color="orange.500" />
          <VStack spacing={0}>
            <Text fontWeight={500} fontSize="lg">
              {label}
            </Text>
            {description && <Text color="gray.600">{description}</Text>}
          </VStack>
        </HStack>
      </Box>
    </NextLink>
  );
};

const DesktopNavItemWithDropdown: FC<NavLinkGroupProps & { links: NavLinkGroupChildLink[] }> = ({
  label,
  links,
}) => {
  const ref = useRef(null);

  return (
    <Popover openDelay={100} arrowSize={10}>
      <PopoverTrigger>
        <Button
          key={label}
          rightIcon={<CaretDown />}
          fontSize="lg"
          _hover={{ backgroundColor: "copper.200" }}
        >
          {label}
        </Button>
      </PopoverTrigger>
      <Box ref={ref}>
        <Portal containerRef={ref}>
          <PopoverContent p={3} width="sm" shadow="md">
            <PopoverArrow />
            <VStack spacing={2} align="stretch">
              {links.map((link) => (
                <DesktopNavDropdownItem {...link} key={link.label} />
              ))}
            </VStack>
          </PopoverContent>
        </Portal>
      </Box>
    </Popover>
  );
};

const DesktopNavItem: FC<NavLinkGroupProps> = ({ label, href }) => {
  const { pathname } = useRouter();

  return (
    <ButtonLink
      href={href}
      fontSize="lg"
      _hover={{ backgroundColor: pathname === href ? "copper.300" : "copper.200" }}
      sx={{
        backgroundColor: pathname === href ? "copper.300" : "inherit",
      }}
    >
      {label}
    </ButtonLink>
  );
};

export const DesktopNav: FC = () => {
  return (
    <ButtonGroup variant="ghost" colorScheme="gray">
      {NAV_LINK_GROUPS.map((group) =>
        group.links ? (
          <DesktopNavItemWithDropdown {...group} links={group.links} key={group.label} />
        ) : (
          <DesktopNavItem {...group} key={group.label} />
        )
      )}
    </ButtonGroup>
  );
};
