import { FC } from "react";

export interface PersonData {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  date_of_birth: string | null;
  gender: PersonGender | null;
  address: string | null;
  zip_code: string | null;
  city: string | null;
  country: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export enum PersonGender {
  Male = 1,
  Female = 2,
}

export interface NewsPiece {
  id: number;
  title: string | null;
  body: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface PaginatedListQueryParams {
  page: string;
  search?: string;
  sort?: string;
  per_page?: string;
}

export interface NavLinkGroupChildLink {
  label: string;
  href: string;
  icon?: FC;
  description: string;
}

export interface NavLinkGroupProps {
  label: string;
  href: string;
  icon?: FC;
  links?: NavLinkGroupChildLink[];
}

export interface SponsorListViewData {
  anonymousCount: number;
  identifiedSponsors: Pick<PersonData, "id" | "first_name" | "city">[];
}
