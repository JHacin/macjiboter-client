import { Container } from "@/common/components/container";
import { Box, Heading, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { ContactEmailTextLink } from "@/common/components/text-link";
import { FilledPageTitle } from "@/common/components/page-title";

export default function TermsPage() {
  const { breakpoints } = useTheme();

  return (
    <Layout>
      <MetaTags title="Splošni pogoji" description="Vse o splošnih pogojih spletne strani." />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <FilledPageTitle>splošni pogoji</FilledPageTitle>
          </Section>

          <Section spacing={{ top: "sm" }}>
            <VStack spacing={16} fontSize={{ lg: "lg" }} maxWidth="850px">
              <VStack spacing={4}>
                <Heading as="h2" size="lg" mb={4}>
                  OSNOVNE DOLOČBE
                </Heading>
                <Text>
                  Spletna stran Mačji boter je dostopna na naslovu www.macjiboter.si (v nadaljevanju
                  spletna stran). Lastnik spletne strani je Zavod Mačja hiša, zavod za oskrbo mačk
                  in osveščanje, Groharjeva 8, 3000 Celje (v nadaljevanju Mačja hiša).
                </Text>
                <Text>
                  Obiskovalec spletnega mesta (v nadaljevanju: uporabnik) se strinja s spodaj
                  navedenimi pogoji uporabe.
                </Text>
                <Text>
                  Mačja hiša si pridržujejo pravico do sprememb vsebin na spletni strani, vključno s
                  spodaj navedenimi pogoji brez predhodnega obvestila. Spremembe o pogojih
                  poslovanja bodo v vsakem trenutku dostopne na spletni strani, uporabniki o tem ne
                  bodo posebej obveščeni.
                </Text>
                <Text>
                  V primeru, da nadaljujete z uporabo spletne strani, se smatra, da v celoti
                  razumete in se strinjate s spremembami.
                </Text>
              </VStack>
              <VStack spacing={4}>
                <Heading as="h2" size="lg" mb={4}>
                  UPORABA SPLETNE STRANI
                </Heading>
                <Text>
                  Uporabnik se zavezuje, da bo spletno stran uporabljal zakonito in na običajen
                  način. Če uporabnik spletno stran uporablja v nasprotju s temi pogoji, mu lahko
                  Mačja hiša začasno ali trajno (glede na težo kršitve) onemogočijo dostop.
                </Text>
                <Text>
                  Z običajno uporabo spletne strani med uporabnikom in Mačjo hišo ne nastane nobena
                  pogodba ali pogodben odnos, razen pri sklenitvi Dogovora o posvojitvi na daljavo
                  ali nakupa. Uporabnik zaradi uporabe spletne strani razen obveznosti, ki so
                  navedene v teh pogojih, nima nobenih drugih obveznosti.
                </Text>
                <Text>
                  Mačja hiša si pridržujejo pravico, da dostop do spletne strani, določenih delov
                  spletne strani ali posameznih funkcionalnosti kadarkoli omeji (npr. samo za
                  registrirane uporabnike ali botre) ali veže na izpolnitev določenih pogojev.
                </Text>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl" textDecoration="underline">
                  Povezave
                </Text>
                <Text>
                  Spletna stran uporablja tudi zunanje povezave, torej takšne, ki vodijo na spletne
                  strani tretjih oseb. Svetovni splet onemogoča popoln nadzor nad vsebinami, do
                  katerih vodijo povezave s tega spletnega mesta, zato Mačja hiša ne prevzema
                  odgovornosti za vsebine, ki so uporabnikom dostopne preko povezav na strani, ki
                  jih vzdržujejo tretje osebe.
                </Text>
              </VStack>
              <VStack spacing={4}>
                <Heading as="h2" size="lg" mb={4}>
                  SPLETNA STRAN
                </Heading>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl" textDecoration="underline">
                  Podatki podjetja
                </Text>
                <VStack>
                  <Text>ZAVOD MAČJA HIŠA, zavod za oskrbo mačk in osveščanje</Text>
                  <Text>Kulturniška ulica 35</Text>
                  <Text>3000 Celje</Text>
                </VStack>

                <VStack pt={2}>
                  <Text>Datum vpisa v register: 23. 10. 2009</Text>
                  <Text>Davčna številka (SI): 65283503</Text>
                  <Text>Zavezanec za DDV: Da</Text>
                  <Text>Matična številka: 3636569000</Text>
                  <Text>Email: info@macjahisa.si</Text>
                </VStack>

                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl" textDecoration="underline">
                  Dostop do informacij
                </Text>
                <Text>Mačja hiša se zavezuje, da bodo uporabniku vselej na voljo:</Text>

                <UnorderedList pl={6} spacing={2}>
                  <ListItem>podatki o identiteti lastnika spletne strani,</ListItem>
                  <ListItem>
                    kontaktni podatki, ki uporabniku omogočajo hitro in učinkovito komunikacijo z
                    lastnikom (naslov elektronske pošte, telefon ipd.),
                  </ListItem>
                  <ListItem>
                    informacije o bistvenih značilnostih programov mačjega botrstva,
                  </ListItem>
                  <ListItem>način in pogoji programov mačjega botrstva,</ListItem>
                  <ListItem>informacije o načinih plačila,</ListItem>
                  <ListItem>podatki o časovni veljavnosti mačjega botrstva,</ListItem>
                  <ListItem>
                    informacije o načinih odstopa od pogodbe in pogojih za odstop,
                  </ListItem>
                  <ListItem>
                    informacije o postopku s pritožbo uporabnika ter podatki o kontaktni osebi.
                  </ListItem>
                </UnorderedList>

                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl" textDecoration="underline">
                  Predstavitev digitalnih vsebin
                </Text>
                <Text>Mačja hiša na svoji strani Mačji boter ponuja digitalne vsebine.</Text>
                <Text>
                  4. člen ZVPot-1 digitalno vsebino definira kot: “podatke, ki nastanejo in so
                  dobavljeni v digitalni obliki”.
                </Text>
                <Text>
                  Mačja hiša bo vedno skušala čim bolj jasno in razumljivo predstaviti lastnosti
                  digitalnih vsebin na svoji strani Mačji boter ter čim bolje skrbeti za ažurnost in
                  pravilnost podatkov, ki so navedeni na spletni strani.
                </Text>
                <Text>
                  Značilnosti posameznih digitalnih vsebin se razlikujejo glede na izbrano vrsto
                  mačjega botrstva. Te značilnosti so podrobno opisane pri predstavitvi posameznih
                  vrst botrstev in dodatno v zavihku Pogosta vprašanja jih na tem mestu ne navajamo
                  posebej.
                </Text>
                <Text>
                  S strinjanjem s splošnimi pogoji uporabnik potrjuje, da se je seznanil s
                  specifičnimi značilnostmi, navedenimi pri posameznih vrstah botrovanj.
                </Text>
                <Text>
                  Za dodatne informacije in vprašanja smo vam pred sklenitvijo mačjega botrstva
                  vedno na voljo na <ContactEmailTextLink />.
                </Text>

                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl" textDecoration="underline">
                  Skladnost
                </Text>
                <Text>
                  Mačja hiša jamči za skladnost digitalnih vsebin s sklenjenim Dogovorom o
                  posvojitvi na daljavo. Če digitalne vsebine niso skladne z dogovorom, lahko
                  donator zahteva vračilo donacije.
                </Text>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl" textDecoration="underline">
                  Pritožbe
                </Text>
                <Text>
                  V primeru nezadovoljstva z digitalnimi vsebinami ali postopkom sklenitve in poteka
                  mačjega botrstva, vas prosimo, da nam svojo pritožbo pošljete na elektronski
                  naslov boter@macjahisa.si. Vašo pritožbo bomo evidentirali in nanjo v najkrajšem
                  možnem času odgovorili.
                </Text>
                <Text>Odgovorna oseba za sprejemanje pritožb je Helena Jovanović Hacin.</Text>
              </VStack>
              <VStack spacing={4}>
                <Heading as="h2" size="lg" mb={4}>
                  ODGOVORNOST
                </Heading>
                <Text>
                  Mačja hiša bo v okviru svojih zmožnosti skrbela za pravilnost in ažurnost
                  objavljenih vsebin, s čimer ne izključujejo možnosti za pojav morebitnih napak in
                  nepravilnosti med objavljenimi vsebinami.
                </Text>
                <Text>
                  Mačja hiša ne odgovarja za škodo, ki bi zaradi uporabe spletne strani utegnila
                  nastati na uporabnikovi strojni, programski ali drugi opremi. Uporabnik je dolžan
                  sam poskrbeti za primerno zaščito (protivirusno ipd.) opreme, s pomočjo katere
                  dostopa do spletne strani.
                </Text>
              </VStack>
              <VStack spacing={4}>
                <Heading as="h2" size="lg" mb={4}>
                  PRAVICE INTELEKTUALNE LASTNINE
                </Heading>
                <Text>
                  Celotna vsebina spletne strani, ne glede na obliko, v kateri je izražena, je
                  avtorsko pravno zaščitena. Nosilec avtorskih pravic na objavljenih vsebinah je
                  Mačja hiša, v nekaterih primerih pa ima Mačja hiša dovoljenje za uporabo avtorskih
                  del brez navedbe avtorja.
                </Text>
                <Text>
                  Vse avtorske pravice so pridržane njihovim nosilcem. Objave vsebin na spletnem
                  mestu v nobenem primeru ni mogoče razlagati kot odpoved katerikoli avtorski
                  pravici na vsebinah spletne strani.
                </Text>
              </VStack>
              <Text fontStyle="italic">Nazadnje posodobljeno: 14. 11. 2023</Text>
            </VStack>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
}
