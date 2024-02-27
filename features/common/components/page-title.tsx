import { FC, PropsWithChildren } from "react";
import { Heading } from "@chakra-ui/react";

export const LargePageTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Heading
      as="h1"
      size={{ base: "3xl", xl: "4xl" }}
      fontWeight={800}
      maxWidth="900px"
      lineHeight="1.1 !important"
    >
      {children}
    </Heading>
  );
};

export function FilledPageTitle({ children }: PropsWithChildren) {
  return (
    <Heading
      as="h1"
      bgColor="copper.200"
      display="inline"
      px={{ base: 4 }}
      py={{ base: 1 }}
      fontWeight={800}
      rounded="md"
      whiteSpace="pre-wrap"
      boxDecorationBreak="clone"
      fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
      lineHeight={{ base: 1.8 }}
    >
      {children}
    </Heading>
  );
}
