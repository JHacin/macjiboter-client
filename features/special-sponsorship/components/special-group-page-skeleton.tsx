import { FC, ReactNode } from "react";
import { Box, Flex, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import { SPECIAL_SPONSORSHIP_GROUP_META } from "../constants";
import { SpecialSponsorshipGroup } from "../types";
import { Section } from "@/common/components/section";
import { Container } from "@/common/components/container";
import { Breadcrumbs } from "@/common/components/breadcrumbs";
import { ROUTES } from "@/common/constants";
import { RecentSpecialSponsors } from "./recent-special-sponsors";
import { SectionWaves } from "@/common/components/section-waves";

export const SpecialGroupPageSkeleton: FC<{
  group: SpecialSponsorshipGroup;
  body: ReactNode;
}> = ({ group, body }) => {
  const { name, description, imageUrls } = SPECIAL_SPONSORSHIP_GROUP_META[group];

  return (
    <>
      <Container>
        <Section spacing={{ top: "sm", bottom: "none" }}>
          <Breadcrumbs
            items={[
              { text: "Posebna botrstva", href: ROUTES.SpecialSponsorships },
              { text: name, isCurrentPage: true },
            ]}
          />
        </Section>
      </Container>

      <Section spacing={{ top: "xs", bottom: "xs" }} position="relative">
        <Box position="absolute" bottom="0" width="full">
          <SectionWaves waveColor="semi-1" bgColor="copper.50" />
        </Box>

        <Container paddingHorizontal={{ base: 0 }} position="relative">
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            bgImage={`url(${imageUrls.lg})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            minHeight={{ base: "320px", sm: "460px" }}
            shadow="md"
            p={{ base: 4, sm: 10 }}
          >
            <VStack spacing={{ base: 3, sm: 5 }}>
              <Heading
                as="h1"
                bgColor="orange.500"
                color="white"
                size={{ base: "lg", sm: "3xl" }}
                fontWeight="bold"
                px={{ base: 3, sm: 7 }}
                py={{ base: 3, sm: 6 }}
              >
                {name}
              </Heading>
              <Text as="h2">
                <Text
                  as="span"
                  bgColor="orange.200"
                  px={{ base: 3, sm: 7 }}
                  py={2}
                  color="orange.600"
                  fontSize={{ base: "sm", sm: "lg" }}
                  fontWeight="semibold"
                  boxDecorationBreak="clone"
                  lineHeight="2"
                >
                  {description}
                </Text>
              </Text>
            </VStack>
          </Flex>
        </Container>
      </Section>

      <Box bgColor="copper.100">
        <Container>
          <Section spacing={{ top: "sm", bottom: "lg" }}>
            <Grid
              gridTemplateColumns={{ base: "auto", lg: "4fr 3fr", xl: "2fr 1fr" }}
              gap={{ base: 24, lg: 16, xl: 44, "2xl": 72 }}
            >
              <GridItem>{body}</GridItem>
              <GridItem maxWidth="450px">
                <RecentSpecialSponsors group={group} />
              </GridItem>
            </Grid>
          </Section>
        </Container>
      </Box>
    </>
  );
};
