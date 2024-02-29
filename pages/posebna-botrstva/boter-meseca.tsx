import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup, SpecialSponsorshipType } from "@/special-sponsorship/types";
import { FormattedAmount } from "@/special-sponsorship/components/formatted-amount";
import { SpecialGroupDescription } from "@/special-sponsorship/components/special-group-description";
import { SpecialGroupBenefits } from "@/special-sponsorship/components/special-group-benefits";
import { SpecialTypeFormLink } from "@/special-sponsorship/components/special-type-form-link";
import { Text } from "@chakra-ui/react";
import { Layout } from "@/common/components/layout";

const BoterMesecaPage: NextPage = () => {
  return (
    <Layout>
      <SpecialGroupPageSkeleton
        group={SpecialSponsorshipGroup.BoterMeseca}
        body={
          <>
            <SpecialGroupDescription
              content={
                <>
                  <Text>
                    Z donacijo <FormattedAmount type={SpecialSponsorshipType.BoterMeseca} />{" "}
                    postanete boter tekočega meseca in tako pomagate preživeti izbrani mesec vsem
                    muckom, ki so takrat v oskrbi Mačje hiše.
                  </Text>
                </>
              }
            />
            <SpecialGroupBenefits items={[{ id: 1, content: <>mesečno ozadje za namizje</> }]} />
            <SpecialTypeFormLink type={SpecialSponsorshipType.BoterMeseca} />
          </>
        }
      />
    </Layout>
  );
};

export default BoterMesecaPage;
