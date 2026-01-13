// ========================================
// User Data
// ========================================

export const currentUser = {
  id: "usr_1",
  name: "Alex Johnson",
  email: "alex.johnson@company.com",
  avatar: "/avatars/alex.jpg",
  plan: "Pro",
  joinedAt: "2024-06-15",
};

// ========================================
// Dashboard Stats
// ========================================

export const dashboardStats = {
  totalTables: 12,
  totalQueries: 847,
  tokensUsed: 156420,
  planLimit: 200000,
  currentPlan: "Pro",
};

// ========================================
// Tables Data
// ========================================

export interface Table {
  id: string;
  name: string;
  fileName: string;
  rows: number;
  columns: number;
  size: string;
  status: "ready" | "processing" | "error";
  uploadedAt: string;
  lastQueried: string;
  columnNames: string[];
}

export const tablesData: Table[] = [
  {
    id: "tbl_1",
    name: "Q4 Sales Report",
    fileName: "q4_sales_2024.csv",
    rows: 15420,
    columns: 12,
    size: "2.4 MB",
    status: "ready",
    uploadedAt: "2024-12-15",
    lastQueried: "2024-12-20",
    columnNames: ["Date", "Product", "Region", "Sales", "Units", "Revenue", "Cost", "Profit", "Rep", "Channel", "Category", "Margin"],
  },
  {
    id: "tbl_2",
    name: "Customer Analytics",
    fileName: "customers_dec.xlsx",
    rows: 8750,
    columns: 8,
    size: "1.2 MB",
    status: "ready",
    uploadedAt: "2024-12-10",
    lastQueried: "2024-12-19",
    columnNames: ["CustomerID", "Name", "Email", "Segment", "LTV", "JoinDate", "LastPurchase", "Score"],
  },
  {
    id: "tbl_3",
    name: "Product Inventory",
    fileName: "inventory_master.csv",
    rows: 3240,
    columns: 10,
    size: "856 KB",
    status: "ready",
    uploadedAt: "2024-12-08",
    lastQueried: "2024-12-18",
    columnNames: ["SKU", "Product", "Category", "Stock", "Reorder", "Price", "Cost", "Supplier", "Location", "Status"],
  },
  {
    id: "tbl_4",
    name: "Marketing Campaign",
    fileName: "campaigns_2024.csv",
    rows: 1850,
    columns: 15,
    size: "425 KB",
    status: "processing",
    uploadedAt: "2024-12-20",
    lastQueried: "Never",
    columnNames: ["CampaignID", "Name", "Channel", "StartDate", "EndDate", "Budget", "Spend", "Impressions", "Clicks", "Conversions", "CTR", "CPC", "ROI", "Status", "Manager"],
  },
  {
    id: "tbl_5",
    name: "Employee Directory",
    fileName: "employees.xlsx",
    rows: 450,
    columns: 9,
    size: "128 KB",
    status: "ready",
    uploadedAt: "2024-11-25",
    lastQueried: "2024-12-17",
    columnNames: ["EmployeeID", "Name", "Department", "Title", "Email", "Phone", "HireDate", "Manager", "Location"],
  },
];

// ========================================
// Chat Messages
// ========================================

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  chartData?: ChartDataPoint[];
  chartType?: "bar" | "line" | "pie";
}

export interface ChartDataPoint {
  name: string;
  value: number;
  value2?: number;
}

export const sampleChatMessages: ChatMessage[] = [
  {
    id: "msg_1",
    role: "user",
    content: "What were the total sales by region in Q4?",
    timestamp: "2024-12-20T10:30:00Z",
  },
  {
    id: "msg_2",
    role: "assistant",
    content: "Based on the Q4 Sales Report data, here are the total sales broken down by region:",
    timestamp: "2024-12-20T10:30:05Z",
    chartData: [
      { name: "North America", value: 425000 },
      { name: "Europe", value: 312000 },
      { name: "Asia Pacific", value: 287000 },
      { name: "Latin America", value: 156000 },
      { name: "Middle East", value: 94000 },
    ],
    chartType: "bar",
  },
  {
    id: "msg_3",
    role: "user",
    content: "Show me the sales trend over the last 6 months",
    timestamp: "2024-12-20T10:31:00Z",
  },
  {
    id: "msg_4",
    role: "assistant",
    content: "Here's the sales trend from July to December 2024. As you can see, there was a significant increase in November due to holiday promotions:",
    timestamp: "2024-12-20T10:31:05Z",
    chartData: [
      { name: "Jul", value: 180000 },
      { name: "Aug", value: 195000 },
      { name: "Sep", value: 210000 },
      { name: "Oct", value: 245000 },
      { name: "Nov", value: 380000 },
      { name: "Dec", value: 320000 },
    ],
    chartType: "line",
  },
  {
    id: "msg_5",
    role: "user",
    content: "Which product category had the highest revenue?",
    timestamp: "2024-12-20T10:32:00Z",
  },
  {
    id: "msg_6",
    role: "assistant",
    content: "Electronics led with $524,000 in revenue, followed by Home & Garden at $312,000. Here's the complete category breakdown:",
    timestamp: "2024-12-20T10:32:05Z",
    chartData: [
      { name: "Electronics", value: 524000 },
      { name: "Home & Garden", value: 312000 },
      { name: "Apparel", value: 287000 },
      { name: "Sports", value: 196000 },
      { name: "Books", value: 125000 },
    ],
    chartType: "bar",
  },
];

// ========================================
// Chat History
// ========================================

export interface ChatSession {
  id: string;
  tableId: string;
  tableName: string;
  title: string;
  messageCount: number;
  lastMessage: string;
  createdAt: string;
}

export const chatHistory: ChatSession[] = [
  {
    id: "chat_1",
    tableId: "tbl_1",
    tableName: "Q4 Sales Report",
    title: "Regional Sales Analysis",
    messageCount: 12,
    lastMessage: "The top performing region was...",
    createdAt: "2024-12-20T10:30:00Z",
  },
  {
    id: "chat_2",
    tableId: "tbl_2",
    tableName: "Customer Analytics",
    title: "Customer Segmentation Deep Dive",
    messageCount: 8,
    lastMessage: "Based on the LTV analysis...",
    createdAt: "2024-12-19T14:15:00Z",
  },
  {
    id: "chat_3",
    tableId: "tbl_1",
    tableName: "Q4 Sales Report",
    title: "Product Performance Review",
    messageCount: 15,
    lastMessage: "Electronics outperformed other...",
    createdAt: "2024-12-18T09:45:00Z",
  },
  {
    id: "chat_4",
    tableId: "tbl_3",
    tableName: "Product Inventory",
    title: "Stock Level Analysis",
    messageCount: 6,
    lastMessage: "Items below reorder point are...",
    createdAt: "2024-12-17T16:20:00Z",
  },
  {
    id: "chat_5",
    tableId: "tbl_5",
    tableName: "Employee Directory",
    title: "Department Headcount",
    messageCount: 4,
    lastMessage: "Engineering has the largest team...",
    createdAt: "2024-12-16T11:00:00Z",
  },
];

// ========================================
// Suggested Queries
// ========================================

export const suggestedQueries = [
  "What's the total revenue?",
  "Show top 10 products",
  "Compare monthly trends",
  "Group by category",
  "Find highest values",
];

// ========================================
// Pricing Plans
// ========================================

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  limits: {
    tables: number | "Unlimited";
    queries: number | "Unlimited";
    tokens: number | "Unlimited";
    fileSize: string;
  };
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for individuals and small projects",
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "Up to 5 tables",
      "100 queries/month",
      "50,000 tokens",
      "5MB file limit",
      "Email support",
    ],
    limits: {
      tables: 5,
      queries: 100,
      tokens: 50000,
      fileSize: "5 MB",
    },
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best for professionals and growing teams",
    priceMonthly: 29,
    priceYearly: 290,
    features: [
      "Up to 50 tables",
      "1,000 queries/month",
      "200,000 tokens",
      "50MB file limit",
      "Priority support",
      "Advanced analytics",
      "API access",
    ],
    limits: {
      tables: 50,
      queries: 1000,
      tokens: 200000,
      fileSize: "50 MB",
    },
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with custom needs",
    priceMonthly: 99,
    priceYearly: 990,
    features: [
      "Unlimited tables",
      "Unlimited queries",
      "Unlimited tokens",
      "No file size limit",
      "24/7 dedicated support",
      "Custom integrations",
      "SSO & SAML",
      "Audit logs",
      "SLA guarantee",
    ],
    limits: {
      tables: "Unlimited",
      queries: "Unlimited",
      tokens: "Unlimited",
      fileSize: "No limit",
    },
  },
];

// ========================================
// Invoice History
// ========================================

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "paid" | "pending" | "failed";
  plan: string;
  period: string;
}

export const invoiceHistory: Invoice[] = [
  { id: "inv_001", date: "2024-12-01", amount: 29, status: "paid", plan: "Pro", period: "Dec 2024" },
  { id: "inv_002", date: "2024-11-01", amount: 29, status: "paid", plan: "Pro", period: "Nov 2024" },
  { id: "inv_003", date: "2024-10-01", amount: 29, status: "paid", plan: "Pro", period: "Oct 2024" },
  { id: "inv_004", date: "2024-09-01", amount: 29, status: "paid", plan: "Pro", period: "Sep 2024" },
  { id: "inv_005", date: "2024-08-01", amount: 29, status: "paid", plan: "Pro", period: "Aug 2024" },
];

// ========================================
// Sample CSV Preview Data
// ========================================

export const sampleCSVPreview = {
  headers: ["Date", "Product", "Region", "Sales", "Units"],
  rows: [
    ["2024-12-01", "Widget Pro", "North America", "$12,450", "124"],
    ["2024-12-01", "Gadget X", "Europe", "$8,320", "83"],
    ["2024-12-02", "Widget Pro", "Asia Pacific", "$15,680", "156"],
    ["2024-12-02", "Gadget X", "North America", "$9,240", "92"],
    ["2024-12-03", "Widget Pro", "Europe", "$11,350", "113"],
  ],
};

// ========================================
// Navigation Items
// ========================================

export const dashboardNavItems = [
  { name: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { name: "Tables", href: "/tables", icon: "Table" },
  { name: "Chat History", href: "/chat/history", icon: "MessageSquare" },
  { name: "Settings", href: "/settings/profile", icon: "Settings" },
];

export const settingsNavItems = [
  { name: "Profile", href: "/settings/profile" },
  { name: "Billing", href: "/settings/billing" },
  { name: "Security", href: "/settings/security" },
];
