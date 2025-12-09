import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { OnboardingData } from './OnboardingWizard';

interface StepProps {
    data: OnboardingData;
    updateData: (data: Partial<OnboardingData>) => void;
}

export const Step1BusinessDetails: React.FC<StepProps> = ({ data, updateData }) => {
    return (
        <div className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                    type="text"
                    id="businessName"
                    name="businessName"
                    autoComplete="organization"
                    value={data.businessName}
                    onChange={(e) => updateData({ businessName: e.target.value })}
                    placeholder="e.g. Sparky Solutions"
                />
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="address">Business Address</Label>
                <Input
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    value={data.address}
                    onChange={(e) => updateData({ address: e.target.value })}
                    placeholder="e.g. 123 Main St, Sydney NSW 2000"
                />
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={data.phone}
                    onChange={(e) => updateData({ phone: e.target.value })}
                    placeholder="e.g. 0400 000 000"
                />
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="website">Current Website (if any)</Label>
                <Input
                    type="url"
                    id="website"
                    name="website"
                    autoComplete="url"
                    value={data.website}
                    onChange={(e) => updateData({ website: e.target.value })}
                    placeholder="e.g. www.sparkysolutions.com.au"
                />
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="logo">Upload Logo</Label>
                <Input
                    type="file"
                    id="logo"
                    accept="image/*"
                    onChange={(e) => {
                        if (e.target.files?.[0]) {
                            updateData({ logo: e.target.files[0] });
                        }
                    }}
                />
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 text-xs text-muted-foreground bg-muted/30 py-2 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>Your data is encrypted & secure. We never share your details.</span>
            </div>
        </div>
    );
};
