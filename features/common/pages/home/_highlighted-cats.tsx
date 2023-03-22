import { Section } from "../../components/section";
import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
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

const CatGridItem: FC<{ cat: Cat }> = ({ cat }) => {
  const theme = useTheme();

  const timeSinceArrivalToShelter = humanReadableDateDifference(
    dayjs(cat.date_of_arrival_mh),
    dayjs()
  );

  // Hide the fourth cat between the two breakpoints where we only want to show three (so it looks nicer).
  const styles = {
    [`@media (min-width:${theme.breakpoints.xl}) and (max-width:${theme.breakpoints["2xl"]})`]: {
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
          <VStack mt={4} color="gray.600" spacing={2}>
            <Text noOfLines={1}>{timeSinceArrivalToShelter} v Mačji hiši</Text>
            <Text noOfLines={1}>Trenutno botrov: {cat.sponsorships_count}</Text>
          </VStack>
          <ButtonLink mt={12} href={ROUTES.CatDetails(cat.slug)}>
            Preberi mojo zgodbo
          </ButtonLink>
        </>
      }
      styles={styles}
    />
  );
};

export const HighlightedCats = () => {
  const { data, isSuccess } = useQuery([QueryKey.HomeMeta], getHomeMeta, { staleTime: Infinity });

  if (!isSuccess) {
    return null;
  }

  return (
    <Section position="relative" bg="copper.100">
      <ContainerNew>
        <SectionHeader title="Iščejo botre" isCenteredOnDesktop={true}>
          V projekt Mačji boter so vključeni predvsem tisti mucki, ki iz različnih vzrokov dalj časa
          iščejo svoj dom, ali pa zaradi njihovih posebnosti predvidevamo, da bodo pri nas dalj
          časa.
        </SectionHeader>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3, "2xl": 4 }} spacing={{ base: 6, md: 8 }}>
          {data.heroCats.map((cat) => (
            <CatGridItem key={cat.id} cat={cat} />
          ))}
        </SimpleGrid>
      </ContainerNew>
    </Section>
  );
};
