import { FC } from "react";
import { TextField } from "./text-field";
import { Grid, GridItem } from "@chakra-ui/react";
import { RadioField } from "./radio-field";
import * as yup from "yup";
import { SelectField } from "./select-field";
import countries from "i18n-iso-countries";
import { useFormikContext } from "formik";
import { FormOption } from "../types";
import { PersonGender } from "@/common/types";
import { FormGroup } from "./form-group";

interface PersonFormStepProps {
  personType: "payer" | "giftee";
}

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

export const payerStepValidation = {
  payer_email: yup.string().email().required(),
  payer_first_name: yup.string().required(),
  payer_last_name: yup.string().required(),
  payer_gender: yup.number().typeError("Polje je obvezno.").required(),
  payer_address: yup.string().required(),
  payer_zip_code: yup.string().required(),
  payer_city: yup.string().required(),
  payer_country: yup.string().required(),
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

export const gifteeDefaultValues = {
  giftee_email: "",
  giftee_first_name: "",
  giftee_last_name: "",
  giftee_gender: null,
  giftee_address: "",
  giftee_zip_code: "",
  giftee_city: "",
  giftee_country: "SI",
};

export const gifteeStepValidation = {
  giftee_email: yup.string().email().required(),
  giftee_first_name: yup.string().required(),
  giftee_last_name: yup.string().required(),
  giftee_gender: yup.number().typeError("Polje je obvezno.").required(),
  giftee_address: yup.string().required(),
  giftee_zip_code: yup.string().required(),
  giftee_city: yup.string().required(),
  giftee_country: yup.string().required(),
};

const PERSON_GENDER_LABELS = {
  [PersonGender.Male]: "moški",
  [PersonGender.Female]: "ženska",
};

const PERSON_GENDER_FORM_OPTIONS: FormOption[] = [
  {
    label: PERSON_GENDER_LABELS[PersonGender.Female],
    value: PersonGender.Female,
  },
  {
    label: PERSON_GENDER_LABELS[PersonGender.Male],
    value: PersonGender.Male,
  },
];

const countryNames = countries.getNames("sl", { select: "official" });
const countryOptions: FormOption[] = Object.keys(countryNames).map((code) => ({
  label: countryNames[code],
  value: code,
}));

export const PersonFormStep: FC<PersonFormStepProps> = ({ personType }) => {
  const { setFieldValue } = useFormikContext();

  const formatFieldName = (name: string) => {
    return `${personType}_${name}`;
  };

  const formatAutoCompleteKey = (key: string) => {
    return `${personType === "giftee" ? "new-" : ""}${key}`;
  };

  return (
    <>
      <FormGroup>
        <TextField
          name={formatFieldName("email")}
          label="Email"
          inputProps={{ autoComplete: formatAutoCompleteKey("email") }}
        />
      </FormGroup>

      <FormGroup>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={{ base: 5, md: 2 }}>
            <TextField
              name={formatFieldName("first_name")}
              label="Ime"
              inputProps={{ autoComplete: formatAutoCompleteKey("given-name") }}
            />
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 3 }}>
            <TextField
              name={formatFieldName("last_name")}
              label="Priimek"
              inputProps={{ autoComplete: formatAutoCompleteKey("family-name") }}
            />
          </GridItem>
        </Grid>
      </FormGroup>

      <FormGroup>
        <RadioField
          name={formatFieldName("gender")}
          label="Spol"
          options={PERSON_GENDER_FORM_OPTIONS}
          onChangeOverride={(value) => {
            setFieldValue(formatFieldName("gender"), Number(value));
          }}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          name={formatFieldName("address")}
          label="Naslov"
          inputProps={{ autoComplete: formatAutoCompleteKey("street-address") }}
        />
      </FormGroup>

      <FormGroup>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={{ base: 5, md: 2 }}>
            <TextField
              name={formatFieldName("zip_code")}
              label="Poštna št."
              inputProps={{ autoComplete: formatAutoCompleteKey("postal-code") }}
            />
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 3 }}>
            <TextField
              name={formatFieldName("city")}
              label="Kraj"
              inputProps={{ autoComplete: formatAutoCompleteKey("address-level2") }}
            />
          </GridItem>
        </Grid>
      </FormGroup>

      {countryOptions && (
        <FormGroup>
          <SelectField name={formatFieldName("country")} label="Država" options={countryOptions} />
        </FormGroup>
      )}
    </>
  );
};
