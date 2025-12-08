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
            phone: "",
            businessName: "",
            challenge: "",
        },
    });

    const onSubmit = async (data: BookingFormValues) => {
        console.log("Form submitted:", data);
        toast({
            title: "Request Received",
            description: "We'll be in touch shortly to schedule your free setup call.",
        });
        form.reset();
    };

    const whatHappens = [
        { icon: MessageSquare, text: "We'll have a quick 15-minute chat to understand your business" },
        { icon: Zap, text: "You'll see exactly how the AI Executive Assistant would handle your calls" },
        { icon: CheckCircle, text: "We'll answer any questions — no pressure, no hard sell" },
        { icon: Clock, text: "If it's a fit, we'll get you set up within 48 hours" },
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
                        <h3 className="text-2xl font-bold mb-6 text-center">What Happens When You Book</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {whatHappens.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                                    <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 border-2 border-primary/10 shadow-lg">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold mb-2">Book Your Free 15-Minute Call</h2>
                                <p className="text-muted-foreground">
                                    No pressure. No hard sell. Just a quick chat to see if this is right for your business.
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
                                                <FormLabel>Business Name (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your electrical business" {...field} />
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
                                                <FormLabel>What's your biggest challenge with enquiries right now? (Optional)</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="e.g. Missing calls while on the roof..."
                                                        className="resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full text-lg py-6 font-bold">
                                        Book Your Free 15-Minute Call
                                    </Button>
                                </form>
                            </Form>

                            {/* Trust elements */}
                            <div className="mt-6 pt-6 border-t border-border">
                                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                    <Shield className="w-4 h-4 text-green-600" />
                                    <span>Just $50/day · Free setup included · Cancel anytime</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
