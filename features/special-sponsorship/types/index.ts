import { SponsorshipFormPayerValues } from "@/forms/components/payer-step";
import { PersonData } from "@/common/types";
import { SponsorshipFormGifteeValues } from "@/forms/components/giftee-step";

export interface SpecialSponsorship {
  id: number;
  type: SpecialSponsorshipType;
  sponsor_id: number | null;
  sponsor?: PersonData;
  payer_id: number | null;
  is_gift: boolean;
  confirmed_at: string | null;
  is_anonymous: boolean;
  amount: string;
  created_at: string | null;
  updated_at: string | null;
}

export enum SpecialSponsorshipType {
  BoterMeseca = 1,
  MucGreBrezSkrbiVNoveDni = 2,
  MucaGreBrezSkrbiVNoveDni = 3,
  NovZacetek = 4,
  FipBojevnikZa1Dan = 5,
  FipBojevnikZa2Dni = 6,
  FipBojevnikZa1Teden = 7,
  MajhnaZobnaMiska = 8,
  VelikaZobnaMis = 9,
}

export enum SpecialSponsorshipGroup {
  BoterMeseca,
  BrezSkrbiVNoveDni,
  NovZacetek,
  FipBojevniki,
  ZobnaMiska,
}

export type SpecialFormValues = SpecialFormParamsValues &
  SponsorshipFormPayerValues &
  SponsorshipFormGifteeValues & {
    gift_requested_activation_date: string | null;
  } & SpecialFormSummaryValues;

export interface SpecialFormParamsValues {
  type: SpecialSponsorshipType;
  amount: number;
  is_gift: boolean;
  is_anonymous: boolean;
}

export interface SpecialFormSummaryValues {
  is_agreed_to_terms: boolean;
}
