import { CatPhoto, CatPhotoSizeVariant } from "../types";

export const getPhotoUrl = (photo: CatPhoto, size: CatPhotoSizeVariant | "lg") => {
  if (size === "lg") {
    return photo.url;
  }

  return photo.sizes[size].url;
};
