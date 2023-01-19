import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup, SpecialSponsorshipType } from "@/special-sponsorship/types";
import { FormattedAmount } from "@/special-sponsorship/components/formatted-amount";
import { SpecialTypeDescription } from "@/special-sponsorship/components/special-type-description";
import { SpecialTypeBenefits } from "@/special-sponsorship/components/special-type-benefits";
import { SpecialTypeFormLink } from "@/special-sponsorship/components/special-type-form-link";
import { Text } from "@chakra-ui/react";

const BoterMesecaPage: NextPage = () => {
  return (
    <SpecialGroupPageSkeleton
      group={SpecialSponsorshipGroup.BoterMeseca}
      body={
        <>
          <SpecialTypeDescription
            content={
              <>
                <Text>
                  Z donacijo <FormattedAmount type={SpecialSponsorshipType.BoterMeseca} /> postanete
                  boter tekočega meseca in tako pomagate preživeti izbrani mesec vsem muckom, ki so
                  takrat v oskrbi Mačje hiše.
                </Text>
              </>
            }
          />
          <SpecialTypeBenefits
            items={[{ id: 1, content: <strong>mesečno ozadje za namizje</strong> }]}
          />
          <SpecialTypeFormLink type={SpecialSponsorshipType.BoterMeseca} />
        </>
      }
    />
  );
};

export default BoterMesecaPage;
