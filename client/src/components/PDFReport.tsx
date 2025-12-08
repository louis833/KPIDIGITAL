import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logoPath from '@assets/kpi_digital_logo_circle_1759287571808.png';

const BLACK = '#000000';
const DARK_GRAY = '#2D2D2D';
const MEDIUM_GRAY = '#666666';
const LIGHT_GRAY = '#E5E5E5';
const WHITE = '#FFFFFF';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: DARK_GRAY,
    backgroundColor: '#ffffff',
  },
  coverPage: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK,
  },
  coverLogo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  coverTitle: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: WHITE,
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 2,
  },
  coverSubtitle: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: WHITE,
    marginBottom: 40,
    textAlign: 'center',
  },
  coverInfo: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    marginTop: 30,
  },
  coverInfoText: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 25,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: DARK_GRAY,
    borderBottomStyle: 'solid',
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: DARK_GRAY,
  },
  pageNumber: {
    position: 'absolute',
    bottom: 30,
    right: 40,
    fontSize: 9,
    color: MEDIUM_GRAY,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: BLACK,
    marginBottom: 15,
    marginTop: 10,
  },
  subSectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: DARK_GRAY,
    marginBottom: 10,
    marginTop: 15,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 8,
    color: DARK_GRAY,
  },
  boldText: {
    fontFamily: 'Helvetica-Bold',
  },
  scoreCard: {
    backgroundColor: LIGHT_GRAY,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: BLACK,
    borderStyle: 'solid',
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  scoreLabel: {
    fontSize: 11,
    color: MEDIUM_GRAY,
  },
  scoreValue: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: BLACK,
  },
  tierBadge: {
    backgroundColor: BLACK,
    color: '#ffffff',
    padding: '8 16',
    borderRadius: 4,
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  tocItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GRAY,
    borderBottomStyle: 'solid',
  },
  tocTitle: {
    fontSize: 11,
    color: DARK_GRAY,
    flex: 1,
  },
  tocPage: {
    fontSize: 11,
    color: BLACK,
    fontFamily: 'Helvetica-Bold',
    marginLeft: 10,
  },
  questionCard: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    borderStyle: 'solid',
  },
  questionNumber: {
    fontSize: 9,
    color: BLACK,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  questionText: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: DARK_GRAY,
    marginBottom: 6,
  },
  answerText: {
    fontSize: 10,
    color: MEDIUM_GRAY,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  impactBox: {
    backgroundColor: LIGHT_GRAY,
    padding: 10,
    borderRadius: 4,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: MEDIUM_GRAY,
    borderStyle: 'solid',
  },
  impactTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: BLACK,
    marginBottom: 4,
  },
  impactText: {
    fontSize: 9,
    color: DARK_GRAY,
    lineHeight: 1.5,
  },
  solutionBox: {
    backgroundColor: DARK_GRAY,
    padding: 10,
    borderRadius: 4,
  },
  solutionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: WHITE,
    marginBottom: 4,
  },
  solutionText: {
    fontSize: 9,
    color: WHITE,
    lineHeight: 1.5,
  },
  categoryHeader: {
    backgroundColor: BLACK,
    padding: 12,
    marginBottom: 15,
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
  },
  categoryScore: {
    fontSize: 11,
    color: '#ffffff',
    marginTop: 4,
  },
  ctaBox: {
    backgroundColor: BLACK,
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 10,
  },
  ctaTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 10,
    color: '#ffffff',
    lineHeight: 1.6,
    textAlign: 'center',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bullet: {
    width: 4,
    height: 4,
    backgroundColor: BLACK,
    borderRadius: 2,
    marginRight: 8,
    marginTop: 6,
  },
  bulletText: {
    fontSize: 10,
    color: DARK_GRAY,
    flex: 1,
    lineHeight: 1.5,
  },
});

interface PDFReportProps {
  calculatorType: 'clarity' | 'systems' | 'growth';
  score: number;
  maxScore: number;
  tier: {
    name: string;
    description: string;
    impact: string;
    actions: string[];
    nextSteps: string;
  };
  categories: { name: string; score: number; maxScore: number }[];
  userEmail: string;
  date: string;
  questions: {
    id: string;
    category: string;
    question: string;
    selectedAnswer: string;
    score: number;
  }[];
}

const getCalculatorTitle = (type: string) => {
  switch (type) {
    case 'clarity': return 'Business Clarity Assessment';
    case 'systems': return 'Systems Maturity Assessment';
    case 'growth': return 'Growth Readiness Assessment';
    default: return 'Business Assessment';
  }
};

const getQuestionInsights = (calculatorType: string, questionId: string) => {
  const insights: Record<string, Record<string, { impact: string; diy: string; professional: string }>> = {
    clarity: {
      'lead-gen-1': {
        impact: 'Without knowing your lead volume, you can\'t forecast growth, allocate marketing budget effectively, or identify trends. This creates reactive decision-making instead of strategic planning.',
        diy: 'Start a simple spreadsheet tracking leads by source each week. Use Google Sheets or Excel with columns for: Date, Source, Lead Count, Notes.',
        professional: 'KPI Digital implements automated lead tracking dashboards that capture every lead source in real-time, with predictive analytics for forecasting and budget optimization.',
      },
      'lead-gen-2': {
        impact: 'Not knowing your cost per lead means you\'re gambling with your marketing budget. You might be overspending on poor channels while underinvesting in winners.',
        diy: 'Calculate monthly marketing spend divided by total leads. Track this by channel (Google Ads, Facebook, referrals) to identify your best performers.',
        professional: 'KPI Digital builds multi-channel attribution systems that track every dollar spent and lead generated, automatically optimizing budget allocation across channels.',
      },
      'lead-engage-1': {
        impact: 'Your booking rate reveals how well leads convert to opportunities. Low rates mean wasted lead gen spend, while high rates validate your messaging and process.',
        diy: 'Track total leads vs. booked appointments weekly. Add notes on what\'s working. Aim for improvement patterns over time.',
        professional: 'KPI Digital creates automated booking funnels with AI-powered lead qualification, follow-up sequences, and conversion optimization that typically improves booking rates 40-60%.',
      },
      'lead-engage-2': {
        impact: 'No-shows directly impact revenue and waste your team\'s time. Without tracking, you can\'t implement prevention strategies or recover lost opportunities.',
        diy: 'Record show-up rates and implement reminder systems (email/SMS 24hrs before). Follow up with no-shows within 1 hour to reschedule.',
        professional: 'KPI Digital deploys automated reminder sequences, AI-powered reschedule systems, and no-show recovery campaigns that reduce no-shows by 50-70%.',
      },
      'sales-conv-1': {
        impact: 'Your close rate is your business\'s most powerful lever. A 10% improvement can double revenue without any additional marketing spend.',
        diy: 'Track calls/demos vs. closed deals. Record common objections and successful responses. Refine your pitch based on patterns.',
        professional: 'KPI Digital implements AI call analysis, automated CRM tracking, and data-driven sales process optimization that typically improves close rates 30-50%.',
      },
      'sales-conv-2': {
        impact: 'Without a repeatable sales process, your results depend on mood, energy, and luck. Systematization creates predictable revenue and easier team scaling.',
        diy: 'Document your best sales calls. Create a simple script or checklist. Train your team on the proven process.',
        professional: 'KPI Digital builds complete sales playbooks with CRM automation, call scripts, objection handling frameworks, and continuous optimization based on conversion data.',
      },
      'offer-value-1': {
        impact: 'Not knowing these numbers prevents strategic pricing, upsell opportunities, and accurate forecasting. You\'re leaving money on the table with every sale.',
        diy: 'Calculate average transaction value and customer lifetime value manually. Track repeat business rates and upsell percentages.',
        professional: 'KPI Digital creates automated revenue analytics with customer segmentation, lifetime value tracking, and predictive modeling to maximize per-customer revenue.',
      },
      'offer-value-2': {
        impact: 'Systematic upsells can increase revenue 30-50% without acquiring new customers. Missing this means you\'re doing the hard work (customer acquisition) without maximizing the return.',
        diy: 'List complementary services/products. Create simple upsell scripts. Train team to mention relevant add-ons during sales process.',
        professional: 'KPI Digital designs AI-powered upsell engines that recommend perfect timing and products based on customer data, purchase history, and behavioral patterns.',
      },
      'cash-collected-1': {
        impact: 'Cash flow kills more businesses than profitability issues. Not tracking collection vs. contract means you might be profitable on paper but broke in reality.',
        diy: 'Track invoiced amount vs. collected amount monthly. Identify patterns in payment delays. Negotiate better payment terms with high-risk clients.',
        professional: 'KPI Digital implements automated invoicing systems with payment reminders, multiple payment options, and cash flow forecasting that improves collection rates 25-40%.',
      },
      'cash-collected-2': {
        impact: 'Outstanding receivables are dead money. Without tracking and follow-up systems, you\'re essentially giving interest-free loans to clients while struggling with cash flow.',
        diy: 'Create an aging receivables report. Implement systematic follow-up (7 days, 14 days, 30 days overdue). Consider payment plans for large amounts.',
        professional: 'KPI Digital deploys automated collections workflows with AI-powered payment prediction, smart follow-up sequences, and integrated payment solutions.',
      },
      'bottleneck-1': {
        impact: 'Your bottleneck determines your growth ceiling. Until you identify and fix it, all other efforts are limited by this constraint. You\'re working hard but not seeing proportional results.',
        diy: 'Map your business process from lead to cash. Time each step. The longest/most problematic step is usually your bottleneck.',
        professional: 'KPI Digital conducts comprehensive business analysis with process mapping, data analytics, and constraint identification to pinpoint exact bottlenecks and growth opportunities.',
      },
      'bottleneck-2': {
        impact: 'This question determines your growth strategy. Wrong focus (getting more leads when conversion is the issue) wastes time and money. Data-driven focus multiplies results.',
        diy: 'Calculate: Lead volume × Conversion rate × Average price. Determine which lever (more leads, better conversion, or higher prices) has the most improvement potential.',
        professional: 'KPI Digital provides complete business intelligence dashboards that automatically identify your highest-leverage opportunities and guide strategic decision-making.',
      },
    },
    systems: {
      'sales-leads-1': {
        impact: 'Manual lead management means inconsistent follow-up, lost opportunities, and sales team burnout. Every manual process is a point of failure and limits your scale.',
        diy: 'Implement a basic CRM (HubSpot free tier or similar). Create simple lead scoring rules based on engagement level.',
        professional: 'KPI Digital builds AI-powered lead scoring systems that automatically prioritize leads, trigger follow-up sequences, and optimize team focus on highest-probability opportunities.',
      },
      'sales-leads-2': {
        impact: 'Without CRM automation, your team wastes 30-40% of their time on admin work instead of selling. Data entry errors lead to lost follow-ups and missed revenue.',
        diy: 'Use CRM automation features: auto-logging emails, task creation, basic workflows. Start with one process (like new lead assignment).',
        professional: 'KPI Digital creates complete sales automation systems: lead capture, enrichment, routing, follow-up sequences, and pipeline management with AI-powered insights.',
      },
      'sales-leads-3': {
        impact: 'Call recording provides training gold, protects against disputes, and identifies winning sales patterns. Without it, you\'re flying blind on your most important revenue activity.',
        diy: 'Use tools like Zoom recording or basic call recording apps. Review calls weekly to identify patterns and improve scripts.',
        professional: 'KPI Digital implements AI call analysis that automatically identifies successful patterns, objection handling, sentiment analysis, and provides real-time coaching.',
      },
      'sales-leads-4': {
        impact: 'Manual proposal generation costs hours per proposal and creates inconsistency. Slow proposals lose deals to faster competitors. Each delay is lost revenue.',
        diy: 'Create proposal templates in Google Docs or Canva. Build a library of reusable sections. Use merge fields for personalization.',
        professional: 'KPI Digital builds automated proposal systems that generate customized proposals in minutes, track engagement, and integrate with e-signature and payment systems.',
      },
      'sales-leads-5': {
        impact: 'Without pipeline tracking, you can\'t forecast revenue, identify stuck deals, or optimize your sales process. You\'re reactive instead of proactive.',
        diy: 'Use a simple CRM or spreadsheet to track deal stages, values, and close dates. Review pipeline weekly to identify patterns.',
        professional: 'KPI Digital implements AI-powered pipeline management with predictive forecasting, deal health scoring, and automated next-step recommendations.',
      },
      'marketing-1': {
        impact: 'Manual content creation limits your marketing reach and consistency. Without AI assistance, you\'re competing with one hand tied behind your back.',
        diy: 'Use ChatGPT or similar tools to draft content. Create templates and style guides for consistency.',
        professional: 'KPI Digital builds custom AI content engines trained on your brand voice, automating social media, email campaigns, and website content at scale.',
      },
      'marketing-2': {
        impact: 'Without predictive analytics, you\'re always looking backward. You miss opportunities to capitalize on trends or prevent problems before they impact revenue.',
        diy: 'Track historical patterns in spreadsheets. Look for seasonal trends and leading indicators of performance.',
        professional: 'KPI Digital deploys AI-powered analytics that predict campaign performance, identify growth opportunities, and automatically optimize marketing spend.',
      },
      'marketing-3': {
        impact: 'Without 24/7 lead response, you lose deals to faster competitors. Every hour delay in response reduces conversion rates by 30-50%.',
        diy: 'Set up basic chatbot using tools like ManyChat or Chatfuel. Create FAQ responses and simple qualification flows.',
        professional: 'KPI Digital creates intelligent AI chatbots that qualify leads, book appointments, answer complex questions, and seamlessly hand off to your team.',
      },
      'marketing-4': {
        impact: 'Not tracking ROI means you\'re gambling with marketing budget. You might be overspending on poor channels while starving winners.',
        diy: 'Track spend vs revenue by channel in spreadsheets. Calculate cost per acquisition and customer lifetime value manually.',
        professional: 'KPI Digital implements advanced attribution systems with multi-touch tracking, real-time ROI dashboards, and automatic budget optimization.',
      },
      'marketing-5': {
        impact: 'Email marketing automation is 50x more cost-effective than manual outreach. Without it, you\'re leaving massive revenue on the table.',
        diy: 'Use Mailchimp or similar tools. Create basic welcome sequences and monthly newsletters. Segment by customer behavior.',
        professional: 'KPI Digital builds sophisticated email automation with AI-powered segmentation, personalization, and send-time optimization that typically 3-5x email revenue.',
      },
      'delivery-1': {
        impact: 'Manual onboarding creates inconsistent client experiences and eats team time. Each new client becomes a project instead of a process.',
        diy: 'Create onboarding checklists and templates. Use tools like Trello or Asana to track client setup progress.',
        professional: 'KPI Digital builds automated onboarding workflows with client portals, progress tracking, and AI-powered personalization for exceptional experiences at scale.',
      },
      'delivery-2': {
        impact: 'Without AI quality control, you rely on human oversight which is inconsistent and doesn\'t scale. Quality issues damage reputation and increase costs.',
        diy: 'Create detailed checklists and SOPs. Implement peer review processes. Track common errors and create prevention strategies.',
        professional: 'KPI Digital implements AI-powered quality systems that automatically check work, identify issues before delivery, and provide real-time coaching.',
      },
      'delivery-3': {
        impact: 'Client portals reduce support requests by 60-80% and improve satisfaction. Without them, clients feel in the dark and bombard you with questions.',
        diy: 'Use tools like Google Drive with organized folder structures. Create weekly update emails with project status.',
        professional: 'KPI Digital builds custom client portals with real-time updates, document sharing, messaging, and self-service capabilities.',
      },
      'delivery-4': {
        impact: 'Manual scheduling wastes 5-10 hours per week and creates conflicts. Every scheduling error damages client relationships.',
        diy: 'Use Calendly or similar tools. Set up team scheduling policies. Block focus time to prevent over-booking.',
        professional: 'KPI Digital creates intelligent scheduling systems with AI optimization, conflict prevention, travel time calculation, and automatic rescheduling.',
      },
      'delivery-5': {
        impact: 'Feedback collection is the fastest path to improvement. Without systematic collection and analysis, you\'re guessing at what clients want.',
        diy: 'Send post-project surveys via Google Forms. Track NPS scores. Review feedback monthly and identify patterns.',
        professional: 'KPI Digital implements automated feedback systems with AI sentiment analysis, trend identification, and action item generation.',
      },
      'finance-1': {
        impact: 'AI forecasting can predict cash flow 90+ days out with 85-95% accuracy. Without it, you\'re constantly surprised by cash shortages.',
        diy: 'Build cash flow projections in Excel based on historical patterns. Update weekly with actual vs projected.',
        professional: 'KPI Digital deploys AI forecasting engines that predict revenue, expenses, and cash flow with scenario planning and early warning systems.',
      },
      'finance-2': {
        impact: 'Manual invoicing delays cash collection and creates errors. Each manual invoice costs 15-30 minutes of admin time.',
        diy: 'Use QuickBooks or Xero with automatic recurring invoices. Set up payment reminders and online payment options.',
        professional: 'KPI Digital builds complete invoicing automation with smart payment terms, automated follow-up, and integration with project delivery systems.',
      },
      'finance-3': {
        impact: 'Fraud and errors cost businesses 5% of revenue on average. AI detection catches issues human eyes miss, protecting your bottom line.',
        diy: 'Create expense approval workflows. Regularly review reports for unusual patterns. Use segregation of duties.',
        professional: 'KPI Digital implements AI-powered anomaly detection that identifies fraud, errors, and inefficiencies automatically with real-time alerts.',
      },
      'finance-4': {
        impact: 'Manual expense tracking wastes time and creates poor data for decision-making. Real-time tracking reveals spending patterns and savings opportunities.',
        diy: 'Use expense tracking apps like Expensify. Categorize all expenses. Review spending weekly by category.',
        professional: 'KPI Digital creates automated expense management with receipt scanning, categorization, budget alerts, and spending optimization recommendations.',
      },
      'people-1': {
        impact: 'Team productivity tools can increase output 30-50% while reducing burnout. Without them, you\'re asking people to compete with inadequate tools.',
        diy: 'Implement project management tools (Asana, Monday). Use time tracking. Create productivity dashboards.',
        professional: 'KPI Digital deploys AI productivity suites with smart task prioritization, workload balancing, and burnout prevention algorithms.',
      },
      'people-2': {
        impact: 'Data-driven performance tracking removes bias and creates fairness. It also identifies top performers and improvement opportunities others miss.',
        diy: 'Track key metrics per person. Create monthly scorecards. Hold regular one-on-ones to discuss performance data.',
        professional: 'KPI Digital builds performance analytics systems with AI-powered insights, peer benchmarking, and automated coaching recommendations.',
      },
      'people-3': {
        impact: 'Automated training scales your expertise without your time. Each manual training session costs hours you could spend on revenue activities.',
        diy: 'Record training videos. Create SOPs and checklists. Use tools like Loom for screen recordings.',
        professional: 'KPI Digital creates AI-powered training platforms with personalized learning paths, skill assessments, and just-in-time training delivery.',
      },
      'people-4': {
        impact: 'Automated workflows eliminate 60-80% of repetitive tasks. Your team can focus on high-value work instead of admin.',
        diy: 'Document repetitive processes. Use Zapier or Make.com for simple automations. Start with email and data entry tasks.',
        professional: 'KPI Digital builds comprehensive workflow automation with AI-powered decision making, exception handling, and continuous optimization.',
      },
      'people-5': {
        impact: 'Skills gap analysis reveals training needs before performance suffers. Without it, you discover gaps when mistakes happen.',
        diy: 'Create skills matrices. Have team members self-assess. Identify training priorities based on business needs.',
        professional: 'KPI Digital implements AI skills analysis that identifies gaps, recommends training, tracks skill development, and predicts future needs.',
      },
      'tech-1': {
        impact: 'API integration eliminates manual data transfer and reduces errors by 95%. Each manual transfer is a potential mistake and wasted time.',
        diy: 'Use Zapier or Make.com for no-code integrations. Connect your most-used tools first (CRM to email, accounting to banking).',
        professional: 'KPI Digital builds custom API integrations with error handling, data validation, and real-time synchronization across all your systems.',
      },
      'tech-2': {
        impact: 'Dirty data costs businesses 15-25% of revenue through bad decisions and inefficiency. AI cleaning ensures reliable insights.',
        diy: 'Create data entry standards. Regularly audit for duplicates and errors. Use Excel functions to standardize formats.',
        professional: 'KPI Digital deploys AI data cleaning systems that automatically identify, correct, and prevent data quality issues in real-time.',
      },
      'tech-3': {
        impact: 'Predictive dashboards turn data into foresight. You can prevent problems and seize opportunities instead of reacting to events.',
        diy: 'Build dashboards in Google Sheets or Tableau. Track leading indicators. Create if-then alerts for key thresholds.',
        professional: 'KPI Digital creates AI-powered predictive dashboards with machine learning forecasts, anomaly detection, and automated action recommendations.',
      },
      'tech-4': {
        impact: 'Without disaster recovery, a system failure could destroy your business. Each hour of downtime costs revenue and damages reputation.',
        diy: 'Implement cloud backups (Google Drive, Dropbox). Document system dependencies. Create manual recovery procedures.',
        professional: 'KPI Digital builds comprehensive disaster recovery systems with automated backups, failover systems, and guaranteed recovery time objectives.',
      },
    },
    growth: {
      'market-pos-1': {
        impact: 'Without knowing your market position, you can\'t develop effective growth strategies. You might be fighting for scraps in a saturated market when blue ocean opportunities exist.',
        diy: 'Research competitors, estimate market size, calculate your share. Identify underserved niches or geographic areas.',
        professional: 'KPI Digital conducts comprehensive market analysis with competitive intelligence, market sizing, positioning strategy, and growth opportunity identification.',
      },
      'market-pos-2': {
        impact: 'Generic positioning means competing on price. Clear differentiation commands premium pricing and attracts ideal clients who value your unique strengths.',
        diy: 'List your unique strengths. Survey customers on why they chose you. Create a simple unique value proposition statement.',
        professional: 'KPI Digital develops complete positioning strategy with brand differentiation, messaging frameworks, and go-to-market plans that establish market leadership.',
      },
      'market-pos-3': {
        impact: 'Consistent demand generation is the foundation of predictable growth. Without systematic lead generation, revenue is unpredictable and stressful.',
        diy: 'Create content marketing plan. Implement basic SEO. Run consistent social media and paid advertising campaigns.',
        professional: 'KPI Digital builds multi-channel demand generation engines with AI optimization, automated nurturing, and predictable pipeline creation.',
      },
      'market-pos-4': {
        impact: 'Your unique value proposition determines premium pricing power. Generic offerings compete on price, unique solutions command premium.',
        diy: 'Identify what makes you different. Interview your best clients. Develop clear messaging around your unique strengths.',
        professional: 'KPI Digital creates compelling UVPs through market research, competitive analysis, and customer insight that positions you as the obvious choice.',
      },
      'market-pos-5': {
        impact: 'Strategic partnerships can 10x your reach overnight. Without them, you\'re limited to organic growth which is slow and expensive.',
        diy: 'Identify complementary businesses. Reach out with partnership proposals. Start with simple referral agreements.',
        professional: 'KPI Digital develops strategic partnership strategies with joint ventures, co-marketing, and revenue-sharing models that accelerate growth.',
      },
      'ops-scale-1': {
        impact: 'Undocumented processes can\'t be improved or delegated. They live in people\'s heads, creating single points of failure.',
        diy: 'Document your core processes using simple flowcharts. Create step-by-step SOPs. Store in accessible shared drive.',
        professional: 'KPI Digital creates comprehensive process documentation with video tutorials, decision trees, and automated workflow systems.',
      },
      'ops-scale-2': {
        impact: 'Team capacity determines growth ceiling. Without scalable team structure, you hit a growth wall when you run out of people.',
        diy: 'Forecast team needs based on revenue targets. Create hiring plans. Implement cross-training to increase flexibility.',
        professional: 'KPI Digital designs scalable organizational structures with capacity planning, hiring strategies, and succession planning.',
      },
      'ops-scale-3': {
        impact: 'Inconsistent quality damages reputation and limits growth. Each quality issue costs 10x to fix than preventing upfront.',
        diy: 'Create quality checklists. Implement peer review. Track defects and implement corrective actions.',
        professional: 'KPI Digital builds quality management systems with AI monitoring, continuous improvement processes, and certification-ready documentation.',
      },
      'ops-scale-4': {
        impact: 'Supply chain or vendor issues can halt operations overnight. Optimization and backup suppliers protect against disruption.',
        diy: 'Map your critical suppliers. Identify backup options. Negotiate better terms based on volume forecasts.',
        professional: 'KPI Digital optimizes supply chain with vendor management systems, risk mitigation, and strategic sourcing strategies.',
      },
      'ops-scale-5': {
        impact: 'Technology infrastructure determines your growth ceiling. Outdated systems limit speed, create errors, and frustrate teams.',
        diy: 'Audit current systems. Identify bottlenecks. Upgrade most critical systems first based on ROI.',
        professional: 'KPI Digital designs future-ready technology stacks with scalability, integration, and automation at the core.',
      },
      'finance-health-1': {
        impact: 'Profitability is the difference between sustainable growth and eventual failure. Without strong margins, growth actually increases risk.',
        diy: 'Calculate gross and net profit margins. Identify most profitable services. Focus on improving margins before scaling.',
        professional: 'KPI Digital implements profitability analytics with service-level analysis, pricing optimization, and cost reduction strategies.',
      },
      'finance-health-2': {
        impact: 'Cash reserves are your growth fuel and safety net. Without them, one bad month can destroy years of work.',
        diy: 'Build 3-6 months operating expenses in reserve. Automate savings from each payment. Track cash runway monthly.',
        professional: 'KPI Digital creates cash management strategies with automated reserves, investment optimization, and capital efficiency planning.',
      },
      'finance-health-3': {
        impact: 'Access to capital determines growth speed. Without funding options, you\'re limited to organic growth which may be too slow.',
        diy: 'Build relationships with lenders. Maintain strong personal credit. Document financials to become "bankable".',
        professional: 'KPI Digital connects you with capital sources, prepares funding materials, and negotiates optimal terms for growth capital.',
      },
      'finance-health-4': {
        impact: 'Financial metrics visibility enables informed decisions. Flying blind leads to cash crunches, missed opportunities, and poor strategic choices.',
        diy: 'Create monthly financial dashboard. Track key metrics: gross margin, net profit, cash flow, DSO, inventory turns.',
        professional: 'KPI Digital builds comprehensive financial analytics with real-time dashboards, variance analysis, and predictive modeling.',
      },
      'finance-health-5': {
        impact: 'Pricing strategy determines profitability and positioning. Underpricing leaves money on the table, overpricing loses deals.',
        diy: 'Research competitor pricing. Calculate true costs including overhead. Test price increases with new customers.',
        professional: 'KPI Digital develops data-driven pricing strategies with value-based pricing, dynamic pricing, and continuous optimization.',
      },
      'team-lead-1': {
        impact: 'Hiring capability determines growth speed. Can\'t grow faster than you can hire and train quality team members.',
        diy: 'Create hiring pipeline. Develop interview process. Build employer brand through content and culture.',
        professional: 'KPI Digital creates recruitment systems with talent pipelines, assessment frameworks, and employer branding strategies.',
      },
      'team-lead-2': {
        impact: 'Effective delegation multiplies your impact. Without it, you\'re the bottleneck limiting business growth.',
        diy: 'Identify tasks only you can do. Train team on everything else. Implement approval workflows with clear authority levels.',
        professional: 'KPI Digital develops delegation frameworks with decision-making authority matrices, training systems, and accountability structures.',
      },
      'team-lead-3': {
        impact: 'Leadership skills determine how well your team performs. Poor leadership creates turnover, low morale, and mediocre results.',
        diy: 'Invest in leadership training. Read management books. Get coaching or join peer groups for accountability.',
        professional: 'KPI Digital provides executive coaching, leadership development programs, and peer advisory groups for continuous growth.',
      },
      'team-lead-4': {
        impact: 'Team alignment determines execution speed. Misaligned teams work hard but pull in different directions, wasting effort.',
        diy: 'Set clear goals and metrics. Hold regular team meetings. Use project management tools for transparency.',
        professional: 'KPI Digital implements alignment systems with OKRs, communication frameworks, and performance management that drive execution.',
      },
      'team-lead-5': {
        impact: 'Culture and retention directly impact profitability. Replacing team members costs 6-9 months salary plus lost productivity.',
        diy: 'Conduct stay interviews. Address pain points. Create career paths. Celebrate wins and recognize contributions.',
        professional: 'KPI Digital builds high-performance cultures with engagement systems, retention strategies, and leadership development.',
      },
      'strategic-plan-1': {
        impact: 'Without growth targets, you drift instead of drive. Specific targets focus effort and enable measurement.',
        diy: 'Set 1-year and 3-year revenue targets. Break down into quarterly milestones. Track progress monthly.',
        professional: 'KPI Digital creates comprehensive growth strategies with market analysis, competitive positioning, and detailed execution roadmaps.',
      },
      'strategic-plan-2': {
        impact: 'Market expansion opportunities may offer faster growth than current markets. Without analysis, you miss these opportunities.',
        diy: 'Research adjacent markets. Talk to clients about their other needs. Test new offerings with existing clients.',
        professional: 'KPI Digital conducts market expansion analysis with sizing, entry strategies, and risk mitigation for new market success.',
      },
      'strategic-plan-3': {
        impact: 'Innovation pipeline ensures future revenue streams. Without it, competitors will eventually make your offerings obsolete.',
        diy: 'Schedule quarterly innovation sessions. Track industry trends. Test new ideas with small pilot programs.',
        professional: 'KPI Digital builds innovation frameworks with idea generation, validation processes, and systematic new product development.',
      },
      'strategic-plan-4': {
        impact: 'Competitive strategy determines market share gains. Without strategy, you react to competitors instead of out-maneuvering them.',
        diy: 'Monitor competitor moves. Identify their weaknesses. Double down on your strengths where they\'re weak.',
        professional: 'KPI Digital develops competitive strategies with market intelligence, positioning tactics, and systematic competitive advantage building.',
      },
      'strategic-plan-5': {
        impact: 'Strategic review ensures you\'re on track and adapting to change. Without it, you execute outdated strategies in changed markets.',
        diy: 'Conduct quarterly strategy reviews. Assess what\'s working. Adjust tactics based on results and market changes.',
        professional: 'KPI Digital facilitates strategic planning sessions with market analysis, scenario planning, and agile strategy development.',
      },
    },
  };

  return insights[calculatorType]?.[questionId] || {
    impact: 'This capability directly impacts your business performance and competitive position. Understanding and improving this area creates measurable advantages in efficiency, profitability, or growth potential.',
    diy: 'Begin by assessing your current state in this area. Document what\'s working and what isn\'t. Research best practices and implement improvements incrementally while measuring results.',
    professional: 'KPI Digital can conduct a comprehensive analysis of this area, benchmark against industry leaders, and implement proven systems with ongoing optimization to maximize impact.',
  };
};

export function PDFReport({
  calculatorType,
  score,
  maxScore,
  tier,
  categories,
  userEmail,
  date,
  questions,
}: PDFReportProps) {
  const calculatorTitle = getCalculatorTitle(calculatorType);
  const percentage = Math.round((score / maxScore) * 100);

  const groupedQuestions = questions.reduce((acc, q) => {
    if (!acc[q.category]) {
      acc[q.category] = [];
    }
    acc[q.category].push(q);
    return acc;
  }, {} as Record<string, typeof questions>);

  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.coverPage}>
        <View style={{ alignItems: 'center' }}>
          <Image src={logoPath} style={{ width: 100, height: 100, marginBottom: 30 }} />
          <Text style={styles.coverSubtitle}>{calculatorTitle}</Text>
          
          <View style={styles.coverInfo}>
            <Text style={styles.coverInfoText}>Report Generated: {date}</Text>
            <Text style={styles.coverInfoText}>Your Score: {score}/{maxScore} ({percentage}%)</Text>
            <Text style={styles.coverInfoText}>Assessment Tier: {tier.name}</Text>
          </View>
        </View>
      </Page>

      {/* Table of Contents */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={logoPath} style={{ width: 40, height: 40 }} />
        </View>

        <Text style={styles.sectionTitle}>Table of Contents</Text>
        
        <View style={{ marginTop: 20 }}>
          <View style={styles.tocItem}>
            <Text style={styles.tocTitle}>Executive Summary</Text>
            <Text style={styles.tocPage}>3</Text>
          </View>
          
          <View style={styles.tocItem}>
            <Text style={styles.tocTitle}>Your Assessment Results</Text>
            <Text style={styles.tocPage}>3</Text>
          </View>

          <View style={styles.tocItem}>
            <Text style={styles.tocTitle}>Question-by-Question Analysis</Text>
            <Text style={styles.tocPage}>4</Text>
          </View>

          {Object.keys(groupedQuestions).map((category, idx) => (
            <View key={category} style={[styles.tocItem, { marginLeft: 15 }]}>
              <Text style={styles.tocTitle}>{category}</Text>
              <Text style={styles.tocPage}>{4 + idx}</Text>
            </View>
          ))}

          <View style={styles.tocItem}>
            <Text style={styles.tocTitle}>Next Steps & Recommendations</Text>
            <Text style={styles.tocPage}>{4 + Object.keys(groupedQuestions).length}</Text>
          </View>

          <View style={styles.tocItem}>
            <Text style={styles.tocTitle}>Work With KPI Digital</Text>
            <Text style={styles.tocPage}>{5 + Object.keys(groupedQuestions).length}</Text>
          </View>
        </View>

        <Text style={styles.pageNumber}>Page 2</Text>
      </Page>

      {/* Executive Summary */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={logoPath} style={{ width: 40, height: 40 }} />
        </View>

        <Text style={styles.sectionTitle}>Executive Summary</Text>
        
        <View style={styles.scoreCard}>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Your Score:</Text>
            <Text style={styles.scoreValue}>{score} / {maxScore} ({percentage}%)</Text>
          </View>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Assessment Tier:</Text>
            <Text style={styles.scoreValue}>{tier.name}</Text>
          </View>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Report Date:</Text>
            <Text style={styles.scoreValue}>{date}</Text>
          </View>
        </View>

        <Text style={styles.subSectionTitle}>{tier.name}: {tier.description}</Text>
        <Text style={styles.text}>{tier.impact}</Text>

        <Text style={styles.subSectionTitle}>How This Affects Your Business:</Text>
        {tier.actions.map((action, idx) => (
          <View key={idx} style={styles.bulletPoint}>
            <View style={styles.bullet} />
            <Text style={styles.bulletText}>{action}</Text>
          </View>
        ))}

        <Text style={styles.subSectionTitle}>Category Breakdown:</Text>
        {categories.map((cat, idx) => {
          const catPercentage = Math.round((cat.score / cat.maxScore) * 100);
          return (
            <View key={idx} style={styles.scoreRow}>
              <Text style={styles.scoreLabel}>{cat.name}:</Text>
              <Text style={styles.scoreValue}>{cat.score}/{cat.maxScore} ({catPercentage}%)</Text>
            </View>
          );
        })}

        <Text style={styles.pageNumber}>Page 3</Text>
      </Page>

      {/* Question Analysis by Category */}
      {Object.entries(groupedQuestions).map(([category, categoryQuestions], categoryIdx) => (
        <Page key={category} size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.headerText}>KPI DIGITAL</Text>
          </View>

          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>{category}</Text>
            <Text style={styles.categoryScore}>
              Category Score: {categories.find(c => c.name === category)?.score || 0} / {categories.find(c => c.name === category)?.maxScore || 0}
            </Text>
          </View>

          {categoryQuestions.map((q, qIdx) => {
            const insights = getQuestionInsights(calculatorType, q.id);
            
            return (
              <View key={q.id} style={styles.questionCard}>
                <Text style={styles.questionNumber}>Question {categoryQuestions.indexOf(q) + 1}</Text>
                <Text style={styles.questionText}>{q.question}</Text>
                <Text style={styles.answerText}>Your Answer: {q.selectedAnswer} (Score: {q.score})</Text>
                
                <View style={styles.impactBox}>
                  <Text style={styles.impactTitle}>Business Impact:</Text>
                  <Text style={styles.impactText}>{insights.impact}</Text>
                </View>

                <View style={styles.solutionBox}>
                  <Text style={styles.solutionTitle}>DIY Approach:</Text>
                  <Text style={styles.solutionText}>{insights.diy}</Text>
                </View>

                <View style={[styles.solutionBox, { backgroundColor: '#E0F2FE', marginTop: 6 }]}>
                  <Text style={[styles.solutionTitle, { color: '#0C4A6E' }]}>Professional Solution (KPI Digital):</Text>
                  <Text style={[styles.solutionText, { color: '#0C4A6E' }]}>{insights.professional}</Text>
                </View>
              </View>
            );
          })}

          <Text style={styles.pageNumber}>Page {4 + categoryIdx}</Text>
        </Page>
      ))}

      {/* Next Steps & Recommendations */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={logoPath} style={{ width: 40, height: 40 }} />
        </View>

        <Text style={styles.sectionTitle}>Your Next Steps</Text>
        <Text style={styles.text}><Text style={styles.boldText}>Immediate Action: </Text>{tier.nextSteps}</Text>

        <Text style={styles.subSectionTitle}>Recommended Implementation Path:</Text>
        <View style={styles.bulletPoint}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>Start with your lowest-scoring categories - these represent your biggest opportunities</Text>
        </View>
        <View style={styles.bulletPoint}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>Implement DIY solutions for quick wins while planning professional systems</Text>
        </View>
        <View style={styles.bulletPoint}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>Focus on one category at a time to avoid overwhelm and ensure proper implementation</Text>
        </View>
        <View style={styles.bulletPoint}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>Track your progress monthly and reassess quarterly</Text>
        </View>

        <View style={styles.ctaBox}>
          <Text style={styles.ctaTitle}>Ready to Transform Your Business?</Text>
          <Text style={styles.ctaText}>
            KPI Digital specializes in helping trades businesses implement the exact systems and strategies outlined in this report.
          </Text>
          <Text style={[styles.ctaText, { marginTop: 15 }]}>
            We've helped hundreds of trades businesses achieve clarity, build systems, and unlock sustainable growth.
          </Text>
          <Text style={[styles.ctaText, { marginTop: 15, fontFamily: 'Helvetica-Bold', fontSize: 12 }]}>
            Contact Louis at louis@kpidigital.com.au
          </Text>
          <Text style={[styles.ctaText, { marginTop: 5 }]}>
            Let's discuss how we can accelerate your business transformation.
          </Text>
        </View>

        <Text style={styles.pageNumber}>Page {4 + Object.keys(groupedQuestions).length}</Text>
      </Page>

      {/* Final Page - Work With Us */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={logoPath} style={{ width: 40, height: 40 }} />
        </View>

        <Text style={styles.sectionTitle}>Work With KPI Digital</Text>
        
        <Text style={styles.subSectionTitle}>Why Choose KPI Digital?</Text>
        <View style={styles.bulletPoint}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}><Text style={styles.boldText}>Trades-Specific Expertise:</Text> We understand your industry's unique challenges and opportunities</Text>
        </View>
        <View style={styles.bulletPoint}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}><Text style={styles.boldText}>Proven Systems:</Text> Our solutions are battle-tested across hundreds of trades businesses</Text>
        </View>
        <View style={styles.bulletPoint}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}><Text style={styles.boldText}>Data-Driven Results:</Text> We focus on metrics that matter - revenue, profit, and cash flow</Text>
        </View>
        <View style={styles.bulletPoint}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}><Text style={styles.boldText}>End-to-End Support:</Text> From strategy to implementation to ongoing optimization</Text>
        </View>

        <Text style={styles.subSectionTitle}>Our Services Include:</Text>
        <Text style={styles.text}><Text style={styles.boldText}>• Business Clarity Programs:</Text> Get complete visibility into your numbers and identify your biggest opportunities</Text>
        <Text style={styles.text}><Text style={styles.boldText}>• Systems Implementation:</Text> Build automated workflows that run your business while you focus on growth</Text>
        <Text style={styles.text}><Text style={styles.boldText}>• Growth Acceleration:</Text> Scale profitably with proven strategies and systems</Text>
        <Text style={styles.text}><Text style={styles.boldText}>• Technology Integration:</Text> Implement AI-powered tools that give you competitive advantage</Text>

        <Text style={styles.subSectionTitle}>What to Expect:</Text>
        <Text style={styles.text}>
          Our engagement starts with a deep-dive analysis of your business, followed by a custom implementation roadmap. 
          We work alongside you to build and optimize systems, ensuring sustainable results long after our engagement.
        </Text>

        <Text style={styles.subSectionTitle}>Next Steps:</Text>
        <Text style={styles.text}>
          1. Email Louis at <Text style={[styles.boldText, { color: BLACK }]}>louis@kpidigital.com.au</Text> with this report
        </Text>
        <Text style={styles.text}>
          2. Schedule a complimentary strategy session to discuss your specific situation
        </Text>
        <Text style={styles.text}>
          3. Receive a custom proposal outlining how we'll help you achieve your goals
        </Text>

        <View style={[styles.ctaBox, { marginTop: 30 }]}>
          <Text style={[styles.ctaText, { fontSize: 11 }]}>
            Your assessment tier: <Text style={styles.boldText}>{tier.name}</Text>
          </Text>
          <Text style={[styles.ctaText, { marginTop: 10 }]}>
            This report was generated on {date} for {userEmail}
          </Text>
          <Text style={[styles.ctaText, { marginTop: 15, fontSize: 8 }]}>
            © {new Date().getFullYear()} KPI Digital. All rights reserved.
          </Text>
        </View>

        <Text style={styles.pageNumber}>Page {5 + Object.keys(groupedQuestions).length}</Text>
      </Page>
    </Document>
  );
}
