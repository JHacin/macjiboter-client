import { FC } from "react";
import { Section } from "@/common/components/section";
import { Container } from "@/common/components/container";
import { Box, Flex, Icon, LinkBox, LinkOverlay, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { ArrowRight } from "phosphor-react";
import { SPECIAL_SPONSORSHIP_GROUP_META, SPECIAL_SPONSORSHIPS_META } from "../../constants";
import { SpecialSponsorshipGroup } from "../../types";
import { max, min } from "lodash-es";
import { NextLink } from "@/common/components/next-link";
import { ButtonLink } from "@/common/components/button-link";
import { ROUTES } from "@/common/constants";
import { PageHeaderOutlined } from "@/common/components/page-header-outlined";
import { PageTitle } from "@/common/components/page-title";
import { PageSubtitle } from "@/common/components/page-subtitle";

interface SpecialSponsorshipListItemProps {
  group: SpecialSponsorshipGroup;
  amountRange: string;
}

const generateAmountRange = (group: SpecialSponsorshipGroup) => {
  const amounts = SPECIAL_SPONSORSHIP_GROUP_META[group].childTypes.map(
    (type) => SPECIAL_SPONSORSHIPS_META[type].amount
  );

  if (!amounts.length) {
    return "";
  }

  if (amounts.length === 1) {
    return `${amounts[0]} €`;
  }

  const smallest = min(amounts);
  const largest = max(amounts);

  if (smallest === largest) {
    return `${smallest} €`;
  }

  return `${smallest}-${largest} €`;
};

const LIST_ITEMS: SpecialSponsorshipListItemProps[] = Object.keys(SPECIAL_SPONSORSHIP_GROUP_META)
  .map((group) => Number(group))
  .map((group: SpecialSponsorshipGroup) => ({
    group,
    amountRange: generateAmountRange(group),
  }));

const SpecialSponsorshipTypeCard: FC<SpecialSponsorshipListItemProps> = ({
  group,
  amountRange,
}) => {
  const meta = SPECIAL_SPONSORSHIP_GROUP_META[group];
  const { imageUrls, name, description } = meta;
  const href = ROUTES.SpecialSponsorshipGroup(meta);

  return (
    <LinkBox as={Flex} flexDirection="column" bg="white" shadow="lg">
      <Image src={imageUrls.sm} alt={name} position="relative" />
      <Flex flexGrow={1} flexDirection="column" alignItems="flex-start" p={6}>
        <LinkOverlay as={NextLink} href={href}>
          <Text as="h3" fontSize={{ base: "xl", sm: "2xl" }} fontWeight="bold">
            {name}
          </Text>
        </LinkOverlay>
        <Text color="gray.500" fontSize="sm">
          {amountRange}
        </Text>
        <Text mt={4}>{description}</Text>
        <Box mt="auto" pt={8}>
          <ButtonLink href={href} rightIcon={<Icon as={ArrowRight} weight="bold" />}>
            Izberi
          </ButtonLink>
        </Box>
      </Flex>
    </LinkBox>
  );
};

export const SpecialList: FC = () => {
  return (
    <>
      <PageHeaderOutlined>
        <PageTitle>posebna botrstva</PageTitle>
        <PageSubtitle>
          Posebna botrstva so{" "}
          <Text as="span" fontWeight="semibold">
            enkratne donacije
          </Text>
          , ki nam jih lahko namenite kadar koli želite. Pri tem vam ponujamo več možnosti, ki so
          navedene na spodnjem seznamu.
        </PageSubtitle>
      </PageHeaderOutlined>

      <Section>
        <Container>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={{ base: 6, md: 8 }}>
            {LIST_ITEMS.map((type) => (
              <SpecialSponsorshipTypeCard key={type.group} {...type} />
            ))}
          </SimpleGrid>
        </Container>
      </Section>
    </>
  );
};
