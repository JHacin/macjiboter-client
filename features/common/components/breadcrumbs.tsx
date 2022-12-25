import { FC } from "react";
import { CaretRight } from "phosphor-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
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
    <Breadcrumb spacing={2} separator={<CaretRight />}>
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
            <BreadcrumbLink isCurrentPage={true} fontSize={linkFontSize}>
              {item.text}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
