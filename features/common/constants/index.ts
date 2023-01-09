import { SpecialSponsorshipGroup, SpecialSponsorshipType } from "@/special-sponsorship/types";
import { SPECIAL_SPONSORSHIP_GROUP_META } from "@/special-sponsorship/constants";

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
  SuperCombeContactEmail: "trgovina@supercombe.si",
};
