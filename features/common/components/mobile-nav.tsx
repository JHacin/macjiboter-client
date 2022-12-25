import { FC, Fragment, useRef } from "react";
import {
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Envelope, FacebookLogo, InstagramLogo, List } from "phosphor-react";
import { NextLink } from "./next-link";
import { ButtonLink } from "./button-link";
import dayjs from "dayjs";
import { TextLink } from "./text-link";
import { NavLinkGroupProps } from "./header";
import { EXTERNAL_LINKS, ROUTES } from "../constants";

interface MobileNavProps {
  linkGroups: NavLinkGroupProps[];
}

export const MobileNav: FC<MobileNavProps> = ({ linkGroups }) => {
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
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader>
            <NextLink href={ROUTES.Home}>
              <Image src="/img/logo-text.svg" alt="Mačji boter" w="150px" />
            </NextLink>
          </DrawerHeader>
          <DrawerBody pt={6}>
            <VStack spacing={6}>
              {linkGroups.map((group) => {
                if (group.links) {
                  return (
                    <Fragment key={group.label}>
                      {group.links.map((link) => (
                        <ButtonLink
                          key={link.label}
                          leftIcon={<Icon as={link.icon} w={6} h={6} color="gray.700" />}
                          href={link.href}
                          variant="link"
                          size="lg"
                          colorScheme=""
                        >
                          {link.label}
                        </ButtonLink>
                      ))}
                    </Fragment>
                  );
                }

                return (
                  <ButtonLink
                    key={group.label}
                    leftIcon={<Icon as={group.icon} w={6} h={6} color="gray.700" />}
                    href={group.href}
                    variant="link"
                    size="lg"
                    colorScheme=""
                  >
                    {group.label}
                  </ButtonLink>
                );
              })}
            </VStack>
            <ButtonLink href={ROUTES.BecomeSponsorOverview} size="lg" mt={8}>
              Postani boter
            </ButtonLink>
          </DrawerBody>
          <DrawerFooter justifyContent="center" bg="gray.100">
            <VStack align="center" spacing={2}>
              <ButtonGroup variant="ghost">
                <IconButton
                  aria-label="Email"
                  as="a"
                  href={`mailto:${EXTERNAL_LINKS.ContactEmail}`}
                  color="orange.600"
                  icon={<Envelope size={22} />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="Facebook"
                  as="a"
                  href={EXTERNAL_LINKS.FacebookPage}
                  color="orange.600"
                  icon={<FacebookLogo size={22} />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="Twitter"
                  as="a"
                  href={EXTERNAL_LINKS.InstagramPage}
                  color="orange.600"
                  icon={<InstagramLogo size={22} />}
                />
              </ButtonGroup>
              <Text fontSize="sm" color="gray.700">
                Zavod Mačja hiša © {dayjs().get("year")} Mačji boter
              </Text>
              <TextLink href="/zasebnost" fontSize="sm">
                Zasebnost
              </TextLink>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
