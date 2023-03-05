import { FC, PropsWithChildren } from "react";
import { Heading } from "@chakra-ui/react";

export const PageTitle: FC<PropsWithChildren> = ({ children }) => {
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
