# KPI Digital - Production Deployment Checklist

## Pre-Deployment Requirements

### 1. Environment Variables Configuration
Before deploying to production, ensure the following environment variables are set:

#### **Required Variables:**
- [ ] `RESEND_API_KEY` - Get from [Resend Dashboard](https://resend.com/api-keys)
- [ ] `SESSION_SECRET` - Generate secure random string (32+ characters)
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

#### **Production Settings:**
- [ ] `NODE_ENV=production`
- [ ] `ALLOWED_ORIGINS` - Set to your production domain(s)
  - Example: `https://kpidigital.com.au,https://www.kpidigital.com.au`
- [ ] `PORT` - Usually handled automatically by hosting platform

#### **Auto-Configured (No Action Needed):**
- `DATABASE_URL` - Automatically set by Replit/Neon
- Object storage variables (automatically configured)

### 2. Security Checklist
- [x] ✅ Content Security Policy (CSP) configured (strict in production)
- [x] ✅ CORS policy configured with production whitelist
- [x] ✅ Rate limiting enabled (global + email endpoints)
- [x] ✅ Input validation and sanitization implemented
- [x] ✅ Security headers configured (HSTS, X-Frame-Options, etc.)
- [x] ✅ XSS prevention via HTML escaping
- [x] ✅ Error handling without information leakage
- [ ] Verify ALLOWED_ORIGINS includes all production domains

### 3. SEO & Meta Tags
- [x] ✅ Favicon configured (`/favicon.png`)
- [x] ✅ Home page SEO implemented
- [x] ✅ Clarity Calculator SEO implemented
- [x] ✅ Systems Calculator SEO implemented
- [x] ✅ Growth Calculator SEO implemented
- [x] ✅ Open Graph tags configured
- [x] ✅ Twitter Card tags configured
- [ ] Verify meta descriptions are compelling for all pages

### 4. Email Functionality
- [ ] Test quote form submission
- [ ] Verify dual email delivery (client + louis@kpidigital.com.au)
- [ ] Test PDF report email notifications
- [ ] Confirm email templates display correctly
- [ ] Verify error handling for failed email sends

### 5. Calculator & PDF Reports
- [ ] Test all three calculators (Clarity, Systems, Growth)
- [ ] Verify PDF generation works correctly
- [ ] Test email capture modal
- [ ] Confirm PDF download functionality
- [ ] Verify report notification emails

### 6. Mobile & Accessibility
- [ ] Test responsive design on mobile devices
- [ ] Verify touch interactions work correctly
- [ ] Test navigation on mobile
- [ ] Verify form inputs are accessible
- [ ] Test calculator progression on mobile

### 7. Performance
- [ ] Run Lighthouse audit (target: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1)
- [ ] Test page load times
- [ ] Verify image optimization
- [ ] Check for console errors/warnings
- [ ] Test under slow network conditions

### 8. Legal & Compliance
- [x] ✅ Privacy Policy page published
- [x] ✅ Terms of Service page published
- [x] ✅ Cookie Policy page published
- [ ] Verify all legal pages are accessible from footer
- [ ] Confirm copyright dates are current (2025)

## Deployment Steps

### Step 1: Final Testing
1. Test all forms (quote form, email capture)
2. Test all calculators end-to-end
3. Verify PDF downloads work
4. Test email notifications
5. Check all navigation links
6. Verify mobile experience

### Step 2: Environment Setup
1. Set all required environment variables in production:
   - `RESEND_API_KEY` - Your Resend API key
   - `EMAIL_FROM` - Verified sender email (e.g., noreply@kpidigital.com.au)
   - `SESSION_SECRET` - Secure random string (32+ chars)
   - `NODE_ENV=production`
   - `ALLOWED_ORIGINS` - Production domain(s)
2. Verify all values are correctly set
3. Test email sending with production credentials

### Step 3: Security Verification
1. Verify CSP is strict (no unsafe-inline/unsafe-eval in production)
2. Confirm CORS only allows production domains
3. Test rate limiting is active
4. Verify error messages don't leak sensitive information
5. Check security headers in browser dev tools

### Step 4: Database & Storage
1. Verify database connection works
2. Test session storage
3. Confirm object storage (if needed) is configured
4. Backup any existing data

### Step 5: Build & Deploy
**Production Deployment (Required)**
1. Build production assets: `npm run build`
2. Start production server: `npm start`
3. Server runs optimized bundles with strict security
4. Vite dev middleware is disabled in production

**Note:** The `npm run dev` command is for local development only and cannot be used in production. It always runs in development mode regardless of NODE_ENV setting.

### Step 6: Verify Deployment
1. Monitor server logs for startup errors
2. Test all critical user flows
3. Verify CSP is strict (check browser console for violations)
4. Test email functionality end-to-end
5. Check performance metrics (Core Web Vitals)

### Step 6: Post-Deployment
1. Test the live site thoroughly
2. Verify SSL/HTTPS is working
3. Test all email functionality
4. Monitor error logs
5. Check analytics integration (if applicable)

## Common Issues & Solutions

### CSP Violations
- **Issue**: Console shows CSP violations
- **Solution**: Review CSP configuration in `server/index.ts`
- **Note**: Development allows unsafe-inline/unsafe-eval for Vite

### Email Not Sending
- **Issue**: Emails fail to send
- **Solution**: Verify `RESEND_API_KEY` is set and valid
- **Check**: Review rate limiting (10 emails/hour per IP)

### CORS Errors
- **Issue**: CORS errors in production
- **Solution**: Add domain to `ALLOWED_ORIGINS` environment variable
- **Format**: `https://domain1.com,https://domain2.com`

### Rate Limiting Blocking Users
- **Issue**: Legitimate users being rate limited
- **Solution**: Adjust limits in `server/index.ts`
- **Current**: Global 1000/15min, Email 10/hour

## Monitoring & Maintenance

### What to Monitor:
1. **Error Logs**: Check for recurring errors
2. **Email Delivery**: Monitor success/failure rates
3. **Form Submissions**: Track quote requests
4. **Calculator Usage**: Monitor assessment completions
5. **Performance Metrics**: Track Core Web Vitals

### Regular Maintenance:
- Update dependencies monthly
- Review security advisories
- Monitor API usage (Resend)
- Backup database regularly
- Review and rotate secrets quarterly

## Support Contacts

- **Technical Issues**: Check server logs first
- **Email Issues**: Verify Resend API key and quota
- **Security Concerns**: Review security headers and CSP
- **Database Issues**: Check DATABASE_URL connection

## Rollback Plan

If issues occur after deployment:
1. Check error logs for specific issues
2. Verify environment variables are correct
3. Test email functionality separately
4. Revert to last known good deployment if necessary
5. Use Replit's rollback feature if available

---

**Last Updated**: October 2025
**Deployment Status**: Ready for Production ✅
