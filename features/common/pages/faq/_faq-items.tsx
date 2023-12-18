import { ReactNode } from "react";
import { ListItem, OrderedList, Text } from "@chakra-ui/react";
import { EXTERNAL_LINKS, ROUTES } from "../../constants";
import { ContactEmailTextLink, TextLink } from "../../components/text-link";

interface FAQItemProps {
  id: string;
  title: string;
  body: ReactNode;
}

export const FAQ_ITEMS: FAQItemProps[] = [
  {
    id: "kako-postanem-macji-boter",
    title: "Kako postanem mačji boter?",
    body: (
      <>
        <Text>Preprosto.</Text>
        <OrderedList pl={4}>
          <ListItem>
            Oglejte si <TextLink href={ROUTES.CatsList}>muce, ki iščejo botra</TextLink>.
          </ListItem>
          <ListItem>
            Izberite muco in ob njenem imenu kliknite <em>Postani moj boter</em>.
          </ListItem>
          <ListItem>
            Izpolnite in pošljite <strong>Dogovor o posvojitvi na daljavo</strong>.
          </ListItem>
          <ListItem>
            Na svoj elektronski naslov boste prejeli sporočilo o sklenjenem botrstvu in vse potrebne
            podatke.
          </ListItem>
          <ListItem>
            Vsak mesec nakažite izbrani znesek ali pa nam pišite, da uredimo direktne bremenitve.
          </ListItem>
        </OrderedList>
      </>
    ),
  },
  {
    id: "kako-dolgo-je-veljavno-redno-botrovanje",
    title: "Kako dolgo je veljavno redno botrovanje?",
    body: (
      <>
        <Text>
          Botrovanje se sklene za nedoločen čas. Boter se lahko kadarkoli odloči za prekinitev in
          nas o tem obvesti.
        </Text>
        <Text>
          Do prekinitve pride tudi v primeru posvojitve ali smrti mucka, o čemer botra obvestimo po
          elektronski pošti.
        </Text>
        <Text>Botrovanje se prekine tudi v primeru neplačevanja prispevkov.</Text>
      </>
    ),
  },
  {
    id: "ne-morem-se-odlociti-za-eno-muco-kaj-storiti",
    title: "Ne morem se odločiti za eno muco. Kaj storiti?",
    body: (
      <>
        <Text>
          Med mucami, ki iščejo botra je tudi naš <strong>Čombe</strong>, ki je pokrovitelj vseh
          naših muckov. Če se ne morete odločiti za enega muca, postanite njegov boter. Čombe vam
          obljublja, da bo vaš denar pošteno razdelil tistim, ki ga v danem trenutku najbolj
          potrebujejo.
        </Text>
        <Text>
          Posvojite pa lahko tudi <strong>Bubije</strong>, s čemer nam pomagate pri oskrbi mačjih
          dudarjev in mladičev ali pa <strong>Pozitivčke</strong>, FeLV (mačja levkoza) in/ali FIV
          (mačji aids) pozitivne muce brez kliničnih znakov bolezni.
        </Text>
      </>
    ),
  },
  {
    id: "kako-prekiniti-dogovor-o-posvojitvi-na-daljavo",
    title: "Kako prekiniti dogovor o posvojitvi na daljavo?",
    body: (
      <>
        <Text>
          Če boste želeli prekiniti dogovor, nam z elektronskega naslova, ki ste ga navedli ob
          izpolnitvi Dogovora o posvojitvi na daljavo, pošljite elektronsko sporočilo, v katerem
          navedite, da odstopate od dogovora.
        </Text>
        <Text>
          V primeru, da vaših prispevkov za botrstvo ne bomo prejemali, si pridržujemo pravico, da
          vaše botrstvo prekinemo brez opozorila.
        </Text>
      </>
    ),
  },
  {
    id: "kaj-dobi-boter-v-zameno-za-svojo-donacijo",
    title: "Kaj dobi boter v zameno za svojo donacijo?",
    body: (
      <>
        <Text>
          Rednim botrom se bodo njihovi mucki ob različnih priložnostih oglasili z novicami.
        </Text>
        <Text>
          Ime in kraj bivanja botra bosta navedena na spletni strani ob imenu muca oz. vrsti
          botrovanj (razen v primeru, ko želi boter ostati anonimen).
        </Text>
        <Text>
          V primeru, da se za botrovanje odloči podjetje, lahko objavimo povezavo na spletno stran
          podjetja.
        </Text>
        <Text>
          Rednim botrom pripada popust pri nakupih v trgovini in spletni trgovini Super Čombe. Za
          ureditev popusta se registrirajte v spletno trgovino in pošljite mail na naslov{" "}
          <TextLink href={`mailto:${EXTERNAL_LINKS.SuperCombeContactEmail}`}>
            {EXTERNAL_LINKS.SuperCombeContactEmail}
          </TextLink>
          , v katerem napišite, da ste mačji boter.
        </Text>
      </>
    ),
  },
  {
    id: "za-kaj-bo-porabljen-moj-denar",
    title: "Za kaj bo porabljen moj denar?",
    body: (
      <>
        <Text>
          Denar bo porabljen za oskrbo (kvalitetna hrana, pesek, sredstva proti zajedalcem,
          veterinarski stroški...) vaše in drugih muc pod okriljem Mačje hiše.
        </Text>
      </>
    ),
  },
  {
    id: "koliko-denarja-se-donira-za-posamezno-macko",
    title: "Koliko denarja se donira za posamezno mačko?",
    body: (
      <>
        <Text>
          Višino mesečnega prispevka si izberete sami. Najnižji možen mesečni prispevek je 10€ za
          fizične osebe ter 50€ za pravne osebe.
        </Text>
      </>
    ),
  },
  {
    id: "kam-lahko-nakazem-zeljen-znesek",
    title: "Kam lahko nakažem željen znesek?",
    body: (
      <>
        <Text>
          Vse podatke za nakazilo boste prejeli na vaš elektronski naslov po izpolnitvi Dogovora o
          posvojitvi.
        </Text>
        <Text fontSize="sm">
          <u>IBAN</u>: SI56 6100 0000 2600 529 (Zavod Mačja hiša, Kulturniška ulica 35, 3000 Celje)
          <br />
          <u>BIC</u>: HDELSI22
          <br />
          <u>KODA NAMENA</u>: CHAR
          <br />
          <u>NAMEN</u>: BOTER &quot;IME MAČKA&quot
          <br />
          <u>REFERENCA</u>: SI00 + referenčna številka, ki jo prejmete v potrditvenem sporočilu
        </Text>
      </>
    ),
  },
  {
    id: "ali-lahko-placam-s-trajnim-nalogom",
    title: "Ali lahko plačam s trajnim nalogom?",
    body: (
      <>
        <Text>
          Seveda. Direktne bremenitve računa vam lahko uredimo mi. Če to želite, ob izpolnitvi
          dogovora označite to možnost ali pa nam pišite na <ContactEmailTextLink /> in poslali vam
          bomo navodila.
        </Text>
      </>
    ),
  },
  {
    id: "kaj-v-primeru-ce-je-moja-posvojenka-oddana",
    title: "Kaj v primeru, če je moja posvojenka oddana?",
    body: (
      <>
        <Text>
          V primeru posvojitve vas o tem obvestimo. Dogovor se avtomatično razdre, v obvestilu pa
          vas povabimo, da izpolnite nov spletni dogovor, če seveda to želite.
        </Text>
        <Text>
          Če imate urejeno plačevanje z direktnimi bremenitvami, bo vaš račun v tekočem mesecu še
          bremenjen (ker se nalogi za banko pripravljajo vnaprej), v mesecu po posvojitvi pa
          bremenitve več ne bo. Če boste izpolnili nov dogovor za drugo muco in tudi zanjo želeli
          prispevati z direktnimi bremenitvami, vaše pooblastilo ponovno postane veljavno in vam ni
          potrebno izpolnjevati novega.
        </Text>
      </>
    ),
  },
  {
    id: "ali-lahko-obiscem-svojo-posvojenko",
    title: "Ali lahko obiščem svojo posvojenko?",
    body: (
      <>
        <Text>
          Muce se nahajajo v zavetišču in v domovih začasnih skrbnikov po vsej Sloveniji. Skrbniki
          imajo vso pravico ohraniti zasebnost svojega doma. Hvaležni smo jim, da so prevzeli skrb
          za muce in jih ne želimo dodatno obremenjevati s sprejemanjem obiskov. Določene muce so še
          vedno plašne, kar je dodaten razlog, da smo se odločili, da osebni obiski niso možni.
          Izjemoma se je možno dogovoriti za obisk zavetišča, če trenutne razmere to dopuščajo.
        </Text>
      </>
    ),
  },
  {
    id: "ali-sem-lahko-izbrani-macki-edini-boter",
    title: "Ali sem lahko izbrani mački edini boter?",
    body: (
      <>
        <Text>Ekskluzivnega botrstva ne omogočamo. Ista mačka/maček lahko ima več botrov.</Text>
      </>
    ),
  },
];
