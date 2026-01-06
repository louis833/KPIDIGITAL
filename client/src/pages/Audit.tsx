import { Helmet } from "react-helmet";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic, MicOff, CheckCircle2, AlertCircle, Loader2, ArrowRight, ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Step 1: Contact Details
  name: string;
  email: string;
  position: string;
  operatingHours: string;

  // Step 2: Business Profile
  abn: string;
  abnYear: string;
  businessType: string;
  basedInTasmania: string;
  employeeCount: string;

  // Step 3: Annual Revenue
  annualRevenue: string;
  canProvideCoContribution: string;

  // Step 4: Manufacturing Check (Conditional)
  doYouManufacture: string;
  manufacturingRevenue: string; // Only if manufactures

  // Step 5: Property & Energy
  buildingOwnership: string;
  leaseTermRemaining: string;
  annualElectricityBill: string;
  electricityUsageMWh: string;
  propertyComments: string;

  // Step 6: Technology Interest
  solarInterest: string;
  batteryInterest: string;
  batterySystemSize: string;
  solarSystemSize: string;
  iotInterest: string;
  technologyComments: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  position: "",
  operatingHours: "",
  abn: "",
  abnYear: "",
  businessType: "",
  basedInTasmania: "",
  employeeCount: "",
  annualRevenue: "",
  canProvideCoContribution: "",
  doYouManufacture: "",
  manufacturingRevenue: "",
  buildingOwnership: "",
  leaseTermRemaining: "",
  annualElectricityBill: "",
  electricityUsageMWh: "",
  propertyComments: "",
  solarInterest: "",
  batteryInterest: "",
  batterySystemSize: "",
  solarSystemSize: "",
  iotInterest: "",
  technologyComments: "",
};

export default function Audit() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingField, setRecordingField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eligibleGrants, setEligibleGrants] = useState<any[]>([]);
  const [estimatedSavings, setEstimatedSavings] = useState({ min: 0, max: 0 });
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();

  const totalSteps = formData.doYouManufacture === "yes" ? 7 : 6;

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-AU';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join(' ');

        if (recordingField) {
          setFormData(prev => ({ ...prev, [recordingField]: transcript }));
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
        setRecordingField(null);
        toast({
          title: "Audio transcription failed",
          description: "Please type your response or try again.",
          variant: "destructive",
        });
      };
    }
  }, [recordingField]);

  const startRecording = (fieldName: string) => {
    if (recognitionRef.current) {
      setIsRecording(true);
      setRecordingField(fieldName);
      recognitionRef.current.start();
      toast({
        title: "Recording started",
        description: "Speak clearly into your microphone",
      });
    } else {
      toast({
        title: "Audio not supported",
        description: "Your browser doesn't support audio transcription.",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      setRecordingField(null);
      toast({
        title: "Recording stopped",
        description: "Transcript saved successfully",
      });
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep === 4 && formData.doYouManufacture === "no") {
      setCurrentStep(5); // Skip manufacturing revenue step
    } else {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    if (currentStep === 5 && formData.doYouManufacture === "no") {
      setCurrentStep(4);
    } else {
      setCurrentStep(prev => Math.max(prev - 1, 1));
    }
  };

  const calculateEligibility = () => {
    const grants = [];
    const fteCount = parseInt(formData.employeeCount);
    const revenue = parseFloat(formData.annualRevenue.replace(/[^0-9.]/g, ''));
    const manufacturingRevenue = formData.manufacturingRevenue ? parseFloat(formData.manufacturingRevenue.replace(/[^0-9.]/g, '')) : 0;
    const electricityMWh = parseFloat(formData.electricityUsageMWh);
    const batterySize = formData.batterySystemSize ? parseFloat(formData.batterySystemSize) : 0;
    const solarSize = formData.solarSystemSize ? parseFloat(formData.solarSystemSize) : 0;

    // 1. PowerSmart for Small Business
    if (formData.basedInTasmania === "yes" && fteCount >= 1 && fteCount <= 19) {
      grants.push({
        name: "PowerSmart for Small Business",
        amount: "$1,000",
        description: "Grant to reimburse the cost of an energy efficiency audit.",
        nextSteps: "Book an independent energy efficiency audit following program guidelines."
      });
    }

    // 2. Enabling Business Grant
    if (fteCount <= 19 && revenue >= 50000 && revenue <= 10000000 && formData.canProvideCoContribution === "yes") {
      grants.push({
        name: "Enabling Business Grant Program",
        amount: "$2,500 - $10,000",
        description: "Grants for capital purchases (technology and hardware) with minimum 30% co-contribution.",
        nextSteps: "Prepare technology purchase plan and budget breakdown."
      });
    }

    // 3. Advanced Manufacturing Productivity Grant
    if (
      formData.doYouManufacture === "yes" &&
      formData.basedInTasmania === "yes" &&
      manufacturingRevenue >= 500000 &&
      manufacturingRevenue <= 55000000
    ) {
      grants.push({
        name: "Advanced Manufacturing Productivity Grant",
        amount: "$1,500 - $20,000",
        description: "50/50 matched funding for expert advice or high-tech inputs to increase productivity.",
        nextSteps: "Document how the project will demonstrate increased productivity or operational efficiency."
      });
    }

    // 4. BEES
    if (electricityMWh > 150) {
      grants.push({
        name: "Business Energy Efficiency Scheme (BEES)",
        amount: "Interest-free loans up to $60,000",
        description: "Subsidized loans for energy upgrades. 100% interest covered for loans up to $10K.",
        deadline: "April 16, 2026",
        urgent: true,
        nextSteps: "Contact a licensed finance provider (AFSL) to discuss loan options."
      });
    }

    // 5. Federal Battery Rebate
    if (batterySize >= 5 && batterySize <= 100) {
      const rebatePerKWh = 300; // Approx $300/kWh for Jan-April 2026
      // Rebate capped at 50kWh capacity, but eligibility for systems up to 100kWh
      const cappedSizeForRebate = Math.min(batterySize, 50);
      const estimatedRebate = Math.round(cappedSizeForRebate * rebatePerKWh);

      grants.push({
        name: "Federal Battery Rebate (Cheaper Home Batteries Program)",
        amount: `~$${estimatedRebate.toLocaleString()} (Rebate on up to 50kWh)`,
        description: "Upfront discount for batteries 5-100kWh. Max rebate caps at 50kWh.",
        deadline: "Best value Jan-April 2026. Drops May 1, 2026.",
        urgent: true,
        nextSteps: "Install by CEC accredited installer before May 1, 2026 for maximum rebate."
      });
    }

    // 6. Solar PV Rebate
    if (solarSize > 0 && solarSize <= 100) {
      // Estimate ~$380 per kW for STCs roughly
      const estimatedSolarRebate = Math.round(solarSize * 380);
      grants.push({
        name: "Solar PV Rebate (STCs)",
        amount: `~$${estimatedSolarRebate.toLocaleString()}`,
        description: "Upfront discount (STCs) on solar systems up to 100kW.",
        nextSteps: "Get quotes from CEC accredited installers to claim STCs."
      });
    }

    return grants;
  };

  const calculateSavings = () => {
    const annualBill = parseFloat(formData.annualElectricityBill.replace(/[^0-9.]/g, ''));
    if (annualBill > 0) {
      return {
        min: Math.round(annualBill * 0.15),
        max: Math.round(annualBill * 0.25),
      };
    }
    return { min: 0, max: 0 };
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const eligible = calculateEligibility();
    const savings = calculateSavings();
    setEligibleGrants(eligible);
    setEstimatedSavings(savings);

    try {
      const response = await fetch('/api/send-audit-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formData,
          eligibleGrants: eligible,
          estimatedSavings: savings,
        }),
      });

      if (response.ok) {
        setCurrentStep(totalSteps);
        toast({
          title: "Success!",
          description: "Your eligibility report has been sent.",
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Submission error",
        description: "Please try again or contact louis@kpidigital.com.au",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepContainer title="Let's Get Started" subtitle="Your contact details">
            <div className="space-y-6">
              <InputField
                label="Full Name"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="John Smith"
              />
              <InputField
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="john@example.com"
              />
              <InputField
                label="Position/Role"
                value={formData.position}
                onChange={(e) => updateField("position", e.target.value)}
                placeholder="Owner, Director, Manager, etc."
              />
              <InputField
                label="Operating Hours"
                value={formData.operatingHours}
                onChange={(e) => updateField("operatingHours", e.target.value)}
                placeholder="Mon-Fri 8am-5pm"
              />
            </div>
          </StepContainer>
        );

      case 2:
        return (
          <StepContainer title="Business Profile" subtitle="Tell us about your business">
            <div className="space-y-6">
              <InputField
                label="Australian Business Number (ABN)"
                value={formData.abn}
                onChange={(e) => updateField("abn", e.target.value)}
                placeholder="12 345 678 901"
              />
              <InputField
                label="Year ABN Established"
                type="number"
                value={formData.abnYear}
                onChange={(e) => updateField("abnYear", e.target.value)}
                placeholder="2020"
              />
              <SelectField
                label="Business Type"
                value={formData.businessType}
                onChange={(value) => updateField("businessType", value)}
                options={[
                  { value: "sole-trader", label: "Sole Trader" },
                  { value: "partnership", label: "Partnership" },
                  { value: "company", label: "Company" },
                  { value: "trust", label: "Trust" },
                ]}
              />
              <SelectField
                label="Based primarily in Tasmania?"
                value={formData.basedInTasmania}
                onChange={(value) => updateField("basedInTasmania", value)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />
              <SelectField
                label="Number of Full-Time Equivalent (FTE) Employees"
                value={formData.employeeCount}
                onChange={(value) => updateField("employeeCount", value)}
                options={[
                  { value: "1-5", label: "1-5" },
                  { value: "6-10", label: "6-10" },
                  { value: "11-19", label: "11-19" },
                  { value: "20+", label: "20+" },
                ]}
              />
            </div>
          </StepContainer>
        );

      case 3:
        return (
          <StepContainer title="Financial Overview" subtitle="Annual revenue and co-contribution capability">
            <div className="space-y-6">
              <SelectField
                label="Annual Sales Turnover"
                value={formData.annualRevenue}
                onChange={(value) => updateField("annualRevenue", value)}
                options={[
                  { value: "<50000", label: "Under $50,000" },
                  { value: "50000-500000", label: "$50,000 - $500,000" },
                  { value: "500000-1000000", label: "$500,000 - $1,000,000" },
                  { value: "1000000-10000000", label: "$1,000,000 - $10,000,000" },
                  { value: "10000000+", label: "Over $10,000,000" },
                ]}
              />
              <SelectField
                label="Can you provide a minimum 30% cash co-contribution toward technology purchases?"
                value={formData.canProvideCoContribution}
                onChange={(value) => updateField("canProvideCoContribution", value)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "unsure", label: "Unsure" },
                ]}
              />
            </div>
          </StepContainer>
        );

      case 4:
        return (
          <StepContainer title="Manufacturing" subtitle="Do you manufacture products?">
            <div className="space-y-6">
              <SelectField
                label="Do you manufacture products or operate as a high-tech business supporting manufacturing?"
                value={formData.doYouManufacture}
                onChange={(value) => updateField("doYouManufacture", value)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />
              {formData.doYouManufacture === "yes" && (
                <SelectField
                  label="Annual Manufacturing Revenue"
                  value={formData.manufacturingRevenue}
                  onChange={(value) => updateField("manufacturingRevenue", value)}
                  options={[
                    { value: "<500000", label: "Under $500,000" },
                    { value: "500000-1000000", label: "$500,000 - $1,000,000" },
                    { value: "1000000-5000000", label: "$1,000,000 - $5,000,000" },
                    { value: "5000000-55000000", label: "$5,000,000 - $55,000,000" },
                    { value: "55000000+", label: "Over $55,000,000" },
                  ]}
                />
              )}
            </div>
          </StepContainer>
        );

      case 5:
        return (
          <StepContainer title="Property & Energy" subtitle="Building ownership and energy usage">
            <div className="space-y-6">
              <SelectField
                label="Building Ownership Status"
                value={formData.buildingOwnership}
                onChange={(value) => updateField("buildingOwnership", value)}
                options={[
                  { value: "own", label: "Own the building" },
                  { value: "lease", label: "Lease/Rent" },
                ]}
              />
              {formData.buildingOwnership === "lease" && (
                <SelectField
                  label="Remaining Lease Term"
                  value={formData.leaseTermRemaining}
                  onChange={(value) => updateField("leaseTermRemaining", value)}
                  options={[
                    { value: "<1yr", label: "Less than 1 year" },
                    { value: "1-3yrs", label: "1-3 years" },
                    { value: "3-5yrs", label: "3-5 years" },
                    { value: "5+yrs", label: "5+ years" },
                  ]}
                />
              )}
              <InputField
                label="Approximate Annual Electricity Bill (AUD)"
                type="number"
                value={formData.annualElectricityBill}
                onChange={(e) => updateField("annualElectricityBill", e.target.value)}
                placeholder="25000"
              />
              <InputField
                label="Approximate Annual Electricity Usage (MWh)"
                type="number"
                value={formData.electricityUsageMWh}
                onChange={(e) => updateField("electricityUsageMWh", e.target.value)}
                placeholder="200"
              />
              <TextareaField
                label="Additional Comments (Property/Energy)"
                value={formData.propertyComments}
                onChange={(e) => updateField("propertyComments", e.target.value)}
                placeholder="Any additional details about your property or energy situation..."
                onStartRecording={() => startRecording("propertyComments")}
                onStopRecording={stopRecording}
                isRecording={isRecording && recordingField === "propertyComments"}
              />
            </div>
          </StepContainer>
        );

      case 6:
        return (
          <StepContainer title="Technology & Sustainability" subtitle="Solar, battery, and automation interest">
            <div className="space-y-6">
              <SelectField
                label="Interested in Solar PV Systems?"
                value={formData.solarInterest}
                onChange={(value) => updateField("solarInterest", value)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "maybe", label: "Maybe / Want to learn more" },
                ]}
              />
              {formData.solarInterest === "yes" && (
                <InputField
                  label="Desired Solar System Size (kW)"
                  type="number"
                  value={formData.solarSystemSize}
                  onChange={(e) => updateField("solarSystemSize", e.target.value)}
                  placeholder="10"
                />
              )}
              <SelectField
                label="Interested in Battery Storage?"
                value={formData.batteryInterest}
                onChange={(value) => updateField("batteryInterest", value)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "maybe", label: "Maybe / Want to learn more" },
                ]}
              />
              {formData.batteryInterest === "yes" && (
                <InputField
                  label="Desired Battery System Size (kWh)"
                  type="number"
                  value={formData.batterySystemSize}
                  onChange={(e) => updateField("batterySystemSize", e.target.value)}
                  placeholder="20"
                />
              )}
              <SelectField
                label="Interested in IoT Sensors / Automation / Smart Controls?"
                value={formData.iotInterest}
                onChange={(value) => updateField("iotInterest", value)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "maybe", label: "Maybe / Want to learn more" },
                ]}
              />
              <TextareaField
                label="Additional Comments (Technology)"
                value={formData.technologyComments}
                onChange={(e) => updateField("technologyComments", e.target.value)}
                placeholder="Any specific technology needs or questions..."
                onStartRecording={() => startRecording("technologyComments")}
                onStopRecording={stopRecording}
                isRecording={isRecording && recordingField === "technologyComments"}
              />
            </div>
          </StepContainer>
        );

      case 7:
        return <ResultsStep grants={eligibleGrants} savings={estimatedSavings} formData={formData} />;

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Grant Eligibility Audit | Free Energy Efficiency Assessment | KPI Digital</title>
        <meta
          name="description"
          content="Discover which Tasmanian and Federal energy grants you're eligible for. Free audit questionnaire for businesses looking to reduce energy costs and access up to $20,000 in grants."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation onCTAClick={() => { }} />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Grant Eligibility Audit
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover which grants you qualify for — up to $20,000+ in funding available
              </p>
            </motion.div>

            {/* Progress Bar */}
            {currentStep < totalSteps && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {currentStep} of {totalSteps - 1}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {Math.round(((currentStep) / (totalSteps - 1)) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep) / (totalSteps - 1)) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            {/* Form Steps */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {currentStep < totalSteps && (
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                {currentStep < totalSteps - 1 ? (
                  <Button onClick={nextStep} className="px-6">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={isSubmitting} className="px-6">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Calculating...
                      </>
                    ) : (
                      <>
                        View Results
                        <CheckCircle2 className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            )}
          </div>
        </main>

        <Footer onCTAClick={() => { }} />
      </div>
    </>
  );
}

// Helper Components
interface StepContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function StepContainer({ title, subtitle, children }: StepContainerProps) {
  return (
    <Card className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      {children}
    </Card>
  );
}

interface InputFieldProps {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

function InputField({ label, required, type = "text", value, onChange, placeholder }: InputFieldProps) {
  return (
    <div>
      <Label className="text-base font-medium mb-2 block">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="text-base"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

function SelectField({ label, required, value, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <Label className="text-base font-medium mb-2 block">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="text-base">
          <SelectValue placeholder="Select an option..." />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  onStartRecording: () => void;
  onStopRecording: () => void;
  isRecording: boolean;
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  onStartRecording,
  onStopRecording,
  isRecording,
}: TextareaFieldProps) {
  const hasAudioSupport = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <Label className="text-base font-medium">{label}</Label>
        {hasAudioSupport && (
          <Button
            type="button"
            variant={isRecording ? "destructive" : "outline"}
            size="sm"
            onClick={isRecording ? onStopRecording : onStartRecording}
            className="flex items-center gap-2"
          >
            {isRecording ? (
              <>
                <MicOff className="h-4 w-4" />
                Stop Recording
              </>
            ) : (
              <>
                <Mic className="h-4 w-4" />
                Voice Input
              </>
            )}
          </Button>
        )}
      </div>
      <Textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="text-base"
      />
      {isRecording && (
        <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
          </span>
          Recording... speak clearly into your microphone
        </p>
      )}
    </div>
  );
}

interface ResultsStepProps {
  grants: any[];
  savings: { min: number; max: number };
  formData: FormData;
}

function ResultsStep({ grants, savings, formData }: ResultsStepProps) {
  return (
    <div className="space-y-8">
      <Card className="p-8 border-2 border-primary bg-primary/5">
        <div className="text-center mb-6">
          <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Eligibility Results</h2>
          <p className="text-lg text-muted-foreground">
            Based on your responses, you're eligible for {grants.length} grant{grants.length !== 1 ? 's' : ''}!
          </p>
        </div>

        {savings.max > 0 && (
          <div className="bg-background rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-2">Estimated Energy Audit Benefit</h3>
            <p className="text-3xl font-bold text-primary mb-2">
              ${savings.min.toLocaleString()} - ${savings.max.toLocaleString()}
            </p>
            <p className="text-muted-foreground">
              Potential annual savings (15-25% of your ${parseFloat(formData.annualElectricityBill).toLocaleString()} annual bill)
            </p>
          </div>
        )}
      </Card>

      {grants.length === 0 ? (
        <Card className="p-8 text-center">
          <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">No Grants Available</h3>
          <p className="text-muted-foreground">
            Based on your current business profile, you don't meet the criteria for these specific grants.
            However, there may be other opportunities — contact louis@kpidigital.com.au to discuss your options.
          </p>
        </Card>
      ) : (
        <div className="space-y-4">
          {grants.map((grant, index) => (
            <Card key={index} className={`p-6 ${grant.urgent ? 'border-l-4 border-l-destructive' : ''}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{grant.name}</h3>
                  <p className="text-2xl font-bold text-primary">{grant.amount}</p>
                </div>
                {grant.urgent && (
                  <span className="bg-destructive text-destructive-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    URGENT
                  </span>
                )}
              </div>
              <p className="text-muted-foreground mb-4">{grant.description}</p>
              {grant.deadline && (
                <p className="text-sm font-medium text-destructive mb-2">
                  ⚠️ Deadline: {grant.deadline}
                </p>
              )}
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-1">Next Steps:</p>
                <p className="text-sm text-muted-foreground">{grant.nextSteps}</p>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Card className="p-8 bg-muted/30">
        <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span>We've sent your eligibility report to <strong>{formData.email}</strong></span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span>Our team will review your submission and contact you within 48 hours</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span>We'll help you prepare the necessary documentation for each grant application</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span>Questions? Email <a href="mailto:louis@kpidigital.com.au" className="text-primary underline">louis@kpidigital.com.au</a></span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
