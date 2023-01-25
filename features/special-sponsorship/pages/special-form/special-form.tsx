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
import { FormNote } from "@/forms/components/form-note";
import { FormGroup } from "@/forms/components/form-group";
import { Divider, Text, VStack } from "@chakra-ui/react";

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
      component: (
        <SummaryStep
          agreementCheckboxText={
            <>
              Potrjujem, da sem seznanjen/a s pravili botrstva in se z njimi strinjam ter Mačji hiši
              dovoljujem rabo osebnih podatkov izključno za namene obveščanja.
            </>
          }
          beforeContent={
            <FormGroup>
              <FormNote bgColor="orange">
                <Text fontWeight="semibold" fontSize="md">
                  Pravila botrstva
                </Text>
                <Divider borderColor="blackAlpha.300" mt={2} mb={4} />
                <VStack spacing={4}>
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
