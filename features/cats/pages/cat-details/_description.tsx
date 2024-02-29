import { FC } from "react";
import { VStack, Text, Box, Heading } from "@chakra-ui/react";
import { Cat, CatStatus } from "../../types";
import { ButtonLink } from "@/common/components/button-link";
import { ROUTES } from "@/common/constants";
import { HeadingMarker } from "@/common/components/heading-marker";
import { CmsContent } from "@/common/components/cms-content";

interface CatDetailsDescriptionProps {
  cat: Cat;
}

export const Description: FC<CatDetailsDescriptionProps> = ({
  cat: { is_group, story, status, slug, name },
}) => {
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
              rounded="md"
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
                  Purrrrrrfektno! Potem izpolni{" "}
                  <Text as="span" fontStyle="italic">
                    Dogovor o posvojitvi na daljavo
                  </Text>{" "}
                  in {is_group ? "naša" : "najina"} skupna zgodba se lahko prične.
                </Text>
                <Text>
                  Če pa misliš, da {is_group ? "našo" : "mojo"} botrom namenjeno mehko mačjo prejo
                  bolj potrebuje tebi ljuba oseba, lahko botrstvo tudi podariš.
                </Text>
                <Text>Hvala iz srca (in ja, mucki v resnici znamo biti še kako hvaležni)!</Text>
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
