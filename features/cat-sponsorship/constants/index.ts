import { isAgreedToTermsValidation, NUMBER_INPUT_MAX } from "@/forms/constants";
import * as yup from "yup";

export const catFormValidation = {
  paramsStep: {
    is_gift: yup.boolean(),
    monthly_amount: yup.number().integer().min(5).max(NUMBER_INPUT_MAX).required(),
    requested_duration: yup.number().when("is_gift", {
      is: true,
      then: (schema) => schema.integer().positive().max(NUMBER_INPUT_MAX).nullable(true),
      otherwise: (schema) => schema.strip(),
    }),
    wants_direct_debit: yup.boolean(),
    is_anonymous: yup.boolean(),
  },
  summaryStep: {
    ...isAgreedToTermsValidation,
  },
};
