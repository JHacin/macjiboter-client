import { useFormikContext } from "formik";
import { useEffect } from "react";

export const useScrollToError = () => {
  const { errors, isSubmitting } = useFormikContext();

  useEffect(() => {
    if (isSubmitting) {
      return;
    }

    const errorKeys = Object.keys(errors);

    if (errorKeys.length < 1) {
      return;
    }

    const element = document.querySelector(`input[name='${errorKeys[0]}']`);

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);
};
