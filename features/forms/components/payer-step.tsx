import { FC } from "react";
import * as yup from "yup";
import { PersonGender } from "@/common/types";
import { PersonFields } from "./person-fields";

export interface SponsorshipFormPayerValues {
  payer_email: string;
  payer_first_name: string;
  payer_last_name: string;
  payer_gender: PersonGender | null;
  payer_address: string;
  payer_zip_code: string;
  payer_city: string;
  payer_country: string;
}

export const payerStepValidation = {
  payer_email: yup.string().email().required(),
  payer_first_name: yup.string().required(),
  payer_last_name: yup.string().required(),
  payer_gender: yup.number().typeError("Polje je obvezno.").required(),
  payer_address: yup.string(),
  payer_zip_code: yup.string(),
  payer_city: yup.string(),
  payer_country: yup.string(),
};

export const payerDefaultValues = {
  payer_email: "",
  payer_first_name: "",
  payer_last_name: "",
  payer_gender: null,
  payer_address: "",
  payer_zip_code: "",
  payer_city: "",
  payer_country: "SI",
};

export const PayerStep: FC = () => {
  return (
    <>
      <PersonFields personType="payer" />
    </>
  );
};
