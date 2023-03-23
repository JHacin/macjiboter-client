import { SpecialSponsorshipGroup, SpecialSponsorshipType } from "@/special-sponsorship/types";
import { SPECIAL_SPONSORSHIP_GROUP_META } from "@/special-sponsorship/constants";
import { NavLinkGroupProps } from "../types";
import {
  Envelope,
  FacebookLogo,
  Gift,
  IconProps,
  InstagramLogo,
  NewspaperClipping,
  PawPrint,
  Question,
  Sparkle,
} from "phosphor-react";
import { FC } from "react";

export const BACKEND_URL = process.env["NEXT_PUBLIC_BACKEND_URL"];

export const API_URL = `${BACKEND_URL}/api`;

export const ROUTES = {
  Home: "/",
  BecomeSponsorOverview: "/postani-boter",
  CatsList: "/muce",
  CatDetails: (slug: string) => `/muce/${slug}`,
  BecomeCatSponsor: (slug: string) => `/muce/${slug}/postani-boter`,
  WhyBecomeSponsor: "/zakaj-postati-boter",
  SpecialSponsorships: "/posebna-botrstva",
  SpecialSponsorshipGroup: (group: SpecialSponsorshipGroup) =>
    `/posebna-botrstva/${SPECIAL_SPONSORSHIP_GROUP_META[group].pageSlug}`,
  SpecialSponsorshipsForm: (type: SpecialSponsorshipType) =>
    `/posebna-botrstva/obrazec?tip=${type}`,
  GiftSponsorship: "/podari-botrstvo",
  Privacy: "/zasebnost",
  Contact: "/kontakt",
  FAQ: "/pravila-in-pogosta-vprasanja",
  News: "/novice",
  SponsorOurProgram: "/sponzorstvo",
};

export const EXTERNAL_LINKS = {
  ContactEmail: "boter@macjahisa.si",
  FacebookPage: "https://www.facebook.com/MacjiBoter",
  InstagramPage: "https://www.instagram.com/macjiboter",
  MacjaHisa: "https://macjahisa.si",
  SuperCombe: "http://www.supercombe.si/",
  SuperCombeContactEmail: "trgovina@supercombe.si",
};

export const NAV_LINK_GROUPS: NavLinkGroupProps[] = [
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
    icon: NewspaperClipping,
  },
  {
    href: ROUTES.FAQ,
    label: "Pogosta vprašanja",
    icon: Question,
  },
];

export const FOOTER_LINKS: { href: string; label: string }[] = [
  {
    href: ROUTES.Contact,
    label: "Kontakt",
  },
  {
    href: ROUTES.SponsorOurProgram,
    label: "Sponzorstvo",
  },
  {
    href: ROUTES.Privacy,
    label: "Zasebnost",
  },
];

export const SOCIAL_LINKS: { href: string; label: string; icon: FC<IconProps> }[] = [
  {
    href: `mailto:${EXTERNAL_LINKS.ContactEmail}`,
    label: "Email",
    icon: Envelope,
  },
  {
    href: EXTERNAL_LINKS.FacebookPage,
    label: "Facebook",
    icon: FacebookLogo,
  },
  {
    href: EXTERNAL_LINKS.InstagramPage,
    label: "Instagram",
    icon: InstagramLogo,
  },
];
