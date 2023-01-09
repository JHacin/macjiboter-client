import { SpecialFormValues, SpecialSponsorshipGroup, SpecialSponsorshipType } from "../types";
import * as yup from "yup";
import { isAgreedToTermsValidation, NUMBER_INPUT_MAX } from "@/forms/constants";

export const SPECIAL_SPONSORSHIPS_META: Record<
  SpecialSponsorshipType,
  { label: string; amount: number; parent: SpecialSponsorshipGroup }
> = {
  [SpecialSponsorshipType.BoterMeseca]: {
    label: "Mesečno botrstvo",
    amount: 10,
    parent: SpecialSponsorshipGroup.BoterMeseca,
  },
  [SpecialSponsorshipType.MucGreBrezSkrbiVNoveDni]: {
    label: "Muc gre brez skrbi v nove dni",
    amount: 25,
    parent: SpecialSponsorshipGroup.BrezSkrbiVNoveDni,
  },
  [SpecialSponsorshipType.MucaGreBrezSkrbiVNoveDni]: {
    label: "Muca gre brez skrbi v nove dni",
    amount: 35,
    parent: SpecialSponsorshipGroup.BrezSkrbiVNoveDni,
  },
  [SpecialSponsorshipType.NovZacetek]: {
    label: "Nov začetek",
    amount: 60,
    parent: SpecialSponsorshipGroup.NovZacetek,
  },
  [SpecialSponsorshipType.FipBojevnikZa1Dan]: {
    label: "FIP bojevnik za en dan",
    amount: 25,
    parent: SpecialSponsorshipGroup.FipBojevniki,
  },
  [SpecialSponsorshipType.FipBojevnikZa2Dni]: {
    label: "FIP bojevnik za dva dni",
    amount: 50,
    parent: SpecialSponsorshipGroup.FipBojevniki,
  },
  [SpecialSponsorshipType.FipBojevnikZa1Teden]: {
    label: "FIP bojevnik za en teden",
    amount: 175,
    parent: SpecialSponsorshipGroup.FipBojevniki,
  },
  [SpecialSponsorshipType.MajhnaZobnaMiska]: {
    label: "Majhna zobna miška",
    amount: 60,
    parent: SpecialSponsorshipGroup.ZobnaMiska,
  },
  [SpecialSponsorshipType.VelikaZobnaMis]: {
    label: "Velika zobna miš",
    amount: 120,
    parent: SpecialSponsorshipGroup.ZobnaMiska,
  },
};

export const specialFormValidation = {
  paramsStep: {
    is_gift: yup.boolean(),
    amount: yup.lazy((_value, options) => {
      const parent: SpecialFormValues = options.parent;

      return yup
        .number()
        .integer()
        .min(SPECIAL_SPONSORSHIPS_META[parent.type].amount)
        .max(NUMBER_INPUT_MAX)
        .required();
    }),
    type: yup.number(),
    is_anonymous: yup.boolean(),
  },
  summaryStep: {
    ...isAgreedToTermsValidation,
  },
};
