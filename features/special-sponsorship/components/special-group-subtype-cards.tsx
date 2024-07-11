import { FC, ReactNode } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { SpecialSponsorshipType } from "../types";
import { SPECIAL_SPONSORSHIPS_META } from "../constants";
import { SpecialTypeFormLink } from "./special-type-form-link";

export const SpecialGroupSubtypeCards: FC<{
  items: {
    type: SpecialSponsorshipType;
    description: ReactNode;
    color: "orange" | "purple" | "blue";
  }[];
}> = ({ items }) => {
  return (
    <Box mt={16} maxW="540px">
      <VStack spacing={8} mt={8} alignItems="stretch">
        {items.map((item) => (
          <Box
            key={item.type}
            bgColor="white"
            p={6}
            shadow="lg"
            borderTop="4px"
            borderColor={`${item.color}.500`}
            rounded="md"
          >
            <Text as="h4" fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold">
              {SPECIAL_SPONSORSHIPS_META[item.type].label}
            </Text>
            <Text mt={4}>{item.description}</Text>
            <SpecialTypeFormLink type={item.type} size="md" color={item.color} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
