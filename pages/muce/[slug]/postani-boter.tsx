import { CatForm } from "@/cat-sponsorship/pages/cat-form/cat-form";
import { useCurrentCat } from "@/cats/hooks/use-current-cat";
import { getFirstPhotoOrFallback } from "@/cats/util/photos";
import { Container } from "@/common/components/container";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { Section } from "@/common/components/section";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Spinner } from "@chakra-ui/react";

export default function CatSponsorshipFormPage() {
  const { data: cat, isLoading, isError } = useCurrentCat();

  if (isLoading) {
    return (
      <Layout>
        <Section spacing={{ top: "sm", bottom: "lg" }}>
          <Container>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 24,
              }}
            >
              <Spinner
                thickness="4px"
                speed="0.8s"
                emptyColor="gray.200"
                color="orange.500"
                size="xl"
              />
            </Box>
          </Container>
        </Section>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <Section spacing={{ top: "sm", bottom: "lg" }}>
          <Container>
            <Alert status="error" maxWidth="650px">
              <AlertIcon />
              <AlertTitle>Prišlo je do napake.</AlertTitle>
              <AlertDescription>Prosimo, poskusite znova.</AlertDescription>
            </Alert>
          </Container>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <MetaTags
        title={`${cat.name} - Dogovor o posvojitvi na daljavo`}
        description="Z vašo pomočjo lahko mucam omogočimo varno in zadovoljno življenje."
        isIndexable={false}
        image={{
          isExternal: true,
          path: getFirstPhotoOrFallback(cat),
        }}
      />
      <CatForm cat={cat} />
    </Layout>
  );
}
