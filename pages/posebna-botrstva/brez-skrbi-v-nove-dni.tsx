import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup, SpecialSponsorshipType } from "@/special-sponsorship/types";
import { SpecialGroupDescription } from "@/special-sponsorship/components/special-group-description";
import { Text } from "@chakra-ui/react";
import { SpecialGroupBenefits } from "@/special-sponsorship/components/special-group-benefits";
import { TextLink } from "@/common/components/text-link";
import { SpecialGroupSubtypeCards } from "@/special-sponsorship/components/special-group-subtype-cards";
import { FormattedAmount } from "@/special-sponsorship/components/formatted-amount";
import { Layout } from "@/common/components/layout";

const BrezSkrbiVNoveDniPage: NextPage = () => {
  return (
    <Layout>
      <SpecialGroupPageSkeleton
        group={SpecialSponsorshipGroup.BrezSkrbiVNoveDni}
        body={
          <>
            <SpecialGroupDescription
              content={
                <>
                  <Text>
                    Pokrijte stroške sterilizacije ali kastracije za enega mucka ali muco. Več o
                    tem, zakaj je operacija pomembna, si lahko preberete na{" "}
                    <TextLink
                      href="https://macjahisa.si/dobro-je-vedeti/sterilizacija-kastracija"
                      isExternal={true}
                    >
                      spletni strani Mačje hiše
                    </TextLink>
                    .
                  </Text>
                </>
              }
            />
            <SpecialGroupBenefits
              items={[
                {
                  id: 1,
                  content: <>prilagojeno mačje ozadje za namizje</>,
                },
                {
                  id: 2,
                  content: (
                    <>
                      sliko mucka, za katerega je bil porabljen prispevek ter kratko novičko o tem,
                      kaj se z njim dogaja (najkasneje v roku enega meseca)
                    </>
                  ),
                },
              ]}
            />
            <SpecialGroupSubtypeCards
              items={[
                {
                  type: SpecialSponsorshipType.MucGreBrezSkrbiVNoveDni,
                  description: (
                    <>
                      Z donacijo{" "}
                      <FormattedAmount type={SpecialSponsorshipType.MucGreBrezSkrbiVNoveDni} />{" "}
                      pokrijete stroške kastracije enega mačka.
                    </>
                  ),
                  color: "orange",
                },
                {
                  type: SpecialSponsorshipType.MucaGreBrezSkrbiVNoveDni,
                  description: (
                    <>
                      Z donacijo{" "}
                      <FormattedAmount type={SpecialSponsorshipType.MucaGreBrezSkrbiVNoveDni} />{" "}
                      pokrijete stroške sterilizacije ene mačke.
                    </>
                  ),
                  color: "purple",
                },
              ]}
            />
          </>
        }
      />
    </Layout>
  );
};

export default BrezSkrbiVNoveDniPage;
