import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { OnboardingData } from './OnboardingWizard';

interface StepProps {
    data: OnboardingData;
    updateData: (data: Partial<OnboardingData>) => void;
}

export const Step4Availability: React.FC<StepProps> = ({ data, updateData }) => {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Availability & Scheduling</h3>
                <p className="text-sm text-gray-500">
                    Set your standard working hours. This will be used to configure your Online Booking system and instruct your AI Assistant on when to schedule appointments.
                </p>

                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="workingHours">Standard Working Hours</Label>
                    <Input
                        type="text"
                        id="workingHours"
                        value={data.workingHours}
                        onChange={(e) => updateData({ workingHours: e.target.value })}
                        placeholder="e.g. Mon-Fri 9am-5pm"
                    />
                </div>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                    <h4 className="font-medium text-blue-900 mb-2">Integration Note</h4>
                    <p className="text-sm text-blue-800">
                        After this initial setup, you will be able to connect your Google Calendar or Outlook Calendar for real-time availability checking.
                    </p>
                </div>
            </div>
        </div>
    );
};
