import { FC, useState } from "react";
import { MultiStepForm } from "@/forms/components/multi-step-form";
import { payerDefaultValues, payerStepValidation, PayerStep } from "@/forms/components/payer-step";
import { useCurrentCat } from "@/cats/hooks/use-current-cat";
import { apiPost } from "@/api/util";
import { CatFormValues } from "../../types";
import { ParamsStep } from "./_params-step";
import { catFormValidation } from "../../constants";
import { ROUTES } from "@/common/constants";
import { SummaryStep } from "@/forms/components/summary-step";
import { FormPageContent } from "@/forms/components/form-page-content";
import { TextLink } from "@/common/components/text-link";
import {
  gifteeStepValidation,
  gifteeDefaultValues,
  GifteeStep,
} from "@/forms/components/giftee-step";

const initialValues: CatFormValues = {
  is_gift: false,
  wants_direct_debit: false,
  is_anonymous: false,
  monthly_amount: 5,
  requested_duration: null,
  ...payerDefaultValues,
  ...gifteeDefaultValues,
  is_agreed_to_terms: false,
};

export const CatForm: FC = () => {
  const { data: cat, isSuccess } = useCurrentCat();
  const [values, setValues] = useState(initialValues);

  if (!isSuccess) {
    return null;
  }

  const steps = [
    {
      name: "Osnovni podatki",
      validationSchema: catFormValidation.paramsStep,
      component: <ParamsStep />,
    },
    {
      name: "Vaši podatki",
      validationSchema: payerStepValidation,
      component: <PayerStep />,
    },
    {
      name: "Podatki obdarovanja",
      validationSchema: gifteeStepValidation,
      component: <GifteeStep />,
      isHidden: !values.is_gift,
    },
    {
      name: "Zaključek",
      validationSchema: catFormValidation.summaryStep,
      component: (
        <SummaryStep
          agreementCheckboxText={
            <>
              Potrjujem, da se strinjam s{" "}
              <TextLink href={ROUTES.FAQ} isExternal={true}>
                pravili posvojitve na daljavo
              </TextLink>
              , ter da Mačji hiši dovoljujem rabo osebnih podatkov izključno za namene obveščanja.
            </>
          }
        />
      ),
    },
  ];

  const onSubmit = async (values: CatFormValues) => {
    await apiPost(`cats/${cat.id}/adopt`, values);
  };

  return (
    <FormPageContent
      title="Dogovor o posvojitvi na daljavo"
      breadcrumbItems={[
        { text: "Muce, ki iščejo botra", href: ROUTES.CatsList },
        { text: cat.name, href: ROUTES.CatDetails(cat.slug) },
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
