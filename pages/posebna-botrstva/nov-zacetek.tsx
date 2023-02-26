import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup, SpecialSponsorshipType } from "@/special-sponsorship/types";
import { SpecialGroupDescription } from "@/special-sponsorship/components/special-group-description";
import { Text } from "@chakra-ui/react";
import { FormattedAmount } from "@/special-sponsorship/components/formatted-amount";
import { SpecialGroupBenefits } from "@/special-sponsorship/components/special-group-benefits";
import { SpecialTypeFormLink } from "@/special-sponsorship/components/special-type-form-link";

const NovZacetekPage: NextPage = () => {
  return (
    <SpecialGroupPageSkeleton
      group={SpecialSponsorshipGroup.NovZacetek}
      body={
        <>
          <SpecialGroupDescription
            content={
              <>
                <Text>
                  Z donacijo <FormattedAmount type={SpecialSponsorshipType.NovZacetek} /> enemu
                  mucku zagotovite pregled, razparazitenje, cepljenje proti kužnim boleznim,
                  testiranje na FELV in FIV, čipiranje, izdajo potnega lista in vnos v register.
                </Text>
              </>
            }
          />
          <SpecialGroupBenefits
            items={[
              {
                id: 2,
                content: (
                  <>
                    uvrstitev na seznam botrov Bubijev za obdobje enega leta. Eno leto boste
                    prejemali vse, kar prejemajo stalni mačji botri Bubijev (pisma muckov, voščila,
                    dostop do mesečnih namizij in še kaj)
                  </>
                ),
              },
              {
                id: 3,
                content: (
                  <>
                    sliko mucka, za katerega je bil porabljen prispevek ter kratko novičko o tem,
                    kaj se z njim dogaja (najkasneje v roku enega meseca)
                  </>
                ),
              },
              {
                id: 4,
                content: (
                  <>
                    obveščeni boste tudi o vseh pomembnih dogodkih v zvezi z mucko, ki ste ji
                    pomagali
                  </>
                ),
              },
              {
                id: 1,
                content: <>prilagojeno elektronsko voščilnico</>,
                isForGiftOnly: true,
              },
            ]}
          />
          <SpecialTypeFormLink type={SpecialSponsorshipType.NovZacetek} />
        </>
      }
    />
  );
};

export default NovZacetekPage;
