export interface PaginatedModelApiResponse<T> {
  data: T[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: number;
  links: { url: string | null; label: string; active: boolean }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export enum QueryKey {
  HomeMeta = "homeMeta",
  Cat = "cat",
  Cats = "cats",
  PersonData = "personData",
  News = "news",
  RecentSpecialSponsorships = "recentSpecialSponsorships",
  CatSponsors = "catSponsors",
  SponsorshipWallpapers = "sponsorshipWallpapers",
}
