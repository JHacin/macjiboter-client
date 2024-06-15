import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getSponsorshipWallpapers } from "@/common/util/api";
import { apiDownload } from "@/api/util";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { Container } from "@/common/components/container";
import { useTheme } from "@/theme";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { FilledPageTitle } from "@/common/components/page-title";
import { Section } from "@/common/components/section";
import { dateFormat } from "@/common/util/date";
import { SponsorshipWallpaper } from "@/common/types";
import { useState } from "react";

export default function WallpapersPage() {
  const { breakpoints } = useTheme();
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: [QueryKey.SponsorshipWallpapers],
    queryFn: getSponsorshipWallpapers,
  });

  return (
    <Layout>
      <MetaTags title="Ozadja za namizje" description="Mesečna ozadja za redne botre." />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <FilledPageTitle>ozadja za namizje</FilledPageTitle>
          </Section>
          <Section spacing={{ top: "sm" }}>
            <Box maxWidth={breakpoints.md}>
              <Text>
                Dokumente z ozadji v različnih ločljivostih lahko prenesete s klikom na povezavo{" "}
                <strong>&quot;Prenesi&quot;</strong>.
              </Text>

              <Box mt={10}>
                {isLoading && (
                  <VStack spacing={2} alignItems="stretch">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Skeleton height="50px" key={i} />
                    ))}
                  </VStack>
                )}
                {isError && (
                  <Alert status="error" maxWidth="650px">
                    <AlertIcon />
                    <AlertTitle>Prišlo je do napake pri nalaganju ozadij.</AlertTitle>
                    <AlertDescription>Prosimo, poskusite znova.</AlertDescription>
                  </Alert>
                )}

                {isSuccess && (
                  <TableContainer>
                    <Table variant="simple" size={{ base: "sm", md: "md" }}>
                      <Thead>
                        <Tr>
                          <Th width="50%">Mesec</Th>
                          <Th>Datoteka</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.data.map((wallpaper) => (
                          <Tr key={wallpaper.id}>
                            <Td>{dateFormat(wallpaper.month_and_year, "monthAndYear")}</Td>
                            <Td>
                              <DownloadWallpaperButton wallpaper={wallpaper} />
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                )}
              </Box>
            </Box>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
}

function downloadFile(blob: Blob, filename: string) {
  // create file link in browser's memory
  const href = URL.createObjectURL(blob);

  // create "a" HTML element with href to file & click
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = href;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();

  // clean up "a" element & remove ObjectURL
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }, 200);
}

function DownloadWallpaperButton({ wallpaper }: { wallpaper: SponsorshipWallpaper }) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function download() {
    setStatus("loading");

    try {
      const res = await apiDownload(`sponsorship-wallpapers/download/${wallpaper.id}`);
      const filename = res.headers["content-disposition"]?.split("filename=")?.[1];

      downloadFile(res.data, filename ?? `ozadje-${wallpaper.id}.zip`);
      setStatus("idle");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <Button size="sm" onClick={download} isLoading={status === "loading"} loadingText="Prenašam">
      {status === "idle" && "Prenesi"}
      {status === "error" && "Prišlo je do napake."}
    </Button>
  );
}
