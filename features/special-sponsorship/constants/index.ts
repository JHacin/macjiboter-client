import {
  SpecialFormValues,
  SpecialSponsorshipGroup,
  SpecialSponsorshipGroupMeta,
  SpecialSponsorshipType,
} from "../types";
import * as yup from "yup";
import { isAgreedToTermsValidation, NUMBER_INPUT_MAX } from "@/forms/constants";
import { ASSET_PATH } from "@/common/constants";

export const SPECIAL_SPONSORSHIPS_META: Record<
  SpecialSponsorshipType,
  { label: string; amount: number; parent: SpecialSponsorshipGroup }
> = {
  [SpecialSponsorshipType.BoterMeseca]: {
    label: "Mesečno botrstvo",
    amount: 10,
    parent: SpecialSponsorshipGroup.BoterMeseca,
  },
  [SpecialSponsorshipType.MucGreBrezSkrbiVNoveDni]: {
    label: "Muc gre brez skrbi v nove dni",
    amount: 25,
    parent: SpecialSponsorshipGroup.BrezSkrbiVNoveDni,
  },
  [SpecialSponsorshipType.MucaGreBrezSkrbiVNoveDni]: {
    label: "Muca gre brez skrbi v nove dni",
    amount: 35,
    parent: SpecialSponsorshipGroup.BrezSkrbiVNoveDni,
  },
  [SpecialSponsorshipType.NovZacetek]: {
    label: "Nov začetek",
    amount: 60,
    parent: SpecialSponsorshipGroup.NovZacetek,
  },
  [SpecialSponsorshipType.FipBojevnikZa1Dan]: {
    label: "FIP bojevnik za en dan",
    amount: 25,
    parent: SpecialSponsorshipGroup.FipBojevniki,
  },
  [SpecialSponsorshipType.FipBojevnikZa2Dni]: {
    label: "FIP bojevnik za dva dni",
    amount: 50,
    parent: SpecialSponsorshipGroup.FipBojevniki,
  },
  [SpecialSponsorshipType.FipBojevnikZa1Teden]: {
    label: "FIP bojevnik za en teden",
    amount: 175,
    parent: SpecialSponsorshipGroup.FipBojevniki,
  },
  [SpecialSponsorshipType.MajhnaZobnaMiska]: {
    label: "Majhna zobna miška",
    amount: 60,
    parent: SpecialSponsorshipGroup.ZobnaMiska,
  },
  [SpecialSponsorshipType.VelikaZobnaMis]: {
    label: "Velika zobna miš",
    amount: 120,
    parent: SpecialSponsorshipGroup.ZobnaMiska,
  },
};

const SpecialGroupMetaFactory = ({
  group,
  name,
  imageName,
  description,
  pageSlug,
}: {
  group: SpecialSponsorshipGroup;
  name: string;
  imageName: string;
  description: string;
  pageSlug: string;
}) => ({
  name,
  imageUrls: {
    sm: ASSET_PATH.PublicImage(`posebna-${imageName}_sm.jpeg`),
    lg: ASSET_PATH.PublicImage(`posebna-${imageName}.jpeg`),
  },
  description,
  pageSlug,
  childTypes: Object.keys(SPECIAL_SPONSORSHIPS_META)
    .map((key) => Number(key))
    .filter((type: SpecialSponsorshipType) => SPECIAL_SPONSORSHIPS_META[type].parent === group),
});

export const SPECIAL_SPONSORSHIP_GROUP_META: Record<
  SpecialSponsorshipGroup,
  SpecialSponsorshipGroupMeta
> = {
  [SpecialSponsorshipGroup.BoterMeseca]: SpecialGroupMetaFactory({
    group: SpecialSponsorshipGroup.BoterMeseca,
    name: "Boter meseca",
    imageName: "boter-meseca",
    description: "Pomagajte preživeti izbrani mesec vsem muckom, ki so v oskrbi Mačje hiše.",
    pageSlug: "boter-meseca",
  }),
  [SpecialSponsorshipGroup.BrezSkrbiVNoveDni]: SpecialGroupMetaFactory({
    group: SpecialSponsorshipGroup.BrezSkrbiVNoveDni,
    name: "Brez skrbi v nove dni",
    imageName: "brez-skrbi",
    description: "Pokrijte stroške sterilizacije/kastracije za enega mucka.",
    pageSlug: "brez-skrbi-v-nove-dni",
  }),
  [SpecialSponsorshipGroup.NovZacetek]: SpecialGroupMetaFactory({
    group: SpecialSponsorshipGroup.NovZacetek,
    name: "Nov začetek",
    imageName: "nov-zacetek",
    description: "Enemu mucku zagotovite popolno veterinarsko oskrbo.",
    pageSlug: "nov-zacetek",
  }),
  [SpecialSponsorshipGroup.FipBojevniki]: SpecialGroupMetaFactory({
    group: SpecialSponsorshipGroup.FipBojevniki,
    name: "FIP bojevniki",
    imageName: "fip",
    description: "Enemu FIP bojevniku omogočite zdravljenje za določeno število dni.",
    pageSlug: "fip-bojevniki",
  }),
  [SpecialSponsorshipGroup.ZobnaMiska]: SpecialGroupMetaFactory({
    group: SpecialSponsorshipGroup.ZobnaMiska,
    name: "Zobna miška",
    imageName: "zobna",
    description: "Enemu mucku pokrijte stroške čiščenja zobnega kamna ali zobnega posega.",
    pageSlug: "zobna-miska",
  }),
};

export const specialFormValidation = {
  paramsStep: {
    is_gift: yup.boolean(),
    amount: yup.lazy((_value, options) => {
      const parent: SpecialFormValues = options.parent;

      return yup
        .number()
        .integer()
        .min(SPECIAL_SPONSORSHIPS_META[parent.type].amount)
        .max(NUMBER_INPUT_MAX)
        .required();
    }),
    type: yup.number(),
    is_anonymous: yup.boolean(),
  },
  summaryStep: {
    ...isAgreedToTermsValidation,
  },
};
