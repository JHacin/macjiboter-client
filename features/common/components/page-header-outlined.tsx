import { FC, ReactNode } from "react";
import { ContainerNew } from "./container";
import { Section } from "./section";
import { Box } from "@chakra-ui/react";

export const PageHeaderOutlined: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box>
      <ContainerNew indent={1}>
        <Section>{children}</Section>
      </ContainerNew>
      <ContainerNew>
        <Box w="full" h="4px" bgColor="orange.500" />
      </ContainerNew>
    </Box>
  );
};
