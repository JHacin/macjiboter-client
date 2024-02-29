import { FC, PropsWithChildren } from "react";
import { Text } from "@chakra-ui/react";

export const FormSectionHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text fontWeight="bold" fontSize="xl" bgColor="orange.100" display="inline-block" px={2}>
      {children}
    </Text>
  );
};
