import { CatForm } from "@/cat-sponsorship/pages/cat-form/cat-form";
import { useCurrentCat } from "@/cats/hooks/use-current-cat";
import { getFirstPhotoOrFallback } from "@/cats/util/photos";
import { Container } from "@/common/components/container";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { Section } from "@/common/components/section";
import { Box, Spinner } from "@chakra-ui/react";

export default function CatSponsorshipFormPage() {
  const { data: cat, isSuccess } = useCurrentCat();

  if (!isSuccess) {
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
