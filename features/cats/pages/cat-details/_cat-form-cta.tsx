import { ContainerNew } from "@/common/components/container";
import { Box, BoxProps, Heading, Icon, LinkBox, LinkOverlay, Show, Text } from "@chakra-ui/react";
import { ButtonLink, IconButtonLink } from "@/common/components/button-link";
import { ROUTES } from "@/common/constants";
import { Cat, CatStatus } from "../../types";
import { ArrowRight } from "@phosphor-icons/react";
import { ReactNode } from "react";

export function CatFormCta({ cat }: { cat: Cat }) {
  if (cat.status === CatStatus.SeekingSponsors) {
    const title = `Želiš postati ${cat.is_group ? "naš" : "moj"} boter?`;
    const buttonLabel = `Postani ${cat.is_group ? "naš" : "moj"} boter`;
    const href = ROUTES.BecomeCatSponsor(cat.slug);

    return (
      <LinkBox>
        <CtaContainer
          _hover={{ md: { backgroundColor: "copper.300" } }}
          transition="all 0.25s ease-in-out"
        >
          <>
            <Show above="md">
              <Box display="flex" rowGap="0.5rem" columnGap="1rem" flexWrap="wrap">
                <LinkOverlay href={href}>
                  <Heading as="h3" size="md" fontWeight="extrabold">
                    {title}
                  </Heading>
                </LinkOverlay>
                <Text>
                  Izpolni{" "}
                  <Text as="span" fontStyle="italic">
                    Dogovor o posvojitvi na daljavo
                  </Text>{" "}
                  in najina skupna zgodba se lahko prične.
                </Text>
              </Box>
              <Box>
                <ButtonLink href={href} size={{ base: "md", lg: "lg" }}>
                  {buttonLabel}
                </ButtonLink>
              </Box>
            </Show>
            <Show below="md">
              <Box
                display="flex"
                alignItems="center"
                gap="1rem"
                justifyContent="center"
                width="100%"
              >
                <LinkOverlay href={href}>
                  <Heading as="h3" size="sm" fontWeight="bold" color="white">
                    {title}
                  </Heading>
                </LinkOverlay>
                <IconButtonLink
                  href={href}
                  icon={<Icon as={ArrowRight} weight="bold" fontSize="lg" color="orange.500" />}
                  aria-label={buttonLabel}
                  isRound={true}
                  size="sm"
                  backgroundColor="white"
                  _hover={{
                    backgroundColor: "white",
                  }}
                />
              </Box>
            </Show>
          </>
        </CtaContainer>
      </LinkBox>
    );
  }

  return (
    <CtaContainer>
      <Text fontStyle="italic" fontSize={{ base: "sm", md: "md" }}>
        Muca trenutno ne išče novih botrov. Prosimo poskusite kdaj drugič, ali pa se odločite za
        posvojitev druge muce. Hvala za razumevanje.
      </Text>
    </CtaContainer>
  );
}

function CtaContainer({ children, ...boxProps }: BoxProps & { children: ReactNode }) {
  return (
    <Box
      {...boxProps}
      backgroundColor={{
        base: "orange.500",
        md: "copper.200",
      }}
      py={{ base: "1rem", md: "1.5rem" }}
    >
      <ContainerNew>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pl={{ xl: "60px", "2xl": "100px" }}
          pr={{ xl: "120px", "2xl": "200px" }}
          gap="3rem"
        >
          {children}
        </Box>
      </ContainerNew>
    </Box>
  );
}
