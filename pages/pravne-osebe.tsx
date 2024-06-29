import { NextPage } from "next";
import { Container } from "@/common/components/container";
import { Box, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { ROUTES } from "@/common/constants";
import { FilledPageTitle } from "@/common/components/page-title";
import { ContactEmailTextLink, TextLink } from "@/common/components/text-link";
import { SPECIAL_SPONSORSHIP_GROUP_META } from "@/special-sponsorship/constants";
import { SpecialSponsorshipGroup } from "@/special-sponsorship/types";

const LegalPersonsPage: NextPage = () => {
  const { breakpoints } = useTheme();

  return (
    <Layout>
      <MetaTags
        title="Pravne osebe"
        description="V primeru botrovanj pravnih oseb in fizičnih oseb z dejavnostjo (s.p.) vam pripravimo donatorsko pogodbo. Pogoji botrovanj se nekoliko razlikujejo od botrovanj fizičnih oseb."
      />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <FilledPageTitle>pravne osebe</FilledPageTitle>
          </Section>
          <Section spacing={{ top: "sm" }}>
            <VStack spacing={6} fontSize={{ lg: "lg" }} maxWidth="850px">
              <Text>
                V primeru botrovanj pravnih oseb in fizičnih oseb z dejavnostjo (s.p.) vam
                pripravimo donatorsko pogodbo. Pogoji botrovanj se nekoliko razlikujejo od botrovanj
                fizičnih oseb.
              </Text>
              <Text>Pravne osebe se lahko odločijo za naslednje vrste botrovanj:</Text>
              <UnorderedList pl={6}>
                <ListItem>
                  <TextLink href={ROUTES.CatsList}>Redno botrstvo</TextLink>, minimalna donacija 50
                  € / mesec
                </ListItem>
                <ListItem>
                  <TextLink
                    href={ROUTES.SpecialSponsorshipGroup(
                      SPECIAL_SPONSORSHIP_GROUP_META[SpecialSponsorshipGroup.BoterMeseca]
                    )}
                  >
                    Mesečno botrstvo
                  </TextLink>
                  , minimalna donacija 50 €
                </ListItem>
                <ListItem>
                  <TextLink
                    href={ROUTES.SpecialSponsorshipGroup(
                      SPECIAL_SPONSORSHIP_GROUP_META[SpecialSponsorshipGroup.BrezSkrbiVNoveDni]
                    )}
                  >
                    Brez skrbi v nove dni
                  </TextLink>
                  , minimalna donacija 50 €
                </ListItem>
                <ListItem>
                  <TextLink
                    href={ROUTES.SpecialSponsorshipGroup(
                      SPECIAL_SPONSORSHIP_GROUP_META[SpecialSponsorshipGroup.NovZacetek]
                    )}
                  >
                    Nov začetek
                  </TextLink>
                  , donacija 60 €
                </ListItem>
                <ListItem>
                  <TextLink
                    href={ROUTES.SpecialSponsorshipGroup(
                      SPECIAL_SPONSORSHIP_GROUP_META[SpecialSponsorshipGroup.FipBojevniki]
                    )}
                  >
                    FIP bojevnik
                  </TextLink>
                  , minimalna donacija 50 €
                </ListItem>
                <ListItem>
                  <TextLink
                    href={ROUTES.SpecialSponsorshipGroup(
                      SPECIAL_SPONSORSHIP_GROUP_META[SpecialSponsorshipGroup.ZobnaMiska]
                    )}
                  >
                    Zobna miška
                  </TextLink>
                  , 60 ali 120 €
                </ListItem>
              </UnorderedList>
              <Text>
                Pravne osebe navedemo na seznamu botrov. Pisem, voščilnic, diplom ne prilagajamo in
                so enaka za pravne in fizične osebe. Pogoje botrovanj pravnih oseb natančneje
                določimo pred podpisom donatorske pogodbe.
              </Text>
              <Text>
                Za ureditev botrovanja nam pišite na <ContactEmailTextLink />.
              </Text>
            </VStack>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
};

export default LegalPersonsPage;
