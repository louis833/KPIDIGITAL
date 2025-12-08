import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <header className="border-b border-border pt-40">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
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
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              KPI Digital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website kpidigital.com.au and use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fill out our quote request form</li>
              <li>Complete our assessment calculators (Clarity, Systems, Growth)</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Contact us directly via email or phone</li>
            </ul>
            <p>This information may include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Phone number</li>
              <li>Business information and project details</li>
              <li>Assessment responses and scores</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information about your device and usage patterns, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Delivery:</strong> To provide, operate, and maintain our services</li>
              <li><strong>Communication:</strong> To respond to your inquiries and send you information about our services</li>
              <li><strong>Assessment Reports:</strong> To generate and deliver your personalized business assessment reports</li>
              <li><strong>Marketing:</strong> To send you promotional materials, newsletters, and updates (with your consent)</li>
              <li><strong>Analytics:</strong> To analyze usage patterns and improve our website and services</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            
            <h3 className="text-xl font-semibold mb-3">4.1 Service Providers</h3>
            <p>We may share your information with trusted third-party service providers who assist us in:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email delivery (Resend)</li>
              <li>Website hosting and maintenance</li>
              <li>Analytics and reporting</li>
              <li>Customer relationship management</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to valid requests by public authorities.</p>

            <h3 className="text-xl font-semibold mb-3">4.3 Business Transfers</h3>
            <p>If KPI Digital is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of data in transit using SSL/TLS</li>
              <li>Secure server infrastructure</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
            </ul>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            </ul>
            <p>To exercise these rights, please contact us at louis@kpidigital.com.au</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. For detailed information about our use of cookies, please see our <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Assessment data and reports are retained for up to 3 years for business records purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:</p>
            <div className="bg-muted p-6 rounded-lg mt-4">
              <p className="font-semibold">KPI Digital</p>
              <p>Email: louis@kpidigital.com.au</p>
              <p>Website: kpidigital.com.au</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14. Australian Privacy Principles</h2>
            <p>
              KPI Digital complies with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth). If you are located in Australia, you have additional rights under Australian privacy law, including the right to make a complaint to the Office of the Australian Information Commissioner (OAIC).
            </p>
          </section>
        </div>
      </motion.main>
    </div>
  );
}
