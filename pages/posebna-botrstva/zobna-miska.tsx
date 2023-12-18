import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup, SpecialSponsorshipType } from "@/special-sponsorship/types";
import { SpecialGroupDescription } from "@/special-sponsorship/components/special-group-description";
import { Text, VStack } from "@chakra-ui/react";
import { SpecialGroupBenefits } from "@/special-sponsorship/components/special-group-benefits";
import { SpecialGroupSubtypeCards } from "@/special-sponsorship/components/special-group-subtype-cards";
import { FormattedAmount } from "@/special-sponsorship/components/formatted-amount";
import { Layout } from "@/common/components/layout";

const ZobnaMiskaPage: NextPage = () => {
  return (
    <Layout>
      <SpecialGroupPageSkeleton
        group={SpecialSponsorshipGroup.ZobnaMiska}
        body={
          <>
            <SpecialGroupDescription
              content={
                <VStack spacing={4}>
                  <Text>
                    Skoraj ne mine teden, da ne bi kateri od zavetiških muckov potreboval zobnega
                    posega. Nekateri k nam pridejo s polomljenimi zobmi, drugi obolijo za boleznimi
                    ustne votline, tretjim ne prizanaša zob časa.
                  </Text>
                  <Text>
                    Zdravje ustne votline je, tako kot pri ljudeh, tudi pri mačkah ključno za
                    vitalnost celotnega organizma, zato so zdravi zobje naših muckov ena naših
                    prioritet. Včasih je treba le odstraniti zobni kamen, drugič izpuliti poškodovan
                    zob, v nekaterih primerih pa je potreben večji zobni poseg. Četudi škrbasti, so
                    mucki brez bolečih zob dosti bolj zadovoljni in zdravi, da o apetitu sploh ne
                    govorimo.
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
                      uvrstitev med botre Čombeta za pol leta (Mala zobna miška) ali eno leto
                      (Velika zobna miš). V tem času prejemate vse, kar prejemajo stalni botri)
                    </>
                  ),
                },
                {
                  id: 3,
                  content: (
                    <>
                      sliko mucka, ki ga je s pomočjo botrstva obiskala zobna miška (najkasneje v
                      treh mesecih)
                    </>
                  ),
                },
                {
                  id: 2,
                  content: <>prilagojeno elektronsko voščilnico</>,
                  isForGiftOnly: true,
                },
              ]}
            />
            <SpecialGroupSubtypeCards
              items={[
                {
                  type: SpecialSponsorshipType.MajhnaZobnaMiska,
                  description: (
                    <>
                      Z donacijo <FormattedAmount type={SpecialSponsorshipType.MajhnaZobnaMiska} />{" "}
                      pokrijete stroške čiščenja zobnega kamna in/ali manjšega zobnega posega.
                    </>
                  ),
                  color: "orange",
                },
                {
                  type: SpecialSponsorshipType.VelikaZobnaMis,
                  description: (
                    <>
                      Z donacijo <FormattedAmount type={SpecialSponsorshipType.VelikaZobnaMis} />{" "}
                      pokrijete stroške enega večjega zobnega posega ali dveh manjših.
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

export default ZobnaMiskaPage;
