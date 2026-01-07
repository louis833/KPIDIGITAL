import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <header className="border-b border-border pt-40">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: January 1, 2025</p>
        </div>
      </header>

      {/* Content */}
      <motion.main
        className="container mx-auto px-4 py-12 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p>
              This Cookie Policy explains how KPI Digital ("we," "our," or "us") uses cookies and similar technologies on our website kpidigital.com.au.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
            <p>We use cookies and similar technologies for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Essential Operation:</strong> To enable basic website functionality</li>
              <li><strong>Security:</strong> To protect your account and prevent fraudulent activity</li>
              <li><strong>Preferences:</strong> To remember your settings and preferences</li>
              <li><strong>Analytics:</strong> To understand how visitors use our website</li>
              <li><strong>Performance:</strong> To improve website speed and functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold mb-3">3.1 Strictly Necessary Cookies</h3>
            <p>
              These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
            </p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="font-semibold mb-2">Examples include:</p>
              <ul className="list-disc pl-6">
                <li>Session cookies for maintaining your logged-in state</li>
                <li>Security cookies for authentication and fraud prevention</li>
                <li>Load balancing cookies for distributing server load</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">3.2 Functional Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, or region.
            </p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="font-semibold mb-2">Examples include:</p>
              <ul className="list-disc pl-6">
                <li>Preference cookies for saving your settings</li>
                <li>Language cookies for displaying content in your preferred language</li>
                <li>UI customization cookies for remembering your layout preferences</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">3.3 Analytics and Performance Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our website's performance and user experience.
            </p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="font-semibold mb-2">Examples include:</p>
              <ul className="list-disc pl-6">
                <li>Google Analytics cookies for tracking page views and user behavior</li>
                <li>Performance monitoring cookies for identifying technical issues</li>
                <li>Heatmap cookies for understanding user interaction patterns</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">3.4 Marketing and Advertising Cookies</h3>
            <p>
              These cookies track your browsing habits to enable us to show advertising that is more likely to be of interest to you. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
            </p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="font-semibold mb-2">Examples include:</p>
              <ul className="list-disc pl-6">
                <li>Retargeting cookies for showing relevant ads on other websites</li>
                <li>Conversion tracking cookies for measuring campaign success</li>
                <li>Social media cookies for enabling social sharing features</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use third-party cookies to report usage statistics, deliver advertisements, and provide enhanced functionality.
            </p>
            <p className="mt-4">Third-party services we use may include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Google Analytics:</strong> For website analytics and reporting</li>
              <li><strong>Resend:</strong> For email delivery services</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and integration (Facebook, LinkedIn, Twitter, Instagram)</li>
            </ul>
            <p>
              These third parties have their own privacy policies and cookie policies. We recommend reviewing them:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Analytics Privacy Policy: policies.google.com/privacy</li>
              <li>Facebook Cookie Policy: www.facebook.com/policies/cookies</li>
              <li>LinkedIn Cookie Policy: www.linkedin.com/legal/cookie-policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Session vs. Persistent Cookies</h2>

            <h3 className="text-xl font-semibold mb-3">5.1 Session Cookies</h3>
            <p>
              Session cookies are temporary cookies that expire when you close your browser. They help us remember your actions during a single browsing session.
            </p>

            <h3 className="text-xl font-semibold mb-3">5.2 Persistent Cookies</h3>
            <p>
              Persistent cookies remain on your device for a set period or until you manually delete them. They help us remember your preferences and settings across multiple visits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. How to Control Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in the following ways:
            </p>

            <h3 className="text-xl font-semibold mb-3">6.1 Browser Settings</h3>
            <p>
              Most web browsers allow you to control cookies through their settings. You can set your browser to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Clear all cookies when you close the browser</li>
              <li>Notify you when a cookie is set</li>
            </ul>
            <p>Here's how to manage cookies in popular browsers:</p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <ul className="space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">6.2 Opt-Out Tools</h3>
            <p>You can also opt out of specific types of cookies using these tools:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Google Analytics Opt-out:</strong> tools.google.com/dlpage/gaoptout</li>
              <li><strong>Network Advertising Initiative:</strong> optout.networkadvertising.org</li>
              <li><strong>Digital Advertising Alliance:</strong> optout.aboutads.info</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">6.3 Important Note</h3>
            <p>
              Please note that blocking or deleting cookies may impact your experience on our website. Some features may not function properly without cookies, and you may need to manually adjust some preferences every time you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Do Not Track Signals</h2>
            <p>
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to have your online activity tracked. Our website currently does not respond to DNT signals, as there is no industry-wide standard for how to interpret these signals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Cookies and Mobile Devices</h2>
            <p>
              When you access our website through a mobile device, cookies and similar technologies work in a similar way to desktop browsers. You can manage mobile cookies through your device's browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Cookie Lifespan</h2>
            <p>The lifespan of cookies varies depending on their purpose:</p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <ul className="space-y-2">
                <li><strong>Session Cookies:</strong> Expire when you close your browser</li>
                <li><strong>Functional Cookies:</strong> Typically last 1-12 months</li>
                <li><strong>Analytics Cookies:</strong> Usually last 1-24 months</li>
                <li><strong>Marketing Cookies:</strong> Can last up to 24 months</li>
              </ul>
            </div>
            <p>
              You can view and delete cookies stored on your device at any time through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Posting the updated policy on this page</li>
              <li>Updating the "Last updated" date at the top of this policy</li>
              <li>Sending an email notification for significant changes (if you have an account)</li>
            </ul>
            <p>
              We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Cookie Consent</h2>
            <p>
              By continuing to use our website without changing your cookie settings, you consent to our use of cookies as described in this policy. If you do not agree to our use of cookies, you should adjust your browser settings or discontinue using our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. More Information</h2>
            <p>
              For more information about how we process your personal data, please see our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
            <p className="mt-4">
              If you have questions about cookies or would like more information about specific cookies we use, please contact us:
            </p>
            <div className="bg-muted p-6 rounded-lg mt-4">
              <p className="font-semibold">KPI Digital</p>
              <p>Contact KPI Digital via our website contact form.</p>
              <p>Website: kpidigital.com.au</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Australian Privacy Laws</h2>
            <p>
              KPI Digital complies with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth). While the Privacy Act does not specifically regulate cookies, we are committed to transparency about how we collect and use your information, including through cookies and similar technologies.
            </p>
          </section>
        </div>
      </motion.main>
    </div>
  );
}
