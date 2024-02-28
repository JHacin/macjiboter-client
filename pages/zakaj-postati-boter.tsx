import { Container } from "@/common/components/container";
import { Box, Icon, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { TextLink } from "@/common/components/text-link";
import { EXTERNAL_LINKS, ROUTES } from "@/common/constants";
import {
  ArrowRight,
  Cat,
  Gift,
  Globe,
  HandHeart,
  HouseLine,
  IconProps,
  PaperPlaneTilt,
  PawPrint,
  ShoppingCart,
} from "@phosphor-icons/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { ButtonLink } from "@/common/components/button-link";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { FilledPageTitle } from "@/common/components/page-title";

const listItems: { id: number; content: ReactNode; icon: FC<IconProps> }[] = [
  {
    content: (
      <>
        Ker s svojim prispevkom pomagate{" "}
        <TextLink href={EXTERNAL_LINKS.MacjaHisa} isExternal={true}>
          Mačji hiši
        </TextLink>{" "}
        omogočiti nekoč brezdomnim mucam lepo življenje, četudi morda ne bodo nikoli posvojene.
      </>
    ),
    icon: HouseLine,
  },
  {
    content: <>Ker nam s svojo podporo omogočate rešiti še več brezdomnih muc.</>,
    icon: HandHeart,
  },
  {
    content: (
      <>Ker lahko že za 10 evrov mesečno pridobite zvestega mačjega prijatelja za vse življenje.</>
    ),
    icon: PawPrint,
  },
  {
    content: (
      <>
        Ker vas bo vaš novi prijatelj razveseljeval s pismi iz svojega navihanega mačjega življenja.
      </>
    ),
    icon: PaperPlaneTilt,
  },
  {
    content: (
      <>
        Ker lahko botri v naši spletni trgovini{" "}
        <TextLink href={EXTERNAL_LINKS.SuperCombe} isExternal={true}>
          Super Čombe
        </TextLink>{" "}
        nakupujete ugodneje.
      </>
    ),
    icon: ShoppingCart,
  },
  {
    content: <>Ker občasno pripravimo svojim botrom majhna prijetna presenečenja.</>,
    icon: Gift,
  },
  {
    content: (
      <>
        Ker z botrstvom pokažete, da vam ni vseeno in da želite živeti v svetu, prijaznem tako do
        ljudi, kot tudi do živali.
      </>
    ),
    icon: Globe,
  },
  {
    content: <>Ker vas muce potrebujejo.</>,
    icon: Cat,
  },
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
            <FilledPageTitle>zakaj postati boter?</FilledPageTitle>
          </Section>

          <Section spacing={{ top: "sm" }}>
            <List spacing={4} fontSize={{ base: "md", lg: "lg" }} maxWidth="850px">
              {listItems.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: { base: "flex-start", sm: "center" },
                    bg: "orange.50",
                    rounded: "md",
                    py: { base: 4, lg: 5 },
                    px: { base: 5, lg: 6 },
                    gap: { base: 5, lg: 6 },
                  }}
                >
                  <ListIcon
                    as={item.icon}
                    color="orange.500"
                    weight="fill"
                    boxSize={{ base: 10, lg: 12 }}
                    mr={0}
                    bg="orange.100"
                    rounded="full"
                    p={2}
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
