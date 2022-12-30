import { FC } from "react";
import { Calendar, CurrencyEur } from "phosphor-react";
import { OptionsWithCustomValue } from "@/forms/components/options-with-custom-value";
import { CheckboxField } from "@/forms/components/checkbox-field";
import { useFormikContext } from "formik";
import { numericInputValueParser } from "@/forms/util";
import { CatFormValues } from "../../types";
import { FormGroup } from "@/forms/components/form-group";
import { InlineTooltipDecorator } from "@/common/components/inline-tooltip-decorator";

export const ParamsStep: FC = () => {
  const { values, setFieldValue } = useFormikContext<CatFormValues>();

  return (
    <>
      <FormGroup>
        <OptionsWithCustomValue
          name="monthly_amount"
          label="Mesečni znesek"
          options={[
            { label: "5€", value: 5 },
            { label: "10€", value: 10 },
            { label: "15€", value: 15 },
            { label: "25€", value: 25 },
          ]}
          onInputChangeOverride={(value) => {
            setFieldValue("monthly_amount", numericInputValueParser(value));
          }}
          inputProps={{
            placeholder: "Poljubni znesek",
            leftElementIcon: CurrencyEur,
          }}
          buttonsPerRow={{
            base: 2,
            sm: 4,
          }}
        />
      </FormGroup>

      <FormGroup>
        <CheckboxField name="is_gift" label="Botrstvo želim podariti" />
      </FormGroup>

      {values.is_gift && (
        <FormGroup>
          <OptionsWithCustomValue
            name="requested_duration"
            label="Trajanje"
            options={[
              { label: "Do preklica", value: null },
              { label: "1 mesec", value: 1 },
              { label: "6 mesecev", value: 6 },
              { label: "1 leto", value: 12 },
            ]}
            onInputChangeOverride={(value) => {
              // If user deletes the text, we set the value to `null`
              // so that the default option ("Do preklica") is selected.
              const parsed = value === "" ? null : numericInputValueParser(value);

              setFieldValue("requested_duration", parsed);
            }}
            inputProps={{
              placeholder: "Poljubno št. mesecev",
              leftElementIcon: Calendar,
            }}
            buttonsPerRow={{
              base: 2,
            }}
          />
        </FormGroup>
      )}

      <FormGroup>
        <InlineTooltipDecorator tooltipContent="Po oddaji obrazca vam bomo na vaš e-mail naslov poslali navodila za plačevanje prek trajnika.">
          <CheckboxField name="wants_direct_debit" label="Želim plačevati prek trajnika" />
        </InlineTooltipDecorator>
      </FormGroup>

      <FormGroup>
        <InlineTooltipDecorator tooltipContent="Označite, če želite, da se vaše ime in kraj ne prikazujeta na seznamu trenutnih botrov pri vaši posvojeni muci.">
          <CheckboxField name="is_anonymous" label="Botrstvo naj bo anonimno" />
        </InlineTooltipDecorator>
      </FormGroup>
    </>
  );
};
