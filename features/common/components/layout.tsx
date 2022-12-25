import { FC, ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
