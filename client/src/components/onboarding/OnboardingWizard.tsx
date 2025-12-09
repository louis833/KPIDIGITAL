import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Step1BusinessDetails } from './Step1BusinessDetails';
import { Step2Services } from './Step2Services';
import { Step3Branding } from './Step3Branding';
import { Step4Availability } from './Step4Availability';
import { Step5Review } from './Step5Review';
import { useToast } from '@/hooks/use-toast';

export type OnboardingData = {
  businessName: string;
  address: string;
  phone: string;
  website: string;
  logo?: File;
  services: string[];
  serviceArea: string;
  primaryColor: string;
  fontPreference: string;
  toneOfVoice: string;
  workingHours: string;
};

const initialData: OnboardingData = {
  businessName: '',
  address: '',
  phone: '',
  website: '',
  services: [],
  serviceArea: '',
  primaryColor: '#000000',
  fontPreference: 'Inter',
  toneOfVoice: 'Professional',
  workingHours: 'Mon-Fri 9am-5pm',
};

export const WizardStep = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </motion.div>
);

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>(initialData);
  const { toast } = useToast();

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const updateData = (newData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    // TODO: Submit data to backend
    console.log('Submitting data:', data);
    toast({
      title: "Setup Complete!",
      description: "We've received your details and are starting the automation process.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>KPI Digital Onboarding</CardTitle>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <WizardStep key="step1" title="Business Details">
                <Step1BusinessDetails data={data} updateData={updateData} />
              </WizardStep>
            )}
            {step === 2 && (
              <WizardStep key="step2" title="Services & Area">
                <Step2Services data={data} updateData={updateData} />
              </WizardStep>
            )}
            {step === 3 && (
              <WizardStep key="step3" title="Branding & Design">
                <Step3Branding data={data} updateData={updateData} />
              </WizardStep>
            )}
            {step === 4 && (
              <WizardStep key="step4" title="Availability & Access">
                <Step4Availability data={data} updateData={updateData} />
              </WizardStep>
            )}
            {step === 5 && (
              <WizardStep key="step5" title="Review & Launch">
                <Step5Review data={data} onSubmit={handleSubmit} />
              </WizardStep>
            )}
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={step === 1}>
            Back
          </Button>
          {step < totalSteps ? (
            <Button onClick={nextStep}>Next</Button>
          ) : (
            <Button onClick={handleSubmit}>Launch Setup</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
