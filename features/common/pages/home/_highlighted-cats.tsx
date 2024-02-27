import { Section } from "../../components/section";
import { Box, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { humanReadableDateDifference } from "../../util/date-difference-format";
import dayjs from "dayjs";
import { SectionHeader } from "../../components/section-header";
import { CatCard } from "@/cats/components/cat-card";
import { ButtonLink } from "../../components/button-link";
import { ROUTES } from "../../constants";
import { Cat } from "@/cats/types";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getHomeMeta } from "../../util/api";
import { useTheme } from "@/theme";
import { ContainerNew } from "../../components/container";
import { Calendar, Users } from "@phosphor-icons/react";
import { pluralize } from "../../util/pluralize";

const CatGridItem: FC<{ cat: Cat }> = ({ cat }) => {
  const theme = useTheme();

  const timeSinceArrivalToShelter = humanReadableDateDifference(
    dayjs(cat.date_of_arrival_mh),
    dayjs()
  );

  // Hide the fourth cat between the two breakpoints where we only want to show three (so it looks nicer).
  const styles = {
    [`@media (min-width:${theme.breakpoints.md}) and (max-width:${theme.breakpoints["lg"]})`]: {
      "&:nth-of-type(4)": {
        display: "none",
      },
    },
  };

  return (
    <CatCard
      cat={cat}
      body={
        <>
          <Box
            mt={{ base: 0.5, md: 1, lg: 0.5, xl: 2, "2xl": 2.5 }}
            mb={{ base: 4, md: 6, lg: 4, xl: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={{ base: 1.5, md: 2.5 }}
              display={{ base: "none", xl: "flex" }}
            >
              <Icon as={Calendar} boxSize={{ base: 4, xl: 5 }} color="gray.600" />
              <Text noOfLines={1} color="gray.700" fontSize={{ base: "sm", xl: "md" }}>
                {timeSinceArrivalToShelter} v Mačji hiši
              </Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={{ base: 1.5, md: 2.5 }}>
              <Icon as={Users} boxSize={{ base: 4, xl: 5 }} color="gray.600" />
              <Text mt={1} color="gray.700" fontSize={{ base: "sm", xl: "md" }}>
                {cat.sponsorships_count} {pluralize("boter", cat.sponsorships_count)}
              </Text>
            </Stack>
          </Box>
          <ButtonLink href={ROUTES.CatDetails(cat.slug)} size={{ base: "sm", xl: "md" }}>
            Več o meni
          </ButtonLink>
        </>
      }
      styles={styles}
    />
  );
};

export const HighlightedCats = () => {
  const { data, isSuccess } = useQuery([QueryKey.HomeMeta], getHomeMeta, {
    staleTime: 5 * 60 * 1000,
  });

  if (!isSuccess) {
    return null;
  }

  return (
    <Section position="relative" bg="copper.100">
      <ContainerNew>
        <SectionHeader title="Iščejo botre" isCenteredOnDesktop={true}>
          Med botrskimi mucki najdete predvsem tiste, ki iz različnih vzrokov že dolgo iščejo nov
          dom, ali pa zaradi njihovih posebnosti predvidevamo, da bodo pri nas dalj časa.
        </SectionHeader>

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={{ base: 3, sm: 4, lg: 5 }}>
          {data.heroCats.map((cat) => (
            <CatGridItem key={cat.id} cat={cat} />
          ))}
        </SimpleGrid>
      </ContainerNew>
    </Section>
  );
};
