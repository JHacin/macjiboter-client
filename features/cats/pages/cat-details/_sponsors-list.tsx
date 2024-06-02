import { Box, Flex, Heading, Icon, Skeleton, Text, VStack } from "@chakra-ui/react";
import { SponsorDetails } from "@/common/components/sponsor-details";
import { Cat } from "../../types";
import { Users } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getCatSponsors } from "../../util/api";

export function SponsorsList({ cat }: { cat: Cat }) {
  const { data, isSuccess } = useQuery([QueryKey.CatSponsors, cat.id], () =>
    getCatSponsors(cat.id)
  );

  return (
    <Box bgColor="blackAlpha.100" px={{ base: 6, sm: 8, lg: 6 }} py={5} shadow="sm" rounded="md">
      <Flex alignItems="center" gap={3}>
        <Icon as={Users} boxSize={6} weight="bold" />
        <Heading as="h3" size="md">
          {cat.is_group ? "Naši botri" : "Moji botri"}
        </Heading>
      </Flex>

      <Box mt={5}>
        {cat.sponsorships_count === 0 && <Text>Muca še nima botrov.</Text>}

        {cat.sponsorships_count > 0 && (
          <VStack spacing={2} fontSize="md">
            {!isSuccess &&
              [1, 2, 3, 4, 5].map((i) => <Skeleton key={i} height="30px" width="110px" />)}

            {isSuccess && (
              <>
                {data.identifiedSponsors.map((sponsor) => (
                  <SponsorDetails key={sponsor.id} {...sponsor} />
                ))}

                {data.anonymousCount > 0 && (
                  <Text fontStyle="italic">Anonimnih botrov: {data.anonymousCount}</Text>
                )}
              </>
            )}
          </VStack>
        )}
      </Box>
    </Box>
  );
}
