import { FC, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export const SpecialGroupDescription: FC<{ content: ReactNode }> = ({ content }) => {
  return <Box fontSize={{ base: "lg" }}>{content}</Box>;
};
