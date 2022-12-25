import { FC, useMemo } from "react";
import { Button, ButtonGroup, Flex, Icon, IconButton } from "@chakra-ui/react";
import { range } from "lodash-es";
import { ArrowLeft, ArrowRight, DotsThree } from "phosphor-react";

interface PaginationProps {
  selectedPage: number;
  onChange: (page: number) => void;
  totalPages: number;
}

const createPaginationRange = (totalPages: number, selectedPage: number) => {
  const shouldShowLeftDots = totalPages >= 8 && selectedPage >= 5;
  const shouldShowRightDots = totalPages >= 8 && totalPages - selectedPage >= 4;

  if (shouldShowLeftDots && !shouldShowRightDots) {
    return [1, "left-dot", ...range(totalPages - 4, totalPages + 1)];
  }

  if (!shouldShowLeftDots && shouldShowRightDots) {
    return [...range(1, 6), "right-dot", totalPages];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    return [
      1,
      "left-dot",
      selectedPage - 1,
      selectedPage,
      selectedPage + 1,
      "right-dot",
      totalPages,
    ];
  }

  return range(1, totalPages + 1);
};

const sharedBtnProps = {
  minW: "48px",
  px: 3,
};

export const Pagination: FC<PaginationProps> = ({ selectedPage, onChange, totalPages }) => {
  const paginationRange = useMemo(
    () => createPaginationRange(totalPages, selectedPage),
    [selectedPage, totalPages]
  );

  return (
    <ButtonGroup flexWrap="wrap" justifyContent="center" spacing={2} rowGap={2}>
      <IconButton
        aria-label="Nazaj"
        icon={<Icon as={ArrowLeft} />}
        variant="outline"
        isDisabled={selectedPage === 1}
        onClick={() => {
          onChange(selectedPage - 1);
        }}
        {...sharedBtnProps}
      />

      {paginationRange.map((rangeItem) => {
        if (typeof rangeItem === "string") {
          return (
            <Flex key={rangeItem} align="center" justify="center" {...sharedBtnProps}>
              <Icon as={DotsThree} w={5} h={5} weight="bold" />
            </Flex>
          );
        }

        return (
          <Button
            key={rangeItem}
            onClick={() => {
              onChange(rangeItem);
            }}
            variant={selectedPage === rangeItem ? "solid" : "outline"}
            {...sharedBtnProps}
          >
            {rangeItem}
          </Button>
        );
      })}

      <IconButton
        aria-label="Naprej"
        icon={<Icon as={ArrowRight} />}
        variant="outline"
        isDisabled={selectedPage === totalPages}
        onClick={() => {
          onChange(selectedPage + 1);
        }}
        {...sharedBtnProps}
      />
    </ButtonGroup>
  );
};
