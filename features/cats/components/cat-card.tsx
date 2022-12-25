import { FC, ReactNode } from "react";
import { Flex, Image, LinkBox, LinkOverlay, SystemStyleObject, Text } from "@chakra-ui/react";
import { NextLink } from "@/common/components/next-link";
import { ROUTES } from "@/common/constants";
import { Cat } from "../types";
import { CAT_PLACEHOLDER_IMAGE_URL } from "../constants";
import { getPhotoUrl } from "../util/photos";

interface CatCardProps {
  cat: Cat;
  body: ReactNode;
  styles?: SystemStyleObject;
}

export const CatCard: FC<CatCardProps> = ({
  cat: { photos, name, is_group, slug },
  body,
  styles,
}) => {
  const link = ROUTES.CatDetails(slug);
  const photoUrl = photos.length === 0 ? CAT_PLACEHOLDER_IMAGE_URL : getPhotoUrl(photos[0], "sm");

  return (
    <LinkBox
      as="article"
      rounded="lg"
      shadow="lg"
      bg={is_group ? "orange.500" : "white"}
      sx={styles}
      display="flex"
      flexDir="column"
    >
      <Image src={photoUrl} alt={name} position="relative" roundedTop="inherit" />
      <Flex p={6} pb={9} flexGrow={1} direction="column" alignItems="flex-start">
        <LinkOverlay as={NextLink} href={link}>
          <Text fontSize="2xl" fontWeight="bold" noOfLines={1} color={is_group ? "white" : "black"}>
            {name}
          </Text>
        </LinkOverlay>
        {body}
      </Flex>
    </LinkBox>
  );
};
