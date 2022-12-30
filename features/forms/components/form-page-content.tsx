import { FC, ReactNode } from "react";
import { Container } from "@/common/components/container";
import { Breadcrumbs, BreadcrumbsProps } from "@/common/components/breadcrumbs";
import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { FormAsideNotes } from "@/forms/components/form-aside-notes";
import { Section } from "@/common/components/section";

export const FormPageContent: FC<{
  title: string;
  breadcrumbItems: BreadcrumbsProps["items"];
  form: ReactNode;
}> = ({ title, breadcrumbItems, form }) => {
  return (
    <Section spacing={{ top: "sm", bottom: "lg" }}>
      <Container>
        <Breadcrumbs items={breadcrumbItems} />
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
              {title}
            </Heading>
          </Box>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} mt={{ base: 24, sm: 36, lg: 40 }}>
          <Box mt={{ base: 0, lg: 20 }}>
            <FormAsideNotes />
          </Box>

          <Box>{form}</Box>
        </SimpleGrid>
      </Container>
    </Section>
  );
};
