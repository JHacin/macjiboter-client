import * as yup from "yup";

export const isAgreedToTermsValidation = {
  is_agreed_to_terms: yup.boolean().oneOf([true], "Prosimo označite, da se strinjate z navedenim."),
};

export const NUMBER_INPUT_MAX = 999999;

export const FORM_GROUP_SPACING = 8;
