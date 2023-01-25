import { SponsorshipFormPayerValues } from "@/forms/components/payer-step";
import { Cat } from "@/cats/types";
import { PersonData } from "@/common/types";
import { SponsorshipFormGifteeValues } from "@/forms/components/giftee-step";

export interface Sponsorship {
  id: number;
  cat: Cat | null;
  sponsor: PersonData | null;
  payer: PersonData | null;
  cat_id: number | null;
  sponsor_id: number | null;
  payer_id: number | null;
  is_gift: boolean;
  is_anonymous: boolean;
  monthly_amount: string;
  requested_duration: number | null;
  is_active: boolean;
  ended_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export type CatFormValues = CatFormParamsValues &
  SponsorshipFormPayerValues &
  SponsorshipFormGifteeValues &
  CatFormSummaryValues;

export interface CatFormParamsValues {
  is_gift: boolean;
  wants_direct_debit: boolean;
  is_anonymous: boolean;
  monthly_amount: number;
  requested_duration: number | null;
}

export interface CatFormSummaryValues {
  is_agreed_to_terms: boolean;
}
