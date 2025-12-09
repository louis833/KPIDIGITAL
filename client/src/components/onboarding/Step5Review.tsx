import React from 'react';
import { OnboardingData } from './OnboardingWizard';
import { Card, CardContent } from '@/components/ui/card';

interface StepProps {
    data: OnboardingData;
    onSubmit: () => void;
}

export const Step5Review: React.FC<StepProps> = ({ data }) => {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Review Your Details</h3>
                <p className="text-sm text-gray-500">
                    Please review the information below. Once you click "Launch Setup", our automated systems will begin building your digital presence.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardContent className="pt-6">
                            <h4 className="font-semibold mb-2">Business Profile</h4>
                            <dl className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">Name:</dt>
                                    <dd className="font-medium">{data.businessName}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">Phone:</dt>
                                    <dd className="font-medium">{data.phone}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">Address:</dt>
                                    <dd className="font-medium">{data.address}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">Website:</dt>
                                    <dd className="font-medium">{data.website || 'None'}</dd>
                                </div>
                            </dl>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6">
                            <h4 className="font-semibold mb-2">Branding & Design</h4>
                            <dl className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">Primary Color:</dt>
                                    <dd className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: data.primaryColor }} />
                                        {data.primaryColor}
                                    </dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">Font:</dt>
                                    <dd className="font-medium">{data.fontPreference}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">AI Tone:</dt>
                                    <dd className="font-medium">{data.toneOfVoice}</dd>
                                </div>
                            </dl>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Selected Services</h4>
                        <div className="flex flex-wrap gap-2">
                            {data.services?.length > 0 ? (
                                data.services.map((service) => (
                                    <span key={service} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                                        {service}
                                    </span>
                                ))
                            ) : (
                                <span className="text-gray-500 text-sm">No services selected</span>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Service Area & Availability</h4>
                        <dl className="space-y-1 text-sm">
                            <div className="flex justify-between">
                                <dt className="text-gray-500">Area:</dt>
                                <dd className="font-medium">{data.serviceArea}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-500">Hours:</dt>
                                <dd className="font-medium">{data.workingHours}</dd>
                            </div>
                        </dl>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
