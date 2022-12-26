import { FC } from "react";
import { Box } from "@chakra-ui/react";

export interface HeadingMarkerProps {
  color: "copper" | "purple" | "blue" | "orange";
}

const colorToGradientMap = {
  orange: "orange.200, orange.500",
  purple: "purple.200, purple.500",
  blue: "blue.200, blue.500",
  copper: "copper.200, copper.500",
};

export const HeadingMarker: FC<HeadingMarkerProps> = ({ color }) => {
  return (
    <Box bgGradient={`linear(to-r, ${colorToGradientMap[color]})`} rounded="lg" w="full" h="full" />
  );
};
