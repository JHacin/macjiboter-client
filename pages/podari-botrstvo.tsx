import { NextPage } from "next";
import { Container } from "@/common/components/container";
import { Box, Heading, LinkBox, LinkOverlay, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { NextLink } from "@/common/components/next-link";
import { ROUTES } from "@/common/constants";
import { ButtonLink } from "@/common/components/button-link";

const GiftSponsorshipOverviewPage: NextPage = () => {
  const { breakpoints } = useTheme();

  return (
    <Layout>
      <MetaTags title="Podari botrstvo" description="Mačje botrstvo je lahko izvrstno darilo." />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <Heading
              as="h1"
              size="3xl"
              bgColor="copper.200"
              display="inline-block"
              px={6}
              py={5}
              fontWeight={800}
            >
              podari botrstvo
            </Heading>
          </Section>
          <Section spacing={{ top: "sm" }}>
            <VStack spacing={6} fontSize="lg" maxWidth="850px">
              <Text>
                Z mačjim botrstvom vedno naredite nekaj dobrega za mucke in za svoje dobro počutje.
                V primeru, da ga nekomu podarite, pa osrečite še prejemnika darila.
              </Text>
              <Text>
                Vsa naša botrstva so osmišljena na tak način, da so lahko tudi lepo darilo ob
                različnih priložnostih. Pogosto razveselijo tiste, ki praznujejo rojstni dan. Brez
                težav opravijo tudi delo Božička, Dedka Mraza, Valentina. Namesto ptičk lahko
                zažvrgolijo vašim najdražjim na Gregorjevo. Z njimi lahko voščite svežim
                diplomirancem, mladoporočencem, mamicam, mučenikom... Primerni so za vse
                priložnosti, saj jih skupaj z vami prilagodimo in po mačje ukrojimo (in ob tem
                nikogar ne opraskamo). Z njimi lahko obdarite kogarkoli, seveda pa se jih najbolj
                razveselijo mačjeljubci, ki srečo radi delijo z drugimi in jim dobrodelnost ni tuja.
              </Text>
              <Text>
                Če poznate kakšnega takšnega in bi ga želeli pobožati z mačjim botrstvom, lahko
                izbirate med spodaj opisanimi. Ko se odločite za katerega od naštetih, izpolnite
                obrazec izbranega botrovanja in na prvem koraku s kljukico označite polje Botrstvo
                želim podariti. V nadaljevanju vas bomo prosili, da poleg svojih vnesete tudi nekaj
                osebnih podatkov obdarovanca, ki so nujno potrebni za izvedbo obdarovanja. V
                primeru, da se želite temu izogniti, nam pišite in skupaj z vami bomo poiskali
                drugačno rešitev.
              </Text>
              <Text>Podarite lahko:</Text>
            </VStack>
            <SimpleGrid
              sx={{ mt: { base: 8, lg: 10 } }}
              spacing={{ base: 6, lg: 8 }}
              maxWidth="850px"
              columns={{ base: 1, md: 2 }}
            >
              <LinkBox backgroundColor="orange.100" shadow="md" p={{ base: 6, lg: 7 }}>
                <LinkOverlay as={NextLink} href={ROUTES.CatsList}>
                  <Heading as="h3" size="lg">
                    Redno botrstvo
                  </Heading>
                </LinkOverlay>

                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  mt={{ base: 4, lg: 5 }}
                  position="relative"
                >
                  Obdarovancu podarite botrovanje točno določenemu mucku ali skupini muckov. V času
                  botrstva bo prejemal vse, kar prejemajo mačji botri.
                </Text>

                <ButtonLink
                  href={ROUTES.CatsList}
                  colorScheme="orange"
                  variant="solid"
                  mt={{ base: 8, lg: 10 }}
                >
                  Muce, ki iščejo botra
                </ButtonLink>
              </LinkBox>
              <LinkBox backgroundColor="purple.100" shadow="md" p={{ base: 6, lg: 7 }}>
                <LinkOverlay as={NextLink} href={ROUTES.CatsList}>
                  <Heading as="h3" size="lg">
                    Posebno botrstvo
                  </Heading>
                </LinkOverlay>

                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  mt={{ base: 4, lg: 5 }}
                  position="relative"
                >
                  Pri posebnih vrstah botrstva ne izberete določenega mucka, temveč splošen namen,
                  za katerega bo prispevek porabljen.
                </Text>

                <ButtonLink
                  href={ROUTES.SpecialSponsorships}
                  colorScheme="purple"
                  variant="solid"
                  mt={{ base: 8, lg: 10 }}
                >
                  Seznam posebnih botrstev
                </ButtonLink>
              </LinkBox>
            </SimpleGrid>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
};

export default GiftSponsorshipOverviewPage;
