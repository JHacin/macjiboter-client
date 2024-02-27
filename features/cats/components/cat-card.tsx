import { FC, ReactNode } from "react";
import { Flex, Icon, Image, LinkBox, LinkOverlay, SystemStyleObject, Text } from "@chakra-ui/react";
import { NextLink } from "@/common/components/next-link";
import { ROUTES } from "@/common/constants";
import { Cat } from "../types";
import { getFirstPhotoOrFallback } from "../util/photos";
import { PawPrint } from "@phosphor-icons/react";

interface CatCardProps {
  cat: Cat;
  body: ReactNode;
  styles?: SystemStyleObject;
}

export const CatCard: FC<CatCardProps> = ({ cat, body, styles }) => {
  const link = ROUTES.CatDetails(cat.slug);
  const photoUrl = getFirstPhotoOrFallback(cat);

  return (
    <LinkBox
      as="article"
      shadow="lg"
      sx={styles}
      display="flex"
      flexDir="column"
      position="relative"
      bgColor="white"
      rounded={{ base: "sm", md: "md" }}
      overflow="hidden"
      _hover={{ shadow: "xl" }}
      transition="all 0.2s ease-in-out"
    >
      <Image src={photoUrl} alt={cat.name} position="relative" roundedTop="inherit" />
      <Flex
        p={{ base: 3, sm: 4, xl: 5, "2xl": 6 }}
        pb={{ base: 4, sm: 5, xl: 6, "2xl": 7 }}
        flexGrow={1}
        direction="column"
        alignItems="flex-start"
      >
        <LinkOverlay as={NextLink} href={link}>
          <Text
            fontSize={{ base: "md", md: "lg", xl: "xl", "2xl": "2xl" }}
            fontWeight="bold"
            noOfLines={1}
          >
            {cat.name}
          </Text>
        </LinkOverlay>
        {body}
      </Flex>
      {cat.is_group && (
        <Flex
          position="absolute"
          top="0"
          right="0"
          bg="orange.500"
          color="white"
          alignItems="center"
          gap={{ base: 1.5, xl: 2 }}
          px={3}
          py={2}
          shadow="sm"
          roundedBottomLeft="md"
        >
          <Icon as={PawPrint} weight="fill" color="whiteAlpha.600" boxSize={{ base: 4, xl: 5 }} />
          <Text as="span" fontWeight="semibold" fontSize={{ base: "sm", xl: "md" }}>
            Skupina
          </Text>
        </Flex>
      )}
    </LinkBox>
  );
};
