import { SpecialSponsorshipType } from "../types";
import { FC } from "react";
import { ButtonLink } from "@/common/components/button-link";
import { ROUTES } from "@/common/constants";
import { Box } from "@chakra-ui/react";

export const SpecialTypeFormLink: FC<{
  type: SpecialSponsorshipType;
  size?: "lg" | "md";
  color?: "orange" | "purple" | "blue";
}> = ({ type, size = "lg", color = "orange" }) => {
  return (
    <Box mt={size === "lg" ? 16 : 10}>
      <ButtonLink size={size} href={ROUTES.SpecialSponsorshipsForm(type)} colorScheme={color}>
        Izpolni obrazec
      </ButtonLink>
    </Box>
  );
};
