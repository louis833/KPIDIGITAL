import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

interface MobileStickyCTAProps {
    onCTAClick?: () => void;
}

export default function MobileStickyCTA({ onCTAClick }: MobileStickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 500px (past most of hero)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border z-50 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
                >
                    <Button
                        onClick={onCTAClick}
                        className="w-full text-lg font-bold py-6 shadow-md animate-pulse-slow"
                        size="lg"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Book a Call
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
