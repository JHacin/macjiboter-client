import { FC } from "react";
import { Box } from "@chakra-ui/react";

export interface HeadingMarkerProps {
  color: "orange" | "purple";
}

const colorToGradientMap = {
  orange: "orange.200, orange.500",
  purple: "blue.100, blue.400",
};

export const HeadingMarker: FC<HeadingMarkerProps> = ({ color }) => {
  return (
    <Box bgGradient={`linear(to-r, ${colorToGradientMap[color]})`} rounded="lg" w="full" h="full" />
  );
};
