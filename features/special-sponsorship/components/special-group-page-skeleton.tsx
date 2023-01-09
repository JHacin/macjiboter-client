import { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { SPECIAL_SPONSORSHIP_GROUP_META } from "../constants";
import { SpecialSponsorshipGroup } from "../types";

export const SpecialGroupPageSkeleton: FC<{
  group: SpecialSponsorshipGroup;
}> = ({ group }) => {
  const { name, description, imageUrls } = SPECIAL_SPONSORSHIP_GROUP_META[group];

  return (
    <Box>
      <Heading>{name}</Heading>
      <Text>{description}</Text>
      <Text>{imageUrls.lg}</Text>
    </Box>
  );
};
