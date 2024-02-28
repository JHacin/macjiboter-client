import { FC, PropsWithChildren } from "react";
import { Icon, SimpleGrid, Skeleton, Stack, Text } from "@chakra-ui/react";
import { CatCard } from "../../components/cat-card";
import { ButtonLink } from "@/common/components/button-link";
import { pluralize } from "@/common/util/pluralize";
import { ROUTES } from "@/common/constants";
import { Cat } from "../../types";
import { range } from "lodash-es";
import { Users } from "@phosphor-icons/react";

const CatsGridItem: FC<{ cat: Cat }> = ({ cat }) => {
  return (
    <CatCard
      cat={cat}
      body={
        <>
          <Stack
            direction="row"
            alignItems="center"
            spacing={{ base: 1.5, xl: 2.5 }}
            mt={{ base: 0.5, md: 1, lg: 0.5, xl: 1 }}
          >
            <Icon as={Users} boxSize={{ base: 4, xl: 5, "2xl": 6 }} color="gray.600" />
            <Text mt={1} color="gray.700" fontSize={{ base: "sm", xl: "md", "2xl": "lg" }}>
              {cat.sponsorships_count} {pluralize("boter", cat.sponsorships_count)}
            </Text>
          </Stack>

          <ButtonLink
            mt={{ base: 4, md: 6, lg: 4, xl: 6 }}
            href={ROUTES.CatDetails(cat.slug)}
            variant="link"
            textDecoration="underline"
            fontWeight="semibold"
            fontSize={{ base: "sm", md: "md", lg: "sm", xl: "md", "2xl": "lg" }}
            _hover={{ color: "orange.700" }}
            whiteSpace="initial"
          >
            {cat.is_group ? "Več o nas" : "Več o meni"}
          </ButtonLink>
        </>
      }
    />
  );
};

const CatsGridBase: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={{ base: 3, sm: 4, lg: 5 }}>
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
        <Skeleton key={i} height={{ base: "320px", lg: "400px" }} />
      ))}
    </CatsGridBase>
  );
};
