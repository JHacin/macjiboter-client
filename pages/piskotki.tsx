import { Container } from "@/common/components/container";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { FilledPageTitle } from "@/common/components/page-title";

export default function CookiePolicyPage() {
  const { breakpoints } = useTheme();

  return (
    <Layout>
      <MetaTags title="Piškotki" description="Vse o politiki piškotkov na spletni strani." />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <FilledPageTitle>piškotki</FilledPageTitle>
          </Section>

          <Section spacing={{ top: "sm" }}>
            <VStack spacing={16} fontSize={{ lg: "lg" }} maxWidth="850px">
              <VStack spacing={4}>
                <Heading as="h2" size="lg" mb={4}>
                  I. SPLOŠNO O PIŠKOTKIH
                </Heading>
                <Text>
                  Piškotek je majhna besedilna datoteka, ki jo spletna stran ob vašem obisku shrani
                  na vašem računalniku ali mobilni napravi. Spletni strani omogoča, da si za
                  določeno časovno obdobje zapomni vaša dejanja in prednostne nastavitve.
                </Text>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl" textDecoration="underline">
                  Kako uporabljamo piškotke
                </Text>
                <Text>
                  Na naši strani trenutno ne uporabljamo kakršnih koli piškotkov in si ne
                  shranjujemo podatkov o vašem obisku ali preferencah. Prav tako ne uporabljamo
                  zunanjih storitev, ki bi analizirale vaše obiske in dejanja. Ko se bo to
                  spremenilo, boste ob ponovnem obisku strani o tem primerno obveščeni.
                </Text>
              </VStack>
            </VStack>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
}
