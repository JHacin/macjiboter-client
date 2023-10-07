import { FC } from "react";
import { Box, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { humanReadableDateDifference } from "@/common/util/date-difference-format";
import dayjs from "dayjs";
import { dateFormat } from "@/common/util/date";
import { Cake, Calendar, GenderIntersex, IconProps } from "@phosphor-icons/react";
import { CAT_GENDER_LABELS } from "../../constants";
import { Cat } from "../../types";

interface CatDetailsDataProps {
  cat: Cat;
}

interface DataPiece {
  label: string;
  value: string | null;
  icon: FC<IconProps>;
}

export const DataPieces: FC<CatDetailsDataProps> = ({
  cat: { date_of_arrival_mh, date_of_birth, gender },
}) => {
  const dataPieces: DataPiece[] = [
    { label: "Spol", value: gender ? CAT_GENDER_LABELS[gender] : null, icon: GenderIntersex },
    {
      label: "Starost",
      value: date_of_birth ? humanReadableDateDifference(dayjs(date_of_birth), dayjs()) : null,
      icon: Cake,
    },
    {
      label: "Prihod v Mačjo hišo",
      value: date_of_arrival_mh ? dateFormat(date_of_arrival_mh, "monthAndYear") : null,
      icon: Calendar,
    },
  ].filter((dataPiece) => !!dataPiece.value);

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 1 }} spacing={4}>
      {dataPieces.map((dataPiece) => (
        <HStack spacing={3} key={dataPiece.label} bg="copper.200" py={4} px={5} shadow="sm">
          <Icon as={dataPiece.icon} w={8} h={8} />
          <Box>
            <Text fontWeight="bold">{dataPiece.label}</Text>
            <Text>{dataPiece.value}</Text>
          </Box>
        </HStack>
      ))}
    </SimpleGrid>
  );
};
