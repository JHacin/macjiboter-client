import { FC } from "react";
import { Box, HStack, Image, Show } from "@chakra-ui/react";
import { Article, Gift, PawPrint, Question, Sparkle } from "phosphor-react";
import { NextLink } from "./next-link";
import { DesktopNav } from "./desktop-nav";
import { ButtonLink } from "./button-link";
import { MobileNav } from "./mobile-nav";
import { ROUTES } from "../constants";
import { Container } from "./container";

export interface NavLinkGroupChildLink {
  label: string;
  href: string;
  icon: FC;
  description: string;
}

export interface NavLinkGroupProps {
  label: string;
  href: string;
  icon: FC;
  links?: NavLinkGroupChildLink[];
}

const linkGroups: NavLinkGroupProps[] = [
  {
    href: "#1",
    label: "Botrstvo",
    icon: PawPrint,
    links: [
      {
        href: ROUTES.CatsList,
        label: "Redno botrstvo",
        icon: PawPrint,
        description: "Postani boter izbrani muci.",
      },
      {
        href: ROUTES.SpecialSponsorships,
        label: "Posebna botrstva",
        icon: Sparkle,
        description: "Doniraj za poseben namen.",
      },
      {
        href: ROUTES.GiftSponsorship,
        label: "Podari botrstvo",
        icon: Gift,
        description: "Botrstvo podari bližnji osebi.",
      },
    ],
  },
  {
    href: ROUTES.News,
    label: "Novice",
    icon: Article,
  },
  {
    href: ROUTES.FAQ,
    label: "Pogosta vprašanja",
    icon: Question,
  },
];

export const Header: FC = () => {
  return (
    <Box as="nav" pt={{ base: 4, lg: 8 }}>
      <Container>
        <HStack justify="space-between">
          <NextLink href={ROUTES.Home}>
            <Image
              src="/img/logo.svg"
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
            <DesktopNav linkGroups={linkGroups} />
            <ButtonLink href={ROUTES.BecomeSponsorOverview} size="lg">
              Postani boter
            </ButtonLink>
          </Show>
          <Show below="lg">
            <MobileNav linkGroups={linkGroups} />
          </Show>
        </HStack>
      </Container>
    </Box>
  );
};
