import { FC, PropsWithChildren } from "react";
import { HeadingMarker, HeadingMarkerProps } from "./heading-marker";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface SectionHeaderProps {
  title: string;
  isCenteredOnDesktop?: boolean;
  markerColor?: HeadingMarkerProps["color"];
}

export const SectionHeader: FC<PropsWithChildren<SectionHeaderProps>> = ({
  title,
  isCenteredOnDesktop = false,
  markerColor = "orange",
  children,
}) => {
  return (
    <Flex
      align={{ base: "start", lg: isCenteredOnDesktop ? "center" : "start" }}
      textAlign={{ base: "left", lg: isCenteredOnDesktop ? "center" : "left" }}
      direction="column"
      mb={{ base: 16, lg: 24 }}
    >
      <Box mb={8} w={{ base: "80px", md: "100px", lg: "120px" }} h="7px">
        <HeadingMarker color={markerColor} />
      </Box>

      <Heading size="2xl" fontWeight={800}>
        {title}
      </Heading>

      {children && (
        <Text fontSize={{ base: "lg", lg: "xl" }} maxW="750px" mt={{ base: 8, lg: 10 }}>
          {children}
        </Text>
      )}
    </Flex>
  );
};
