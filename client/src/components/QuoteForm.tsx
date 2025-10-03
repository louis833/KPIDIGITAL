import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle, Mail, Calendar } from "lucide-react";

interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serviceType: string;
  projectDescription: string;
  timeline: string;
  budget: string;
  hearAboutUs: string;
  agreeToTerms: boolean;
}

const serviceTypes = [
  "Digital Foundations Setup",
  "Pricing & Profit Audit", 
  "Sales System Implementation",
  "Control Dashboard Creation",
  "Referral System Setup",
  "Complete Business Transformation",
];

const timelines = [
  "ASAP - I need help now",
  "1-2 weeks",
  "1 month",
  "2-3 months",
  "Just exploring options",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Let's discuss",
];

export default function QuoteForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    serviceType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    hearAboutUs: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Partial<QuoteFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<QuoteFormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors below",
        description: "All required fields must be completed",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }
      
      toast({
        title: "Quote request submitted!",
        description: "We'll get back to you within 24 hours with a custom proposal. Check your email for confirmation.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        serviceType: '',
        projectDescription: '',
        timeline: '',
        budget: '',
        hearAboutUs: '',
        agreeToTerms: false,
      });
      setErrors({});

    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at louis@kpidigital.com.au",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof QuoteFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tell us about your business and we'll create a tailored plan to transform your operations and drive growth.
          </p>
          
          {/* Contact options */}
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Email: louis@kpidigital.com.au</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Card className="p-8 md:p-12 bg-card hover-elevate">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`mt-2 focus-ring ${errors.firstName ? 'border-destructive' : ''}`}
                      placeholder="John"
                      data-testid="input-first-name"
                    />
                    {errors.firstName && (
                      <p className="text-destructive text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-foreground font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`mt-2 focus-ring ${errors.lastName ? 'border-destructive' : ''}`}
                      placeholder="Smith"
                      data-testid="input-last-name"
                    />
                    {errors.lastName && (
                      <p className="text-destructive text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`mt-2 focus-ring ${errors.email ? 'border-destructive' : ''}`}
                      placeholder="john@company.com"
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="company" className="text-foreground font-medium">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={`mt-2 focus-ring ${errors.company ? 'border-destructive' : ''}`}
                      placeholder="Smith Electrical Solutions"
                      data-testid="input-company"
                    />
                    {errors.company && (
                      <p className="text-destructive text-sm mt-1">{errors.company}</p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  Project Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="serviceType" className="text-foreground font-medium">
                      What service are you interested in? *
                    </Label>
                    <Select 
                      value={formData.serviceType} 
                      onValueChange={(value) => handleInputChange('serviceType', value)}
                    >
                      <SelectTrigger className={`mt-2 focus-ring ${errors.serviceType ? 'border-destructive' : ''}`} data-testid="select-service-type">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="projectDescription" className="text-foreground font-medium">
                      Tell us about your current challenges and goals *
                    </Label>
                    <Textarea
                      id="projectDescription"
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      className={`mt-2 min-h-32 focus-ring ${errors.projectDescription ? 'border-destructive' : ''}`}
                      placeholder="Describe your current business challenges, what you're hoping to achieve, and any specific requirements..."
                      data-testid="textarea-project-description"
                    />
                    {errors.projectDescription && (
                      <p className="text-destructive text-sm mt-1">{errors.projectDescription}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="timeline" className="text-foreground font-medium">
                        What's your timeline? *
                      </Label>
                      <Select 
                        value={formData.timeline} 
                        onValueChange={(value) => handleInputChange('timeline', value)}
                      >
                        <SelectTrigger className={`mt-2 focus-ring ${errors.timeline ? 'border-destructive' : ''}`} data-testid="select-timeline">
                          <SelectValue placeholder="Select timeline..." />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.timeline && (
                        <p className="text-destructive text-sm mt-1">{errors.timeline}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="budget" className="text-foreground font-medium">
                        Budget Range (Optional)
                      </Label>
                      <Select 
                        value={formData.budget} 
                        onValueChange={(value) => handleInputChange('budget', value)}
                      >
                        <SelectTrigger className="mt-2 focus-ring" data-testid="select-budget">
                          <SelectValue placeholder="Select budget range..." />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((budget) => (
                            <SelectItem key={budget} value={budget}>
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="hearAboutUs" className="text-foreground font-medium">
                      How did you hear about us? (Optional)
                    </Label>
                    <Input
                      id="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                      className="mt-2 focus-ring"
                      placeholder="Google search, referral, social media, etc."
                      data-testid="input-hear-about-us"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Terms and Submit */}
              <motion.div variants={itemVariants}>
                <div className="border-t border-border pt-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                      className="mt-1"
                      data-testid="checkbox-terms"
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm text-muted-foreground leading-relaxed">
                      I agree to the{' '}
                      <button type="button" className="text-primary hover:underline">
                        Terms of Service
                      </button>{' '}
                      and{' '}
                      <button type="button" className="text-primary hover:underline">
                        Privacy Policy
                      </button>
                      . I understand that KPI Digital will contact me to discuss my project. *
                    </Label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-destructive text-sm mb-6">You must agree to the terms</p>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="flex-1 px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 group"
                      data-testid="button-submit-quote"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Custom Quote
                          <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="px-8 py-6 text-lg font-semibold hover-elevate"
                      onClick={() => console.log("Schedule call clicked")}
                      data-testid="button-schedule-call"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Call Instead
                    </Button>
                  </div>
                </div>
              </motion.div>
            </form>
          </Card>
        </motion.div>

        {/* Additional trust signals */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Free consultation & quote</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>No obligation or pressure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}