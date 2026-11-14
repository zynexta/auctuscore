export const companyInfo = {
  name: "Auctus Core",
  legalTagline: "Financial Excellence • Audit • Advisory",
  tagline: "Clarity in Finance. Confidence in Growth.",
  heroSubtitle:
    "Empowering businesses with reliable accounting, auditing, taxation, compliance, and strategic financial advisory solutions.",
  aboutHeading: "Your Trusted Partner in Financial Excellence",
  aboutIntro:
    "Auctus Core is a premier financial consulting and advisory firm committed to delivering international-grade financial intelligence, robust regulatory compliance, and strategic clarity. Built upon decades of collective experience in Big Four and top-tier global accounting firms, we partner with enterprises across India, the GCC, and international markets to secure long-term financial health.",
  contact: {
    email: "info@auctuscore.in",
    phone: "+91 9037010874",
    phoneDisplay: "+91 90370 10874",
    address: "Kozhikode Road, Edavannappara, Malappuram, Kerala, India",
    location: "Kozhikode Road, Edavannappara, Malappuram, Kerala, India",
    whatsappUrl: "https://wa.me/919037010874?text=Hello%20Auctus%20Core%20team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    emailUrl: "mailto:info@auctuscore.in?subject=Inquiry%20regarding%20Auctus%20Core%20Services",
    phoneUrl: "tel:+919037010874",
  },
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "International", path: "/international-services" },
  { name: "Contact", path: "/contact" },
];

export const whyWeArePillars = [
  {
    title: "Reliable Expertise",
    description: "Accurate audit, taxation, and compliance services delivered with precision.",
    icon: "ShieldCheck",
  },
  {
    title: "Strategic Insights",
    description: "Guiding businesses toward sustainable long-term success and growth.",
    icon: "TrendingUp",
  },
  {
    title: "Tailored Solutions",
    description: "Customised services designed to meet each client’s unique challenges.",
    icon: "Sliders",
  },
  {
    title: "Long-Term Partnerships",
    description: "Building lasting trust through transparency and professionalism.",
    icon: "Handshake",
  },
];

export const visionMission = {
  vision: {
    title: "Our Vision",
    text: "To be a trusted partner in our clients’ financial success by delivering excellence, integrity, and innovative professional services.",
  },
  mission: {
    title: "Our Mission",
    text: "To empower businesses and individuals with reliable financial expertise, strategic insights, and personalized solutions that foster long-term growth and compliance.",
  },
};

export const serviceCategories = [
  {
    id: "accounting-finance",
    name: "Accounting & Financial Services",
    shortName: "Accounting & Finance",
    tagline: "Core accounting, financial management, payroll, and Virtual CFO advisory.",
    count: 6,
  },
  {
    id: "taxation-compliance",
    name: "Taxation & Compliance",
    shortName: "Tax & Compliance",
    tagline: "Statutory audits, corporate taxation, GST/VAT filings, and secretarial governance.",
    count: 4,
  },
  {
    id: "business-registration",
    name: "Business & Registration Services",
    shortName: "Business & Registration",
    tagline: "Entity incorporation, MSME/Startup recognition, trademarking, and bank DPR.",
    count: 4,
  },
  {
    id: "international",
    name: "International Services",
    shortName: "International Solutions",
    tagline: "Cross-border US GAAP/IFRS bookkeeping, multi-currency reconciliation, and GCC VAT.",
    count: 6,
  },
];

export const allCategorizedServices = [
  // --- CATEGORY 1: Accounting & Financial Services ---
  {
    id: 1,
    categoryId: "accounting-finance",
    categoryName: "Accounting & Financial Services",
    title: "Accounting & Bookkeeping",
    icon: "BookOpenCheck",
    tagline: "End-to-End General Ledger & Transaction Maintenance",
    description:
      "Structured chart of accounts setup, daily transaction posting, invoice logging, bank entries, and continuous month-end ledger balancing tailored to statutory standards.",
    deliverables: ["Chart of Accounts Design", "Daily Ledger Maintenance", "Month-End Trial Balance", "Bank & Cash Accounting"],
    standards: "Local GAAP & IFRS",
  },
  {
    id: 2,
    categoryId: "accounting-finance",
    categoryName: "Accounting & Financial Services",
    title: "Financial Reporting",
    icon: "BarChart3",
    tagline: "Monthly, Quarterly & Annual Performance Statements",
    description:
      "Accurate compilation of profit & loss statements, balance sheets, cash flow reports, and variance analytics formatted for management review and institutional compliance.",
    deliverables: ["P&L & Balance Sheet Statements", "Cash Flow Statements", "Variance Analysis", "Quarterly Executive Packs"],
    standards: "Statutory Financial Reporting",
  },
  {
    id: 3,
    categoryId: "accounting-finance",
    categoryName: "Accounting & Financial Services",
    title: "Payroll Support",
    icon: "Users",
    tagline: "Confidential Payroll Processing & Statutory Deductions",
    description:
      "Timely multi-tier salary computation, payslip generation, reimbursement tracking, and full compliance with statutory withholdings, PF, ESI, TDS, and GCC WPS mandates.",
    deliverables: ["Net Pay Calculations", "Statutory Deductions (PF/ESI/TDS)", "Confidential Payslips", "WPS File Generation"],
    standards: "Labor Laws & Statutory Mandates",
  },
  {
    id: 4,
    categoryId: "accounting-finance",
    categoryName: "Accounting & Financial Services",
    title: "Accounts Payable & Receivable",
    icon: "ArrowLeftRight",
    tagline: "Working Capital & Cash Flow Management",
    description:
      "End-to-end vendor invoice verification with 3-way purchase order matching, scheduled disbursements, debtor aging analysis, customer billing, and bad-debt prevention.",
    deliverables: ["Vendor 3-Way Matching", "Aging Analysis (30/60/90 days)", "Payment Batch Scheduling", "Collections Follow-up"],
    standards: "Internal Accounting Controls",
  },
  {
    id: 5,
    categoryId: "accounting-finance",
    categoryName: "Accounting & Financial Services",
    title: "Financial Advisory",
    icon: "LineChart",
    tagline: "Strategic Capital Structuring & Performance Advisory",
    description:
      "Executive corporate finance advisory, capital structure optimization, cost rationalization, profitability enhancement strategies, and investment scenario modeling.",
    deliverables: ["Capital Structure Planning", "Cost Rationalization Studies", "Scenario Modeling", "Working Capital Optimization"],
    standards: "Corporate Finance Best Practices",
  },
  {
    id: 6,
    categoryId: "accounting-finance",
    categoryName: "Accounting & Financial Services",
    title: "Virtual CFO Services",
    icon: "TrendingUp",
    tagline: "C-Suite Financial Stewardship on Demand",
    description:
      "High-level strategic leadership covering cash runway modeling, board-level reporting, KPI monitoring, bank relationship management, and growth forecasting without executive overhead.",
    deliverables: ["Rolling Cash Forecasts", "Executive Board Dashboards", "Bank & Investor Representation", "Growth Strategy Alignment"],
    standards: "Big Four Strategic Advisory",
  },

  // --- CATEGORY 2: Taxation & Compliance ---
  {
    id: 7,
    categoryId: "taxation-compliance",
    categoryName: "Taxation & Compliance",
    title: "Direct & Indirect Taxation",
    icon: "ReceiptText",
    tagline: "Corporate & Individual Tax Planning & Compliance",
    description:
      "Holistic tax architecture covering corporate and individual income tax returns, advance tax computation, withholding tax management, and cross-border tax considerations.",
    deliverables: ["Income Tax Returns (ITR)", "Advance Tax Estimation", "TDS Compliance & Returns", "Tax Minimization Strategy"],
    standards: "Income Tax Act & Regulations",
  },
  {
    id: 8,
    categoryId: "taxation-compliance",
    categoryName: "Taxation & Compliance",
    title: "GST / VAT Compliance",
    icon: "Receipt",
    tagline: "Assessment, Periodic Filings & Input Credit Reconciliation",
    description:
      "Comprehensive indirect tax management covering monthly/quarterly GST and VAT returns, electronic way bills, 2B input tax credit reconciliation, and dispute assessment support.",
    deliverables: ["GSTR-1, 3B & Annual Filings", "Input Tax Credit Reconciliation", "E-Way Bills & E-Invoicing", "Tax Notice Representations"],
    standards: "GST Council & Regional VAT Laws",
  },
  {
    id: 9,
    categoryId: "taxation-compliance",
    categoryName: "Taxation & Compliance",
    title: "Corporate & Regulatory Compliance",
    icon: "Scale",
    tagline: "Statutory ROC Filings & Secretarial Maintenance",
    description:
      "Ensuring business entities maintain pristine legal standing through timely Registrar of Companies (ROC) annual filings, director disclosures, board resolutions, and statutory register maintenance.",
    deliverables: ["ROC Annual Filings (AOC-4, MGT-7)", "Director KYC & DIN Compliance", "Statutory Registers & Minutes", "Corporate Governance Review"],
    standards: "Companies Act & MCA Guidelines",
  },
  {
    id: 10,
    categoryId: "taxation-compliance",
    categoryName: "Taxation & Compliance",
    title: "Audit & Assurance",
    icon: "ShieldCheck",
    tagline: "Independent Statutory, Tax & Internal Assurance",
    description:
      "Rigorous, independent examination of financial statements, internal financial controls (IFC), statutory audits, and management audits conducted by certified Chartered Accountants.",
    deliverables: ["Independent Auditor's Report", "Statutory & Tax Audits", "Internal Control Evaluations", "Management Letter on Risk Controls"],
    standards: "Standards on Auditing (SA / IFRS)",
  },

  // --- CATEGORY 3: Business & Registration Services ---
  {
    id: 11,
    categoryId: "business-registration",
    categoryName: "Business & Registration Services",
    title: "Startup & Business Registration",
    icon: "Rocket",
    tagline: "Turnkey Regulatory Launch & Government Licensing",
    description:
      "Guidance on business entity selection, MSME/Udyam registration, Startup India DPIIT recognition, Import Export Code (IEC), Professional Tax, and local trade licenses.",
    deliverables: ["MSME / Udyam Certification", "Startup India Recognition", "Import Export Code (IEC)", "Local Trade & Operating Licenses"],
    standards: "Government Licensing Authorities",
  },
  {
    id: 12,
    categoryId: "business-registration",
    categoryName: "Business & Registration Services",
    title: "Company Incorporation",
    icon: "Building2",
    tagline: "Private Limited, LLP, OPC & Foreign Subsidiary Setup",
    description:
      "Seamless end-to-end formation of Private Limited companies, Limited Liability Partnerships (LLP), One Person Companies (OPC), and foreign liaison/subsidiary entities.",
    deliverables: ["Name Approval & SPICe+ Filing", "MoA & AoA Drafting", "PAN, TAN & Bank Integration", "Certificate of Incorporation"],
    standards: "Ministry of Corporate Affairs (MCA)",
  },
  {
    id: 13,
    categoryId: "business-registration",
    categoryName: "Business & Registration Services",
    title: "Trademark Registration",
    icon: "BadgeCheck",
    tagline: "Comprehensive Brand Protection & Intellectual Property",
    description:
      "Pre-filing trademark search, strategic classification under relevant Nice classes, application drafting, objection management, hearing attendance, and renewals.",
    deliverables: ["Comprehensive Trademark Search", "Class Selection & Filing", "Examination Report Response", "Registration Certificate Support"],
    standards: "Controller General of Patents, Designs & Trademarks",
  },
  {
    id: 14,
    categoryId: "business-registration",
    categoryName: "Business & Registration Services",
    title: "Project Reports",
    icon: "FileSpreadsheet",
    tagline: "Bankable Detailed Project Reports (DPR) & Feasibility",
    description:
      "Preparation of comprehensive, bank-approved Detailed Project Reports (DPR), financial feasibility studies, techno-economic evaluations, and CMA data for debt financing.",
    deliverables: ["Detailed Project Reports (DPR)", "CMA Data for Bank Loans", "Debt Service Coverage (DSCR) Models", "Financial Feasibility Studies"],
    standards: "Banking Credit Standards & RBI Norms",
  },

  // --- CATEGORY 4: International Services ---
  {
    id: 15,
    categoryId: "international",
    categoryName: "International Services",
    title: "International Accounting & Bookkeeping",
    icon: "Globe2",
    tagline: "Multi-Currency General Ledger Under US GAAP & IFRS",
    description:
      "Offshore accounting and full-cycle bookkeeping for entities operating across UAE, Saudi Arabia, GCC, UK, and USA, maintained in accordance with international accounting standards.",
    deliverables: ["Multi-Currency Ledgers", "Standardized Chart of Accounts", "Trial Balance Assurance", "Exchange Rate Variance Handling"],
    standards: "IFRS / US GAAP",
  },
  {
    id: 16,
    categoryId: "international",
    categoryName: "International Services",
    title: "Bank Reconciliation",
    icon: "CreditCard",
    tagline: "Multi-Account, Currency & Payment Gateway Audits",
    description:
      "Reconciling complex multi-currency international bank accounts, corporate cards, and payment processors (Stripe, PayPal, Checkout) to ensure zero unrecorded leakages.",
    deliverables: ["Multi-Bank Reconciliations", "Payment Gateway Audit", "Discrepancy Investigation", "Month-End Cash Balance Sign-off"],
    standards: "International Banking Security Standards",
  },
  {
    id: 17,
    categoryId: "international",
    categoryName: "International Services",
    title: "Management Reporting & MIS",
    icon: "Activity",
    tagline: "Custom Executive Dashboards & Strategic Intelligence",
    description:
      "Designing tailored Management Information Systems (MIS), gross margin breakdowns by product or territory, departmental expenditure analysis, and rolling quarterly forecasts.",
    deliverables: ["Custom MIS Dashboards", "Departmental OPEX Breakdown", "Gross Margin Analysis", "Rolling Forecast Models"],
    standards: "Executive Management Standards",
  },
  {
    id: 18,
    categoryId: "international",
    categoryName: "International Services",
    title: "Accounting Software Setup",
    icon: "Laptop",
    tagline: "Cloud ERP Configuration, Onboarding & Migration",
    description:
      "Turnkey onboarding and data migration onto industry-leading cloud platforms including Zoho Books, QuickBooks Online, Xero, and TallyPrime with automated bank feeds.",
    deliverables: ["Cloud ERP Configuration", "Historical Data Migration", "Banking Feeds & Integrations", "Staff Training & Workflow SOPs"],
    standards: "Zoho / QuickBooks / Xero / Tally",
  },
  {
    id: 19,
    categoryId: "international",
    categoryName: "International Services",
    title: "Accounting Backlog Clearance",
    icon: "RotateCcw",
    tagline: "Rapid Forensic Catch-Up & Audit Readiness",
    description:
      "Forensic reconstruction of delayed, messy, or neglected historical accounts, reconciling years of transactions to achieve full audit readiness and statutory compliance.",
    deliverables: ["Multi-Year Ledger Catch-Up", "Historical Document Sorting", "Clean Opening Balances", "Audit-Ready Financial Statements"],
    standards: "Forensic Accounting Principles",
  },
  {
    id: 20,
    categoryId: "international",
    categoryName: "International Services",
    title: "International Financial Compliance Support",
    icon: "ShieldAlert",
    tagline: "GCC Corporate Tax, VAT & Cross-Border Governance",
    description:
      "Specialized compliance guidance covering UAE Corporate Tax, Saudi ZATCA e-invoicing Phase 2, GCC VAT returns, reverse-charge accounting, and international withholding taxes.",
    deliverables: ["UAE Corporate Tax Registration & Filings", "ZATCA E-Invoicing Phase 2 Compliance", "GCC VAT Periodic Filings", "Cross-Border Transfer Pricing"],
    standards: "FTA (UAE) / ZATCA (KSA) / NBR (Bahrain)",
  },
];

// Backwards compatibility alias for existing components
export const coreServices = allCategorizedServices;


export const leadershipTeam = [
  {
    name: "CA Shahid Ali",
    designation: "FCA",
    role: "Partner & Audit Specialist",
    image: "/images/team-shahid-ali.webp",
    pastExperience: "Former Audit Manager at EY, Deloitte, and Grant Thornton.",
    experienceYears: "12+ Years Experience",
    experienceDetail:
      "12+ years of international experience in audit, assurance, and consultancy across India, GCC, and USA.",
    specialisations: [
      "US GAAP",
      "IFRS Audits",
      "Risk Assessment",
      "Quality Control",
    ],
    highlight: "Big Four Leadership Experience",
  },
  {
    name: "Ummer Sadique",
    designation: "M COM",
    role: "Partner & Financial Consultant",
    image: "/images/team-ummer-sadique.webp",
    pastExperience: "Former Senior Consultant at Baker Tilly, with GCC experience.",
    experienceYears: "15+ Years Experience",
    experienceDetail:
      "15+ years of international accounting and finance experience across diverse cross-border business environments.",
    specialisations: [
      "Overseas Bookkeeping",
      "Management Information Systems",
      "Advisory Services",
      "ERP Implementation",
    ],
    highlight: "International Advisory & ERP Expert",
  },
];

export const technologyFeatures = [
  {
    title: "Technology-Based Reports",
    description:
      "Automated financial statements and structured analytics generated through modern digital accounting frameworks.",
    icon: "FileSpreadsheet",
  },
  {
    title: "Real-Time Financial Insights",
    description:
      "Instant visibility into cash flow, profitability, receivables, and operational expenses for informed management decisions.",
    icon: "Activity",
  },
  {
    title: "Automation Tools",
    description:
      "Eliminating manual data entry through bank feed synchronization, smart transaction matching, and rule-based workflows.",
    icon: "Cpu",
  },
  {
    title: "Compliance-Ready Documentation",
    description:
      "Digitized, audit-trail verified records formatted precisely to statutory requirements across multiple tax jurisdictions.",
    icon: "ShieldAlert",
  },
  {
    title: "Financial Analytics & Forecasting",
    description:
      "Advanced analytical review procedures, variance analysis, and cash-flow projection models tailored for executive planning.",
    icon: "BarChart3",
  },
];

export const globalCoverage = {
  heading: "Global Accounting Expertise. Local Business Understanding.",
  subheading:
    "Delivering seamless international financial solutions across borders with deep regulatory understanding.",
  markets: [
    { name: "India", code: "IN", flag: "🇮🇳", flagUrl: "/images/flags/in.svg" },
    { name: "UAE", code: "AE", flag: "🇦🇪", flagUrl: "/images/flags/ae.svg" },
    { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", flagUrl: "/images/flags/sa.svg" },
    { name: "Qatar", code: "QA", flag: "🇶🇦", flagUrl: "/images/flags/qa.svg" },
    { name: "Bahrain", code: "BH", flag: "🇧🇭", flagUrl: "/images/flags/bh.svg" },
    { name: "Oman", code: "OM", flag: "🇴🇲", flagUrl: "/images/flags/om.svg" },
    { name: "Kuwait", code: "KW", flag: "🇰🇼", flagUrl: "/images/flags/kw.svg" },
    { name: "United States", code: "USA", flag: "🇺🇸", flagUrl: "/images/flags/us.svg" },
    { name: "United Kingdom", code: "UK", flag: "🇬🇧", flagUrl: "/images/flags/uk.svg" },
    { name: "Global Markets", code: "GLOBAL", flag: "🌐", flagUrl: "/images/flags/global.svg" },
  ],
  services: [
    {
      id: 1,
      title: "Accounting & Bookkeeping",
      icon: "BookOpen",
      tagline: "Full-Cycle Multi-Currency General Ledger",
      description:
        "End-to-end multi-currency bookkeeping, standardized chart of accounts setup, daily transactional postings, and rigorous month-end trial balance reviews.",
      keyDeliverables: ["Multi-Currency GL", "Chart of Accounts", "Trial Balance Assurance"],
      standards: "IFRS / US GAAP",
    },
    {
      id: 2,
      title: "Monthly, Quarterly & Annual Financial Reporting",
      icon: "BarChart3",
      tagline: "Executive Performance Packs & Statements",
      description:
        "Timely financial statements including P&L, balance sheets, cash flow reports, and variance analytics packaged for board presentation and decision-makers.",
      keyDeliverables: ["P&L & Balance Sheet", "Cash Flow Analysis", "Quarterly Board Packs"],
      standards: "IFRS / US GAAP / Local Tax",
    },
    {
      id: 3,
      title: "Accounts Payable & Receivable Management",
      icon: "ArrowLeftRight",
      tagline: "Working Capital & Cash Flow Optimization",
      description:
        "Vendor invoice processing with 3-way matching, payment batch scheduling, customer billing, receivables aging analysis, and bad-debt prevention.",
      keyDeliverables: ["Vendor 3-Way Matching", "Aging Analysis", "Cash Outflow Planning"],
      standards: "Internal Controls & ERP",
    },
    {
      id: 4,
      title: "Bank & Credit Card Reconciliation",
      icon: "CreditCard",
      tagline: "Dispute Resolution & Audit-Proof Cash Records",
      description:
        "Zero-discrepancy reconciliations across multiple international bank accounts, corporate credit cards, payment gateways (Stripe, PayPal), and merchant accounts.",
      keyDeliverables: ["Multi-Bank Reconciliation", "Payment Gateway Audit", "Discrepancy Resolution"],
      standards: "Banking Security Protocols",
    },
    {
      id: 5,
      title: "Payroll Processing Support",
      icon: "Users",
      tagline: "Confidential Cross-Border Payroll & Compliance",
      description:
        "Confidential multi-tier payroll calculations, UAE/GCC Wages Protection System (WPS) compliance, statutory withholdings, payslips, and end-of-service gratuity accounting.",
      keyDeliverables: ["WPS File Generation", "Gratuity Calculations", "Confidential Payslips"],
      standards: "Labor Laws (UAE/GCC/India)",
    },
    {
      id: 6,
      title: "VAT / GST Accounting & Compliance Support",
      icon: "Receipt",
      tagline: "Multi-Jurisdiction Indirect Tax Filings",
      description:
        "Accurate indirect tax accounting, input tax credit reconciliations, cross-border reverse charge mechanism reviews, and timely VAT/GST return filings with FTA, ZATCA, and NBR.",
      keyDeliverables: ["VAT/GST Return Filings", "Input Tax Credit Audit", "Statutory Audit Trail"],
      standards: "FTA (UAE) / ZATCA (KSA) / GST (India)",
    },
    {
      id: 7,
      title: "Financial Statements Preparation",
      icon: "FileSpreadsheet",
      tagline: "Statutory & Investor-Ready Year-End Accounts",
      description:
        "Preparation of comprehensive statutory financial statements, disclosure notes, and supporting schedules aligned with IFRS and international auditing requirements.",
      keyDeliverables: ["Statutory Disclosures", "Audit-Ready Schedules", "Investor Financials"],
      standards: "IFRS / IAS / US GAAP",
    },
    {
      id: 8,
      title: "Management Reporting & MIS",
      icon: "TrendingUp",
      tagline: "Strategic Financial Intelligence & Dashboards",
      description:
        "Bespoke Management Information Systems (MIS), gross margin breakdowns by product or business unit, departmental OPEX tracking, and rolling forecast models.",
      keyDeliverables: ["Custom KPI Dashboards", "Gross Margin Analysis", "Departmental Budgeting"],
      standards: "Executive Management Standard",
    },
    {
      id: 9,
      title: "Accounting Software Setup & Support",
      icon: "Laptop",
      tagline: "Cloud ERP Implementation & Seamless Migration",
      description:
        "Turnkey onboarding, system configuration, automated banking feeds, third-party app integration, and migration across QuickBooks, Xero, Zoho Books, TallyPrime, and NetSuite.",
      keyDeliverables: ["Turnkey Cloud Setup", "Historical Data Migration", "Staff Workflow Training"],
      standards: "QuickBooks / Xero / Zoho / NetSuite",
    },
    {
      id: 10,
      title: "Accounting Backlog Clearance",
      icon: "RotateCcw",
      tagline: "Historical Forensic Cleanup & Catch-Up",
      description:
        "Rapid forensic clean-up and restructuring of delayed, unorganized, or neglected financial records to bring your company completely up to date for audits or tax filings.",
      keyDeliverables: ["Historical Ledger Rebuild", "Catch-Up Tax Filings", "Audit-Ready Books"],
      standards: "Forensic Accounting Standards",
    },
    {
      id: 11,
      title: "Virtual CFO",
      icon: "Crown",
      tagline: "C-Suite Financial Strategy Without Full-Time Cost",
      description:
        "Executive-level financial leadership covering liquidity management, capital allocation, scenario planning, debt advisory, investor decks, and board meeting representation.",
      keyDeliverables: ["Cash Runway Forecasts", "Capital Structuring", "Board-Level Advisory"],
      standards: "Big Four Strategic Advisory",
    },
    {
      id: 12,
      title: "Financial Advisory Support",
      icon: "Briefcase",
      tagline: "Cross-Border Corporate & Transaction Strategy",
      description:
        "Specialized advisory covering cross-border subsidiary setup, transfer pricing documentation, merger & acquisition due diligence, and bank DPR preparation.",
      keyDeliverables: ["Cross-Border Structuring", "Due Diligence Support", "Bank DPR Reports"],
      standards: "International Commercial Law",
    },
  ],
};

export const industries = [
  {
    title: "Manufacturing Enterprises",
    description:
      "Cost accounting, inventory valuation, production flow reporting, and multi-tier tax credit management.",
    icon: "Factory",
  },
  {
    title: "Trading & Distribution Firms",
    description:
      "High-volume ledger reconciliation, inventory turnover analytics, and working capital optimization.",
    icon: "Truck",
  },
  {
    title: "Educational Institutions",
    description:
      "Fee collection tracking, trust compliance, audit assurance, and structured institutional budgeting.",
    icon: "GraduationCap",
  },
  {
    title: "Healthcare Providers",
    description:
      "Departmental cost control, patient billing reconciliation, vendor management, and healthcare statutory compliance.",
    icon: "HeartPulse",
  },
  {
    title: "IT & Technology Startups",
    description:
      "Cross-border remittance compliance, recurring subscription revenue accounting, and investor-ready reporting.",
    icon: "Laptop",
  },
  {
    title: "GCC-Based Enterprises",
    description:
      "Cross-border VAT compliance, GCC Corporate Tax preparation, IFRS compliance, and localized bilingual reporting.",
    icon: "Globe2",
  },
];

export const whyPartnerPillars = [
  {
    title: "Global Expertise",
    description:
      "Serving businesses across multiple industries with international accounting knowledge and best practices.",
    highlight: "Multi-Jurisdiction Standards",
    icon: "Globe",
  },
  {
    title: "Accuracy & Compliance",
    description:
      "Delivering precise financial records, timely reporting, and compliance with applicable accounting and tax regulations.",
    highlight: "Zero-Compromise Precision",
    icon: "CheckCircle2",
  },
  {
    title: "Cost-Effective Outsourcing",
    description:
      "Reducing operational costs while maintaining high-quality accounting support.",
    highlight: "Maximized Operational ROI",
    icon: "Coins",
  },
];

export const softwarePlatforms = [
  {
    name: "Zoho Books",
    type: "Cloud Accounting Platform",
    description: "Automated banking feeds, multi-currency invoicing, and end-to-end tax filing.",
    badge: "Certified Workflows",
  },
  {
    name: "Tally Prime",
    type: "Enterprise Financial Accounting",
    description: "Robust statutory compliance, Indian GST workflows, inventory management, and audit trails.",
    badge: "Statutory Specialist",
  },
  {
    name: "Xero",
    type: "Global Cloud Ecosystem",
    description: "Intuitive online accounting, seamless app integration, and real-time collaboration.",
    badge: "International Standard",
  },
  {
    name: "QuickBooks Online",
    type: "Intuit Business Cloud",
    description: "Powerful financial dashboards, payroll automation, and cross-border vendor tracking.",
    badge: "US GAAP & Global",
  },
];

