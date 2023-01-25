import { FC, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

export const FormNote: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box bg="blackAlpha.100" rounded="md" py={4} px={5} fontSize="sm">
      {children}
    </Box>
  );
};
