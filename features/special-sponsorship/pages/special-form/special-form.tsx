import { FC, useState } from "react";
import {
  gifteeDefaultValues,
  gifteeStepValidation,
  payerDefaultValues,
  payerStepValidation,
  PersonFormStep,
} from "@/forms/components/person-form-step";
import { MultiStepForm } from "@/forms/components/multi-step-form";
import { SPECIAL_SPONSORSHIPS_META, specialFormValidation } from "../../constants";
import { SpecialFormValues, SpecialSponsorshipType } from "../../types";
import { apiPost } from "@/api/util";
import { ParamsStep } from "./_params-step";
import { ROUTES } from "@/common/constants";
import { SummaryStep } from "@/forms/components/summary-step";
import { FormPageContent } from "@/forms/components/form-page-content";

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
    is_agreed_to_terms: false,
  };

  const [values, setValues] = useState(initialValues);

  const steps = [
    {
      name: "Osnovni podatki",
      validationSchema: specialFormValidation.paramsStep,
      component: <ParamsStep />,
    },
    {
      name: "Vaši podatki",
      validationSchema: payerStepValidation,
      component: <PersonFormStep personType="payer" />,
    },
    {
      name: "Podatki obdarovanca",
      validationSchema: gifteeStepValidation,
      component: <PersonFormStep personType="giftee" />,
      isHidden: !values.is_gift,
    },
    {
      name: "Zaključek",
      validationSchema: specialFormValidation.summaryStep,
      component: <SummaryStep />,
    },
  ];

  const onSubmit = async (values: SpecialFormValues) => {
    await apiPost("special-sponsorships", values);
  };

  return (
    <FormPageContent
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
