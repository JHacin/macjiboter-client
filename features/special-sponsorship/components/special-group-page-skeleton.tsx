import { FC } from "react";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { SPECIAL_SPONSORSHIP_GROUP_META } from "../constants";
import { SpecialSponsorshipGroup } from "../types";
import { Section } from "@/common/components/section";
import { Container } from "@/common/components/container";
import { Breadcrumbs } from "@/common/components/breadcrumbs";
import { ROUTES } from "@/common/constants";

export const SpecialGroupPageSkeleton: FC<{
  group: SpecialSponsorshipGroup;
}> = ({ group }) => {
  const { name, description, imageUrls } = SPECIAL_SPONSORSHIP_GROUP_META[group];

  return (
    <>
      <Container>
        <Section spacing={{ top: "sm", bottom: "xs" }}>
          <Breadcrumbs
            items={[
              { text: "Posebna botrstva", href: ROUTES.SpecialSponsorships },
              { text: name, isCurrentPage: true },
            ]}
          />
        </Section>
      </Container>

      <Container paddingHorizontal={{ base: 0 }}>
        <Section spacing={{ top: "none" }}>
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            bgImage={`url(${imageUrls.lg})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            minHeight={{ base: "320px", sm: "460px" }}
            rounded={{ base: "none", sm: "md" }}
            shadow="md"
            p={{ base: 4, sm: 10 }}
          >
            <VStack spacing={{ base: 3, sm: 5 }} align={{ base: "stretch", sm: "start" }}>
              <Heading
                as="h1"
                bgColor="orange.500"
                color="white"
                size={{ base: "lg", sm: "3xl" }}
                fontWeight="bold"
                px={{ base: 3, sm: 7 }}
                py={{ base: 3, sm: 6 }}
                rounded={{ base: "none", sm: "sm" }}
              >
                {name}
              </Heading>
              <Text
                bgColor="orange.200"
                color="orange.600"
                fontSize={{ base: "sm", sm: "lg" }}
                fontWeight="semibold"
                px={{ base: 3, sm: 7 }}
                py={2}
                rounded={{ base: "none", sm: "sm" }}
              >
                {description}
              </Text>
            </VStack>
          </Flex>
        </Section>
      </Container>
    </>
  );
};
