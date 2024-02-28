import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Box, Button, SlideFade, Text } from "@chakra-ui/react";
import { TextLink } from "./text-link";
import { ROUTES } from "../constants";

const COOKIE_ACTION_KEY = "cookie-consent";
const COOKIE_TRUE_VALUE = "true";
const COOKIE_EXPIRATION_DAYS = 365;

export function CookieConsent() {
  const [shouldGetConsent, setShouldGetConsent] = useState(false);

  const onAcceptAll = () => {
    Cookies.set(COOKIE_ACTION_KEY, COOKIE_TRUE_VALUE, { expires: COOKIE_EXPIRATION_DAYS });
    setShouldGetConsent(false);
  };

  useEffect(() => {
    if (Cookies.get(COOKIE_ACTION_KEY) !== COOKIE_TRUE_VALUE) {
      setShouldGetConsent(true);
    }
  }, []);

  return (
    <SlideFade
      in={shouldGetConsent}
      offsetY="40px"
      style={{ position: "fixed", bottom: "1rem", left: "1rem", zIndex: 30 }}
      transition={{
        enter: { duration: 0.35, delay: 0.5 },
        exit: { duration: 0.25 },
      }}
    >
      <Box
        p={6}
        bg="white"
        rounded="xl"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 25px 50px 0px"
        width="400px"
        maxWidth="calc(100vw - 2rem)"
      >
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            Piškotki
          </Text>
          <Text mt={4} fontSize="sm">
            Piškotke uporabljamo za pravilno delovanje spletne strani in izboljšanje vaše izkušnje.
            Več informacij najdete v{" "}
            <TextLink href={ROUTES.CookiePolicy}>Politiki piškotkov</TextLink>.
          </Text>
        </Box>

        <Button mt={7} onClick={onAcceptAll}>
          Sprejmi piškotke
        </Button>
      </Box>
    </SlideFade>
  );
}
