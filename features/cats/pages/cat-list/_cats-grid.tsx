import { FC, PropsWithChildren } from "react";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { CatCard } from "../../components/cat-card";
import { ButtonLink } from "@/common/components/button-link";
import { pluralize } from "@/common/util/pluralize";
import { ROUTES } from "@/common/constants";
import { Cat } from "../../types";
import { range } from "lodash-es";

const CatsGridItem: FC<{ cat: Cat }> = ({ cat }) => {
  return (
    <CatCard
      cat={cat}
      body={
        <>
          <Text mt={1} color={cat.is_group ? "whiteAlpha.700" : "gray.500"}>
            {cat.sponsorships_count} {pluralize("boter", cat.sponsorships_count)}
          </Text>
          <Text mt={6} color={cat.is_group ? "whiteAlpha.900" : "gray.700"}>
            {cat.story_short}
          </Text>

          <ButtonLink
            mt={6}
            href={ROUTES.CatDetails(cat.slug)}
            variant="link"
            textDecoration="underline"
            fontWeight="medium"
            colorScheme={cat.is_group ? "whiteAlpha" : "orange"}
            color={cat.is_group ? "white" : "orange.500"}
            _hover={{ color: cat.is_group ? "whiteAlpha.700" : "orange.700" }}
          >
            {cat.is_group ? "Preberi si več o nas" : "Preberi mojo zgodbo"}
          </ButtonLink>
        </>
      }
    />
  );
};

const CatsGridBase: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }} spacing={8}>
      {children}
    </SimpleGrid>
  );
};

export const CatsGrid: FC<{ cats: Cat[] }> = ({ cats }) => {
  return (
    <CatsGridBase>
      {cats.map((cat) => (
        <CatsGridItem cat={cat} key={cat.id} />
      ))}
    </CatsGridBase>
  );
};

const SKELETON_INDICES = range(0, 12);

export const CatsGridSkeleton: FC = () => {
  return (
    <CatsGridBase>
      {SKELETON_INDICES.map((i) => (
        <Skeleton key={i} height="640px" />
      ))}
    </CatsGridBase>
  );
};
