import { FC } from "react";
import { VStack, Text, Box, Heading } from "@chakra-ui/react";
import { Cat, CatGender, CatStatus } from "../../types";
import { ButtonLink } from "@/common/components/button-link";
import { ROUTES } from "@/common/constants";
import { HeadingMarker } from "@/common/components/heading-marker";
import { CmsContent } from "@/common/components/cms-content";

interface CatDetailsDescriptionProps {
  cat: Cat;
}

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
      <Heading as="h1" size={{ base: "xl", lg: "2xl" }} fontWeight="extrabold">
        {name}
      </Heading>

      <Box
        mt={{
          base: 6,
          lg: 8,
        }}
        pr={{
          lg: "70px",
          xl: "100px",
          "2xl": "140px",
        }}
      >
        <Box fontSize={{ base: "md", md: "lg" }}>
          {!story && <>Zgodba je v pripravi...</>}
          {story && <CmsContent content={story} />}
        </Box>

        <Box
          mt={{
            base: 12,
            md: 16,
          }}
        >
          {status === CatStatus.TempNotSeekingSponsors && (
            <Text fontStyle="italic">
              Muca trenutno ne išče novih botrov. Prosimo poskusite kdaj drugič, ali pa se odločite
              za posvojitev druge muce. Hvala za razumevanje.
            </Text>
          )}

          {status === CatStatus.SeekingSponsors && (
            <Box
              bgColor="copper.200"
              px={{ base: 6, sm: 8, lg: 10 }}
              py={{ base: 10, lg: 12 }}
              shadow={{ base: "none", lg: "md" }}
            >
              <Box h="6px" w={{ base: "90px", md: "120px" }}>
                <HeadingMarker color="orange" />
              </Box>

              <Heading as="h2" mt={5} size="lg" fontWeight="extrabold">
                Želiš postati {is_group ? "naš" : "moj"} boter?
              </Heading>

              <VStack
                fontSize={{ base: "md", md: "lg" }}
                spacing={{ base: 4, lg: 6 }}
                mt={{ base: 8, md: 10, lg: 10 }}
              >
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

              <Box mt={{ base: 8, md: 10, lg: 12 }}>
                <ButtonLink href={ROUTES.BecomeCatSponsor(slug)} size={{ base: "md", md: "lg" }}>
                  Postani {is_group ? "naš" : "moj"} boter
                </ButtonLink>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
