import { FC } from "react";
import { HeroSection } from "./_hero-section";
import { HighlightedCats } from "./_highlighted-cats";
import { SponsorshipTypes } from "./_sponsorship-types";

export const Home: FC = () => {
  return (
    <>
      <HeroSection />
      <HighlightedCats />
      <SponsorshipTypes />
    </>
  );
};
