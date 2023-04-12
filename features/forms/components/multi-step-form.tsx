import { useState, useEffect, useRef, RefObject } from "react";
import {
  Form,
  Formik,
  FormikConfig,
  FormikConsumer,
  FormikHelpers,
  FormikValues,
  useFormikContext,
} from "formik";
import * as yup from "yup";
import { Box, Button, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { useScrollToError } from "../hooks/use-scroll-to-error";
import { FormSubmitStatus } from "../types";
import { ArrowLeft, ArrowRight, PaperPlaneTilt } from "@phosphor-icons/react";
import { HeadingMarker } from "@/common/components/heading-marker";

interface MultiStepFormStep {
  name: string;
  validationSchema: any;
  component: JSX.Element;
  isHidden?: boolean;
}

type FormSubmitHandler<TFormValues extends FormikValues> = FormikConfig<TFormValues>["onSubmit"];

interface MultiStepFormProps<TFormValues extends FormikValues> {
  steps: MultiStepFormStep[];
  initialValues: TFormValues;
  onSubmit: FormSubmitHandler<TFormValues>;
  onValuesChange: (values: TFormValues) => void;
}

export const MultiStepForm = <TFormValues extends FormikValues>({
  steps,
  initialValues,
  onSubmit,
  onValuesChange,
}: MultiStepFormProps<TFormValues>) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [snapshot, setSnapshot] = useState<TFormValues>(initialValues);
  const formRef = useRef<HTMLFormElement>(null);

  const filteredSteps = steps.filter((step) => !step.isHidden);
  const currentStep = filteredSteps[currentStepIndex];
  const totalSteps = filteredSteps.length;
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;

  const scrollToTop = () => {
    if (!formRef.current) {
      return;
    }

    const rect = formRef.current.getBoundingClientRect();
    const offsetFromTop = 40;
    const top = rect.top + window.scrollY - offsetFromTop;

    window.scrollTo({ top, behavior: "smooth" });
  };

  const goToNextStep = (values: TFormValues) => {
    setSnapshot(values);
    setCurrentStepIndex(Math.min(currentStepIndex + 1, totalSteps - 1));
    scrollToTop();
  };

  const goToPreviousStep = (values: TFormValues) => {
    setSnapshot(values);
    setCurrentStepIndex(Math.max(currentStepIndex - 1, 0));
    scrollToTop();
  };

  const handleSubmit = async (values: TFormValues, helpers: FormikHelpers<TFormValues>) => {
    if (isLastStep) {
      helpers.setStatus(FormSubmitStatus.Idle);
      try {
        await onSubmit(values, helpers);
        helpers.setStatus(FormSubmitStatus.Success);
      } catch (err) {
        helpers.setStatus(FormSubmitStatus.Error);
      }
    } else {
      helpers.setTouched({});
      goToNextStep(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={yup.object(currentStep.validationSchema)}
      initialStatus={FormSubmitStatus.Idle}
    >
      <MultiStepFormContent
        steps={filteredSteps}
        currentStep={currentStep}
        currentStepIndex={currentStepIndex}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        goToPreviousStep={goToPreviousStep}
        onValuesChange={onValuesChange}
        formRef={formRef}
      />
    </Formik>
  );
};

const MultiStepFormContent = <TFormValues,>({
  steps,
  currentStep,
  currentStepIndex,
  isFirstStep,
  isLastStep,
  goToPreviousStep,
  onValuesChange,
  formRef,
}: {
  steps: MultiStepFormStep[];
  currentStep: MultiStepFormStep;
  currentStepIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  goToPreviousStep: (values: TFormValues) => void;
  onValuesChange: (values: TFormValues) => void;
  formRef: RefObject<HTMLFormElement>;
}) => {
  const { values, isSubmitting, status } = useFormikContext<TFormValues>();

  useScrollToError();

  useEffect(() => {
    onValuesChange(values);
  }, [onValuesChange, values]);

  return (
    <Form ref={formRef}>
      <Box bg="white" p={{ base: 6, sm: 12 }} shadow="xl" borderColor="gray.100" borderWidth="1px">
        <Text color="gray.500">
          Korak {currentStepIndex + 1}/{steps.length}
        </Text>

        <Text fontSize="3xl" fontWeight="bold" mt={4}>
          {currentStep.name}
        </Text>

        <Box h="6px" w="60px" mt={3}>
          <HeadingMarker color="orange" />
        </Box>

        <Box mt={12}>{currentStep.component}</Box>

        {status !== FormSubmitStatus.Success && (
          <Flex mt={16} gap={2}>
            {!isFirstStep && (
              <IconButton
                aria-label="Nazaj"
                onClick={() => {
                  goToPreviousStep(values);
                }}
                type="button"
                variant="subtle"
                icon={<Icon as={ArrowLeft} weight="bold" />}
              />
            )}
            <Button
              isDisabled={isSubmitting}
              isLoading={isSubmitting}
              type="submit"
              rightIcon={<Icon as={isLastStep ? PaperPlaneTilt : ArrowRight} weight="bold" />}
              marginLeft="auto"
              flexGrow="1"
            >
              {isLastStep ? "Pošlji" : "Naprej"}
            </Button>
          </Flex>
        )}
      </Box>

      {/*<Debug />*/}
    </Form>
  );
};

// noinspection JSUnusedGlobalSymbols
export const Debug = () => (
  <div
    style={{
      margin: "3rem 1rem",
      borderRadius: 4,
      background: "#f6f8fa",
      boxShadow: "0 0 1px  #eee inset",
    }}
  >
    <div
      style={{
        textTransform: "uppercase",
        fontSize: 11,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        fontWeight: 500,
        padding: ".5rem",
        background: "#555",
        color: "#fff",
        letterSpacing: "1px",
      }}
    >
      Formik State
    </div>
    <FormikConsumer>
      {/*// @ts-ignore*/}
      {({ validationSchema, validate, onSubmit, ...rest }) => (
        <pre
          style={{
            fontSize: ".85rem",
            padding: ".25rem .5rem",
            overflowX: "scroll",
          }}
        >
          {JSON.stringify(rest, null, 2)}
        </pre>
      )}
    </FormikConsumer>
  </div>
);
