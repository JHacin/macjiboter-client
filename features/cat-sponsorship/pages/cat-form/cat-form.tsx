import { FC, useState } from "react";
import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { MultiStepForm } from "@/forms/components/multi-step-form";
import {
  gifteeDefaultValues,
  gifteeStepValidation,
  payerDefaultValues,
  payerStepValidation,
  PersonFormStep,
} from "@/forms/components/person-form-step";
import { useCurrentCat } from "@/cats/hooks/use-current-cat";
import { apiPost } from "@/api/util";
import { CatFormValues } from "../../types";
import { ParamsStep } from "./_params-step";
import { SummaryStep } from "./_summary-step";
import { catFormValidation } from "../../constants";
import { Breadcrumbs } from "@/common/components/breadcrumbs";
import { ROUTES } from "@/common/constants";
import { Section } from "@/common/components/section";
import { FormAsideNotes } from "@/forms/components/form-aside-notes";
import { Container } from "@/common/components/container";

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
      validationSchema: catFormValidation.summaryStep,
      component: <SummaryStep />,
    },
  ];

  const onSubmit = async (values: CatFormValues) => {
    await apiPost(`cats/${cat.id}/adopt`, values);
  };

  return (
    <Section spacing={{ top: "sm", bottom: "lg" }}>
      <Container>
        <Breadcrumbs
          items={[
            { text: "Muce, ki iščejo botra", href: ROUTES.CatsList },
            { text: cat.name, href: ROUTES.CatDetails(cat.slug) },
          ]}
        />
      </Container>

      <Container
        maxWidth={{
          base: "md",
          md: "lg",
          lg: "1000px",
        }}
      >
        <Box position="relative" mt={{ base: 24, sm: 32, lg: 44 }}>
          <Image
            src="/img/form-page-heading-blob.svg"
            alt=""
            pos="absolute"
            top={{ base: "-75px", sm: "-85px", md: "-75px", lg: "-90px" }}
            left={{ base: "-105px", sm: "-90px", md: "-120px", lg: "-130px" }}
            boxSize={{ base: "220px", sm: "240px" }}
          />

          <Box position="relative">
            <Heading as="h1" size={{ base: "xl", lg: "2xl" }}>
              Dogovor o posvojitvi na daljavo
            </Heading>
          </Box>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} mt={{ base: 24, sm: 36, lg: 40 }}>
          <Box mt={{ base: 0, lg: 20 }}>
            <FormAsideNotes />
          </Box>

          <Box>
            <MultiStepForm
              steps={steps}
              initialValues={initialValues}
              onSubmit={onSubmit}
              onValuesChange={setValues}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Section>
  );
};
