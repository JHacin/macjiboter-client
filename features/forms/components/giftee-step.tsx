import { FC } from "react";
import * as yup from "yup";
import { PersonGender } from "@/common/types";
import { PersonFields } from "./person-fields";
import { FormGroup } from "./form-group";
import { TextareaField } from "./textarea-field";
import { FormSectionHeading } from "./form-section-heading";
import { Box } from "@chakra-ui/react";

export interface SponsorshipFormGifteeValues {
  giftee_email: string;
  giftee_first_name: string;
  giftee_last_name: string;
  giftee_gender: PersonGender | null;
  giftee_address: string;
  giftee_zip_code: string;
  giftee_city: string;
  giftee_country: string;
}

export const gifteeDefaultValues = {
  giftee_email: "",
  giftee_first_name: "",
  giftee_last_name: "",
  giftee_gender: null,
  giftee_address: "",
  giftee_zip_code: "",
  giftee_city: "",
  giftee_country: "SI",
  gift_message: "",
  gift_notes: "",
};

export const gifteeStepValidation = {
  giftee_email: yup.string().email().required(),
  giftee_first_name: yup.string().required(),
  giftee_last_name: yup.string().required(),
  giftee_gender: yup.number().typeError("Polje je obvezno.").required(),
  giftee_address: yup.string(),
  giftee_zip_code: yup.string(),
  giftee_city: yup.string(),
  giftee_country: yup.string(),
  gift_message: yup.string(),
  gift_notes: yup.string(),
};

export const GifteeStep: FC = () => {
  return (
    <>
      <Box mb={12}>
        <FormGroup>
          <FormSectionHeading>Podatki obdarovanca</FormSectionHeading>
        </FormGroup>
        <PersonFields personType="giftee" />
      </Box>
      <FormGroup>
        <FormSectionHeading>Posebnosti</FormSectionHeading>
      </FormGroup>
      <FormGroup>
        <TextareaField
          name="gift_message"
          label="Osebno sporočilo"
          hint="Sporočilo bomo v vašem imenu poslali skupaj z obvestilom o prejemu botrstva."
        />
      </FormGroup>
      <FormGroup>
        <TextareaField
          name="gift_notes"
          label="Opombe"
          hint="Nas želite na kaj opozoriti, imate kakšne posebne želje?"
        />
      </FormGroup>
    </>
  );
};
