import { Container } from "@/common/components/container";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { EXTERNAL_LINKS, ROUTES } from "@/common/constants";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { TextLink } from "@/common/components/text-link";

export default function BecomeSponsorOverviewPage() {
  const { breakpoints } = useTheme();

  return (
    <Layout>
      <MetaTags title="Postani boter" description="Vse o tem, kako deluje program Mačji boter." />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <Heading
              as="h1"
              size="3xl"
              bgColor="copper.200"
              display="inline-block"
              fontWeight={800}
              px={6}
              py={5}
              rounded="md"
            >
              postani boter
            </Heading>
          </Section>
          <Section spacing={{ top: "sm" }}>
            <VStack spacing={6} fontSize="lg" maxWidth="850px">
              <Text>
                Botri so tisti, ki omogočajo, da vsak muc pri nas dobi to, kar potrebuje, ne glede
                na njegovo starost, dolžino in barvo dlake, morebitne poškodbe, zdravstveno stanje
                in druge posebnosti.
              </Text>
              <Text>
                Že od leta 2009, ko je v okviru{" "}
                <TextLink href={EXTERNAL_LINKS.MacjaHisa} isExternal={true} fontWeight="semibold">
                  Mačje hiše
                </TextLink>{" "}
                nastal, program Mačji boter omogoča posvojitve muck na daljavo. Takšna posvojitev
                pomeni, da mačji botri finančno pomagajo brezdomnim mucam, ki so svoje zavetje
                dobile v zavetišču (ali pri skrbnikih prostovoljcih) in tam čakajo na nove domove. V
                primerjavi z običajnimi donacijami botrstvo nudi boljši vpogled v to, za kaj je bil
                porabljen prispevek in donatorja poveže z njegovim muckom (ali skupino muckov) na
                mnogo bolj pristen in oseben način.
              </Text>
              <Text>
                Nekateri pravijo, da je botrstvo čisto brez veze, saj mucki v resnici ne vedo, kaj
                to je in kdo je njihov boter. Morda imajo celo prav, čeprav se mi s tem ne
                strinjamo. Mi verjamemo, da lepe želje vedno najdejo pot do tistih, ki so jim
                namenjene in jih na čisto svoj način pobožajo.
              </Text>
              <Text>
                Če ne drugače, jim ljubezen botrov predamo tisti, ki se vsakodnevno trudimo za njih.
                Nam to, da jih ima poleg nas rad tudi še kdo drug, da se še komu zdijo vredni truda,
                ljubezni, časa in denarja, pomeni ogromno. Pomeni, da{" "}
                <strong>nismo sami in da moramo vztrajati</strong>.
              </Text>
            </VStack>

            <Box mt={20} maxWidth="850px">
              <Heading as="h2" fontWeight={800} size="xl">
                Vrste botrstev
              </Heading>
              <VStack spacing={6} mt={6} fontSize="lg">
                <Text
                  sx={{
                    rounded: "sm",
                    borderLeftWidth: "3px",
                    borderColor: "orange.500",
                    p: 4,
                    bgColor: "orange.50",
                  }}
                >
                  Najbolj pogosto izbrana oblika mačjega botrstva je{" "}
                  <TextLink href={ROUTES.CatsList} fontWeight="semibold">
                    redno botrstvo
                  </TextLink>
                  , pri katerem boter izbere svojega mucka ali skupino muckov (pozitivčke, mladičke
                  s pomočjo Bubija ali kar vse s pomočjo Čombeta). Z izpolnitvijo{" "}
                  <i>Dogovora o posvojitvi na daljavo</i> se boter zaveže, da bo za svojega mucka
                  redno mesečno prispeval izbran znesek.
                </Text>
                <Text
                  sx={{
                    rounded: "sm",
                    borderLeftWidth: "3px",
                    borderColor: "purple.500",
                    p: 4,
                    bgColor: "purple.50",
                  }}
                >
                  Tistim, ki bi želeli pomagati le občasno ali enkratno, so namenjena različna{" "}
                  <TextLink href={ROUTES.SpecialSponsorships} fontWeight="semibold">
                    posebna botrstva
                  </TextLink>
                  .
                </Text>
                <Text
                  sx={{
                    rounded: "sm",
                    borderLeftWidth: "3px",
                    borderColor: "blue.500",
                    p: 4,
                    bgColor: "blue.50",
                  }}
                >
                  Prav vse oblike botrovanj pa lahko tudi{" "}
                  <TextLink href={ROUTES.GiftSponsorship} fontWeight="semibold">
                    podarite
                  </TextLink>
                  , s tem razveselite obdarovanca ter hkrati v njegovem imenu prispevate k boljšem
                  življenju muc.
                </Text>
              </VStack>
            </Box>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
}
