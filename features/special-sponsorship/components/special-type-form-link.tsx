import { SpecialSponsorshipType } from "../types";
import { FC } from "react";
import { ButtonLink } from "@/common/components/button-link";
import { ROUTES } from "@/common/constants";
import { Box, Icon } from "@chakra-ui/react";
import { ArrowRight } from "phosphor-react";

export const SpecialTypeFormLink: FC<{
  type: SpecialSponsorshipType;
  size?: "lg" | "md";
}> = ({ type, size = "lg" }) => {
  return (
    <Box mt={size === "lg" ? 16 : 10}>
      <ButtonLink
        size={size}
        href={ROUTES.SpecialSponsorshipsForm(type)}
        rightIcon={<Icon as={ArrowRight} />}
      >
        Izpolni obrazec
      </ButtonLink>
    </Box>
  );
};
