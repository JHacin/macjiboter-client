import { ReactNode } from "react";
import { ListItem, OrderedList, Text } from "@chakra-ui/react";
import { EXTERNAL_LINKS, ROUTES } from "../../constants";
import { TextLink } from "../../components/text-link";

interface FAQItemProps {
  id: number;
  title: string;
  body: ReactNode;
}

export const FAQ_ITEMS: FAQItemProps[] = [
  {
    id: 1,
    title: "Kako postanem mačji boter?",
    body: (
      <>
        <Text>Preprosto.</Text>
        <OrderedList pl={4}>
          <ListItem>
            Oglejte si <TextLink href={ROUTES.CatsList}>muce, ki iščejo botra</TextLink>.
          </ListItem>
          <ListItem>
            Izberite muco in ob njenem imenu kliknite <em>Želiš postati moj boter</em>?
          </ListItem>
          <ListItem>
            Izpolnite in pošljite <strong>Dogovor o posvojitvi na daljavo</strong>.
          </ListItem>
          <ListItem>
            Na svoj elektronski naslov boste prejeli sporočilo o sklenjenem botrstvu. Potem pa vsak
            mesec sproti nakazujete izbrani znesek.
          </ListItem>
        </OrderedList>
        <Text>
          Po prejemu vaših podatkov bomo smatrali, da se vaših nakazil lahko nadejamo do prekinitve
          dogovora z vaše strani.
        </Text>
      </>
    ),
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Kaj dobi boter v zameno za svojo donacijo?",
    body: (
      <>
        <Text>Botrom se bodo njihovi mucki ob različnih priložnostih oglasili z novicami.</Text>
        <Text>
          Ime in kraj bivanja botra bo naveden ob imenu muca na spletni strani (razen v primeru, ko
          želi boter ostati anonimen).
        </Text>
        <Text>
          V primeru, da se bo za posvojitev na daljavo odločilo podjetje, lahko objavimo tudi
          povezavo na vašo spletno stran.
        </Text>
        <Text>
          Botri lahko postanete tudi član <strong>kluba Super Čombe</strong>. Članstvo v klubu vam
          ne prinaša nobene obveznosti, imate pa kot član ugodne pogoje pri nakupih v naši spletni
          trgovini Super Čombe. Za ureditev članstva nam po registraciji v spletni trgovini pišite
          na{" "}
          <TextLink href={`mailto:${EXTERNAL_LINKS.SuperCombeContactEmail}`}>
            {EXTERNAL_LINKS.SuperCombeContactEmail}
          </TextLink>
        </Text>
      </>
    ),
  },
  {
    id: 5,
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
];
