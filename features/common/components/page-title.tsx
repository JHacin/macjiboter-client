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
      size={{ base: "2xl", lg: "3xl" }}
      bgColor="copper.200"
      display="inline-block"
      px={6}
      py={5}
      fontWeight={800}
      rounded="md"
    >
      {children}
    </Heading>
  );
}
