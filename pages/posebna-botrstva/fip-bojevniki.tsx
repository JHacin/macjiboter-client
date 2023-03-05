import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup, SpecialSponsorshipType } from "@/special-sponsorship/types";
import { SpecialGroupDescription } from "@/special-sponsorship/components/special-group-description";
import { Text, VStack } from "@chakra-ui/react";
import { SpecialGroupBenefits } from "@/special-sponsorship/components/special-group-benefits";
import { SpecialGroupSubtypeCards } from "@/special-sponsorship/components/special-group-subtype-cards";
import { FormattedAmount } from "@/special-sponsorship/components/formatted-amount";
import { TextLink } from "@/common/components/text-link";
import { Layout } from "@/common/components/layout";

const FipBojevnikiPage: NextPage = () => {
  return (
    <Layout>
      <SpecialGroupPageSkeleton
        group={SpecialSponsorshipGroup.FipBojevniki}
        body={
          <>
            <SpecialGroupDescription
              content={
                <VStack spacing={4}>
                  <Text>
                    Enemu FIP bojevniku omogočite zdravljenje za določeno število dni. Mačji FIP
                    bojevnik prejema zdravila vsaj <strong>12 tednov</strong> (84 dni), ob tem pa
                    potrebuje redne kontrole in vitaminsko podporo.
                  </Text>
                  <Text>
                    Zaradi visokih stroškov je botrstvo FIP bojevnik vseskozi aktivno, tudi takrat,
                    ko noben muc ni bolan, saj želimo vsem našim muckom v prihodnje omogočiti
                    zdravljenje.
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
            />
            <SpecialGroupBenefits
              items={[
                {
                  id: 1,
                  content: (
                    <>
                      v primeru, da v času vašega botrovanja zdravimo katerega od muckov, vas
                      obvestimo o tem, komu smo namenili botrovanje in kako poteka zdravljenje
                    </>
                  ),
                },

                {
                  id: 3,
                  content: (
                    <>
                      (če izberete program <strong>FIP bojevnik za en teden</strong>) uvrstitev med
                      botre mucka Čombeta za dve leti. Prejemali boste vse, kar prejemajo redni
                      mačji botri (pisma muckov, voščila, mesečna ozadja za namizje, in še kaj)
                    </>
                  ),
                },
                {
                  id: 2,
                  content: <>elektronsko potrdilo/diplomo &quot;FIP bojevnik&quot;</>,
                  isForGiftOnly: true,
                },
              ]}
            />
            <SpecialGroupSubtypeCards
              items={[
                {
                  type: SpecialSponsorshipType.FipBojevnikZa1Dan,
                  description: (
                    <>
                      Z donacijo <FormattedAmount type={SpecialSponsorshipType.FipBojevnikZa1Dan} />{" "}
                      enemu FIP bojevniku omogočite zdravilo za en dan.
                    </>
                  ),
                  color: "orange",
                },
                {
                  type: SpecialSponsorshipType.FipBojevnikZa2Dni,
                  description: (
                    <>
                      Z donacijo <FormattedAmount type={SpecialSponsorshipType.FipBojevnikZa2Dni} />{" "}
                      enemu FIP bojevniku omogočite zdravilo za dva dni.
                    </>
                  ),
                  color: "purple",
                },
                {
                  type: SpecialSponsorshipType.FipBojevnikZa1Teden,
                  description: (
                    <>
                      Z donacijo{" "}
                      <FormattedAmount type={SpecialSponsorshipType.FipBojevnikZa1Teden} /> enemu
                      FIP bojevniku omogočite en teden zdravljenja, kar pomeni 1/12 vseh stroškov
                      zdravljenja za enega muca.
                    </>
                  ),
                  color: "blue",
                },
              ]}
            />
          </>
        }
      />
    </Layout>
  );
};

export default FipBojevnikiPage;
