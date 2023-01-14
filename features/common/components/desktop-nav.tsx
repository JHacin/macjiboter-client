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
import { CaretDown } from "phosphor-react";
import { ButtonLink } from "./button-link";
import { NavLinkGroupChildLink, NavLinkGroupProps } from "./header";
import { NextLink } from "./next-link";

interface DesktopNavProps {
  linkGroups: NavLinkGroupProps[];
}

const DesktopNavDropdownItem: FC<NavLinkGroupChildLink> = ({ label, href, icon, description }) => {
  const { onClose } = usePopoverContext();

  return (
    <NextLink href={href}>
      <Box
        onClick={onClose}
        w="full"
        rounded="lg"
        cursor="pointer"
        _hover={{ textDecoration: "none", bg: "orange.50" }}
      >
        <HStack spacing={4} p={3}>
          <Icon as={icon} w={8} h={8} color="orange.500" />
          <VStack spacing={1}>
            <Text fontWeight={500} fontSize="lg">
              {label}
            </Text>
            <Text color="gray.600">{description}</Text>
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
    <Popover openDelay={100} trigger="hover" arrowSize={10}>
      <PopoverTrigger>
        <Button key={label} rightIcon={<CaretDown />} fontSize="lg">
          {label}
        </Button>
      </PopoverTrigger>
      <Box ref={ref}>
        <Portal containerRef={ref}>
          <PopoverContent p={3}>
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
  return (
    <ButtonLink href={href} fontSize="lg">
      {label}
    </ButtonLink>
  );
};

export const DesktopNav: FC<DesktopNavProps> = ({ linkGroups }) => {
  return (
    <ButtonGroup variant="ghost" colorScheme="gray">
      {linkGroups.map((group) => {
        if (group.links) {
          return <DesktopNavItemWithDropdown {...group} links={group.links} key={group.label} />;
        }

        return <DesktopNavItem {...group} key={group.label} />;
      })}
    </ButtonGroup>
  );
};
