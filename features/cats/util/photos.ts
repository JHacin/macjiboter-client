import { Cat, CatPhoto, CatPhotoSizeVariant } from "../types";
import { CAT_PLACEHOLDER_IMAGE_URL } from "../constants";

export const getPhotoUrl = (photo: CatPhoto, size: CatPhotoSizeVariant | "lg") => {
  if (size === "lg") {
    return photo.url;
  }

  return photo.sizes[size].url;
};

export const getFirstPhotoOrFallback = (cat: Cat) => {
  return cat.photos.length === 0 ? CAT_PLACEHOLDER_IMAGE_URL : getPhotoUrl(cat.photos[0], "sm");
};
