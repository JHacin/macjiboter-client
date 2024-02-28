import { Container } from "@/common/components/container";
import { Box, Heading, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { TextLink } from "@/common/components/text-link";
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
            <VStack spacing={16} fontSize="lg" maxWidth="800px">
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
                <Text>Naše strani uporabljajo piškotke, ki si zapomnijo:</Text>
                <UnorderedList pl={6} spacing={2}>
                  <ListItem>
                    podatke o seji; po poteku seje (ko zaprete brskalnik) se izbriše z vašega
                    računalnika,
                  </ListItem>
                  <ListItem>če se želite (ali ne) prijaviti na e-novice,</ListItem>
                  <ListItem>
                    če soglašate (ali ne) z uporabo piškotkov na tej spletni strani.
                  </ListItem>
                </UnorderedList>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="lg">
                  Piškotki Google Analytics
                </Text>
                <Text>
                  S pomočjo teh piškotkov beležimo statistiko obiskovalcev. Ti piškotki ne vsebujejo
                  osebnih informacij, služijo le za boljše razumevanje uporabnikov naše spletne
                  strani. Če želite blokirati Google Analytics, lahko to storite z uporabo{" "}
                  <TextLink href="https://tools.google.com/dlpage/gaoptout" isExternal={true}>
                    tega vtičnika
                  </TextLink>
                  .
                </Text>
                <Text>
                  Informacije, ki jih zbiramo s piškoti, se ne uporabljajo za ugotavljanje
                  istovetnosti uporabnika in podatki o brskalnih navadah so v celoti pod našim
                  nadzorom. Ti piškotki se ne uporabljajo za druge namene, razen tistih, ki so tukaj
                  navedeni.
                </Text>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl" textDecoration="underline">
                  Kako upravljati s piškotki?
                </Text>
                <Text>
                  Večina spletnih brskalnikov omogoča, da nastavite vaše piškote. Piškotke lahko
                  zavrnete ali jih sprejmete s funkcijo, vgrajeno v spletne brskalnike. Če piškotke
                  zavrnete, lahko naprej uporabljate našo spletno stran, vendar določene podstrani
                  ne bodo delovale.
                </Text>
              </VStack>
              <VStack spacing={4}>
                <Heading as="h2" size="lg" mb={4}>
                  II. E-NOVICE
                </Heading>
                <Text>
                  Če želite, da vam Zavod Mačja hiša preko e-pošte pošilja novičke o projektu Mačji
                  boter, se lahko prijavite na e-novice. Prijava je prostovoljna in jo lahko vedno
                  prekličete. Po tem ko izpolnite prijavni obrazec, vam je na vpisan e-naslov
                  poslano sporočilo, ki ga morate potrditi, če želite prejemati naše e-novice. To je
                  varnostni ukrep v primeru, da bi kdo drug vaš e-naslov vpisal v naš obrazec.
                </Text>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl" textDecoration="underline">
                  Uporaba vaših podatkov
                </Text>
                <Text>
                  Za pošiljanje e-novic uporabljamo spletni servis MailChimp. S prijavo na e-novice
                  se strinjate, da se vaši osebni podatki uporabljajo znotraj tega sistema v skladu
                  z njihovo politiko poslovanja in politiko zasebnosti.
                </Text>
                <Text>
                  Ob prijavi na e-novice, vas prosimo, da izberete, katere informacije želite od nas
                  prejemati:
                </Text>
                <UnorderedList pl={6} spacing={2}>
                  <ListItem>
                    novice Mačje hiše (novice o delovanju zavoda in zavetišča, akcijah zbiranja
                    sredstev za pomoč mucam, dobrodelnih licitacijah, informacije o mucah, ki iščejo
                    dom itd.),
                  </ListItem>
                  <ListItem>
                    novice Veterine MH in trgovine Super Čombe (novice, storitve in akcije Veterine
                    MH in trgovine za male živali Super Čombe; tako Veterina MH kot Super čombe
                    delujeta pod okriljem Mačje hiše),
                  </ListItem>
                  <ListItem>novice Mačjega botra.</ListItem>
                </UnorderedList>
                <Text>
                  Če ne označite nobenega od okvirčkov, boste uvrščeni na seznam za pošiljanje
                  e-novic, a novic ne boste prejemali.
                </Text>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl" textDecoration="underline">
                  Nadzor nad podatki
                </Text>
                <Text>
                  Vi imate popoln nadzor nad vsemi vašimi osebnimi podatki, ki jih uporabljamo za
                  pošiljanje e-novic.
                </Text>
                <Text>
                  Na dnu (v nogi) vsakih e-novic, ki vam jih pošljemo, sta dve povezavi, ki vam
                  omogočata popoln nadzor nad osebnimi podatki:
                </Text>
                <UnorderedList pl={6} spacing={2}>
                  <ListItem>odjavi se: prenehali vam bomo pošiljati e-novice;</ListItem>
                  <ListItem>
                    posodobi podatke: omogoča pregled, posodobitev ali izbris vpisanih podatkov
                    (razen e-naslova).
                  </ListItem>
                </UnorderedList>
                <Text>
                  Če želite popoln izbris svojih podatkov iz našega seznama za pošiljanje e-novic,
                  nam, prosimo, pišite na{" "}
                  <TextLink href="mailto:novice@macjahisa.si">novice@macjahisa.si</TextLink>.
                </Text>
              </VStack>
            </VStack>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
}
