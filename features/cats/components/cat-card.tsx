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
      rounded="md"
      overflow="hidden"
    >
      <Image src={photoUrl} alt={cat.name} position="relative" roundedTop="inherit" />
      <Flex p={6} pb={9} flexGrow={1} direction="column" alignItems="flex-start">
        <LinkOverlay as={NextLink} href={link}>
          <Text fontSize="2xl" fontWeight="bold" noOfLines={1}>
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
          gap={1.5}
          px={3}
          py={2}
          shadow="sm"
        >
          <Icon as={PawPrint} weight="fill" color="whiteAlpha.600" />
          <Text as="span" fontWeight="semibold" fontSize="sm">
            Skupina
          </Text>
        </Flex>
      )}
    </LinkBox>
  );
};
