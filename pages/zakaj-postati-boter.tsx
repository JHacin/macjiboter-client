import { Container } from "@/common/components/container";
import { Box, Heading, Icon, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { TextLink } from "@/common/components/text-link";
import { EXTERNAL_LINKS, ROUTES } from "@/common/constants";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { ButtonLink } from "@/common/components/button-link";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";

const listItems: { id: number; content: ReactNode }[] = [
  {
    content: (
      <>
        Ker s svojim prispevkom pomagate{" "}
        <TextLink href={EXTERNAL_LINKS.MacjaHisa} isExternal={true}>
          Mačji hiši
        </TextLink>{" "}
        omogočiti nekoč brezdomnim mucam varno in zadovoljno življenje, četudi morda ne bodo nikoli
        posvojene.
      </>
    ),
  },
  { content: <>Ker nam s svojo podporo omogočate rešiti še več brezdomnih muc.</> },
  {
    content: (
      <>Ker lahko že za 10 evrov mesečno pridobite zvestega mačjega prijatelja za vse življenje.</>
    ),
  },
  {
    content: (
      <>
        Ker vas bo vaš novi prijatelj razveseljeval s pismi iz svojega navihanega mačjega življenja.
      </>
    ),
  },
  {
    content: (
      <>
        Ker lahko vsi botri brezplačno postanete člani Kluba Mačja hiša. Članstvo v klubu vam ne
        prinaša nobene obveznosti, imate pa kot član ugodne pogoje pri nakupih v naši spletni
        trgovinici{" "}
        <TextLink href={EXTERNAL_LINKS.SuperCombe} isExternal={true}>
          Super Čombe
        </TextLink>
        .
      </>
    ),
  },
  { content: <>Ker občasno pripravimo svojim botrom majhna prijetna presenečenja.</> },
  {
    content: (
      <>
        Ker z botrstvom pokažete, da vam ni vseeno in da želite živeti v svetu, prijaznem tako do
        ljudi, kot tudi do živali.
      </>
    ),
  },
  { content: <>Ker vas muce potrebujejo.</> },
].map((item, index) => ({
  ...item,
  id: index,
}));

export default function WhyBecomeSponsorPage() {
  const { breakpoints } = useTheme();

  return (
    <Layout>
      <MetaTags
        title="Zakaj postati boter"
        description="Vse o tem, zakaj je dobro biti mačji boter."
      />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <Heading
              size="3xl"
              bgColor="copper.200"
              display="inline-block"
              px={6}
              py={5}
              fontWeight={800}
              rounded="md"
            >
              zakaj postati boter?
            </Heading>
          </Section>

          <Section spacing={{ top: "sm" }}>
            <List spacing={6} fontSize="lg" maxWidth="750px">
              {listItems.map((item) => (
                <ListItem key={item.id} display="flex" alignItems="start">
                  <ListIcon
                    as={CheckCircle}
                    color="orange.500"
                    weight="fill"
                    boxSize="24px"
                    height="28px"
                  />
                  <Text as="span">{item.content}</Text>
                </ListItem>
              ))}
            </List>

            <ButtonLink
              href={ROUTES.CatsList}
              size="lg"
              mt={20}
              rightIcon={<Icon as={ArrowRight} weight="bold" />}
            >
              Postani boter
            </ButtonLink>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
}
