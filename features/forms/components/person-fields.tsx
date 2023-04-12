import { FC } from "react";
import { FormGroup } from "./form-group";
import { FormNote } from "./form-note";
import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { TextField } from "./text-field";
import { RadioField } from "./radio-field";
import { SelectField } from "./select-field";
import { useFormikContext } from "formik";
import { PersonGender } from "@/common/types";
import { FormOption } from "../types";
import countries from "i18n-iso-countries";
import { FORM_GROUP_SPACING } from "../constants";

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

export const PersonFields: FC<{ personType: "payer" | "giftee" }> = ({ personType }) => {
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
        <FormNote>
          <VStack spacing={4}>
            <Text>
              Osebne podatke potrebujemo izključno za namene komunikacije in obveščanja po e-mailu.
            </Text>
            <Text>
              Podatki naslova niso obvezni, vendar nam pridejo prav v primerih, ko se na naslov
              pošlje kakšno manjše presenečenje ali kaj podobnega.
            </Text>
          </VStack>
        </FormNote>
      </FormGroup>

      <FormGroup>
        <TextField
          name={formatFieldName("email")}
          label="Email"
          inputProps={{ autoComplete: formatAutoCompleteKey("email") }}
        />
      </FormGroup>

      <FormGroup>
        <Grid templateColumns="repeat(5, 1fr)" rowGap={FORM_GROUP_SPACING} columnGap={4}>
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
        <Grid templateColumns="repeat(5, 1fr)" rowGap={FORM_GROUP_SPACING} columnGap={4}>
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
