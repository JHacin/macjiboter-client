import { FC } from "react";
import { Box, BoxProps, Hide, HStack, Image, Show } from "@chakra-ui/react";
import { NextLink } from "./next-link";
import { DesktopNav } from "./desktop-nav";
import { ButtonLink } from "./button-link";
import { MobileNav } from "./mobile-nav";
import { ASSET_PATH, ROUTES } from "../constants";
import { Container } from "./container";

export interface HeaderProps {
  backgroundColor?: BoxProps["backgroundColor"];
}

export const Header: FC<HeaderProps> = ({ backgroundColor }) => {
  return (
    <Box as="nav" pt={{ base: 4, lg: 8 }} backgroundColor={backgroundColor}>
      <Container>
        <HStack justify="space-between">
          <NextLink href={ROUTES.Home}>
            <Image
              src={ASSET_PATH.PublicImage("logo.svg")}
              alt="Mačji boter"
              h={{
                base: "60px",
                sm: "75px",
                md: "90px",
                lg: "105px",
                xl: "130px",
                "2xl": "160px",
              }}
            />
          </NextLink>
          <Show above="lg">
            <DesktopNav />
            <ButtonLink href={ROUTES.BecomeSponsorOverview} size="lg">
              Postani boter
            </ButtonLink>
          </Show>
          <Hide above="lg">
            <MobileNav />
          </Hide>
        </HStack>
      </Container>
    </Box>
  );
};
