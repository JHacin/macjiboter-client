import { FC, PropsWithChildren } from "react";
import { Text } from "@chakra-ui/react";

export const PageSubtitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text
      fontSize={{ base: "md", lg: "lg" }}
      mt={{ base: 5, lg: 6, xl: 8, "2xl": 10 }}
      maxW={{ base: "500px", lg: "640px" }}
    >
      {children}
    </Text>
  );
};
