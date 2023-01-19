import { SpecialSponsorshipType } from "../types";
import { FC } from "react";
import { ButtonLink } from "@/common/components/button-link";
import { ROUTES } from "@/common/constants";
import { Box, Icon } from "@chakra-ui/react";
import { ArrowRight } from "phosphor-react";

export const SpecialTypeFormLink: FC<{ type: SpecialSponsorshipType }> = ({ type }) => {
  return (
    <Box mt={12}>
      <ButtonLink
        size="lg"
        href={ROUTES.SpecialSponsorshipsForm(type)}
        rightIcon={<Icon as={ArrowRight} />}
      >
        Izpolni obrazec
      </ButtonLink>
    </Box>
  );
};
