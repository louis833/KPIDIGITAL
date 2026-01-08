import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, MessageSquare, CheckCircle, Zap, Shield } from "lucide-react";

const bookingSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(8, "Valid phone number is required"),
    businessName: z.string().optional(),
    challenge: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm() {
    const { toast } = useToast();
    const form = useForm<BookingFormValues>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            businessName: "",
            challenge: "",
        },
    });

    const onSubmit = async (data: BookingFormValues) => {
        try {
            const response = await fetch('/api/book-call', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to submit');

            toast({
                title: "Request Received",
                description: "We'll be in touch shortly to schedule your operational audit. Check your email for confirmation.",
            });
            form.reset();
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "Please try again or refresh the page.",
                variant: "destructive",
            });
        }
    };

    const whatHappens = [
        { icon: MessageSquare, text: "We analyze your current operational setup" },
        { icon: Zap, text: "We identify specific opportunities for automation" },
        { icon: CheckCircle, text: "You get a clear roadmap for improved efficiency" },
        { icon: Clock, text: "Implementation plan delivered within 48 hours" },
    ];

    return (
        <section id="booking-form" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    {/* What Happens When You Book */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">What Happens When You Audit</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-12">
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                                    <span className="font-bold text-primary text-xl">1</span>
                                </div>
                                <h4 className="font-bold">Discovery Session</h4>
                                <p className="text-sm text-muted-foreground">We unpack your current friction points and business goals.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                                    <span className="font-bold text-primary text-xl">2</span>
                                </div>
                                <h4 className="font-bold">The Audit Map</h4>
                                <p className="text-sm text-muted-foreground">We build a 30-Point visual roadmap of your operations.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                                    <span className="font-bold text-primary text-xl">3</span>
                                </div>
                                <h4 className="font-bold">The Strategy</h4>
                                <p className="text-sm text-muted-foreground">You get a fixed-price proposal to implement the solution.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 border-2 border-primary/10 shadow-lg">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold mb-2">Book Your Operational Audit</h2>
                                <p className="text-muted-foreground">
                                    Discover where your business is bleeding money and how to fix it.
                                </p>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="your@email.com" type="email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="0400 000 000" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="businessName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Business Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your business name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="challenge"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>What's your biggest operational headache? (Optional)</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="e.g. Manual data entry taking too long..."
                                                        className="resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full text-lg py-6 font-bold">
                                        Book Your Audit
                                    </Button>
                                </form>
                            </Form>

                            {/* Trust elements */}
                            <div className="mt-6 pt-6 border-t border-border">
                                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                    <Shield className="w-4 h-4 text-green-600" />
                                    <span>Confidential analysis · No obligation · Expert insights</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
