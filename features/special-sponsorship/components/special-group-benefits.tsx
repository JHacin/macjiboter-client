import { FC, ReactNode } from "react";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CheckCircle, Gift } from "phosphor-react";

export const SpecialGroupBenefits: FC<{
  items: { id: number; content: ReactNode; isForGiftOnly?: boolean }[];
}> = ({ items: originalItems }) => {
  const normalizedItems = originalItems
    .sort((item) => (item.isForGiftOnly ? 1 : -1))
    .map((item, index) => {
      const isLastInList = index === originalItems.length - 1;

      return {
        ...item,
        content: (
          <>
            {item.isForGiftOnly ? "(če gre za darilo) " : ""}
            {item.content}
            {isLastInList ? "." : ","}
          </>
        ),
      };
    });

  return (
    <Box mt={12} maxW="560px" color="gray.700">
      <Text fontWeight="semibold" textDecoration="underline">
        V zameno za donacijo vi ali vaš obdarovanec prejmete:
      </Text>

      {normalizedItems.length > 0 && (
        <List spacing={3} mt={4} ml={3}>
          {normalizedItems.map((item) => (
            <ListItem key={item.id} display="flex" alignItems="start">
              <ListIcon
                as={item.isForGiftOnly ? Gift : CheckCircle}
                color="orange.500"
                weight="fill"
                height="24px"
              />
              <Text as="span">{item.content}</Text>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
