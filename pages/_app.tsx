import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import { useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import dayjs from "dayjs";
import * as yup from "yup";
import "dayjs/locale/sl";
import { ProgressBar } from "@/common/components/progress-bar";
import { locale } from "@/forms/config/yup-locale";
import countries from "i18n-iso-countries";
import localizedCountries from "i18n-iso-countries/langs/sl.json";
import { registerLocale } from "react-datepicker";
import sl from "date-fns/locale/sl";

dayjs.locale("sl");
yup.setLocale(locale);
countries.registerLocale(localizedCountries);
registerLocale("sl", sl);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <ProgressBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
