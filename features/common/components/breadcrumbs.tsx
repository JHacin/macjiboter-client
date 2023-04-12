import { FC } from "react";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { TextLink } from "./text-link";

type BreadcrumbsItem = {
  text: string;
} & (
  | {
      isCurrentPage: true;
    }
  | {
      isCurrentPage?: false;
      href: string;
    }
);

export interface BreadcrumbsProps {
  items: BreadcrumbsItem[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  const linkFontSize = { base: "sm", sm: "md" };

  return (
    <Breadcrumb
      spacing={{ base: 2, sm: 3 }}
      separator={<Box boxSize="3px" bgColor="gray.700" rounded="full" />}
      listProps={{
        flexWrap: "wrap",
        rowGap: 1,
      }}
    >
      {items.map((item) => (
        <BreadcrumbItem key={item.text}>
          {!item.isCurrentPage && (
            <BreadcrumbLink
              as={TextLink}
              href={item.href}
              color="orange.500"
              textDecoration="underline"
              fontSize={linkFontSize}
            >
              {item.text}
            </BreadcrumbLink>
          )}

          {item.isCurrentPage && (
            <BreadcrumbLink
              isCurrentPage={true}
              fontSize={linkFontSize}
              color="gray.700"
              cursor="initial"
              _hover={{ textDecoration: "none" }}
            >
              {item.text}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
