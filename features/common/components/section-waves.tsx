import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { ASSET_PATH } from "../constants";

interface SectionWavesProps {
  waveColor: keyof typeof waveVariants;
  bgColor: "copper.50" | "copper.100" | "copper.200" | "white";
}

const waveVariants = {
  "light-1": ASSET_PATH.PublicImage("section-wave-light-1.svg"),
  "semi-1": ASSET_PATH.PublicImage("section-wave-semi-1.svg"),
  "semi-2": ASSET_PATH.PublicImage("section-wave-semi-2.svg"),
};

export const SectionWaves: FC<SectionWavesProps> = ({ waveColor, bgColor }) => {
  return (
    <Box
      h="10vw"
      minH={{ base: "100px", md: "120px", lg: "140px" }}
      maxH="200px"
      bgImg={`url(${waveVariants[waveColor]})`}
      bgColor={bgColor}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center top"
    />
  );
};
