import { FC, ReactNode } from "react";
import { ContainerNew } from "./container";
import { Section } from "./section";
import { Box } from "@chakra-ui/react";

export const PageHeaderFilled: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box backgroundColor="copper.100">
      <ContainerNew indent={1}>
        <Section spacing={{ bottom: "lg" }}>{children}</Section>
      </ContainerNew>
    </Box>
  );
};
