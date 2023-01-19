import { FC, ReactNode } from "react";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const SpecialTypeBenefits: FC<{ items: { id: number; content: ReactNode }[] }> = ({
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
    <Box mt={8} fontSize={{ base: "lg" }}>
      <Text>
        {headingText}
        {reformattedItems.length === 1 && reformattedItems[0].content}
      </Text>

      {reformattedItems.length > 1 && (
        <UnorderedList>
          {reformattedItems.map((item) => (
            <ListItem key={item.id}>{item.content}</ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};
