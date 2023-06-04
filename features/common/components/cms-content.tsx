import { FC } from "react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { Box } from "@chakra-ui/react";

interface CmsContentProps {
  content: string;
}

export const CmsContent: FC<CmsContentProps> = ({ content }) => {
  return (
    <Prose>
      <Box dangerouslySetInnerHTML={{ __html: content }} />
    </Prose>
  );
};
