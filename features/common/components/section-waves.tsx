import { FC } from "react";
import { Box } from "@chakra-ui/react";

interface SectionWavesProps {
  waveColor: keyof typeof waveVariants;
  bgColor: "copper.50" | "copper.100" | "copper.200";
}

const waveVariants = {
  "light-1": "/img/section-wave-light-1.svg",
  "semi-1": "/img/section-wave-semi-1.svg",
  "semi-2": "/img/section-wave-semi-2.svg",
};

export const SectionWaves: FC<SectionWavesProps> = ({ waveColor, bgColor }) => {
  return (
    <Box
      h="10vw"
      minH="120px"
      maxH="200px"
      bgImg={`url(${waveVariants[waveColor]})`}
      bgColor={bgColor}
      bgSize="cover"
      bgRepeat="no-repeat"
    />
  );
};
