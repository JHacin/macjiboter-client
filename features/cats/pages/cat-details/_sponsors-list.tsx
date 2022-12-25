import { FC } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { SponsorDetails } from "@/common/components/sponsor-details";
import { Cat } from "../../types";

interface CatDetailsSponsorsProps {
  cat: Cat;
}

export const SponsorsList: FC<CatDetailsSponsorsProps> = ({ cat: { sponsorships, is_group } }) => {
  const identifiableSponsorIds = sponsorships
    .filter((sponsorship) => !sponsorship.is_anonymous && sponsorship.sponsor_id)
    .map((sponsorship) => sponsorship.sponsor_id as number);

  const anonymousSponsorsCount = sponsorships.filter(
    (sponsorship) => sponsorship.is_anonymous
  ).length;

  return (
    <Box borderColor="copper.200" borderWidth={6} p={8} rounded="md">
      <Heading as="h3" size="lg">
        {is_group ? "Naši botri" : "Moji botri"}
      </Heading>

      <Box mt={10} fontSize={{ base: "md", lg: "lg" }}>
        {sponsorships.length === 0 && <Text>Muca še nima botrov.</Text>}

        {sponsorships.length > 0 && (
          <VStack spacing={3}>
            {identifiableSponsorIds.map((id) => (
              <SponsorDetails key={id} id={id} />
            ))}

            {anonymousSponsorsCount > 0 && (
              <Text fontStyle="italic">Anonimnih botrov: {anonymousSponsorsCount}</Text>
            )}
          </VStack>
        )}
      </Box>
    </Box>
  );
};
