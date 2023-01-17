import { FC } from "react";
import { SpecialSponsorship, SpecialSponsorshipGroup, SpecialSponsorshipType } from "../types";
import { SPECIAL_SPONSORSHIP_GROUP_META, SPECIAL_SPONSORSHIPS_META } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getRecentSpecialSponsorships } from "../util/api";
import { Box, Text } from "@chakra-ui/react";

const SponsorshipTypeList: FC<{
  type: SpecialSponsorshipType;
  sponsorships: SpecialSponsorship[];
}> = ({ type, sponsorships }) => {
  const { label } = SPECIAL_SPONSORSHIPS_META[type];

  return (
    <Box>
      <Text fontSize="lg" fontWeight="semibold">
        {label}
      </Text>
      <Box>
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
