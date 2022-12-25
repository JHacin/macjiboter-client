import { FC } from "react";
import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { Envelope, FacebookLogo, InstagramLogo } from "phosphor-react";
import { LinkVariant, TextLink } from "./text-link";
import { EXTERNAL_LINKS, ROUTES } from "../constants";

export const Footer: FC = () => {
  return (
    <Box bg="copper.200" as="footer" py={{ base: 12, md: 16, lg: 12 }}>
      <Container>
        <VStack spacing={{ base: 6 }} align="stretch">
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={{ base: 0, sm: 4 }}
            alignItems="center"
            justifyContent="center"
          >
            <TextLink href={ROUTES.Contact} variant={LinkVariant.UnEmphasized}>
              Kontakt
            </TextLink>
            <Text>&#x2022;</Text>
            <TextLink href={ROUTES.SponsorOurProgram} variant={LinkVariant.UnEmphasized}>
              Sponzorstvo
            </TextLink>
            <Text>&#x2022;</Text>
            <TextLink href={ROUTES.Privacy} variant={LinkVariant.UnEmphasized}>
              Zasebnost
            </TextLink>
          </Stack>
          <HStack alignItems="center" justifyContent="center">
            <ButtonGroup variant="ghost">
              <IconButton
                aria-label="Email"
                as="a"
                href={`mailto:${EXTERNAL_LINKS.ContactEmail}`}
                color="gray.700"
                icon={<Envelope size={24} />}
              />
              <IconButton
                aria-label="Facebook"
                as="a"
                href={EXTERNAL_LINKS.FacebookPage}
                color="gray.700"
                icon={<FacebookLogo size={24} />}
              />
              <IconButton
                aria-label="Twitter"
                as="a"
                href={EXTERNAL_LINKS.InstagramPage}
                color="gray.700"
                icon={<InstagramLogo size={24} />}
              />
            </ButtonGroup>
          </HStack>
          <Text fontSize="sm" color="gray.600" textAlign="center">
            Zavod Mačja hiša © {dayjs().get("year")} Mačji boter. Vse pravice pridržane.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
