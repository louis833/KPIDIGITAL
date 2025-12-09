import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OnboardingData } from './OnboardingWizard';

interface StepProps {
    data: OnboardingData;
    updateData: (data: Partial<OnboardingData>) => void;
}

export const Step3Branding: React.FC<StepProps> = ({ data, updateData }) => {
    return (
        <div className="space-y-6">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="primaryColor">Primary Brand Color</Label>
                <div className="flex gap-4 items-center">
                    <Input
                        type="color"
                        id="primaryColor"
                        value={data.primaryColor}
                        onChange={(e) => updateData({ primaryColor: e.target.value })}
                        className="w-20 h-10 p-1 cursor-pointer"
                    />
                    <Input
                        type="text"
                        value={data.primaryColor}
                        onChange={(e) => updateData({ primaryColor: e.target.value })}
                        className="w-32"
                        placeholder="#000000"
                    />
                </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="fontPreference">Font Preference</Label>
                <Select
                    value={data.fontPreference}
                    onValueChange={(value) => updateData({ fontPreference: value })}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a font style" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Inter">Modern Sans-Serif (Inter)</SelectItem>
                        <SelectItem value="Roboto">Clean & Geometric (Roboto)</SelectItem>
                        <SelectItem value="Playfair Display">Classic Serif (Playfair Display)</SelectItem>
                        <SelectItem value="Open Sans">Friendly & Open (Open Sans)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="toneOfVoice">AI Assistant Tone of Voice</Label>
                <Select
                    value={data.toneOfVoice}
                    onValueChange={(value) => updateData({ toneOfVoice: value })}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a tone" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Professional">Professional & Formal</SelectItem>
                        <SelectItem value="Friendly">Friendly & Casual</SelectItem>
                        <SelectItem value="Direct">Direct & Efficient</SelectItem>
                        <SelectItem value="Enthusiastic">Enthusiastic & Energetic</SelectItem>
                    </SelectContent>
                </Select>
                <p className="text-sm text-gray-500">This sets the personality for your AI Executive Assistant.</p>
            </div>
        </div>
    );
};
