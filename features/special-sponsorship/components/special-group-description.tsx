import { FC, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export const SpecialGroupDescription: FC<{ content: ReactNode }> = ({ content }) => {
  return <Box fontSize={{ base: "md", lg: "lg" }}>{content}</Box>;
};
