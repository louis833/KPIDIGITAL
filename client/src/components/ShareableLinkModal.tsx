import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, CheckCircle2, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ShareableLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareableUrl: string;
  userEmail: string;
}

export function ShareableLinkModal({ isOpen, onClose, shareableUrl, userEmail }: ShareableLinkModalProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(shareableUrl);
    setCopied(true);
    toast({
      title: "Link Copied!",
      description: "The shareable link has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleViewReport = () => {
    window.open(shareableUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg" data-testid="dialog-shareable-link">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
            Assessment Complete!
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Your results have been saved and sent to <strong>{userEmail}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Shareable Results Link
            </label>
            <div className="flex gap-2">
              <Input
                value={shareableUrl}
                readOnly
                className="flex-1 font-mono text-sm"
                data-testid="input-shareable-link"
              />
              <Button
                size="icon"
                variant="outline"
                onClick={handleCopy}
                className="hover-elevate active-elevate-2"
                data-testid="button-copy-link"
              >
                {copied ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Share this link to view your detailed assessment results anytime.
            </p>
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-4 space-y-2">
            <h4 className="text-sm font-semibold text-foreground">📧 Email Sent</h4>
            <p className="text-sm text-muted-foreground">
              We've sent your results link to <strong>{userEmail}</strong> and notified our team at KPI Digital.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              className="flex-1 hover-elevate active-elevate-2"
              onClick={handleViewReport}
              data-testid="button-view-report"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Full Report
            </Button>
            <Button
              variant="outline"
              className="flex-1 hover-elevate"
              onClick={onClose}
              data-testid="button-close-modal"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
