export enum CatGender {
  Male = 1,
  Female = 2,
}

export enum CatStatus {
  // noinspection JSUnusedGlobalSymbols
  SeekingSponsors = 1,
  TempNotSeekingSponsors = 2,
  NotSeekingSponsors = 3,
  Adopted = 4,
  RIP = 5,
}

export interface Cat {
  id: number;
  name: string;
  gender: CatGender | null;
  status: CatStatus;
  story: string | null;
  date_of_arrival_mh: string | null;
  date_of_birth: string | null;
  is_group: boolean;
  created_at: string | null;
  updated_at: string | null;
  slug: string;
  photos: CatPhoto[];
  sponsorships_count: number;
}

export type CatPhotoSizeVariant = "md" | "sm";

interface CatPhotoSize<TSize extends string = string> {
  filename: string;
  name: TSize;
  url: string;
  width: number;
}

export interface CatPhoto {
  id: number;
  filename: string;
  caption: string | null;
  index: number;
  cat_id: number;
  created_at: string;
  updated_at: string;
  url: string;
  sizes: {
    [Size in CatPhotoSizeVariant]: CatPhotoSize<Size>;
  };
}
