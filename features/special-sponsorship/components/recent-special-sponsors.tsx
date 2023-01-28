import { FC } from "react";
import { SpecialSponsorship, SpecialSponsorshipGroup, SpecialSponsorshipType } from "../types";
import { SPECIAL_SPONSORSHIP_GROUP_META, SPECIAL_SPONSORSHIPS_META } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getRecentSpecialSponsorships } from "../util/api";
import { Box, StackDivider, Text, VStack } from "@chakra-ui/react";
import { PersonData } from "@/common/types";
import { SponsorDetails } from "@/common/components/sponsor-details";
import dayjs from "dayjs";
import { HeadingMarker } from "@/common/components/heading-marker";

const SponsorshipTypeList: FC<{
  type: SpecialSponsorshipType;
  sponsorships: SpecialSponsorship[];
  isTheOnlyChildType: boolean;
}> = ({ type, sponsorships, isTheOnlyChildType }) => {
  const { label } = SPECIAL_SPONSORSHIPS_META[type];

  const identifiableSponsors = sponsorships
    .filter((sponsorship) => !sponsorship.is_anonymous)
    .map((sponsorship) => sponsorship.sponsor)
    .filter((sponsor): sponsor is PersonData => sponsor !== undefined);

  const anonymousSponsorsCount = sponsorships.filter(
    (sponsorship) => sponsorship.is_anonymous
  ).length;

  return (
    <Box>
      {!isTheOnlyChildType && (
        <Text fontSize="lg" fontWeight="semibold" mb={3}>
          {label}
        </Text>
      )}
      <Box>
        {sponsorships.length === 0 && <Text>Botrov še ni bilo.</Text>}

        {sponsorships.length > 0 && (
          <VStack spacing={1}>
            {identifiableSponsors.map((sponsor) => (
              <SponsorDetails key={sponsor.id} {...sponsor} />
            ))}

            {anonymousSponsorsCount > 0 && (
              <Text fontStyle="italic">Anonimnih botrov: {anonymousSponsorsCount}</Text>
            )}
          </VStack>
        )}

        {sponsorships.map((sponsorship) => (
          <Box key={sponsorship.id}></Box>
        ))}
      </Box>
    </Box>
  );
};

const SponsorList: FC<{
  types: SpecialSponsorshipType[];
  sponsorships: SpecialSponsorship[];
}> = ({ types, sponsorships }) => {
  return (
    <VStack spacing={5} divider={<StackDivider borderColor="copper.500" />}>
      {types.map((type) => (
        <SponsorshipTypeList
          key={type}
          type={type}
          sponsorships={sponsorships.filter((s) => s.type === type)}
          isTheOnlyChildType={types.length === 1}
        />
      ))}
    </VStack>
  );
};

export const RecentSpecialSponsors: FC<{ group: SpecialSponsorshipGroup }> = ({ group }) => {
  const { childTypes } = SPECIAL_SPONSORSHIP_GROUP_META[group];

  const { data: sponsorships, status } = useQuery(
    [QueryKey.RecentSpecialSponsorships, childTypes],
    () => getRecentSpecialSponsorships(childTypes)
  );

  return (
    <Box bgColor="copper.300" p={{ base: 6, lg: 8 }}>
      <Box w="80px" h="6px">
        <HeadingMarker color="orange" />
      </Box>
      <Text fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="bold" mt={4}>
        Najnovejši botri
      </Text>
      <Text color="gray.600">
        {dayjs().subtract(1, "month").format("MMMM") + "—" + dayjs().format("MMMM")}
      </Text>
      <Box mt={{ base: 10 }}>
        <Box>{status === "loading" && "Nalagam..."}</Box>
        <Box>{status === "error" && "Prišlo je do napake."}</Box>
        <Box>
          {status === "success" && <SponsorList types={childTypes} sponsorships={sponsorships} />}
        </Box>
      </Box>
    </Box>
  );
};
