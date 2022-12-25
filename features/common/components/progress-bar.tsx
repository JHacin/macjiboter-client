import NextNProgress from "nextjs-progressbar";
import { useTheme } from "@/theme";

export const ProgressBar = () => {
  const { colors } = useTheme();

  return (
    <NextNProgress
      color={colors.orange[500]}
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={false}
      nonce="progress-bar"
      options={{ speed: 300 }}
    />
  );
};
