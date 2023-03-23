import { FC } from "react";
import { PhotoGallery } from "./_photo-gallery";
import { Description } from "./_description";
import { DataPieces } from "./_data-pieces";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Section } from "@/common/components/section";
import { Breadcrumbs } from "@/common/components/breadcrumbs";
import { ROUTES } from "@/common/constants";
import { SponsorsList } from "./_sponsors-list";
import { Container } from "@/common/components/container";
import { Cat } from "../../types";

export const CatDetails: FC<{ cat: Cat }> = ({ cat }) => {
  return (
    <>
      <Section spacing={{ top: "sm", bottom: "lg" }}>
        <Container>
          <Breadcrumbs
            items={[
              { text: "Muce, ki iščejo botra", href: ROUTES.CatsList },
              { text: cat.name, isCurrentPage: true },
            ]}
          />

          <Box
            mt={{
              base: 12,
            }}
          >
            <PhotoGallery cat={cat} />
          </Box>

          <Grid
            templateAreas={{
              base: `
                "data"
                "description"
                "sponsors"
              `,
              lg: `
                "description data"
                "description sponsors"
              `,
            }}
            gridTemplateRows={{
              base: "auto",
              lg: "min-content 1fr",
            }}
            gridTemplateColumns={{
              base: "auto",
              lg: "2fr 1fr",
            }}
            mt={{ base: 16, lg: 16 }}
          >
            <GridItem area="description">
              <Description cat={cat} />
            </GridItem>

            <GridItem area="data">
              {!cat.is_group && (
                <Box
                  mb={{
                    base: 16,
                    lg: 4,
                  }}
                >
                  <DataPieces cat={cat} />
                </Box>
              )}
            </GridItem>

            <GridItem
              area="sponsors"
              mt={{
                base: 12,
                lg: 0,
              }}
            >
              <Box
                display={{
                  md: "inline-block",
                  lg: "unset",
                }}
              >
                <SponsorsList cat={cat} />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Section>
    </>
  );
};
