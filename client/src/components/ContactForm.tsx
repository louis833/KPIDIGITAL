import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Mail } from "lucide-react";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<Partial<ContactFormData>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactFormData> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            toast({
                title: "Please fix the errors below",
                description: "All fields are required",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            toast({
                title: "Message sent successfully!",
                description: "We'll get back to you within 24 hours. Check your email for confirmation.",
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            setErrors({});

        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "Please try again or contact us via our social channels.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof ContactFormData, value: string) => {
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
                        Get in Touch
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Have a question or want to learn more about how we can help your business? We'd love to hear from you.
                    </p>

                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                    </div>
                </motion.div>

                <motion.div
                    className="max-w-2xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <Card className="p-8 md:p-12 bg-card hover-elevate">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div variants={itemVariants}>
                                <Label htmlFor="name" className="text-foreground font-medium">
                                    Your Name *
                                </Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className={`mt-2 focus-ring ${errors.name ? 'border-destructive' : ''}`}
                                    placeholder="John Smith"
                                    data-testid="input-contact-name"
                                />
                                {errors.name && (
                                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                                )}
                            </motion.div>

                            <motion.div variants={itemVariants}>
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
                                    data-testid="input-contact-email"
                                />
                                {errors.email && (
                                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                                )}
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Label htmlFor="subject" className="text-foreground font-medium">
                                    Subject *
                                </Label>
                                <Input
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => handleInputChange('subject', e.target.value)}
                                    className={`mt-2 focus-ring ${errors.subject ? 'border-destructive' : ''}`}
                                    placeholder="General enquiry"
                                    data-testid="input-contact-subject"
                                />
                                {errors.subject && (
                                    <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                                )}
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Label htmlFor="message" className="text-foreground font-medium">
                                    Message *
                                </Label>
                                <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    className={`mt-2 min-h-32 focus-ring ${errors.message ? 'border-destructive' : ''}`}
                                    placeholder="Tell us what you'd like to know..."
                                    data-testid="textarea-contact-message"
                                />
                                {errors.message && (
                                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                                )}
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 group"
                                    data-testid="button-submit-contact"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </Button>
                            </motion.div>
                        </form>
                    </Card>
                </motion.div>

                {/* Additional info */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Response within 24 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>No spam, ever</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Your data is secure</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
