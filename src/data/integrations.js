/**
 * integrations.js
 * Every tool Caller Monkey connects to (CONTENT.md section 5).
 * Organised by category. Icon names from lucide-react.
 */
export const integrationCategories = [
  {
    id: 'phone',
    category: 'Your Phone Number',
    icon: 'Phone',
    color: '#2DA744',
    description: 'No porting required. Your existing number keeps working.',
    tools: [
      { name: 'Any Indian Mobile Number', note: 'No porting needed' },
      { name: 'Landline Numbers',         note: 'Supported' },
      { name: 'VoIP Lines',               note: 'Supported' },
    ],
  },
  {
    id: 'whatsapp',
    category: 'WhatsApp Business',
    icon: 'MessageSquare',
    color: '#25D366',
    description: 'Connects to your verified WhatsApp Business account.',
    tools: [
      { name: 'WhatsApp Business API', note: 'Official Meta API' },
      { name: 'WhatsApp Cloud API',    note: 'Supported' },
    ],
  },
  {
    id: 'crm',
    category: 'CRM & Sales Tools',
    icon: 'Database',
    color: '#2C7BE5',
    description: 'Every call and outcome logged automatically. No manual entry.',
    tools: [
      { name: 'Zoho CRM',       note: 'Native integration' },
      { name: 'Salesforce',     note: 'Native integration' },
      { name: 'HubSpot',        note: 'Native integration' },
      { name: 'Freshsales',     note: 'Native integration' },
      { name: 'LeadSquared',    note: 'Native integration' },
      { name: 'Custom CRM',     note: 'Via API' },
    ],
  },
  {
    id: 'leads',
    category: 'Lead Platforms',
    icon: 'Zap',
    color: '#F4A623',
    description: 'New leads called within 2 minutes of submission, automatically.',
    tools: [
      { name: 'IndiaMart',       note: 'Instant callback' },
      { name: 'JustDial',        note: 'Instant callback' },
      { name: '99acres',         note: 'Instant callback' },
      { name: 'MagicBricks',     note: 'Instant callback' },
      { name: 'Housing.com',     note: 'Instant callback' },
      { name: 'Facebook Leads',  note: 'Instant callback' },
      { name: 'Google Ads',      note: 'Instant callback' },
      { name: 'Website Forms',   note: 'Via webhook' },
    ],
  },
  {
    id: 'calendar',
    category: 'Calendar & Scheduling',
    icon: 'Calendar',
    color: '#9B59B6',
    description: 'Books, confirms, and reminds — across any calendar system.',
    tools: [
      { name: 'Google Calendar',    note: 'Native integration' },
      { name: 'Microsoft Outlook',  note: 'Native integration' },
      { name: 'Calendly',           note: 'Via API' },
    ],
  },
  {
    id: 'email',
    category: 'Email',
    icon: 'Mail',
    color: '#E74C3C',
    description: 'Triggers the right email automatically based on call outcomes.',
    tools: [
      { name: 'Gmail / Google Workspace', note: 'Native integration' },
      { name: 'Microsoft Outlook / 365',  note: 'Native integration' },
      { name: 'Custom SMTP',              note: 'Supported' },
    ],
  },
  {
    id: 'payments',
    category: 'Payment Gateways',
    icon: 'CreditCard',
    color: '#1ABC9C',
    description: 'Sends payment links and confirms transactions via call or WhatsApp.',
    tools: [
      { name: 'Razorpay',   note: 'Native integration' },
      { name: 'PayU',       note: 'Native integration' },
      { name: 'CCAvenue',   note: 'Native integration' },
    ],
  },
  {
    id: 'analytics',
    category: 'Analytics & Reporting',
    icon: 'BarChart3',
    color: '#E67E22',
    description: 'Live dashboard. Exportable reports. Custom metrics on request.',
    tools: [
      { name: 'Built-in Dashboard',  note: 'Included' },
      { name: 'Google Sheets Export', note: 'Automated' },
      { name: 'Custom Reports',       note: 'On request' },
    ],
  },
];
