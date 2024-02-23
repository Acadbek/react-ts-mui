import { useState } from 'react';

interface StepTypes {
  next: () => void;
  prev: () => void;
  currentStep?: number;
  isLastStep?: boolean;
  isFirstStep?: boolean;
  goToStep?: (stepNumber: number) => void;
}

const useSteps = (totalSteps: number): StepTypes => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const next = (): void => {
    setCurrentStep((prevStep: number) => Math.min(prevStep + 1, totalSteps));
  };

  const prev = (): void => {
    setCurrentStep((prevStep: number) => Math.max(prevStep - 1, 1));
  };

  const goToStep = (stepNumber: number): void => {
    setCurrentStep(Math.max(1, Math.min(stepNumber, totalSteps)));
  };

  const isFirstStep: boolean = currentStep === 1;
  const isLastStep: boolean = currentStep === totalSteps;

  return {
    next,
    prev,
    goToStep,
    isLastStep,
    currentStep,
    isFirstStep,
  };
};

export default useSteps;
