import { FC, useState } from "react";
import { payerDefaultValues, payerStepValidation, PayerStep } from "@/forms/components/payer-step";
import { MultiStepForm } from "@/forms/components/multi-step-form";
import { SPECIAL_SPONSORSHIPS_META, specialFormValidation } from "../../constants";
import { SpecialFormValues, SpecialSponsorshipType } from "../../types";
import { apiPost } from "@/api/util";
import { ParamsStep } from "./_params-step";
import { ROUTES } from "@/common/constants";
import { SummaryStep } from "@/forms/components/summary-step";
import { FormPageContent } from "@/forms/components/form-page-content";
import { FormNote } from "@/forms/components/form-note";
import { FormGroup } from "@/forms/components/form-group";
import { Text, VStack } from "@chakra-ui/react";
import {
  gifteeDefaultValues,
  GifteeStep,
  gifteeStepValidation,
} from "@/forms/components/giftee-step";
import { DateField } from "@/forms/components/date-field";
import * as yup from "yup";
import dayjs from "dayjs";

interface SpecialFormProps {
  defaultType: SpecialSponsorshipType;
}

export const SpecialForm: FC<SpecialFormProps> = ({ defaultType }) => {
  const initialValues: SpecialFormValues = {
    type: defaultType,
    amount: SPECIAL_SPONSORSHIPS_META[defaultType].amount,
    is_gift: false,
    is_anonymous: false,
    ...payerDefaultValues,
    ...gifteeDefaultValues,
    gift_requested_activation_date: null,
    is_agreed_to_terms: false,
  };

  const [values, setValues] = useState(initialValues);
  const threeDaysInTheFuture = dayjs().add(3, "days").startOf("day").toDate();

  const steps = [
    {
      name: "Osnovni podatki",
      validationSchema: specialFormValidation.paramsStep,
      component: <ParamsStep />,
    },
    {
      name: "Vaši podatki",
      validationSchema: payerStepValidation,
      component: <PayerStep />,
    },
    {
      name: "Darilo",
      validationSchema: {
        ...gifteeStepValidation,
        gift_requested_activation_date: yup
          .date()
          .nullable()
          .min(threeDaysInTheFuture, "Datum mora biti vsaj 3 dni v prihodnosti."),
      },
      component: (
        <GifteeStep
          additionalFieldsBefore={
            <FormGroup>
              <DateField
                name="gift_requested_activation_date"
                label="Željeni datum aktivacije"
                hint={
                  <>
                    Če želite, lahko izberete točen dan, na katerega obdarovancu pošljemo obvestilo
                    o prejemu botrstva in pripadajoča darila (tista, ki jih lahko pošljemo takoj).
                    Izbran datum mora biti najmanj 3 dni v prihodnosti.
                  </>
                }
                datePickerProps={{
                  minDate: threeDaysInTheFuture,
                }}
              />
            </FormGroup>
          }
        />
      ),
      isHidden: !values.is_gift,
    },
    {
      name: "Zaključek",
      validationSchema: specialFormValidation.summaryStep,
      component: (
        <SummaryStep
          beforeContent={
            <FormGroup>
              <FormNote bgColor="orange">
                <Text fontWeight="semibold" fontSize="lg" textDecoration="underline">
                  Pravila botrstva
                </Text>
                <VStack spacing={4} mt={4}>
                  <Text>
                    Znesek za botrstvo je treba nakazati na TRR Mačje hiše najkasneje 3 dni po
                    oddaji obrazca.
                  </Text>
                  <Text>
                    V zameno bomo vam oz. vašemu obdarovancu najkasneje 3 dni po plačilu poslali
                    vse, kar je možno poslati takoj (diplome, voščilnice, koledarje ipd.).
                  </Text>
                </VStack>
              </FormNote>
            </FormGroup>
          }
        />
      ),
    },
  ];

  const onSubmit = async (values: SpecialFormValues) => {
    await apiPost("special-sponsorships", values);
  };

  return (
    <FormPageContent
      title="Dogovor za posebno botrstvo"
      breadcrumbItems={[
        { text: "Posebna botrstva", href: ROUTES.SpecialSponsorships },
        { text: "Sklenitev dogovora", isCurrentPage: true },
      ]}
      form={
        <MultiStepForm
          steps={steps}
          initialValues={initialValues}
          onSubmit={onSubmit}
          onValuesChange={setValues}
        />
      }
    />
  );
};
