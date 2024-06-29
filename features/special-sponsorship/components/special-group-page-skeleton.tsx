import { FC, ReactNode } from "react";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { SPECIAL_SPONSORSHIP_GROUP_META } from "../constants";
import { SpecialSponsorshipGroup } from "../types";
import { Section } from "@/common/components/section";
import { Container } from "@/common/components/container";
import { Breadcrumbs } from "@/common/components/breadcrumbs";
import { ROUTES } from "@/common/constants";
import { RecentSpecialSponsors } from "./recent-special-sponsors";
import { SectionWaves } from "@/common/components/section-waves";
import { MetaTags } from "@/common/components/meta-tags";
import { HeadingMarker } from "@/common/components/heading-marker";

export const SpecialGroupPageSkeleton: FC<{
  group: SpecialSponsorshipGroup;
  body: ReactNode;
}> = ({ group, body }) => {
  const { name, description, imageUrls } = SPECIAL_SPONSORSHIP_GROUP_META[group];

  return (
    <>
      <MetaTags
        title={name}
        description={description}
        image={{ isExternal: false, path: imageUrls.lg }}
      />

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
          <SectionWaves waveColor="semi-1" bgColor="white" />
        </Box>

        <Container paddingHorizontal={{ base: 0, sm: 4 }} position="relative">
          <Box
            bgImage={`url(${imageUrls.lg})`}
            bgColor="copper.200"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            minHeight={{
              base: "280px",
              sm: "320px",
              md: "360px",
              lg: "460px",
              xl: "500px",
              "2xl": "540px",
            }}
            shadow="md"
            rounded={{ sm: "md" }}
          />
        </Container>
      </Section>

      <Box bgColor="copper.100">
        <Container>
          <Section spacing={{ top: "xs", bottom: "lg" }}>
            <Grid
              gridTemplateColumns={{ base: "auto", lg: "4fr 3fr", xl: "2fr 1fr" }}
              gap={{ base: 24, lg: 16, xl: 44, "2xl": 72 }}
            >
              <GridItem>
                <Heading
                  as="h1"
                  size={{ base: "xl", sm: "2xl", lg: "xl", xl: "2xl" }}
                  fontWeight="extrabold"
                >
                  {name}
                </Heading>
                <Box
                  h={{ base: "6px", sm: "8px" }}
                  w={{ base: "80px", sm: "100px" }}
                  mt={{ base: 1, sm: 3 }}
                >
                  <HeadingMarker color="orange" />
                </Box>
                <Box mt={12}>{body}</Box>
              </GridItem>
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
