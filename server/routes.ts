import type { Express } from "express";
import { createServer, type Server } from "http";
import rateLimit from "express-rate-limit";
import { db } from "./db";
import { quizResults, insertQuizResultSchema } from "../shared/schema";
import { eq } from "drizzle-orm";
import { storage } from "./storage";
import {
  escapeHtml,
  sanitizeEmail,
  sanitizeText,
  sanitizeName,
  validateCalculatorType,
  sanitizeScore,
  validateTierName
} from "./security";
import { generateInvoiceBuffer } from "./invoice";

// Security: Strict rate limiter for email endpoints (prevent spam/abuse)
const emailLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 email requests per hour
  message: 'Too many requests. Please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

import { handleChat } from "./chat";

export async function registerRoutes(app: Express): Promise<Server> {
  // POST endpoint for chat
  app.post("/api/chat", handleChat);

  // POST endpoint to handle quote form submissions
  app.post("/api/submit-quote", emailLimiter, async (req, res) => {
    try {
      // Validate RESEND_API_KEY is configured
      if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY environment variable is not set');
        return res.status(500).json({
          error: "Email service is not configured. Please contact support."
        });
      }

      const {
        firstName,
        lastName,
        email,
        company,
        serviceType,
        projectDescription,
        timeline,
        budget,
        hearAboutUs
      } = req.body;

      // Security: Validate and sanitize all inputs
      const sanitizedFirstName = sanitizeName(firstName, 50);
      const sanitizedLastName = sanitizeName(lastName, 50);
      const sanitizedEmail = sanitizeEmail(email);
      const sanitizedCompany = sanitizeText(company, 200);
      const sanitizedServiceType = sanitizeText(serviceType, 100);
      const sanitizedProjectDescription = sanitizeText(projectDescription, 5000);
      const sanitizedTimeline = sanitizeText(timeline, 100);
      const sanitizedBudget = budget ? sanitizeText(budget, 100) : '';
      const sanitizedHearAboutUs = hearAboutUs ? sanitizeText(hearAboutUs, 500) : '';

      // Validate required fields after sanitization
      if (!sanitizedFirstName || !sanitizedLastName || !sanitizedEmail || !sanitizedCompany ||
        !sanitizedServiceType || !sanitizedProjectDescription || !sanitizedTimeline) {
        return res.status(400).json({
          error: "Invalid or missing required fields"
        });
      }

      // Security: Escape HTML in all user inputs for email
      const escapedFirstName = escapeHtml(sanitizedFirstName);
      const escapedLastName = escapeHtml(sanitizedLastName);
      const escapedEmail = escapeHtml(sanitizedEmail);
      const escapedCompany = escapeHtml(sanitizedCompany);
      const escapedServiceType = escapeHtml(sanitizedServiceType);
      const escapedProjectDescription = escapeHtml(sanitizedProjectDescription);
      const escapedTimeline = escapeHtml(sanitizedTimeline);
      const escapedBudget = sanitizedBudget ? escapeHtml(sanitizedBudget) : '';
      const escapedHearAboutUs = sanitizedHearAboutUs ? escapeHtml(sanitizedHearAboutUs) : '';

      // Send notification email to Louis
      const notificationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'KPI Digital <onboarding@resend.dev>',
          to: ['louis@kpidigital.com.au'],
          subject: `New Quote Request - ${escapedCompany}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #ea580c;">New Quote Request</h2>
              
              <div style="background-color: #fef3f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Client Information</h3>
                <p><strong>Name:</strong> ${escapedFirstName} ${escapedLastName}</p>
                <p><strong>Email:</strong> ${escapedEmail}</p>
                <p><strong>Company:</strong> ${escapedCompany}</p>
              </div>

              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Project Details</h3>
                <p><strong>Service Type:</strong> ${escapedServiceType}</p>
                <p><strong>Timeline:</strong> ${escapedTimeline}</p>
                ${escapedBudget ? `<p><strong>Budget:</strong> ${escapedBudget}</p>` : ''}
                ${escapedHearAboutUs ? `<p><strong>How they heard about us:</strong> ${escapedHearAboutUs}</p>` : ''}
              </div>

              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Project Description</h3>
                <p style="white-space: pre-wrap;">${escapedProjectDescription}</p>
              </div>

              <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 14px;">
                This quote request was submitted through the KPI Digital website on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}.
              </p>
            </div>
          `,
        }),
      });

      if (!notificationResponse.ok) {
        const errorData = await notificationResponse.text();
        console.error('Resend API error (notification):', errorData);
        return res.status(500).json({
          error: "Failed to send notification email"
        });
      }

      // Send confirmation email to client
      const confirmationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'KPI Digital <onboarding@resend.dev>',
          to: [sanitizedEmail],
          subject: 'Quote Request Received - KPI Digital',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #ea580c;">Thank You for Your Quote Request!</h2>
              
              <p>Hi ${escapedFirstName},</p>
              
              <p>We've received your quote request and our team will review it shortly. We'll get back to you within 24 hours with a custom proposal tailored to your needs.</p>

              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Your Request Summary</h3>
                <p><strong>Service Type:</strong> ${escapedServiceType}</p>
                <p><strong>Company:</strong> ${escapedCompany}</p>
                <p><strong>Timeline:</strong> ${escapedTimeline}</p>
                ${escapedBudget ? `<p><strong>Budget:</strong> ${escapedBudget}</p>` : ''}
              </div>

              <div style="background-color: #fef3f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">What Happens Next?</h3>
                <ol style="margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 10px;">Our team will review your requirements in detail</li>
                  <li style="margin-bottom: 10px;">We'll prepare a custom proposal with pricing and timeline</li>
                  <li style="margin-bottom: 10px;">You'll receive a comprehensive proposal within 24 hours</li>
                  <li style="margin-bottom: 10px;">We'll schedule a call to discuss the proposal and answer any questions</li>
                </ol>
              </div>

              <p>In the meantime, if you have any urgent questions, feel free to reply to this email or contact Louis directly at louis@kpidigital.com.au.</p>

              <p style="margin-top: 30px;">
                Best regards,<br/>
                <strong>The KPI Digital Team</strong>
              </p>

              <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 14px;">
                This is an automated confirmation email. Please do not reply to this email directly.
              </p>
            </div>
          `,
        }),
      });

      if (!confirmationResponse.ok) {
        const errorData = await confirmationResponse.text();
        console.error('Resend API error (confirmation):', errorData);
        // Don't fail the request if confirmation email fails
      }

      const notificationData = await notificationResponse.json();

      res.json({
        success: true,
        message: "Quote request submitted successfully",
        emailId: notificationData.id
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
      res.status(500).json({
        error: "Internal server error"
      });
    }
  });

  // POST endpoint to handle grant audit form submissions
  app.post("/api/send-audit-email", emailLimiter, async (req, res) => {
    console.log('[Audit] Received audit submission request');
    try {
      // Validate RESEND_API_KEY is configured
      if (!process.env.RESEND_API_KEY) {
        console.error('[Audit] RESEND_API_KEY environment variable is not set');
        return res.status(500).json({
          error: "Email service is not configured. Please contact support."
        });
      }

      const { formData, eligibleGrants, estimatedSavings } = req.body;

      // Validate that formData exists
      if (!formData) {
        console.error('formData is missing from request body:', req.body);
        return res.status(400).json({
          error: "Invalid request: formData is required"
        });
      }

      // Security: Validate and sanitize all inputs
      const sanitizedName = sanitizeName(formData.name, 100);
      const sanitizedEmail = sanitizeEmail(formData.email);
      const sanitizedPosition = sanitizeText(formData.position, 100);
      const sanitizedOperatingHours = sanitizeText(formData.operatingHours, 200);
      const sanitizedABN = sanitizeText(formData.abn, 20);
      const sanitizedABNYear = sanitizeText(formData.abnYear, 4);
      const sanitizedBusinessType = sanitizeText(formData.businessType, 50);
      const sanitizedTasmania = sanitizeText(formData.basedInTasmania, 10);
      const sanitizedEmployeeCount = sanitizeText(formData.employeeCount, 20);
      const sanitizedRevenue = sanitizeText(formData.annualRevenue, 50);
      const sanitizedCoContribution = sanitizeText(formData.canProvideCoContribution, 20);
      const sanitizedManufacture = sanitizeText(formData.doYouManufacture, 10);
      const sanitizedBuildingOwnership = sanitizeText(formData.buildingOwnership, 20);
      const sanitizedElectricityBill = sanitizeText(formData.annualElectricityBill, 20);
      const sanitizedElectricityUsage = sanitizeText(formData.electricityUsageMWh, 20);
      const sanitizedPropertyComments = sanitizeText(formData.propertyComments, 2000);
      const sanitizedTechnologyComments = sanitizeText(formData.technologyComments, 2000);

      // Security: Escape HTML in all user inputs for email
      const escapedName = escapeHtml(sanitizedName || '');
      const escapedEmail = escapeHtml(sanitizedEmail || '');
      const escapedPosition = escapeHtml(sanitizedPosition || '');
      const escapedABN = escapeHtml(sanitizedABN || '');

      // Generate grants list HTML
      const grantsHTML = eligibleGrants.length > 0
        ? eligibleGrants.map((grant: any) => `
            <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb; ${grant.urgent ? 'border-left: 6px solid #000000;' : ''}">
              <div style="margin-bottom: 12px;">
                <h4 style="margin: 0; color: #000000; font-size: 18px; font-weight: bold;">${escapeHtml(grant.name)}</h4>
                <p style="margin: 5px 0 0 0; color: #000000; font-size: 24px; font-weight: 800;">${escapeHtml(grant.amount)}</p>
              </div>
              <p style="margin: 0 0 15px 0; color: #4b5563; font-size: 14px; line-height: 1.5;">${escapeHtml(grant.description)}</p>
              ${grant.deadline ? `<p style="margin: 0 0 15px 0; color: #000000; font-size: 13px; font-weight: 700;">⚠️ Deadline: ${escapeHtml(grant.deadline)}</p>` : ''}
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px;">
                <p style="margin: 0 0 5px 0; color: #111827; font-size: 13px; font-weight: bold;">Next Steps:</p>
                <p style="margin: 0; color: #4b5563; font-size: 13px; line-height: 1.4;">${escapeHtml(grant.nextSteps)}</p>
              </div>
            </div>
          `).join('')
        : '<p style="color: #6b7280; text-align: center; padding: 30px; border: 1px dashed #e5e7eb; border-radius: 8px;">No eligible grants based on current business profile.</p>';

      const savingsHTML = estimatedSavings.max > 0
        ? `
          <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; margin: 20px 0; border: 1px solid #000000;">
            <h3 style="margin: 0 0 12px 0; color: #000000; font-size: 20px; font-weight: bold;">Estimated Energy Audit Benefit</h3>
            <p style="margin: 0 0 8px 0; font-size: 32px; font-weight: 800; color: #000000;">
              $${estimatedSavings.min.toLocaleString()} - $${estimatedSavings.max.toLocaleString()}
            </p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Potential annual savings (15-25% of $${parseFloat(formData.annualElectricityBill.replace(/[^0-9.-]+/g, "") || '0').toLocaleString()} annual bill)
            </p>
          </div>
        `
        : '';

      const invoiceNumber = `KPI-${Math.floor(1000 + Math.random() * 9000)} `;

      console.log('[Audit] Generating invoice for:', escapedName);
      let invoiceBuffer: Buffer;
      try {
        invoiceBuffer = await generateInvoiceBuffer({
          invoiceNumber,
          date: new Date().toLocaleDateString('en-AU'),
          customerName: escapedName,
          customerEmail: escapedEmail,
          businessName: escapeHtml(formData.businessName),
          abn: escapedABN
        });
        console.log('[Audit] Invoice generated successfully. Buffer size:', invoiceBuffer.length);
      } catch (err) {
        console.error('[Audit] Invoice generation failed:', err);
        throw err;
      }

      // Send notification email to Louis
      console.log('[Audit] Sending notification email to Louis...');
      const notificationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `KPI Digital <${process.env.EMAIL_FROM || 'noreply@receptionist.kpidigital.com.au'}>`,
          to: ['louis@kpidigital.com.au'],
          subject: `New Grant Audit Lead - ${escapedName} (${eligibleGrants.length} Grants Eligible)`,
          attachments: [
            {
              filename: `Invoice_${invoiceNumber}.pdf`,
              content: invoiceBuffer.toString('base64')
            }
          ],
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #111827; background-color: #f9fafb; padding: 20px;">
              <div style="background-color: #ffffff; padding: 40px; border-radius: 12px; border: 2px solid #000000; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <div style="text-align: center; margin-bottom: 30px;">
                  <div style="width: 60px; height: 60px; background-color: #000000; border-radius: 50%; display: inline-block; margin-bottom: 15px;">
                    <span style="color: #ffffff; font-size: 35px; line-height: 60px;">✓</span>
                  </div>
                  <h2 style="margin: 0; color: #000000; font-size: 28px; font-weight: 800;">Eligibility Results</h2>
                  <p style="margin: 10px 0 0 0; color: #6b7280; font-size: 16px;">
                    Based on responses, eligible for ${eligibleGrants.length} grant opportunity
                  </p>
                </div>

                ${savingsHTML}

                <div style="margin: 30px 0;">
                  <h3 style="color: #000000; font-size: 22px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">
                    Grant Opportunities
                  </h3>
                  ${grantsHTML}
                </div>

                <div style="background-color: #f3f4f6; padding: 30px; border-radius: 8px; margin-top: 40px;">
                  <h3 style="margin-top: 0; color: #000000; font-size: 20px; font-weight: bold; margin-bottom: 20px;">What Happens Next?</h3>
                  <ul style="margin: 0; padding: 0; list-style-type: none;">
                    <li style="margin-bottom: 15px; display: flex;">
                      <span style="color: #000000; margin-right: 12px; font-weight: bold;">✓</span>
                      <span style="color: #4b5563; font-size: 14px;">We've sent this eligibility report to <strong>${escapedEmail}</strong></span>
                    </li>
                    <li style="margin-bottom: 15px; display: flex;">
                      <span style="color: #000000; margin-right: 12px; font-weight: bold;">✓</span>
                      <span style="color: #4b5563; font-size: 14px;">Our team will review the submission and contact you within 48 hours</span>
                    </li>
                    <li style="margin-bottom: 15px; display: flex;">
                      <span style="color: #000000; margin-right: 12px; font-weight: bold;">✓</span>
                      <span style="color: #4b5563; font-size: 14px;">We'll help you prepare the necessary documentation for each grant</span>
                    </li>
                    <li style="display: flex;">
                      <span style="color: #000000; margin-right: 12px; font-weight: bold;">✓</span>
                      <span style="color: #4b5563; font-size: 14px;">Questions? Email <a href="mailto:louis@kpidigital.com.au" style="color: #000000; font-weight: bold; text-decoration: underline;">louis@kpidigital.com.au</a></span>
                    </li>
                  </ul>
                </div>

                <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #e5e7eb; display: flex; align-items: flex-start; gap: 20px;">
                  <div style="background-color: #fef3f2; padding: 20px; border-radius: 8px; width: 100%;">
                    <h4 style="margin: 0 0 15px 0; color: #000000; font-size: 16px; font-weight: bold;">Full Lead Profile</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #4b5563;">
                      <tr><td style="padding: 4px 0; width: 120px;"><strong>Name:</strong></td><td>${escapedName}</td></tr>
                      <tr><td style="padding: 4px 0;"><strong>Business:</strong></td><td>${escapeHtml(formData.businessName)}</td></tr>
                      <tr><td style="padding: 4px 0;"><strong>ABN:</strong></td><td>${escapedABN} (${escapeHtml(formData.abnYear)})</td></tr>
                      <tr><td style="padding: 4px 0;"><strong>Revenue:</strong></td><td>${escapeHtml(formData.annualRevenue)}</td></tr>
                      <tr><td style="padding: 4px 0;"><strong>Employees:</strong></td><td>${escapeHtml(formData.employeeCount)} FTE</td></tr>
                      <tr><td style="padding: 4px 0;"><strong>Annual Bill:</strong></td><td>${escapeHtml(formData.annualElectricityBill)}</td></tr>
                      <tr><td style="padding: 4px 0;"><strong>Annual Usage:</strong></td><td>${escapeHtml(formData.electricityUsageMWh)} MWh</td></tr>
                    </table>
                  </div>
                </div>

                <p style="margin-top: 30px; color: #9ca3af; font-size: 12px; text-align: center;">
                  Submitted via KPI Digital Audit on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}.
                </p>
              </div>
            </div>
          `,
        }),
      });

      if (!notificationResponse.ok) {
        const errorData = await notificationResponse.text();
        console.error('[Audit] Resend API error (audit notification):', errorData);
        return res.status(500).json({
          error: "Failed to send audit notification email"
        });
      }
      console.log('[Audit] Notification email sent successfully.');

      const notificationData = await notificationResponse.json();

      res.json({
        success: true,
        message: "Audit results submitted successfully",
        emailId: notificationData.id,
        eligibleGrantsCount: eligibleGrants.length
      });
    } catch (error) {
      console.error('[Audit] Error submitting audit:', error);
      res.status(500).json({
        error: "Internal server error"
      });
    }
  });

  // POST endpoint to handle contact form submissions
  app.post("/api/contact", emailLimiter, async (req, res) => {
    try {
      // Validate RESEND_API_KEY is configured
      if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY environment variable is not set');
        return res.status(500).json({
          error: "Email service is not configured. Please contact support."
        });
      }

      const {
        name,
        email,
        subject,
        message
      } = req.body;

      // Security: Validate and sanitize all inputs
      const sanitizedName = sanitizeName(name, 100);
      const sanitizedEmail = sanitizeEmail(email);
      const sanitizedSubject = sanitizeText(subject, 200);
      const sanitizedMessage = sanitizeText(message, 5000);

      // Validate required fields after sanitization
      if (!sanitizedName || !sanitizedEmail || !sanitizedSubject || !sanitizedMessage) {
        return res.status(400).json({
          error: "Invalid or missing required fields"
        });
      }

      // Security: Escape HTML in all user inputs for email
      const escapedName = escapeHtml(sanitizedName);
      const escapedEmail = escapeHtml(sanitizedEmail);
      const escapedSubject = escapeHtml(sanitizedSubject);
      const escapedMessage = escapeHtml(sanitizedMessage);

      // Send notification email to Louis
      const notificationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'KPI Digital <onboarding@resend.dev>',
          to: ['louis@kpidigital.com.au'],
          subject: `New Contact Form: ${escapedSubject} `,
          html: `
    < div style = "font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;" >
      <h2 style="color: #ea580c;" > New Contact Form Submission </h2>

        < div style = "background-color: #fef3f2; padding: 20px; border-radius: 8px; margin: 20px 0;" >
          <h3 style="margin-top: 0;" > Contact Information </h3>
            < p > <strong>Name: </strong> ${escapedName}</p >
              <p><strong>Email: </strong> ${escapedEmail}</p >
                <p><strong>Subject: </strong> ${escapedSubject}</p >
                  </div>

                  < div style = "background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;" >
                    <h3 style="margin-top: 0;" > Message </h3>
                      < p style = "white-space: pre-wrap;" > ${escapedMessage} </p>
                        </div>

                        < p style = "margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 14px;" >
                          This contact form was submitted through the KPI Digital website on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}.
  </p>
    </div>
      `,
        }),
      });

      if (!notificationResponse.ok) {
        const errorData = await notificationResponse.text();
        console.error('Resend API error (contact notification):', errorData);
        return res.status(500).json({
          error: "Failed to send contact notification"
        });
      }

      // Send confirmation email to user
      const confirmationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'KPI Digital <onboarding@resend.dev>',
          to: [sanitizedEmail],
          subject: 'Thank You for Contacting KPI Digital',
          html: `
    < div style = "font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;" >
      <h2 style="color: #ea580c;" > Thank You for Reaching Out! </h2>

        < p > Hi ${escapedName}, </p>

          < p > We've received your message and our team will review it shortly. We aim to respond to all enquiries within 24 hours.</p>

            < div style = "background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;" >
              <h3 style="margin-top: 0;" > Your Message Summary </h3>
                < p > <strong>Subject: </strong> ${escapedSubject}</p >
                  <p><strong>Message: </strong></p >
                    <p style="white-space: pre-wrap; color: #666;" > ${escapedMessage} </p>
                      </div>

                      < p > If you have any urgent questions, feel free to reply to this email or contact Louis directly at louis @kpidigital.com.au.</p>

                        < p style = "margin-top: 30px;" >
                          Best regards, <br/>
                            < strong > The KPI Digital Team </strong>
                              </p>

                              < p style = "margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 14px;" >
                                This is an automated confirmation email.Please do not reply to this email directly.
              </p>
                                  </div>
                                    `,
        }),
      });

      if (!confirmationResponse.ok) {
        const errorData = await confirmationResponse.text();
        console.error('Resend API error (contact confirmation):', errorData);
        // Don't fail the request if confirmation email fails
      }

      const notificationData = await notificationResponse.json();

      res.json({
        success: true,
        message: "Contact form submitted successfully",
        emailId: notificationData.id
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      res.status(500).json({
        error: "Internal server error"
      });
    }
  });


  // POST endpoint to notify about PDF report download
  app.post("/api/notify-report", emailLimiter, async (req, res) => {
    try {
      // Validate RESEND_API_KEY is configured
      if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY environment variable is not set');
        return res.status(500).json({
          error: "Email service is not configured. Please contact support."
        });
      }

      const {
        calculatorType,
        userEmail,
        score,
        maxScore,
        tierName,
        categories
      } = req.body;

      // Security: Validate and sanitize all inputs
      const sanitizedCalculatorType = validateCalculatorType(calculatorType);
      const sanitizedUserEmail = sanitizeEmail(userEmail);
      const sanitizedScore = sanitizeScore(score);
      const sanitizedMaxScore = sanitizeScore(maxScore);
      const sanitizedTierName = validateTierName(tierName);

      // Validate required fields after sanitization
      if (!sanitizedCalculatorType || !sanitizedUserEmail || sanitizedScore === null ||
        sanitizedMaxScore === null || !sanitizedTierName) {
        return res.status(400).json({
          error: "Invalid or missing required fields"
        });
      }

      // Security: Sanitize categories array if present
      const sanitizedCategories = categories && Array.isArray(categories)
        ? categories.slice(0, 20).map((cat: any) => ({
          name: sanitizeText(cat?.name || '', 200),
          score: sanitizeScore(cat?.score),
          maxScore: sanitizeScore(cat?.maxScore)
        })).filter(cat => cat.name && cat.score !== null && cat.maxScore !== null)
        : [];

      // Security: Escape HTML in all user inputs for email
      const escapedCalculatorType = escapeHtml(sanitizedCalculatorType);
      const escapedUserEmail = escapeHtml(sanitizedUserEmail);
      const escapedTierName = escapeHtml(sanitizedTierName);

      // Send notification email to louis@kpidigital.com.au
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'KPI Digital <onboarding@resend.dev>',
          to: ['louis@kpidigital.com.au'],
          subject: `New ${escapedCalculatorType} Assessment - ${escapedUserEmail} `,
          html: `
    < div style = "font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;" >
      <h2 style="color: #ea580c;" > New ${escapedCalculatorType} Assessment Completed </h2>

        < div style = "background-color: #fef3f2; padding: 20px; border-radius: 8px; margin: 20px 0;" >
          <h3 style="margin-top: 0;" > Client Information </h3>
            < p > <strong>Email: </strong> ${escapedUserEmail}</p >
              <p><strong>Assessment Type: </strong> ${escapedCalculatorType}</p >
                <p><strong>Score: </strong> ${sanitizedScore}/${sanitizedMaxScore} </p>
                  < p > <strong>Tier: </strong> ${escapedTierName}</p >
                    </div>

              ${sanitizedCategories.length > 0 ? `
                <h3>Category Breakdown</h3>
                <ul>
                  ${sanitizedCategories.map((cat: any) =>
            `<li><strong>${escapeHtml(cat.name)}:</strong> ${cat.score}/${cat.maxScore} points</li>`
          ).join('')}
                </ul>
              ` : ''
            }

  <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 14px;" >
    This notification was sent automatically when a client downloaded their assessment report.
              </p>
      </div>
        `,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Resend API error:', errorData);
        return res.status(500).json({
          error: "Failed to send notification email"
        });
      }

      const data = await response.json();

      res.json({
        success: true,
        message: "Notification sent successfully",
        emailId: data.id
      });
    } catch (error) {
      console.error('Error sending notification:', error);
      res.status(500).json({
        error: "Internal server error"
      });
    }
  });

  // POST endpoint to save quiz results and send email with shareable link
  app.post("/api/quiz-results", emailLimiter, async (req, res) => {
    try {
      // Validate request body
      const validationResult = insertQuizResultSchema.safeParse(req.body);

      if (!validationResult.success) {
        return res.status(400).json({
          error: "Invalid quiz result data",
          details: (validationResult.error as any).errors
        });
      }

      const quizData = validationResult.data;

      // Security: Validate and sanitize inputs
      const sanitizedUserName = sanitizeName(quizData.userName, 100);
      const sanitizedUserEmail = sanitizeEmail(quizData.userEmail);
      const sanitizedCalculatorType = validateCalculatorType(quizData.calculatorType);
      const sanitizedTier = validateTierName(quizData.tier);

      if (!sanitizedUserName || !sanitizedUserEmail || !sanitizedCalculatorType || !sanitizedTier) {
        return res.status(400).json({
          error: "Invalid or missing required fields"
        });
      }

      // Save to database
      const [result] = await db.insert(quizResults).values({
        calculatorType: sanitizedCalculatorType,
        userName: sanitizedUserName,
        userEmail: sanitizedUserEmail,
        totalScore: quizData.totalScore,
        maxScore: quizData.maxScore,
        tier: sanitizedTier,
        answers: quizData.answers,
        categoryScores: quizData.categoryScores,
      }).returning();

      // Generate shareable URL
      const baseUrl = process.env.NODE_ENV === 'production'
        ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
        : `http://localhost:5000`;

      const shareableUrl = `${baseUrl}/results/${result.id}`;

      // Security: Escape HTML for email
      const escapedName = escapeHtml(sanitizedUserName);
      const escapedUserEmail = escapeHtml(sanitizedUserEmail);
      const escapedCalculatorName = escapeHtml(sanitizedCalculatorType);
      const escapedTier = escapeHtml(sanitizedTier);

      // Send email to user with results link
      const userEmailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'KPI Digital <onboarding@resend.dev>',
          to: [sanitizedUserEmail],
          subject: `Your ${escapedCalculatorName} Results - KPI Digital`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #000;">Your ${escapedCalculatorName} Results</h2>
              
              <p>Hi ${escapedName},</p>
              
              <p>Thank you for completing the ${escapedCalculatorName} assessment. Your results are ready to view!</p>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Score:</strong> ${quizData.totalScore}/${quizData.maxScore}</p>
                <p><strong>Tier:</strong> ${escapedTier}</p>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${shareableUrl}" style="background-color: #000; color: #fff; padding: 15px 30px; text-decoration: none; border-radius: 4px; display: inline-block;">
                  View Your Full Results
                </a>
              </div>
              
              <p style="color: #666; font-size: 14px;">You can access your results anytime using this link: <a href="${shareableUrl}">${shareableUrl}</a></p>
              
              <p style="margin-top: 30px;">Ready to transform your business? Let's talk about how KPI Digital can help you achieve your goals.</p>
              
              <p style="color: #666; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
                This email was sent from KPI Digital. If you have any questions, please contact us at louis@kpidigital.com.au
              </p>
            </div>
          `,
        }),
      });

      // Send notification email to Louis
      const notificationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'KPI Digital <onboarding@resend.dev>',
          to: ['louis@kpidigital.com.au'],
          subject: `New ${escapedCalculatorName} Result - ${escapedName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #ea580c;">New ${escapedCalculatorName} Completion</h2>
              
              <div style="background-color: #fef3f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">User Information</h3>
                <p><strong>Name:</strong> ${escapedName}</p>
                <p><strong>Email:</strong> ${escapedUserEmail}</p>
              </div>

              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Results Summary</h3>
                <p><strong>Calculator:</strong> ${escapedCalculatorName}</p>
                <p><strong>Score:</strong> ${quizData.totalScore}/${quizData.maxScore}</p>
                <p><strong>Tier:</strong> ${escapedTier}</p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="${shareableUrl}" style="background-color: #ea580c; color: #fff; padding: 15px 30px; text-decoration: none; border-radius: 4px; display: inline-block;">
                  View Full Results
                </a>
              </div>

              <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 14px;">
                Results link: <a href="${shareableUrl}">${shareableUrl}</a>
              </p>
            </div>
          `,
        }),
      });

      res.json({
        success: true,
        id: result.id,
        shareableUrl,
        userEmailSent: userEmailResponse.ok,
        notificationSent: notificationResponse.ok,
      });
    } catch (error) {
      console.error('Error saving quiz results:', error);
      res.status(500).json({
        error: "Failed to save quiz results"
      });
    }
  });

  // GET endpoint to retrieve quiz results by ID
  app.get("/api/quiz-results/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const [result] = await db.select().from(quizResults).where(eq(quizResults.id, id));

      if (!result) {
        return res.status(404).json({
          error: "Quiz result not found"
        });
      }

      res.json(result);
    } catch (error) {
      console.error('Error retrieving quiz results:', error);
      res.status(500).json({
        error: "Failed to retrieve quiz results"
      });
    }
  });

  // Health check endpoint for deployment verification
  app.get("/health", (_req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({
      status: "ok",
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
