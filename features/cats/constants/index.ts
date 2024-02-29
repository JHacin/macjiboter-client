import { CatGender } from "../types";
import { ASSET_PATH } from "@/common/constants";

export const CAT_GENDER_LABELS = {
  [CatGender.Male]: "samček",
  [CatGender.Female]: "samička",
};

export const CAT_PLACEHOLDER_IMAGE_URL = ASSET_PATH.PublicImage("placeholder.png");
