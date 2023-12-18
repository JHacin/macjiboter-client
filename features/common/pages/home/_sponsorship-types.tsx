import { FC } from "react";
import { Section } from "../../components/section";
import { Heading, Icon, LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/react";
import { Gift, IconProps, PawPrint, Sparkle } from "@phosphor-icons/react";
import { ButtonLink } from "../../components/button-link";
import { SectionHeader } from "../../components/section-header";
import { NextLink } from "../../components/next-link";
import { SectionWaves } from "../../components/section-waves";
import { ROUTES } from "../../constants";
import { ContainerNew } from "@/common/components/container";

interface SponsorshipTypeCardProps {
  id: number;
  title: string;
  description: string;
  buttonProps: {
    text: string;
    link: string;
  };
  theme: {
    icon: FC<IconProps>;
    iconRotate?: string;
    color: string;
  };
}

const items: SponsorshipTypeCardProps[] = [
  {
    id: 1,
    title: "Redno botrstvo",
    description:
      "Kot redni boter se zavežete k rednim mesečnim prispevkom, namenjenim določeni muci.",

    buttonProps: {
      text: "Muce, ki iščejo botra",
      link: ROUTES.CatsList,
    },
    theme: {
      icon: PawPrint,
      color: "orange",
    },
  },
  {
    id: 2,
    title: "Posebna botrstva",
    description:
      "Posebna botrstva so enkratne donacije, ki nam jih lahko namenite takrat, ko to želite.",
    buttonProps: {
      text: "Oglej si možnosti",
      link: ROUTES.SpecialSponsorships,
    },
    theme: {
      icon: Sparkle,
      iconRotate: "255deg",
      color: "purple",
    },
  },
  {
    id: 3,
    title: "Botrstvo kot darilo",
    description:
      "Z botrstvom lahko razveselite bližnjo osebo in hkrati prispevate k boljšemu življenju muc.",
    buttonProps: {
      text: "Več o tem",
      link: ROUTES.GiftSponsorship,
    },
    theme: {
      icon: Gift,
      color: "blue",
    },
  },
];

const SponsorshipTypeCard: FC<SponsorshipTypeCardProps> = ({
  title,
  description,
  theme: { icon, iconRotate = "-25deg", color },
  buttonProps,
}) => {
  return (
    <LinkBox
      as="article"
      p={{ base: 6, md: 8, lg: 12 }}
      bg={`${color}.100`}
      position="relative"
      overflow="hidden"
      shadow="lg"
    >
      <Icon
        as={icon}
        color={`${color}.200`}
        boxSize={{
          base: 44,
          sm: 56,
          md: 72,
          lg: 80,
        }}
        weight="light"
        position="absolute"
        bottom="0px"
        right="0px"
        transform="auto"
        rotate={iconRotate}
        translateY="30%"
        translateX="20%"
      />

      <LinkOverlay as={NextLink} href={buttonProps.link}>
        <Heading as="h3" size="lg">
          {title}
        </Heading>
      </LinkOverlay>

      <Text
        fontSize={{ base: "md", lg: "lg" }}
        mt={4}
        maxW={{ base: "300px", md: "480px" }}
        position="relative"
      >
        {description}
      </Text>

      <ButtonLink href={buttonProps.link} colorScheme={color} variant="solid" mt={14}>
        {buttonProps.text}
      </ButtonLink>
    </LinkBox>
  );
};

export const SponsorshipTypes: FC = () => {
  return (
    <>
      <SectionWaves waveColor="light-1" bgColor="copper.100" />
      <Section position="relative" spacing={{ top: "xs", bottom: "lg" }}>
        <ContainerNew indent={2}>
          <SectionHeader title="Vrste botrstev" isCenteredOnDesktop={true} markerColor="purple">
            Mucam v naši oskrbi lahko na daljavo pomagate na več načinov.
          </SectionHeader>

          <VStack spacing={{ base: 6, md: 8 }} align="stretch">
            {items.map((item) => (
              <SponsorshipTypeCard key={item.id} {...item} />
            ))}
          </VStack>
        </ContainerNew>
      </Section>
    </>
  );
};
