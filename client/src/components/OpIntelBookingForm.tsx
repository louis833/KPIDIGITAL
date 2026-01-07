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
import { Clock, MessageSquare, CheckCircle, Zap, Shield, HelpCircle } from "lucide-react";

const bookingSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(8, "Valid phone number is required"),
    businessName: z.string().optional(),
    industry: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function OpIntelBookingForm() {
    const { toast } = useToast();
    const form = useForm<BookingFormValues>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            businessName: "",
            industry: "",
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
                title: "Eligibility Check Requested",
                description: "We'll be in touch shortly to discuss your grant eligibility and potential savings. Check your email for confirmation.",
            });
            form.reset();
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "Please try again or contact us directly at louis@kpidigital.com.au",
                variant: "destructive",
            });
        }
    };

    const whatHappens = [
        { icon: HelpCircle, text: "We'll check your eligibility for the $1,000 PowerSmart grant" },
        { icon: Zap, text: "We'll identify immediate 'low-hanging fruit' for energy savings" },
        { icon: CheckCircle, text: "You'll get a clear roadmap for ROI-focused implementation" },
        { icon: Clock, text: "No pressure, just 15 minutes of expert Tasmanian business insight" },
    ];

    return (
        <section id="booking-form" className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold mb-6 text-slate-900 leading-tight">What Happens During Your Eligibility Chat</h3>
                            <div className="space-y-6">
                                {whatHappens.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                                        <div className="bg-primary/10 p-2 rounded-lg">
                                            <item.icon className="w-6 h-6 text-primary shrink-0" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 border-none shadow-2xl bg-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold mb-2">Check My Eligibility</h2>
                                    <p className="text-slate-500 font-medium">
                                        Free 15-Min Chat · No Obligation
                                    </p>
                                </div>

                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-900 font-semibold">Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your name" {...field} className="bg-slate-50 border-slate-200" />
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
                                                    <FormLabel className="text-slate-900 font-semibold">Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="your@email.com" type="email" {...field} className="bg-slate-50 border-slate-200" />
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
                                                    <FormLabel className="text-slate-900 font-semibold">Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="0400 000 000" {...field} className="bg-slate-50 border-slate-200" />
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
                                                    <FormLabel className="text-slate-900 font-semibold">Business Name (Optional)</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your business name" {...field} className="bg-slate-50 border-slate-200" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="industry"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-900 font-semibold">Industry / Area of Interest</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="e.g. Manufacturing, Retail, Solar..." {...field} className="bg-slate-50 border-slate-200" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type="submit" className="w-full text-lg py-7 font-bold shadow-lg shadow-primary/30">
                                            Request My Free Eligibility Call
                                        </Button>
                                    </form>
                                </Form>

                                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    <Shield className="w-4 h-4 text-green-500" />
                                    <span>Verified Tasmanian Expertise</span>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
