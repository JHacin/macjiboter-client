import { FC, ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Box } from "@chakra-ui/react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};
