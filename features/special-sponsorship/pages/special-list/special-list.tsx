import { FC } from "react";
import { Section } from "@/common/components/section";
import { Container } from "@/common/components/container";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Sparkle } from "phosphor-react";
import { SPECIAL_SPONSORSHIPS_META } from "../../constants";
import { SpecialSponsorshipType } from "../../types";
import { ROUTES } from "@/common/constants";
import { SpecialListCard, SpecialListCardHeader, SpecialListSubvariantCard } from "./_card";
import { TextLink } from "@/common/components/text-link";

const formattedAmount = (type: SpecialSponsorshipType) => {
  return <strong>{`${SPECIAL_SPONSORSHIPS_META[type].amount} €`}</strong>;
};

export const SpecialList: FC = () => {
  return (
    <>
      <Section spacing={{ bottom: "none" }}>
        <Box
          bgGradient="linear(to-br, copper.200, copper.100, copper.200)"
          shadow="md"
          overflow="hidden"
        >
          <Container py={{ base: 12, md: 16, lg: 20, xl: 24 }} position="relative">
            <Icon
              as={Sparkle}
              color="copper.300"
              opacity={{ base: 0.4, md: 1 }}
              boxSize={{
                base: "250px",
                sm: "280px",
                md: "320px",
                lg: "390px",
                xl: "460px",
                "2xl": "470px",
              }}
              weight="light"
              position="absolute"
              bottom="20px"
              right="0px"
              transform="auto"
              rotate="250deg"
              translateY="30%"
              translateX={{
                base: "10%",
                sm: "20%",
                md: "10%",
                lg: "20%",
                xl: "-15%",
                "2xl": "-40%",
              }}
            />

            <Box position="relative">
              <Heading as="h1" size={{ base: "2xl", lg: "3xl" }}>
                Posebna botrstva
              </Heading>

              <VStack
                fontSize={{ base: "md", lg: "lg" }}
                mt={{ base: 6, lg: 10 }}
                maxW={{ base: "500px", lg: "620px" }}
                spacing={4}
              >
                <Text>
                  Posebna botrstva so{" "}
                  <Text as="span" fontWeight="semibold">
                    enkratne donacije
                  </Text>
                  , ki nam jih lahko namenite kadar koli to želite oz. zmorete.
                </Text>
                <Text>
                  Vsa botrstva lahko tudi <strong>podarite</strong>. V tem primeru lahko vašemu
                  obdarovancu pošljemo prilagojeno elektronsko sporočilo na poljubni datum,
                  prilagojena pa bodo tudi vsa vključena darila.
                </Text>
              </VStack>
            </Box>
          </Container>
        </Box>
      </Section>
      <Section>
        <Container>
          <VStack spacing={{ base: 6, lg: 16 }} align="stretch" maxWidth="1100px" mx="auto">
            <SpecialListCard color="orange">
              <SpecialListCardHeader
                imageUrl="/img/posebna-boter-meseca.jpeg"
                title="Boter meseca"
                subtitle={
                  <>
                    Z donacijo {formattedAmount(SpecialSponsorshipType.BoterMeseca)} postanete boter
                    tekočega meseca in tako pomagate preživeti izbrani mesec vsem muckom, ki so
                    takrat v oskrbi Mačje hiše.
                  </>
                }
                benefits={
                  <>
                    V zameno za donacijo boste prejeli mesečno <strong>ozadje za namizje</strong>.
                  </>
                }
                formLink={ROUTES.SpecialSponsorshipsForm(SpecialSponsorshipType.BoterMeseca)}
                color="orange"
              />
            </SpecialListCard>
            <SpecialListCard color="blue">
              <SpecialListCardHeader
                color="blue"
                imageUrl="/img/posebna-brez-skrbi.jpeg"
                title="Brez skrbi v nove dni"
                subtitle={<>Pokrijte stroške sterilizacije ali kastracije za enega mucka.</>}
                benefits={
                  <VStack spacing={4}>
                    <Text>V zameno za donacijo boste prejeli:</Text>
                    <Box>
                      <UnorderedList>
                        <ListItem>
                          prilagojeno mačje <strong>ozadje za namizje</strong>,
                        </ListItem>
                        <ListItem>
                          <strong>sliko mucka</strong>, za katerega je bil porabljen prispevek ter
                          kratko <strong>novičko</strong> o tem, kaj se z njim dogaja (najkasneje v
                          roku enega meseca)
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </VStack>
                }
              />
              <SimpleGrid columns={{ base: 1, lg: 2 }} mt={8} gap={4}>
                <SpecialListSubvariantCard
                  color="blue"
                  title="Muc gre brez skrbi v nove dni"
                  subtitle={
                    <>
                      Z donacijo {formattedAmount(SpecialSponsorshipType.MucGreBrezSkrbiVNoveDni)}{" "}
                      pokrijete stroške kastracije enega mačka.
                    </>
                  }
                  formLink={ROUTES.SpecialSponsorshipsForm(
                    SpecialSponsorshipType.MucGreBrezSkrbiVNoveDni
                  )}
                />
                <SpecialListSubvariantCard
                  color="blue"
                  title="Muca gre brez skrbi v nove dni"
                  subtitle={
                    <>
                      Z donacijo {formattedAmount(SpecialSponsorshipType.MucaGreBrezSkrbiVNoveDni)}{" "}
                      pokrijete stroške sterilizacije ene mačke.
                    </>
                  }
                  formLink={ROUTES.SpecialSponsorshipsForm(
                    SpecialSponsorshipType.MucaGreBrezSkrbiVNoveDni
                  )}
                />
              </SimpleGrid>
            </SpecialListCard>

            <SpecialListCard color="orange">
              <SpecialListCardHeader
                color="orange"
                imageUrl="/img/posebna-nov-zacetek.jpeg"
                title="Nov začetek"
                subtitle={
                  <>
                    Z donacijo {formattedAmount(SpecialSponsorshipType.NovZacetek)} enemu mucku
                    zagotovite pregled, razparazitenje, cepljenje proti kužnim boleznim, testiranje
                    na FELV in FIV, čipiranje, izdajo potnega lista in vnos v register.
                  </>
                }
                benefits={
                  <VStack spacing={4}>
                    <Text>V zameno za donacijo boste prejeli:</Text>
                    <Box>
                      <UnorderedList>
                        <ListItem>
                          prilagojeno elektronsko <strong>voščilnico</strong> (v primeru, da gre za
                          darilo),
                        </ListItem>
                        <ListItem>
                          uvrščeni boste na seznam botrov <strong>Bubijev</strong> za obdobje enega
                          leta. Eno leto boste prejemali vse, kar prejemajo stalni mačji botri
                          Bubijev (pisma muckov, voščila, dostop do mesečnih namizij ...),
                        </ListItem>
                        <ListItem>
                          <strong>sliko mucka</strong>, za katerega je bil porabljen prispevek ter
                          kratko <strong>novičko</strong> o tem, kaj se z njim dogaja (najkasneje v
                          roku enega meseca),
                        </ListItem>
                        <ListItem>
                          obveščeni boste tudi o vseh <strong>pomembnih dogodkih</strong> v zvezi z
                          mucko, ki ste ji pomagali
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </VStack>
                }
                formLink={ROUTES.SpecialSponsorshipsForm(SpecialSponsorshipType.BoterMeseca)}
              />
            </SpecialListCard>

            <SpecialListCard color="purple">
              <SpecialListCardHeader
                color="purple"
                imageUrl="/img/posebna-fip.jpeg"
                title="FIP bojevniki"
                subtitle={
                  <VStack spacing={4}>
                    <Text>
                      Enemu FIP bojevniku omogočite zdravljenje za določeno število dni. Mačji FIP
                      bojevnik prejema zdravila vsaj <strong>12 tednov</strong> (84 dni), ob tem pa
                      potrebuje redne kontrole in vitaminsko podporo.
                    </Text>
                    <Text>
                      Zaradi visokih stroškov je botrstvo FIP bojevnik vseskozi aktivno, tudi
                      takrat, ko noben muc ni bolan, saj želimo vsem našim muckom v prihodnje
                      omogočiti zdravljenje.
                    </Text>
                    <Text>
                      Več o bolezni FIP si lahko preberete na{" "}
                      <TextLink
                        href="https://www.macjahisa-vet.si/fip-macji-infekciozni-peritonitis/"
                        isExternal={true}
                      >
                        spletni strani Veterine MH
                      </TextLink>
                      .
                    </Text>
                  </VStack>
                }
                benefits={
                  <VStack spacing={4}>
                    <Text>V zameno za donacijo boste vi oz. vaš obdarovanec prejeli:</Text>
                    <Box>
                      <UnorderedList>
                        <ListItem>
                          elektronsko potrdilo/diplomo <strong>FIP bojevnik</strong>,
                        </ListItem>
                        <ListItem>
                          v primeru, da v času vašega botrovanja zdravimo katerega od muckov, vas{" "}
                          <strong>obvestimo</strong> o tem, komu smo namenili botrovanje in kako
                          poteka zdravljenje.
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </VStack>
                }
              />
              <Grid gridTemplateColumns={{ base: "auto", sm: "repeat(2, 1fr)" }} mt={8} gap={4}>
                <GridItem>
                  <VStack spacing={4}>
                    <SpecialListSubvariantCard
                      color="purple"
                      title="FIP bojevnik za en dan"
                      subtitle={
                        <>
                          Z donacijo {formattedAmount(SpecialSponsorshipType.FipBojevnikZa1Dan)}{" "}
                          enemu FIP bojevniku omogočite zdravilo za en dan.
                        </>
                      }
                      formLink={ROUTES.SpecialSponsorshipsForm(
                        SpecialSponsorshipType.FipBojevnikZa1Dan
                      )}
                    />
                    <SpecialListSubvariantCard
                      color="purple"
                      title="FIP bojevnik za dva dni"
                      subtitle={
                        <>
                          Z donacijo {formattedAmount(SpecialSponsorshipType.FipBojevnikZa2Dni)}{" "}
                          enemu FIP bojevniku omogočite zdravilo za dva dni.
                        </>
                      }
                      formLink={ROUTES.SpecialSponsorshipsForm(
                        SpecialSponsorshipType.FipBojevnikZa2Dni
                      )}
                    />
                  </VStack>
                </GridItem>
                <GridItem as={Flex}>
                  <SpecialListSubvariantCard
                    color="purple"
                    title="FIP bojevnik za en teden"
                    subtitle={
                      <>
                        <Text>
                          Z donacijo {formattedAmount(SpecialSponsorshipType.FipBojevnikZa1Teden)}{" "}
                          enemu FIP bojevniku omogočite en teden zdravljenja, kar pomeni 1/12 vseh
                          stroškov zdravljenja za enega muca.
                        </Text>
                        <Text bgColor="purple.50" rounded="md" shadow="sm" px={5} py={4} mt={6}>
                          Poleg zgoraj navedenega (diploma in obveščanje) boste za dve leti uvrščeni
                          med botre mucka <strong>Čombeta</strong> in prejemali vse, kar prejemajo
                          redni mačji botri (pisma muckov, voščila, mesečna ozadja za namizje, in še
                          kaj.)
                        </Text>
                      </>
                    }
                    formLink={ROUTES.SpecialSponsorshipsForm(
                      SpecialSponsorshipType.FipBojevnikZa1Teden
                    )}
                  />
                </GridItem>
              </Grid>
            </SpecialListCard>

            <SpecialListCard color="blue">
              <SpecialListCardHeader
                color="blue"
                imageUrl="/img/posebna-zobna.jpeg"
                title="Zobna miška"
                subtitle={
                  <VStack spacing={4}>
                    <Text>
                      Skoraj ne mine teden, da ne bi kateri od zavetiških muckov potreboval zobnega
                      posega. Nekateri k nam pridejo s polomljenimi zobmi, drugi obolijo za
                      boleznimi ustne votline, tretjim ne prizanaša zob časa.
                    </Text>
                    <Text>
                      Zdravje ustne votline je, tako kot pri ljudeh, tudi pri mačkah{" "}
                      <strong>ključno za vitalnost celotnega organizma</strong>, zato so zdravi
                      zobje naših muckov ena naših prioritet. Včasih je treba le odstraniti zobni
                      kamen, drugič izpuliti poškodovan zob, v nekaterih primerih pa je potreben
                      večji zobni poseg. Četudi škrbasti, so mucki brez bolečih zob dosti bolj
                      zadovoljni in zdravi, da o apetitu sploh ne govorimo.
                    </Text>
                  </VStack>
                }
                benefits={
                  <VStack spacing={4}>
                    <Text>V zameno za donacijo boste prejeli:</Text>
                    <Box>
                      <UnorderedList>
                        <ListItem>
                          uvrstitev med botre <strong>Čombeta</strong> za eno leto (prejemali boste
                          vse, kar prejemajo stalni botri),
                        </ListItem>
                        <ListItem>
                          prilagojeno elektronsko <strong>voščilnico</strong> (v primeru, da gre za
                          darilo),
                        </ListItem>
                        <ListItem>
                          <strong>sliko mucka</strong>, ki ga je s pomočjo botrstva obiskala zobna
                          miška (najkasneje v treh mesecih)
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </VStack>
                }
              />
              <SimpleGrid columns={{ base: 1, lg: 2 }} mt={8} gap={4}>
                <SpecialListSubvariantCard
                  color="blue"
                  title="Majhna zobna miška"
                  subtitle={
                    <>
                      Z donacijo {formattedAmount(SpecialSponsorshipType.MajhnaZobnaMiska)} krijete
                      stroške čiščenja zobnega kamna in/ali manjšega zobnega posega.
                    </>
                  }
                  formLink={ROUTES.SpecialSponsorshipsForm(SpecialSponsorshipType.MajhnaZobnaMiska)}
                />
                <SpecialListSubvariantCard
                  color="blue"
                  title="Velika zobna miš"
                  subtitle={
                    <>
                      Z donacijo {formattedAmount(SpecialSponsorshipType.VelikaZobnaMis)} krijete
                      stroške enega večjega zobnega posega ali dveh manjših.
                    </>
                  }
                  formLink={ROUTES.SpecialSponsorshipsForm(SpecialSponsorshipType.VelikaZobnaMis)}
                />
              </SimpleGrid>
            </SpecialListCard>
          </VStack>
        </Container>
      </Section>
    </>
  );
};
