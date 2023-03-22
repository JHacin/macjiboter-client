import { FC, Fragment } from "react";
import {
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { LinkVariant, TextLink } from "./text-link";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../constants";
import { Section } from "@/common/components/section";

export const Footer: FC = () => {
  return (
    <Section as="footer" spacing="sm">
      <Container>
        <VStack spacing={{ base: 6 }} align="stretch">
          <Show above="sm">
            <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
              {FOOTER_LINKS.map((link, index) => (
                <Fragment key={link.label}>
                  <TextLink href={link.href} variant={LinkVariant.UnEmphasized}>
                    {link.label}
                  </TextLink>
                  {index !== FOOTER_LINKS.length - 1 && <Text color="gray.500">&#x2022;</Text>}
                </Fragment>
              ))}
            </Stack>
          </Show>
          <HStack alignItems="center" justifyContent="center">
            <ButtonGroup variant="ghost">
              {SOCIAL_LINKS.map((link) => (
                <IconButton
                  key={link.label}
                  aria-label={link.label}
                  as="a"
                  href={link.href}
                  color="gray.700"
                  icon={<link.icon size={24} />}
                />
              ))}
            </ButtonGroup>
          </HStack>
          <Text fontSize="sm" color="gray.600" textAlign="center">
            Zavod Mačja hiša © {dayjs().get("year")} Mačji boter. Vse pravice pridržane.
          </Text>
        </VStack>
      </Container>
    </Section>
  );
};
