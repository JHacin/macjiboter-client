import { FC } from "react";
import { CheckboxField } from "@/forms/components/checkbox-field";
import { SelectField } from "@/forms/components/select-field";
import { useFormikContext } from "formik";
import { CurrencyEur } from "@phosphor-icons/react";
import { TextField } from "@/forms/components/text-field";
import { SPECIAL_SPONSORSHIPS_META } from "../../constants";
import { SpecialFormValues, SpecialSponsorshipType } from "../../types";
import { numericInputValueParser } from "@/forms/util";
import { FormOption } from "@/forms/types";
import { FormGroup } from "@/forms/components/form-group";

const typeOptions: FormOption[] = Object.keys(SPECIAL_SPONSORSHIPS_META)
  .map((type) => Number(type))
  .map((type: SpecialSponsorshipType) => ({
    label: SPECIAL_SPONSORSHIPS_META[type].label,
    value: type,
  }));

export const ParamsStep: FC = () => {
  const { setFieldValue, setValues } = useFormikContext<SpecialFormValues>();

  return (
    <>
      <FormGroup>
        <SelectField
          name="type"
          label="Tip botrstva"
          options={typeOptions}
          onChangeOverride={(value) => {
            const type: SpecialSponsorshipType = Number(value);
            const newMinimumAmount = SPECIAL_SPONSORSHIPS_META[type].amount;

            setValues((values) => ({ ...values, type, amount: newMinimumAmount }));
          }}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          name="amount"
          label="Znesek"
          inputProps={{
            placeholder: "Poljubni znesek v evrih",
            leftElementIcon: CurrencyEur,
            onChangeOverride: (event) => {
              setFieldValue("amount", numericInputValueParser(event.target.value));
            },
          }}
          isNumeric={true}
        />
      </FormGroup>

      <FormGroup>
        <CheckboxField name="is_gift" label="Botrstvo želim podariti" />
      </FormGroup>

      <FormGroup>
        <CheckboxField
          name="is_anonymous"
          label="Botrstvo naj bo anonimno"
          hint="Označite v primeru, da ne želite navedbe vašega (obdarovančevega) imena in kraja bivanja na seznamu botrov."
        />
      </FormGroup>
    </>
  );
};
