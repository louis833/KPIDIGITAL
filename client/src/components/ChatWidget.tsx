import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface Message {
    role: "user" | "bot";
    content: string;
}

interface ChatState {
    isOpen: boolean;
    messages: Message[];
    isLoading: boolean;
    hasCapturedLead: boolean;
    userName: string;
    userEmail: string;
}

export default function ChatWidget() {
    const [state, setState] = useState<ChatState>({
        isOpen: false,
        messages: [{ role: "bot", content: "Hi there! How can I help you today?" }],
        isLoading: false,
        hasCapturedLead: false,
        userName: "",
        userEmail: "",
    });

    const [inputValue, setInputValue] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [state.messages]);

    const toggleChat = () => {
        setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
    };

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (state.userName && state.userEmail) {
            setState((prev) => ({ ...prev, hasCapturedLead: true }));
            // Optionally send lead to backend here
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || state.isLoading) return;

        const userMessage = inputValue.trim();
        setInputValue("");

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, { role: "user", content: userMessage }],
            isLoading: true,
        }));

        try {
            const response = await apiRequest("POST", "/api/chat", {
                message: userMessage,
                history: state.messages, // Send history for context
                userName: state.userName,
                userEmail: state.userEmail,
            });
            const data = await response.json();

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, { role: "bot", content: data.message }],
                isLoading: false,
            }));
        } catch (error) {
            console.error("Chat error:", error);
            setState((prev) => ({
                ...prev,
                messages: [
                    ...prev.messages,
                    { role: "bot", content: "Sorry, I'm having trouble connecting right now. Please try again later." },
                ],
                isLoading: false,
            }));
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
            <AnimatePresence>
                {state.isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[350px] sm:w-[400px]"
                    >
                        <Card className="flex flex-col h-[500px] shadow-xl border-primary/20 overflow-hidden">
                            {/* Header */}
                            <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground">
                                <div className="flex items-center gap-2">
                                    <div className="bg-white/20 p-1.5 rounded-full">
                                        <Bot className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">KPI Digital Assistant</h3>
                                        <p className="text-xs opacity-90">Ask us anything</p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-primary-foreground hover:bg-white/20 h-8 w-8"
                                    onClick={toggleChat}
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Content */}
                            {!state.hasCapturedLead ? (
                                <div className="flex-1 p-6 flex flex-col justify-center">
                                    <div className="text-center mb-6">
                                        <h4 className="font-semibold text-lg mb-2">Let's get started</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Please enter your details so we can better assist you.
                                        </p>
                                    </div>
                                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Your Name"
                                                value={state.userName}
                                                onChange={(e) => setState((prev) => ({ ...prev, userName: e.target.value }))}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                type="email"
                                                placeholder="Your Email"
                                                value={state.userEmail}
                                                onChange={(e) => setState((prev) => ({ ...prev, userEmail: e.target.value }))}
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            Start Chat
                                        </Button>
                                    </form>
                                </div>
                            ) : (
                                <>
                                    <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                                        <div className="space-y-4">
                                            {state.messages.map((msg, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                                        }`}
                                                >
                                                    <div
                                                        className={`max-w-[80%] rounded-lg p-3 ${msg.role === "user"
                                                            ? "bg-primary text-primary-foreground rounded-br-none"
                                                            : "bg-muted text-foreground rounded-bl-none"
                                                            }`}
                                                    >
                                                        <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                                    </div>
                                                </div>
                                            ))}
                                            {state.isLoading && (
                                                <div className="flex justify-start">
                                                    <div className="bg-muted rounded-lg p-3 rounded-bl-none flex items-center gap-2">
                                                        <Loader2 className="h-4 w-4 animate-spin" />
                                                        <span className="text-xs text-muted-foreground">Typing...</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </ScrollArea>
                                    <div className="p-4 border-t bg-background">
                                        <form onSubmit={handleSendMessage} className="flex gap-2">
                                            <Input
                                                placeholder="Type a message..."
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                className="flex-1"
                                            />
                                            <Button type="submit" size="icon" disabled={state.isLoading || !inputValue.trim()}>
                                                <Send className="h-4 w-4" />
                                            </Button>
                                        </form>
                                    </div>
                                </>
                            )}
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                    onClick={toggleChat}
                    size="lg"
                    className="rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90"
                >
                    {state.isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <MessageCircle className="h-6 w-6" />
                    )}
                </Button>
            </motion.div>
        </div>
    );
}
