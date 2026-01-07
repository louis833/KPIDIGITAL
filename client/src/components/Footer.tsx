import { Link } from "wouter";

interface FooterProps {
  onCTAClick?: () => void;
}

export default function Footer({ onCTAClick }: FooterProps) {
  return (
    <footer className="bg-muted/30 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <a className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4" onClick={onCTAClick}>
                <img src="/logo.png" alt="KPI Digital" className="h-8 w-auto" />
              </a>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Helping electricians capture every lead without hiring staff.
            </p>
            <div className="flex gap-4">
              {/* Social links placeholder */}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Based in Launceston, Tasmania</li>
              <li>Serving electricians Australia-wide</li>
              <li>
                <a href="mailto:louis@kpidigital.com.au" className="hover:text-primary transition-colors">
                  louis@kpidigital.com.au
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy">
                  <a className="hover:text-primary transition-colors">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="hover:text-primary transition-colors">Terms of Service</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KPI Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}