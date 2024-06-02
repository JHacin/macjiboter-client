import { FC } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Cat } from "../../types";
import { CmsContent } from "@/common/components/cms-content";

interface CatDetailsDescriptionProps {
  cat: Cat;
}

export const Description: FC<CatDetailsDescriptionProps> = ({ cat: { story, name } }) => {
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
      </Box>
    </Box>
  );
};
