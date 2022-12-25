import { FC } from "react";
import { VStack, Text, Box, Heading } from "@chakra-ui/react";
import { Cat, CatGender, CatStatus } from "../../types";
import { ButtonLink } from "@/common/components/button-link";
import { ROUTES } from "@/common/constants";
import { InlineTooltipDecorator } from "@/common/components/inline-tooltip-decorator";
import { HeadingMarker } from "@/common/components/heading-marker";
import { CmsContent } from "@/common/components/cms-content";

interface CatDetailsDescriptionProps {
  cat: Cat;
}

const TempNotSeekingSponsorsMsg = () => {
  const content =
    "Zaradi posebnih okoliščin muca trenutno ne sprejema novih botrov. " +
    "Prosimo poskusite kdaj drugič, ali pa se odločite za posvojitev druge muce. " +
    "Hvala za razumevanje.";

  return (
    <InlineTooltipDecorator tooltipContent={content}>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} fontStyle="italic">
        Muca trenutno ne išče novih botrov.
      </Text>
    </InlineTooltipDecorator>
  );
};

export const Description: FC<CatDetailsDescriptionProps> = ({
  cat: { is_group, gender, story, status, slug, name },
}) => {
  const t = {
    mi: is_group ? "nam" : "mi",
    dobim: is_group ? "dobimo" : "dobim",
    Jaz: is_group ? "Mi" : "Jaz",
    obljubim: is_group ? "obljubimo" : "obljubim",
    bom: is_group ? "bomo" : "bom",
    oglasil: is_group ? "oglasili" : gender === CatGender.Male ? "oglasil" : "oglasila",
    povedal: is_group ? "povedali" : gender === CatGender.Male ? "povedal" : "povedala",
    imam: is_group ? "imamo" : "imam",
  };

  return (
    <Box>
      <Heading as="h1" size="2xl">
        {name}
      </Heading>

      <Box
        mt={{
          base: 8,
          lg: 12,
        }}
        maxW={{
          md: "600px",
          lg: "525px",
          xl: "650px",
        }}
      >
        <Box fontSize={{ base: "md", md: "lg" }}>
          {!story && <>Zgodba je v pripravi...</>}
          {story && <CmsContent content={story} />}
        </Box>

        <Box
          mt={{
            base: 12,
            lg: 20,
          }}
        >
          {status === CatStatus.TempNotSeekingSponsors && <TempNotSeekingSponsorsMsg />}

          {status === CatStatus.SeekingSponsors && (
            <Box bgColor="copper.200" p={12} rounded="md" shadow="lg">
              <Box h="6px" w="120px">
                <HeadingMarker color="orange" />
              </Box>

              <Heading as="h2" mt={8}>
                Želiš postati {is_group ? "naš" : "moj"} boter?
              </Heading>

              <VStack fontSize="lg" spacing={6} mt={12}>
                <Text>
                  Lahko izpolniš{" "}
                  <Text as="span" fontWeight="semibold">
                    Dogovor o posvojitvi na daljavo
                  </Text>
                  , s čimer {t.mi} obljubiš, da {t.mi} boš s svojimi prispevki vsak mesec pomagal
                  pri tem, da {t.dobim} najboljšo možno oskrbo.
                </Text>
                <Text>
                  Botrstvo lahko tudi pokloniš kot{" "}
                  <Text as="span" fontWeight="semibold">
                    darilo
                  </Text>
                  , in s tem razveseliš bližnjo osebo.
                </Text>
                <Text>
                  {t.Jaz} pa tebi {t.obljubim}, da se {t.bom} tebi (ali tvojemu obdarovancu) vsake
                  toliko časa {t.oglasil} s pozdravčkom in ti {t.povedal} več o tem, kako se{" "}
                  {t.imam}.
                </Text>
              </VStack>

              <ButtonLink href={ROUTES.BecomeCatSponsor(slug)} size="lg" mt={20}>
                Postani {is_group ? "naš" : "moj"} boter
              </ButtonLink>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
