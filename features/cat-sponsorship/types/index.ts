import {
  SponsorshipFormGifteeValues,
  SponsorshipFormPayerValues,
} from "@/forms/components/person-form-step";
import { Cat } from "@/cats/types";
import { PersonData } from "@/common/types";

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
  payment_type: SponsorshipPaymentType;
  monthly_amount: string;
  requested_duration: number | null;
  is_active: boolean;
  ended_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export enum SponsorshipPaymentType {
  BankTransfer = 1,
  DirectDebit = 2,
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
