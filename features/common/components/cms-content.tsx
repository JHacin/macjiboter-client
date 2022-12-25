import { FC } from "react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { Box } from "@chakra-ui/react";
import DOMPurify from "isomorphic-dompurify";

interface CmsContentProps {
  content: string;
}

export const CmsContent: FC<CmsContentProps> = ({ content }) => {
  return (
    <Prose>
      <Box dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
    </Prose>
  );
};
