import { NextPage } from "next";
import { Container } from "@/common/components/container";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { ContactEmailTextLink } from "@/common/components/text-link";
import { FilledPageTitle } from "@/common/components/page-title";

const PrivacyPage: NextPage = () => {
  const { breakpoints } = useTheme();

  return (
    <Layout>
      <MetaTags title="Zasebnost" description="Vse o tem, kako upravljamo z vašimi podatki." />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <FilledPageTitle>zasebnost</FilledPageTitle>
          </Section>

          <Section spacing={{ top: "sm" }}>
            <VStack spacing={16} fontSize="lg" maxWidth="800px">
              <VStack spacing={4}>
                <Heading as="h2" size="lg" mb={4}>
                  I. PREDSTAVITEV UPRAVLJAVCA
                </Heading>
                <Text>
                  Spletno stran www.macjiboter.si (v nadaljevanju: spletno mesto) upravlja Zavod
                  Mačja hiša, Kulturniška ulica 35, 3000 Celje. Osebni podatki uporabnikov se
                  obdelujejo v mejah, ki jih določajo predpisi s področja varstva osebnih podatkov
                  oziroma izražena volja s strani posameznikov ali organizacij, ki uporabljajo
                  spletno mesto.
                </Text>
              </VStack>
              <VStack spacing={4}>
                <Heading as="h2" size="lg" mb={4}>
                  II. VARSTVO ZASEBNOSTI OZIROMA VARSTVO OSEBNIH PODATKOV
                </Heading>
                <Text>
                  Z osebnimi podatki ravnamo v skladu z določili Uredbe (EU) 2016/679 Evropskega
                  parlamenta in Sveta z dne 27. aprila 2016 o varstvu posameznikov pri obdelavi
                  osebnih podatkov in o prostem pretoku takih podatkov ter o razveljavitvi Direktive
                  95/46/ES (“GDPR”) in vsakokratno veljavno zakonodajo s področja varstva osebnih
                  podatkov in Zakona o elektronskih komunikacijah.
                </Text>
                <Text>
                  Obvezujemo se, da bomo zbrane podatke hranili in uporabljali le toliko časa, kot
                  bo potrebno za dosego namena, zaradi katerega so bili zbrani. Vaših osebnih
                  podatkov ne bomo posredovali nepooblaščenim fizičnim ali pravnim osebam. V primeru
                  sodelovanja z drugimi podjetji, ki za nas opravljajo določene storitve, bo
                  omogočen samo dostop do podatkov, ki so brezpogojno potrebni za izvedbo njihovih
                  storitev.
                </Text>
              </VStack>
              <VStack spacing={4}>
                <Heading as="h2" size="lg" mb={4}>
                  III. POOBLAŠČENA OSEBA ZA VARSTVO OSEBNIH PODATKOV
                </Heading>
                <Text>
                  Osebnih podatkov ne obdelujemo v takšnem obsegu, da bi to obveznost morali
                  izpolniti.
                </Text>
                <Text>
                  Zavod Mačja hiša, Kulturniška ulica 35, 3000 Celje, vaše osebne podatke preko
                  spletne strani shranjuje in obdeluje v naslednjih primerih:
                </Text>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl">
                  1. UPORABA OBRAZCA &quot;Dogovor o posvojitvi na daljavo&quot;
                </Text>
                <Text>Pravni temelji za obdelavo osebnih podatkov:</Text>
                <Text>
                  Osebna privolitev se pridobi skladno s 6(1)b) členom Splošne uredbe in se lahko
                  kadarkoli prekliče s pisno zahtevo na <ContactEmailTextLink />.
                </Text>
                <Text>
                  Preklic privolitve ne vpliva na zakonitost obdelave, ki se je na podlagi
                  privolitve izvajala do njenega preklica. Preklic privolitve pomeni, da upravljavec
                  določenih storitev, ki izhajajo iz Dogovora, ne bo več izvajal.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Kategorije osebnih podatkov in nameni:
                </Text>
                <Text>
                  Zavod Mačja hiša, Kulturniška ulica 35, 3000 Celje, za namen komunikacije vodi
                  naslednje kategorije osebnih podatkov:
                </Text>
                <VStack>
                  <Text>1. ime in priimek,</Text>
                  <Text>2. naslov,</Text>
                  <Text>3. spol,</Text>
                  <Text>4. elektronski naslov,</Text>
                  <Text>
                    5. IP naslov, ki ga beležimo zaradi odpravljanja napak in preprečevanja napadov,
                    podatek hranimo maksimalno 1 mesec. Ta podatek hranimo na podlagi legitimnega
                    interesa skladno s členom 6(1)f) Splošne uredbe o varstvu podatkov,
                  </Text>
                  <Text>
                    6. sporočilo in ostali podatki, ki jih uporabnik vpiše v kontaktni ali
                    naročniški obrazec.
                  </Text>
                </VStack>
                <Text pt={4} fontWeight="semibold">
                  Kategorije uporabnikov:
                </Text>
                <Text>
                  Vzdrževalci spletne strani. Uporabniki osebne podatke obdelujejo izključno po
                  navodilih in pod nadzorom upravljavca.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Rok hrambe:
                </Text>

                <Text>Do preklica privolitve oziroma ugovora.</Text>
                <Text pt={4} fontWeight="semibold">
                  Pravice posameznikov:
                </Text>
                <Text>
                  Preklic privolitve oz. ugovor, dostop do podatkov, popravek, izbris, omejitev
                  obdelave, prenosljivost. Pravice je mogoče uveljavljati s pisno vlogo, poslano po
                  elektronski pošti.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Pomoč:
                </Text>
                <Text>
                  Za pomoč pri uveljavljanju svojih pravic se lahko obrnete na{" "}
                  <ContactEmailTextLink />.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Pravno varstvo:
                </Text>
                <Text>
                  Zoper ravnanje upravljavca v zvezi z varstvom osebnih podatkov je mogoča pritožba
                  oziroma prijava pri Informacijskem pooblaščencu RS.
                </Text>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl">
                  2. PREJEMNIKI E-NOVIC
                </Text>
                <Text>
                  Sestavni del storitev Mačjega botra je komunikacija med mački in botri, ki se
                  izvaja s pošiljanjem e – novic. Na e-novice ste se lahko prijavili preko spletnega
                  obrazca Dogovor o posvojitvi na daljavo, s čimer ste nam dali svojo privolitev za
                  takšno obdelavo. Od prejemanja e-novic se lahko odjavite tako, da nas o tem
                  obvestite na <ContactEmailTextLink />. Po odjavi ne boste več prejemali pisem
                  svojega posvojenca in ostalih novic.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Pravni temelji za obdelavo osebnih podatkov:
                </Text>
                <Text>
                  Osebna privolitev se pridobi skladno s 6(1)b) členom Splošne uredbe in se lahko
                  kadarkoli prekliče. Na podlagi lastnega zakonitega interesa (6(1)f člen Splošne
                  uredbe) upravljavec osebne podatke obdeluje tudi za namen načrtovanja delovnega
                  procesa in kapacitet ter za izboljševanje ponudbe in optimiziranje storitev.
                </Text>
                <Text>
                  Preklic privolitve ne vpliva na zakonitost obdelave, ki se je na podlagi
                  privolitve izvajala do njenega preklica.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Kategorije osebnih podatkov in nameni:
                </Text>
                <Text>
                  Zavod Mačja hiša, Kulturniška ulica 35, 3000 Celje v zbirki vodi za namen
                  pošiljanja novic naslednje kategorije osebnih podatkov:
                </Text>
                <VStack>
                  <Text>1. ime,</Text>
                  <Text>2. spol,</Text>
                  <Text>3. elektronski naslov naročnika na e-novice,</Text>
                  <Text>
                    4. IP naslov, ki ga beležimo zaradi odpravljanja napak in preprečevanja napadov
                    (te loge hranimo maksimalno 1 leto). Ta podatek hranimo na podlagi legitimnega
                    interesa skladno s členom 6(1)f) Splošne uredbe o varstvu podatkov.
                  </Text>
                </VStack>
                <Text pt={4} fontWeight="semibold">
                  Kategorije uporabnikov:
                </Text>
                <Text>
                  Vzdrževalci spletne strani. Uporabniki osebne podatke obdelujejo izključno po
                  navodilih in pod nadzorom upravljavca.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Rok hrambe:
                </Text>
                <Text>Do preklica privolitve oziroma ugovora.</Text>
                <Text pt={4} fontWeight="semibold">
                  Pravice posameznikov:
                </Text>
                <Text>
                  Preklic privolitve oz. ugovor, dostop do podatkov, popravek, izbris, omejitev
                  obdelave, prenosljivost. Pravice je mogoče uveljavljati s pisno vlogo, poslano po
                  elektronski pošti. Odjava od e-novic (preklic privolitve oziroma ugovor) je možna
                  kadarkoli s klikom na odjavno povezavo v prejetih e-novicah.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Pomoč:
                </Text>
                <Text>
                  Za pomoč pri uveljavljanju svojih pravic se lahko obrnete na{" "}
                  <ContactEmailTextLink />.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Pravno varstvo:
                </Text>
                <Text>
                  Zoper ravnanje upravljavca v zvezi z varstvom osebnih podatkov je mogoča pritožba
                  oziroma prijava pri Informacijskem pooblaščencu RS.
                </Text>
                <Text fontWeight="bold" pt={6} pb={2} fontSize="xl">
                  3. KUPCI IN NAROČNIKI STORITEV
                </Text>
                <Text fontWeight="semibold">Pravni temelj za obdelavo osebnih podatkov:</Text>
                <Text>
                  Če ste na spletnem mestu kupili izdelek ali naročili storitve, ste z nami sklenili
                  pogodbo. Pravni temelj je člen 6(1)b) Splošne uredbe o varstvu podatkov. Določene
                  osebne podatke nujno potrebujemo, da lahko pogodbo korektno in v celoti izvajamo –
                  torej za pošiljanje računov za naročeno storitev, obveščanje o stanju naročila,
                  vodenje dostopnih pravic do portala, reševanje reklamacij…
                </Text>
                <Text>
                  Odpoved pogodbe ne vpliva na zakonitost obdelave, ki se je na podlagi pogodbe
                  izvajala do njene odpovedi.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Kategorije osebnih podatkov in nameni:
                </Text>
                <Text>
                  Zavod Mačja hiša, Kulturniška ulica 35, 3000 Celje v zbirki vodi za namen prodaje
                  izdelkov in nudenja storitev naslednje kategorije osebnih podatkov:
                </Text>
                <VStack>
                  <Text>1. Ime in priimek naročnika izdelka/storitve,</Text>
                  <Text>2. Podjetje,</Text>
                  <Text>3. Naslov,</Text>
                  <Text>4. Stanje zapadlih terjatev,</Text>
                  <Text>5. Specifikacija računa,</Text>
                  <Text>6. Elektronski naslov,</Text>
                  <Text>
                    7. IP naslov, ki ga beležimo zaradi odpravljanja napak in preprečevanja napadov
                    (le loge hranimo maksimalno 1 mesec). Ta podatek hranimo na podlagi legitimnega
                    interesa skladno s členom 6(1)f) Splošne uredbe o varstvu podatkov.
                  </Text>
                </VStack>
                <Text pt={4} fontWeight="semibold">
                  Kategorije uporabnikov:
                </Text>
                <Text>
                  Vzdrževalci spletne strani, zunanji izvajalci naročenih storitev in računovodskih
                  storitev. Uporabniki osebne podatke obdelujejo izključno po navodilih in pod
                  nadzorom upravljavca.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Rok hrambe:
                </Text>
                <Text>
                  Do preklica privolitve oziroma ugovora. V tem primeru lahko izgubite dostop do
                  kupljenih elektronskih izdelkov ali storitev.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Pravice posameznikov:
                </Text>
                <Text>
                  Dostop do podatkov, popravek, prenosljivost ter v omejen obsegu izbris, omejitev
                  obdelave in ugovor. Pravice je mogoče uveljavljati s pisno vlogo, poslano na
                  naslov upravljavca, ali po elektronski pošti.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Pomoč:
                </Text>
                <Text>
                  Za pomoč pri uveljavljanju svojih pravic se lahko obrnete na{" "}
                  <ContactEmailTextLink />.
                </Text>
                <Text pt={4} fontWeight="semibold">
                  Pravno varstvo:
                </Text>
                <Text>
                  Zoper ravnanje upravljavca v zvezi z varstvom osebnih podatkov je mogoča pritožba
                  oziroma prijava pri Informacijskem pooblaščencu RS.
                </Text>
                <Text pt={12} fontWeight="bold" fontSize="xl">
                  Velja za vse evidence:
                </Text>
                <Text>
                  Osebnih podatkov, oddanih preko spletnega mesta Mačji boter in naročnikov na
                  e-novice ne delimo s tretjimi osebami in jih ne uporabljamo za namene
                  avtomatiziranega sprejemanja odločitev, vključno ne za oblikovanje profilov.
                </Text>
                <Text>
                  Z uporabo spletnega mesta se strinjate s splošnimi pogoji uporabe, objavljenimi na
                  tem spletnem mestu. Na tem mestu lahko kot uporabnik redno spremljate morebitne
                  spremembe splošnih pogojev ter posledično načine in namene obdelave zbranih
                  osebnih podatkov.
                </Text>
                <Text>
                  Informacije o piškotkih in nastavitev piškotkov, ki jih dovolite, so vam na voljo
                  v Politiki piškotkov.
                </Text>
                <Text pt={6}>
                  Morebitna vprašanja o zasebnosti in obdelavi osebnih podatkov lahko naslovite na{" "}
                  <ContactEmailTextLink />.
                </Text>
              </VStack>
            </VStack>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
};

export default PrivacyPage;
