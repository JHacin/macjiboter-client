import { FC } from "react";
import { SpecialSponsorship, SpecialSponsorshipGroup, SpecialSponsorshipType } from "../types";
import { SPECIAL_SPONSORSHIP_GROUP_META, SPECIAL_SPONSORSHIPS_META } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getRecentSpecialSponsorships } from "../util/api";
import { Box, Text, VStack } from "@chakra-ui/react";
import { PersonData } from "@/common/types";
import { SponsorDetails } from "@/common/components/sponsor-details";

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
        <Text fontSize="lg" fontWeight="semibold">
          {label}
        </Text>
      )}
      <Box>
        {sponsorships.length === 0 && <Text>Botrov še ni bilo.</Text>}

        {sponsorships.length > 0 && (
          <VStack spacing={3}>
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
    <Box>
      {types.map((type) => (
        <SponsorshipTypeList
          key={type}
          type={type}
          sponsorships={sponsorships.filter((s) => s.type === type)}
          isTheOnlyChildType={types.length === 1}
        />
      ))}
    </Box>
  );
};

export const RecentSpecialSponsors: FC<{ group: SpecialSponsorshipGroup }> = ({ group }) => {
  const { childTypes } = SPECIAL_SPONSORSHIP_GROUP_META[group];

  const { data: sponsorships, status } = useQuery(
    [QueryKey.RecentSpecialSponsorships, childTypes],
    () => getRecentSpecialSponsorships(childTypes)
  );

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">
        Botri zadnjih dveh mesecev
      </Text>
      <Box>{status === "loading" && "Nalagam..."}</Box>
      <Box>{status === "error" && "Prišlo je do napake."}</Box>
      <Box>
        {status === "success" && <SponsorList types={childTypes} sponsorships={sponsorships} />}
      </Box>
    </Box>
  );
};
