import { AlertTriangle } from "lucide-react";

export default function UrgencySection() {
    return (
        <section className="bg-destructive text-destructive-foreground py-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-3 text-center font-medium">
                    <AlertTriangle className="w-5 h-5 shrink-0 animate-pulse" />
                    <p>
                        <span className="font-bold">Limited Availability:</span> We can only onboard 5 new electricians this week to ensure quality setup.
                    </p>
                </div>
            </div>
        </section>
    );
}
