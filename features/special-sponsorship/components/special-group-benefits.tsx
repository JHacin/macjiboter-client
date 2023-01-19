import { FC, ReactNode } from "react";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { ArrowCircleRight } from "phosphor-react";

export const SpecialGroupBenefits: FC<{ items: { id: number; content: ReactNode }[] }> = ({
  items: originalItems,
}) => {
  const reformattedItems = originalItems.map((item, index) => {
    const isLastInList = index === originalItems.length - 1;

    return {
      ...item,
      content: (
        <>
          {item.content}
          {isLastInList ? "." : ","}
        </>
      ),
    };
  });

  const headingText = `V zameno za donacijo prejmete${reformattedItems.length > 1 ? ":" : " "}`;

  return (
    <Box mt={12} maxW="600px" color="gray.700">
      <Text fontStyle="italic" fontSize="lg">
        {headingText}
        {reformattedItems.length === 1 && reformattedItems[0].content}
      </Text>

      {reformattedItems.length > 1 && (
        <List spacing={3} mt={4} ml={3}>
          {reformattedItems.map((item) => (
            <ListItem key={item.id} display="flex" alignItems="start">
              <ListIcon as={ArrowCircleRight} color="orange.500" weight="fill" height="24px" />
              <Text as="span">{item.content}</Text>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
