'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface WizardStep {
  key: string;
  render: ({ navigateToStep }: { navigateToStep: (step: string) => void }) => React.ReactNode;
}

interface WizardComponentProps {
  steps: Record<string, WizardStep>;
  initialStep: string;
  animationRef?: React.MutableRefObject<HTMLDivElement | null>;
  className?: string;
}

export const WizardComponent: React.FC<WizardComponentProps> = ({ steps, initialStep, animationRef, className }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const currentView = steps[currentStep];
  const handleNavigateToStep = useCallback((step: keyof typeof steps) => {
    setCurrentStep(step);
  }, [])
  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep])
  return (
    <div ref={animationRef} className={cn(className)}>
      {currentView?.render({ navigateToStep: handleNavigateToStep })}
    </div>
  );
};

export default WizardComponent;
