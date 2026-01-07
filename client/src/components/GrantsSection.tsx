import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, AlertCircle } from "lucide-react";

const grants = [
    {
        name: "PowerSmart for Small Business (Tas Gov)",
        savings: "Up to $1,000 reimbursement",
        benefits: "Covers most of your Phase 1 audit – low-risk start. Multi-year funding, open now.",
        journey: "Funds your Diagnostic Audit; get reimbursed fast.",
        status: "Open"
    },
    {
        name: "Enabling Business Grant Program (Tas Gov)",
        savings: "$2,500–$10,000",
        benefits: "Funds tech/hardware (e.g., IoT sensors) with 30% co-contribution.",
        journey: "Supports Phase 2 implementation.",
        status: "Open"
    },
    {
        name: "Advanced Manufacturing Productivity Grant (Tas Gov)",
        savings: "$1,500–$20,000 (50/50 matched)",
        benefits: "For high-tech inputs boosting productivity. Open until June 2026 or funds exhausted.",
        journey: "Fuels Phase 2/3 automation.",
        status: "Open"
    },
    {
        name: "Federal Solar PV Rebate (STCs)",
        savings: "$3,000–$38,000+",
        benefits: "Upfront discount on solar – higher value early 2026.",
        journey: "Adds to Phase 2 if solar ROI stacks up.",
        status: "Open"
    },
    {
        name: "Federal Cheaper Home Batteries Rebate",
        savings: "$4,500–$15,000+",
        benefits: "~30% off batteries – best Jan–April 2026. Major cuts from 1 May 2026. Act before May!",
        journey: "Powers Phase 3 storage/optimisation.",
        status: "Urgent",
        deadline: "1 May 2026"
    }
];

export default function GrantsSection({ onCTAClick }: { onCTAClick?: () => void }) {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Act Now: Unlock Thousands in Savings Before Incentives Change</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        2026 is the ideal time for Tasmanian SMBs to cut energy costs. Governments are supporting efficiency and renewables, but many incentives taper soon (e.g., federal battery rebates drop significantly from 1 May 2026). Stack them now for maximum ROI.
                    </p>
                </div>

                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-hidden rounded-xl border border-slate-200 shadow-xl mb-12">
                    <Table>
                        <TableHeader className="bg-slate-900 text-white">
                            <TableRow className="hover:bg-slate-900 border-none">
                                <TableHead className="text-white py-6">Grant/Rebate</TableHead>
                                <TableHead className="text-white">Potential Savings</TableHead>
                                <TableHead className="text-white">Key Benefits & Urgency</TableHead>
                                <TableHead className="text-white">How It Ties to Your Journey</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {grants.map((grant, index) => (
                                <TableRow key={index} className={grant.status === 'Urgent' ? 'bg-orange-50/50' : ''}>
                                    <TableCell className="font-bold py-6">{grant.name}</TableCell>
                                    <TableCell className="font-semibold text-primary">{grant.savings}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-2">
                                            {grant.status === 'Urgent' && (
                                                <Badge variant="destructive" className="w-fit animate-pulse">
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    URGENT: Before May 1st
                                                </Badge>
                                            )}
                                            {grant.benefits}
                                        </div>
                                    </TableCell>
                                    <TableCell>{grant.journey}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Mobile/Tablet Card View */}
                <div className="lg:hidden flex flex-col gap-6 mb-12">
                    {grants.map((grant, index) => (
                        <div key={index} className={`p-6 rounded-xl border ${grant.status === 'Urgent' ? 'border-orange-200 bg-orange-50' : 'border-slate-200 bg-white'} shadow-md`}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-bold text-lg leading-tight">{grant.name}</h3>
                                {grant.status === 'Urgent' && (
                                    <Badge variant="destructive" className="animate-pulse shrink-0 ml-2">URGENT</Badge>
                                )}
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Potential Savings</span>
                                    <p className="text-xl font-bold text-primary">{grant.savings}</p>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Benefits</span>
                                    <p className="text-sm text-slate-700">{grant.benefits}</p>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Journey</span>
                                    <p className="text-sm text-slate-700">{grant.journey}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-xs text-slate-400 mb-8 max-w-2xl mx-auto">
                        Disclaimer: Grants and rebates are subject to eligibility, availability, and government changes. Values approximate as of January 2026 – we verify during Phase 1.
                    </p>
                    <Button
                        size="lg"
                        className="px-10 py-7 text-lg font-bold shadow-lg"
                        onClick={onCTAClick}
                    >
                        Check My Eligibility – Free 15-Min Chat
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
