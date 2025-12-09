import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { OnboardingData } from './OnboardingWizard';

interface StepProps {
    data: OnboardingData;
    updateData: (data: Partial<OnboardingData>) => void;
}

const SERVICES_LIST = [
    "Professional Website Build",
    "Google Business Profile Optimisation",
    "Social Media Setup (FB & Insta)",
    "AI Executive Assistant Integration",
    "Director Mode Dashboard",
    "Professional Email Setup",
    "Domain Registration and Hosting",
    "Google Ads Manager Setup",
    "Local SEO Audit and Implementation",
    "Review Management System",
    "Online Booking and Scheduling Integration",
    "Basic CRM Setup",
    "Google Analytics and Tracking",
    "Logo and Basic Branding Kit",
    "Initial Content Pack"
];

export const Step2Services: React.FC<StepProps> = ({ data, updateData }) => {
    const handleServiceToggle = (service: string) => {
        const currentServices = data.services || [];
        const newServices = currentServices.includes(service)
            ? currentServices.filter(s => s !== service)
            : [...currentServices, service];
        updateData({ services: newServices });
    };

    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Select Services Required</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES_LIST.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                                id={service}
                                checked={data.services?.includes(service)}
                                onCheckedChange={() => handleServiceToggle(service)}
                            />
                            <Label htmlFor={service} className="text-sm font-normal cursor-pointer">
                                {service}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid w-full items-center gap-1.5 pt-4 border-t">
                <Label htmlFor="serviceArea">Primary Service Area</Label>
                <Input
                    type="text"
                    id="serviceArea"
                    name="serviceArea"
                    autoComplete="address-level2"
                    value={data.serviceArea}
                    onChange={(e) => updateData({ serviceArea: e.target.value })}
                    placeholder="e.g. Sydney Metro, Eastern Suburbs"
                />
                <p className="text-sm text-gray-500">This helps us optimize your SEO and Ads targeting.</p>
            </div>
        </div>
    );
};
