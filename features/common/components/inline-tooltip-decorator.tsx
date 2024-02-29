import { FC, ReactNode } from "react";
import { Text, Icon, Tooltip, TooltipProps, HStack, Box } from "@chakra-ui/react";
import { Question } from "@phosphor-icons/react";

interface InlineTooltipProps extends Omit<TooltipProps, "children" | "label" | "aria-label"> {
  tooltipContent: string;
  children: ReactNode;
}

export const InlineTooltipDecorator: FC<InlineTooltipProps> = ({ tooltipContent, children }) => {
  return (
    <HStack>
      <Box>{children}</Box>
      <Tooltip
        label={<Text p={2}>{tooltipContent}</Text>}
        aria-label={tooltipContent}
        color="gray.900"
        fontWeight="regular"
        bg="copper.200"
        hasArrow={true}
      >
        <Icon as={Question} weight="fill" color="orange.500" w={5} h={5} />
      </Tooltip>
    </HStack>
  );
};
