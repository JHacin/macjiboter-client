import { FC } from "react";
import { Box, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { SponsorDetailsWithQuery } from "@/common/components/sponsor-details";
import { Cat } from "../../types";
import { Users } from "phosphor-react";

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
    <Box bgColor="copper.200" px={5} py={6} rounded="md" shadow="sm">
      <Flex alignItems="center" gap={3}>
        <Icon as={Users} boxSize={6} weight="bold" />
        <Heading as="h3" size="md">
          {is_group ? "Naši botri" : "Moji botri"}
        </Heading>
      </Flex>

      <Box mt={6} pl={3}>
        {sponsorships.length === 0 && <Text>Muca še nima botrov.</Text>}

        {sponsorships.length > 0 && (
          <VStack spacing={3}>
            {identifiableSponsorIds.map((id) => (
              <SponsorDetailsWithQuery key={id} id={id} />
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
