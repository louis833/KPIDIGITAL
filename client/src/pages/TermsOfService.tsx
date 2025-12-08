import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <header className="border-b border-border pt-40">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
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
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>
              Welcome to KPI Digital. By accessing or using our website (kpidigital.com.au) and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and KPI Digital ("Company," "we," "us," or "our"). We reserve the right to update these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
            <p>KPI Digital provides business consulting and digital transformation services for trades businesses, including but not limited to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Business assessment calculators (Clarity, Systems, Growth)</li>
              <li>Digital foundations setup and implementation</li>
              <li>Pricing and profit audits</li>
              <li>Sales system implementation</li>
              <li>Control dashboard creation</li>
              <li>Referral system setup</li>
              <li>Complete business transformation consulting</li>
            </ul>
            <p>
              Our services are designed specifically for Australian trades businesses seeking to improve operational clarity, implement effective systems, and achieve sustainable growth.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Accounts and Registration</h2>
            <p>
              While some areas of our website are accessible without registration, certain services may require you to create an account or provide personal information. When creating an account, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use our services in any way that violates any applicable law or regulation</li>
              <li>Transmit any harmful code, viruses, or malicious software</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Impersonate any person or entity or falsely state your affiliation</li>
              <li>Collect or harvest any information from our services using automated means</li>
              <li>Use our services to spam, harass, or abuse others</li>
              <li>Reverse engineer, decompile, or disassemble any part of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold mb-3">5.1 Our Content</h3>
            <p>
              All content on our website, including but not limited to text, graphics, logos, images, software, calculators, assessment tools, and reports, is the property of KPI Digital or our licensors and is protected by Australian and international copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mb-3">5.2 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our services for your personal or internal business purposes. This license does not include any right to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Reproduce, distribute, or publicly display our content</li>
              <li>Modify or create derivative works from our content</li>
              <li>Use our content for commercial purposes without our written consent</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">5.3 Your Content</h3>
            <p>
              When you submit information through our services (such as assessment responses or quote requests), you retain ownership of that content. However, you grant us a worldwide, royalty-free license to use, process, and store that content solely for the purpose of providing our services to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Service Fees and Payment</h2>
            <p>
              Certain services may require payment of fees. All fees are quoted in Australian Dollars (AUD) unless otherwise specified. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pay all applicable fees as described in our service agreements</li>
              <li>Provide current, complete, and accurate billing information</li>
              <li>Promptly update account information if your payment details change</li>
              <li>Pay any applicable taxes associated with our services</li>
            </ul>
            <p>
              All fees are non-refundable except as expressly stated in a written service agreement. We reserve the right to change our fees with 30 days' notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Assessment Tools and Reports</h2>
            <p>
              Our business assessment calculators (Clarity, Systems, and Growth) are provided for informational and educational purposes only. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Assessment results are based on self-reported information</li>
              <li>Results should not be considered professional advice without consultation</li>
              <li>We do not guarantee specific business outcomes from implementing recommendations</li>
              <li>Reports are personalized to your responses and should be kept confidential</li>
              <li>Assessment methodologies may be updated or modified without notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties that our services will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
              <li>Warranties that defects will be corrected</li>
            </ul>
            <p>
              We do not warrant that our services will meet your requirements or that the results obtained will be accurate or reliable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, KPI DIGITAL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Loss of data or information</li>
              <li>Business interruption</li>
              <li>Loss of goodwill</li>
            </ul>
            <p>
              Our total liability for any claims arising from these Terms or our services shall not exceed the amount you paid us in the 12 months prior to the claim, or $100 AUD, whichever is greater.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless KPI Digital, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Third-Party Services and Links</h2>
            <p>
              Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The content, privacy policies, or practices of third-party sites</li>
              <li>Any transactions you may have with third parties</li>
              <li>The availability or functionality of third-party services</li>
            </ul>
            <p>
              Your use of third-party services is at your own risk and subject to their terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at any time, with or without notice, for any reason, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Extended periods of inactivity</li>
              <li>Request by law enforcement or government agencies</li>
            </ul>
            <p>
              Upon termination, your right to use our services will immediately cease. Provisions of these Terms that by their nature should survive termination will survive, including but not limited to intellectual property rights, disclaimers, and limitations of liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of Australia, without regard to conflict of law principles. Any disputes arising from these Terms or our services shall be resolved through:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Informal Resolution:</strong> We encourage you to contact us first to resolve any issues informally</li>
              <li><strong>Mediation:</strong> If informal resolution fails, disputes may be submitted to mediation</li>
              <li><strong>Courts:</strong> Legal proceedings must be brought in the courts of Australia</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of material changes by:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Posting the updated Terms on our website</li>
              <li>Updating the "Last updated" date</li>
              <li>Sending email notification for significant changes</li>
            </ul>
            <p>
              Your continued use of our services after changes become effective constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">15. General Provisions</h2>
            
            <h3 className="text-xl font-semibold mb-3">15.1 Entire Agreement</h3>
            <p>These Terms, along with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and KPI Digital.</p>

            <h3 className="text-xl font-semibold mb-3">15.2 Severability</h3>
            <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>

            <h3 className="text-xl font-semibold mb-3">15.3 Waiver</h3>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>

            <h3 className="text-xl font-semibold mb-3">15.4 Assignment</h3>
            <p>You may not assign or transfer these Terms without our written consent. We may assign these Terms to any affiliate or successor without restriction.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">16. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <div className="bg-muted p-6 rounded-lg mt-4">
              <p className="font-semibold">KPI Digital</p>
              <p>Email: louis@kpidigital.com.au</p>
              <p>Website: kpidigital.com.au</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">17. Australian Consumer Law</h2>
            <p>
              Nothing in these Terms excludes, restricts, or modifies any consumer rights under the Australian Consumer Law or other applicable laws that cannot be excluded, restricted, or modified by agreement. Where applicable, our liability is limited to re-supplying the services or paying the cost of having the services resupplied.
            </p>
          </section>
        </div>
      </motion.main>
    </div>
  );
}
