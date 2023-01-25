import { FC, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

export const FormNote: FC<PropsWithChildren<{ bgColor?: "blackAlpha" | "orange" }>> = ({
  bgColor = "blackAlpha",
  children,
}) => {
  return (
    <Box bgColor={`${bgColor}.100`} rounded="md" py={4} px={5} fontSize="sm">
      {children}
    </Box>
  );
};
