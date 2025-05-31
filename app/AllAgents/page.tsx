"use client";
import { NavbarDemo } from "@/components/navbar";
import { AgentSlider } from "@/components/AgentSlider";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { Search, Bot } from "lucide-react";
import { useRouter } from "next/navigation";
// hii mukul

interface Agent {
  id: number;
  name: string;
  slug: string;
  youtubeUrl: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
  rating: string;
  usage: string;
  speed: string;
  path?: string;
}

interface Category {
  name: string;
  description: string;
  agents: Agent[];
}

export default function AIAgentsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Set visible after a short delay to ensure smooth animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle agent actions
  const handleTryAgent = (agent: Agent) => {
    console.log(`Trying agent: ${agent.name}`);
    window.open(agent.youtubeUrl, "_blank");
  };

  const handleViewDetails = (agent: Agent) => {
    console.log(`Viewing details for: ${agent.name}`);
    router.push(`/aiAgents/${agent.slug}`);
  };

  const categories = [
    {
      name: "General Problem Solver",
      description:
        "Versatile AI agents that can tackle a wide range of problems and provide intelligent solutions for various business challenges.",
      agents: [
        {
          id: 1,
          name: "Universal Problem Solver",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          slug: "universalProblemSolverAiAgent",
          description:
            "Advanced AI agent capable of analyzing complex problems across multiple domains and providing actionable solutions with detailed reasoning.",
          icon: "🧠",
          color: "from-blue-500 to-purple-600",
          tags: ["Problem Solving", "Analysis", "Multi-domain"],
          rating: "4.9",
          usage: "12.5k",
          speed: "Fast",
          path: "/generalProblemSolver",
        },
        {
          id: 2,
          name: "Task Automation AI Agent",

          slug: "taskAutomationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",

          description:
            "Streamline your workflow by automating repetitive tasks and optimizing business processes with intelligent task management.",
          icon: "⚡",
          color: "from-emerald-500 to-blue-600",
          tags: ["Automation", "Workflow", "Efficiency"],
          rating: "4.8",
          usage: "8.3k",
          speed: "Ultra Fast",
          path: "/taskAutomationAiAgent",
        },
        {
          id: 3,
          name: "Smart Decision Maker",
          slug: "smartDecisionMakerAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Make informed decisions with AI-powered analysis that evaluates multiple factors and provides recommendations.",
          icon: "🎯",
          color: "from-orange-500 to-red-600",
          tags: ["Decision Making", "Analysis", "Strategy"],
          rating: "4.7",
          usage: "6.8k",
          speed: "Fast",
          path: "/smartDecisionMaker",
        },
        {
          id: 44,
          name: "Customer Service AI Agent",
          slug: "customerServiceAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate and personalize customer support with 24/7 AI-driven interaction.",
          icon: "💬",
          color: "from-blue-400 to-indigo-500",
          tags: ["Customer Support", "Chatbot", "Service"],
          rating: "4.8",
          usage: "14.2k",
          speed: "Fast",
          path: "/customerServiceAiAgent",
        },
        {
          id: 45,
          name: "Data Extraction AI Agent",
          slug: "dataExtractionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Extract structured data from unstructured documents like PDFs, emails, and reports.",
          icon: "📄",
          color: "from-teal-500 to-cyan-600",
          tags: ["Data Extraction", "OCR", "Documents"],
          rating: "4.7",
          usage: "10.9k",
          speed: "Medium",
          path: "/dataExtractionAiAgent",
        },
        {
          id: 46,
          name: "Email Categorization & Triage AI Agent",
          slug: "emailCategorizationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Organize and prioritize incoming emails for better workflow efficiency.",
          icon: "📧",
          color: "from-green-400 to-blue-500",
          tags: ["Email", "Productivity", "Categorization"],
          rating: "4.6",
          usage: "9.3k",
          speed: "Fast",
          path: "/emailCategorizationAiAgent",
        },
        {
          id: 47,
          name: "Appointment Management AI Agent",
          slug: "appointmentManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automatically schedule, reschedule, and send reminders for appointments.",
          icon: "📆",
          color: "from-indigo-500 to-blue-600",
          tags: ["Calendar", "Scheduling", "Productivity"],
          rating: "4.7",
          usage: "8.5k",
          speed: "Fast",
          path: "/appointmentManagementAiAgent",
        },
        {
          id: 48,
          name: "Interview Scheduler AI Agent",
          slug: "interviewSchedulerAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Coordinate interview times between candidates and recruiters efficiently.",
          icon: "🗓️",
          color: "from-purple-500 to-pink-500",
          tags: ["HR", "Scheduling", "Interviews"],
          rating: "4.8",
          usage: "7.4k",
          speed: "Medium",
          path: "/interviewSchedulerAiAgent",
        },
        {
          id: 49,
          name: "Data Entry AI Agent",
          slug: "dataEntryAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate repetitive data entry tasks with high speed and accuracy.",
          icon: "⌨️",
          color: "from-gray-500 to-blue-500",
          tags: ["Data Entry", "Automation", "Efficiency"],
          rating: "4.6",
          usage: "13.1k",
          speed: "Ultra Fast",
          path: "/dataEntryAiAgent",
        },
        {
          id: 50,
          name: "Billing Management AI Agent",
          slug: "billingManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Handle invoices, billing cycles, and payment reminders seamlessly.",
          icon: "🧾",
          color: "from-amber-500 to-orange-500",
          tags: ["Billing", "Finance", "Automation"],
          rating: "4.7",
          usage: "10.3k",
          speed: "Fast",
          path: "/billingManagementAiAgent",
        },
        {
          id: 51,
          name: "Transaction Monitoring AI Agent",
          slug: "transactionMonitoringAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Detect and report suspicious transactions in real time.",
          icon: "💳",
          color: "from-red-500 to-pink-600",
          tags: ["Finance", "Fraud Detection", "Monitoring"],
          rating: "4.9",
          usage: "11.7k",
          speed: "Instant",
          path: "/transactionMonitoringAiAgent",
        },
        {
          id: 52,
          name: "Budget Management AI Agent",
          slug: "budgetManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Track expenses, analyze budgets, and suggest savings opportunities.",
          icon: "📊",
          color: "from-lime-500 to-green-600",
          tags: ["Budget", "Finance", "Tracking"],
          rating: "4.8",
          usage: "9.6k",
          speed: "Fast",
          path: "/budgetManagementAiAgent",
        },
        {
          id: 53,
          name: "Document Review AI Agent",
          slug: "documentReviewAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Analyze and summarize lengthy documents with legal or technical content.",
          icon: "📚",
          color: "from-blue-600 to-indigo-700",
          tags: ["Documents", "Review", "Summarization"],
          rating: "4.6",
          usage: "7.2k",
          speed: "Medium",
          path: "/documentReviewAiAgent",
        },
        {
          id: 54,
          name: "Contract Management AI Agent",
          slug: "contractManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate contract lifecycle management and compliance monitoring.",
          icon: "📝",
          color: "from-gray-600 to-blue-700",
          tags: ["Contracts", "Legal", "Compliance"],
          rating: "4.8",
          usage: "8.6k",
          speed: "Fast",
          path: "/contractManagementAiAgent",
        },
        {
          id: 55,
          name: "Data Collection AI Agent",
          slug: "dataCollectionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Collect structured and unstructured data from multiple sources automatically.",
          icon: "🔍",
          color: "from-purple-400 to-blue-500",
          tags: ["Data", "Automation", "Collection"],
          rating: "4.7",
          usage: "11.0k",
          speed: "Medium",
          path: "/dataCollectionAiAgent",
        },
        {
          id: 56,
          name: "Invoice Processing AI Agent",
          slug: "invoiceProcessingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Extract and process data from invoices with automated validation.",
          icon: "🧮",
          color: "from-pink-400 to-red-500",
          tags: ["Invoices", "Finance", "Processing"],
          rating: "4.9",
          usage: "10.8k",
          speed: "Fast",
          path: "/invoiceProcessingAiAgent",
        },
        {
          id: 57,
          name: "Payroll Calculation AI Agent",
          slug: "payrollCalculationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Calculate employee salaries, tax deductions, and generate payslips.",
          icon: "💼",
          color: "from-yellow-400 to-orange-500",
          tags: ["Payroll", "HR", "Finance"],
          rating: "4.8",
          usage: "9.1k",
          speed: "Medium",
          path: "/payrollCalculationAiAgent",
        },
        {
          id: 58,
          name: "Legal Document Classifier AI Agent",
          slug: "legalDocumentClassifierAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automatically categorize legal documents for faster retrieval and compliance.",
          icon: "⚖️",
          color: "from-indigo-600 to-blue-700",
          tags: ["Legal", "Classification", "AI"],
          rating: "4.7",
          usage: "6.4k",
          speed: "Fast",
          path: "/legalDocumentClassifierAiAgent",
        },
        {
          id: 59,
          name: "Social Media Content AI Agent",
          slug: "socialMediaContentAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Create, schedule, and analyze social media content using AI.",
          icon: "📱",
          color: "from-pink-500 to-yellow-500",
          tags: ["Social Media", "Content", "Marketing"],
          rating: "4.8",
          usage: "13.2k",
          speed: "Fast",
          path: "/socialMediaContentAiAgent",
        },
        {
          id: 60,
          name: "ETL (Extract, Transform, Load) AI Agent",
          slug: "etlExtractTransformLoadAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate ETL pipelines for seamless data migration and analytics workflows.",
          icon: "🔄",
          color: "from-green-500 to-teal-600",
          tags: ["ETL", "Data", "Pipeline"],
          rating: "4.7",
          usage: "7.8k",
          speed: "Fast",
          path: "/etlExtractTransformLoadAiAgent",
        },
        {
          id: 61,
          name: "RFP AI Agent",
          slug: "rfpAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Generate, evaluate, and respond to Requests for Proposals using AI.",
          icon: "📌",
          color: "from-red-500 to-orange-600",
          tags: ["RFP", "Bidding", "Automation"],
          rating: "4.6",
          usage: "6.2k",
          speed: "Medium",
          path: "/rfpAiAgent",
        },
        {
          id: 62,
          name: "Loan Processing AI Agent",
          slug: "loanProcessingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate credit assessment, documentation, and loan approval workflows.",
          icon: "🏦",
          color: "from-blue-400 to-indigo-500",
          tags: ["Loans", "Finance", "Automation"],
          rating: "4.7",
          usage: "9.5k",
          speed: "Fast",
          path: "/loanProcessingAiAgent",
        },
        {
          id: 63,
          name: "Suspicious Activity Reporting AI Agent",
          slug: "suspiciousActivityReportingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",

          description:
            "Identify and report suspicious activities for regulatory compliance.",
          icon: "🚨",
          color: "from-red-600 to-pink-600",
          tags: ["Compliance", "Monitoring", "Security"],
          rating: "4.9",
          usage: "8.8k",
          speed: "Fast",
          path: "/suspiciousActivityReportingAiAgent",
        },
      ],
    },

    {
      name: "Data Extraction",
      description:
        "Powerful AI agents specialized in extracting, processing, and analyzing data from various sources and formats.",
      agents: [
        {
          id: 4,
          name: "Web Scraping AI Agent",
          slug: "webScrapingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Extract structured data from websites efficiently with intelligent parsing and data cleaning capabilities.",
          icon: "🌐",
          color: "from-cyan-500 to-blue-600",
          tags: ["Web Scraping", "Data Mining", "Automation"],
          rating: "4.9",
          usage: "15.2k",
          speed: "Fast",
          path: "/webScrapingAiAgent",
        },
        {
          id: 5,
          name: "Document Parser AI Agent",
          slug: "documentParserAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Process and extract information from PDFs, documents, and forms with high accuracy and intelligent formatting.",
          icon: "📄",
          color: "from-violet-500 to-purple-600",
          tags: ["Document Processing", "OCR", "Text Extraction"],
          rating: "4.8",
          usage: "11.7k",
          speed: "Medium",
          path: "/documentParserAiAgent",
        },
        {
          id: 6,
          name: "Database Query AI Agent",
          slug: "databaseQueryAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Intelligent database querying and data extraction with natural language processing and automated reporting.",
          icon: "🗄️",
          color: "from-teal-500 to-green-600",
          tags: ["Database", "SQL", "Reporting"],
          rating: "4.8",
          usage: "9.4k",
          speed: "Fast",
          path: "/databaseQueryAiAgent",
        },
        {
          id: 45,
          name: "Data Extraction AI Agent",
          slug: "dataExtractionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Extract structured data from unstructured documents like PDFs, emails, and reports.",
          icon: "📄",
          color: "from-teal-500 to-cyan-600",
          tags: ["Data Extraction", "OCR", "Documents"],
          rating: "4.7",
          usage: "10.9k",
          speed: "Medium",
          path: "/dataExtractionAiAgent",
        },
        {
          id: 49,
          name: "Data Entry AI Agent",
          slug: "dataEntryAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate repetitive data entry tasks with high speed and accuracy.",
          icon: "⌨️",
          color: "from-gray-500 to-blue-500",
          tags: ["Data Entry", "Automation", "Efficiency"],
          rating: "4.6",
          usage: "13.1k",
          speed: "Ultra Fast",
          path: "/dataEntryAiAgent",
        },
        {
          id: 53,
          name: "Document Review AI Agent",
          slug: "documentReviewAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Analyze and summarize lengthy documents with legal or technical content.",
          icon: "📚",
          color: "from-blue-600 to-indigo-700",
          tags: ["Documents", "Review", "Summarization"],
          rating: "4.6",
          usage: "7.2k",
          speed: "Medium",
          path: "/documentReviewAiAgent",
        },
        {
          id: 55,
          name: "Data Collection AI Agent",
          slug: "dataCollectionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Collect structured and unstructured data from multiple sources automatically.",
          icon: "🔍",
          color: "from-purple-400 to-blue-500",
          tags: ["Data", "Automation", "Collection"],
          rating: "4.7",
          usage: "11.0k",
          speed: "Medium",
          path: "/dataCollectionAiAgent",
        },
        {
          id: 60,
          name: "ETL (Extract, Transform, Load) AI Agent",
          slug: "etlAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate ETL pipelines for seamless data migration and analytics workflows.",
          icon: "🔄",
          color: "from-green-500 to-teal-600",
          tags: ["ETL", "Data", "Pipeline"],
          rating: "4.7",
          usage: "7.8k",
          speed: "Fast",
          path: "/etlAiAgent",
        },
      ],
    },
    {
      name: "E-commerce",
      description:
        "AI agents that enhance online shopping experiences, automate store operations, and drive sales through intelligent insights and automation.",
      agents: [
        {
          id: 45,
          name: "Product Recommendation AI Agent",
          slug: "productRecommendationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Increase conversions by delivering personalized product recommendations based on user behavior and preferences.",
          icon: "🛍️",
          color: "from-pink-500 to-rose-600",
          tags: ["Recommendation", "Personalization", "Conversion"],
          rating: "4.9",
          usage: "18.7k",
          speed: "Instant",
          path: "/productRecommendationAiAgent",
        },
        {
          id: 46,
          name: "Inventory Forecasting AI Agent",
          slug: "inventoryForecastingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Predict stock levels, avoid overstocking or understocking, and ensure timely restocking using historical sales data.",
          icon: "📦",
          color: "from-yellow-500 to-orange-600",
          tags: ["Forecasting", "Inventory", "Logistics"],
          rating: "4.8",
          usage: "13.4k",
          speed: "Fast",
          path: "/inventoryForecastingAiAgent",
        },
        {
          id: 47,
          name: "Customer Review Summarizer AI Agent",
          slug: "customerReviewSummarizerAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Summarize product reviews to extract key sentiments and help customers quickly understand product pros and cons.",
          icon: "📝",
          color: "from-blue-500 to-indigo-600",
          tags: ["Reviews", "Summarization", "NLP"],
          rating: "4.7",
          usage: "10.2k",
          speed: "Medium",
          path: "/customerReviewSummarizerAiAgent",
        },
        {
          id: 48,
          name: "Order Tracking AI Agent",
          slug: "orderTrackingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Provide real-time order tracking updates and automated responses to customer delivery inquiries.",
          icon: "🚚",
          color: "from-green-500 to-emerald-600",
          tags: ["Order Tracking", "Logistics", "Support"],
          rating: "4.8",
          usage: "15.6k",
          speed: "Instant",
          path: "/orderTrackingAiAgent",
        },
        {
          id: 49,
          name: "Cart Abandonment Recovery AI Agent",
          slug: "cartAbandonmentRecoveryAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Recover lost sales by sending personalized follow-ups and discount offers to users who abandon their carts.",
          icon: "🛒",
          color: "from-violet-500 to-purple-600",
          tags: ["Recovery", "Abandoned Carts", "Sales"],
          rating: "4.9",
          usage: "17.1k",
          path: "/cartAbandonmentRecoveryAiAgent",
          speed: "Fast",
        },
        {
          id: 50,
          name: "Price Optimization AI Agent",
          slug: "priceOptimizationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Analyze market trends and competitor pricing to dynamically adjust product prices for maximum profit and competitiveness.",
          icon: "💲",
          color: "from-amber-500 to-yellow-600",
          tags: ["Pricing", "Optimization", "Analytics"],
          rating: "4.8",
          usage: "11.9k",
          speed: "Medium",
          path: "/priceOptimizationAiAgent",
        },
        {
          id: 51,
          name: "E-commerce Chatbot AI Agent",
          slug: "ecommerceChatbotAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Engage with online shoppers using natural language to answer questions, recommend products, and assist with checkout.",
          icon: "🤖",
          color: "from-cyan-500 to-blue-600",
          tags: ["Chatbot", "Support", "Engagement"],
          rating: "4.9",
          usage: "20.3k",
          speed: "Instant",
          path: "/ecommerceChatbotAiAgent",
        },
        {
          id: 52,
          name: "Return & Refund AI Agent",
          slug: "returnAndRefundAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate return and refund processes, ensure policy compliance, and provide quick resolutions to customer issues.",
          icon: "↩️",
          color: "from-red-500 to-rose-600",
          tags: ["Returns", "Refunds", "Automation"],
          rating: "4.7",
          usage: "9.8k",
          speed: "Fast",
          path: "/returnAndRefundAiAgent",
        },
      ],
    },
    {
      name: "Customer Service",
      description:
        "AI agents that improve customer interactions, support resolution, and streamline service workflows.",
      agents: [
        {
          id: 7,
          name: "Customer Support AI Agent",
          slug: "customerSupportAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Provide instant customer support with intelligent responses, ticket routing, and issue resolution capabilities.",
          icon: "🎧",
          color: "from-blue-500 to-indigo-600",
          tags: ["Support", "Chat", "Tickets"],
          rating: "4.9",
          usage: "22.1k",
          speed: "Instant",
          path: "/customerSupportAiAgent",
        },
        {
          id: 8,
          name: "Live Chat AI Agent",
          slug: "liveChatAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Engage customers in real-time with contextual conversations, product recommendations, and seamless handoffs.",
          icon: "💬",
          color: "from-green-500 to-teal-600",
          tags: ["Live Chat", "Real-time", "Engagement"],
          rating: "4.8",
          usage: "18.6k",
          speed: "Instant",
          path: "/liveChatAiAgent",
        },
        {
          id: 9,
          name: "Complaint Resolution AI Agent",
          slug: "complaintResolutionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Handle customer complaints with empathy, systematic problem-solving, and satisfaction tracking.",
          icon: "🛠️",
          color: "from-red-500 to-pink-600",
          tags: ["Complaints", "Resolution", "Satisfaction"],
          rating: "4.7",
          usage: "7.9k",
          speed: "Fast",
          path: "/complaintResolutionAiAgent",
        },
        {
          id: 61,
          name: "Customer Service AI Agent",
          slug: "customerServiceAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Assist customers across multiple channels with queries, issues, and requests using natural language processing.",
          icon: "🤖",
          color: "from-sky-500 to-blue-700",
          tags: ["Customer Service", "Multichannel", "NLP"],
          rating: "4.8",
          usage: "20.3k",
          speed: "Fast",
          path: "/customerServiceAiAgent",
        },
        {
          id: 62,
          name: "Email Categorization & Triage AI Agent",
          slug: "emailCategorizationAndTriageAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automatically sort and prioritize incoming customer emails for faster and more efficient resolution.",
          icon: "📬",
          color: "from-purple-500 to-indigo-700",
          tags: ["Email", "Sorting", "Triage"],
          rating: "4.7",
          usage: "14.2k",
          speed: "Medium",
          path: "/emailCategorizationAndTriageAiAgent",
        },
        {
          id: 63,
          name: "Customer Experience AI Agent",
          slug: "customerExperienceAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Track and optimize customer satisfaction through surveys, sentiment analysis, and engagement insights.",
          icon: "📊",
          color: "from-yellow-500 to-orange-600",
          tags: ["Experience", "Satisfaction", "Sentiment Analysis"],
          rating: "4.8",
          usage: "9.8k",
          speed: "Fast",
          path: "/customerExperienceAiAgent",
        },
        {
          id: 64,
          name: "Return Handling AI Agent",
          slug: "returnHandlingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate return requests and refund processes, ensuring customer satisfaction and policy compliance.",
          icon: "↩️",
          color: "from-red-400 to-yellow-500",
          tags: ["Returns", "Refunds", "Automation"],
          rating: "4.6",
          usage: "8.3k",
          speed: "Fast",
          path: "/returnHandlingAiAgent",
        },
        {
          id: 65,
          name: "Inventory Management AI Agent",
          slug: "inventoryManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Track inventory levels, manage restocking alerts, and reduce fulfillment delays.",
          icon: "📦",
          color: "from-orange-500 to-green-600",
          tags: ["Inventory", "Supply Chain", "Automation"],
          rating: "4.7",
          usage: "10.7k",
          speed: "Medium",
        },
      ],
    },
    {
      name: "Sales",
      description:
        "AI-powered sales agents designed to boost revenue, qualify leads, and optimize the entire sales funnel with intelligent automation.",
      agents: [
        {
          id: 11,
          name: "Lead Qualification AI Agent",
          slug: "leadQualificationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automatically qualify and score leads based on behavior, demographics, and engagement patterns to prioritize sales efforts.",
          icon: "🎯",
          color: "from-green-500 to-emerald-600",
          tags: ["Lead Scoring", "Qualification", "CRM"],
          rating: "4.9",
          usage: "19.3k",
          speed: "Fast",
        },
        {
          id: 12,
          name: "Sales Outreach AI Agent",
          slug: "salesOutreachAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Personalize cold outreach campaigns with intelligent messaging, follow-up sequences, and response tracking.",
          icon: "📧",
          color: "from-blue-500 to-cyan-600",
          tags: ["Outreach", "Email", "Personalization"],
          rating: "4.8",
          usage: "16.7k",
          speed: "Fast",
        },
        {
          id: 13,
          name: "Sales Analytics AI Agent",
          slug: "salesAnalyticsAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Analyze sales performance, predict revenue trends, and identify optimization opportunities with advanced analytics.",
          icon: "📊",
          color: "from-purple-500 to-pink-600",
          tags: ["Analytics", "Forecasting", "Performance"],
          rating: "4.8",
          usage: "13.2k",
          speed: "Medium",
        },
        {
          id: 14,
          name: "Deal Negotiation AI Agent",
          slug: "dealNegotiationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Assist with deal negotiations by providing pricing insights, competitor analysis, and optimal negotiation strategies.",
          icon: "🤝",
          color: "from-orange-500 to-red-600",
          tags: ["Negotiation", "Pricing", "Strategy"],
          rating: "4.7",
          usage: "8.9k",
          speed: "Fast",
        },
        {
          id: 66,
          name: "Customer Experience AI Agent",
          slug: "customerExperienceAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Monitor and enhance customer interactions to increase retention and improve the buyer journey through sentiment and behavior tracking.",
          icon: "📈",
          color: "from-pink-500 to-indigo-600",
          tags: ["Customer Journey", "Experience", "Retention"],
          rating: "4.8",
          usage: "10.9k",
          speed: "Fast",
        },
        {
          id: 67,
          name: "Billing Management AI Agent",
          slug: "billingManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate invoicing, payment reminders, and billing queries to streamline your financial workflows.",
          icon: "💳",
          color: "from-yellow-500 to-orange-500",
          tags: ["Billing", "Invoices", "Automation"],
          rating: "4.7",
          usage: "12.1k",
          speed: "Medium",
        },
        {
          id: 68,
          name: "Procurement Management AI Agent",
          slug: "procurementManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Optimize procurement decisions, supplier evaluations, and purchase workflows with data-driven intelligence.",
          icon: "🛒",
          color: "from-green-400 to-blue-500",
          tags: ["Procurement", "Suppliers", "Automation"],
          rating: "4.6",
          usage: "9.2k",
          speed: "Medium",
        },
        {
          id: 69,
          name: "Supply Chain Monitoring AI Agent",
          slug: "supplyChainMonitoringAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Monitor logistics, detect disruptions, and optimize inventory flow across the entire supply chain.",
          icon: "🚛",
          color: "from-sky-500 to-teal-600",
          tags: ["Supply Chain", "Monitoring", "Logistics"],
          rating: "4.8",
          usage: "11.4k",
          speed: "Fast",
        },
        {
          id: 70,
          name: "RFP AI Agent",
          slug: "rfpAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate the creation, analysis, and response to Request for Proposals with intelligent drafting and review tools.",
          icon: "📄",
          color: "from-violet-600 to-indigo-700",
          tags: ["RFP", "Proposal", "Automation"],
          rating: "4.6",
          usage: "7.6k",
          speed: "Fast",
        },
        {
          id: 71,
          name: "Order Tracking AI Agent",
          slug: "orderTrackingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Provide real-time order updates, shipment status, and notifications for enhanced customer visibility.",
          icon: "📦",
          color: "from-yellow-400 to-lime-500",
          tags: ["Orders", "Tracking", "Notifications"],
          rating: "4.8",
          usage: "13.7k",
          speed: "Fast",
        },
        {
          id: 72,
          name: "Return Handling AI Agent",
          slug: "returnHandlingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Manage return processes efficiently, including authorization, tracking, and resolution.",
          icon: "↩️",
          color: "from-red-400 to-yellow-500",
          tags: ["Returns", "Logistics", "Customer Care"],
          rating: "4.6",
          usage: "9.5k",
          speed: "Fast",
        },
        {
          id: 73,
          name: "Inventory Management AI Agent",
          slug: "inventoryManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Track and forecast inventory needs to prevent stockouts and overstock, improving supply chain operations.",
          icon: "📊",
          color: "from-green-600 to-cyan-600",
          tags: ["Inventory", "Forecasting", "Supply Chain"],
          rating: "4.7",
          usage: "11.1k",
          speed: "Medium",
        },
      ],
    },
    {
      name: "HR",
      description:
        "Human Resources AI agents that streamline recruitment, employee management, and HR operations with intelligent automation.",
      agents: [
        {
          id: 15,
          name: "Resume Screening AI Agent",
          slug: "resumeScreeningAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automatically screen resumes, rank candidates, and identify the best matches based on job requirements and qualifications.",
          icon: "📋",
          color: "from-indigo-500 to-purple-600",
          tags: ["Recruitment", "Screening", "Matching"],
          rating: "4.9",
          usage: "21.4k",
          speed: "Ultra Fast",
        },
        {
          id: 16,
          name: "Employee Onboarding AI Agent",
          slug: "employeeOnboardingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Streamline new employee onboarding with automated workflows, document collection, and personalized guidance.",
          icon: "👋",
          color: "from-teal-500 to-blue-600",
          tags: ["Onboarding", "Workflow", "Documentation"],
          rating: "4.8",
          usage: "14.6k",
          speed: "Fast",
        },
        {
          id: 17,
          name: "Performance Review AI Agent",
          slug: "performanceReviewAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate performance evaluations, generate insights, and provide data-driven feedback for employee development.",
          icon: "⭐",
          color: "from-yellow-500 to-orange-600",
          tags: ["Performance", "Reviews", "Analytics"],
          rating: "4.7",
          usage: "10.8k",
          speed: "Medium",
        },
        {
          id: 18,
          name: "HR Chatbot AI Agent",
          slug: "hrChatbotAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Provide 24/7 HR support to employees with instant answers to policy questions, leave requests, and general inquiries.",
          icon: "🤖",
          color: "from-green-500 to-teal-600",
          tags: ["Chatbot", "Support", "Self-Service"],
          rating: "4.8",
          usage: "18.2k",
          speed: "Instant",
        },
        {
          id: 74,
          name: "Appointment Management AI Agent",
          slug: "appointmentManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Handle internal scheduling, meeting coordination, and reminders for HR-related appointments and sessions.",
          icon: "📅",
          color: "from-pink-500 to-rose-600",
          tags: ["Scheduling", "Reminders", "Meetings"],
          rating: "4.6",
          usage: "9.1k",
          speed: "Fast",
        },
        {
          id: 75,
          name: "Interview Scheduler AI Agent",
          slug: "interviewSchedulerAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate interview scheduling, candidate notifications, and interviewer coordination across time zones.",
          icon: "🕒",
          color: "from-blue-400 to-indigo-500",
          tags: ["Recruitment", "Scheduling", "Automation"],
          rating: "4.7",
          usage: "11.3k",
          speed: "Fast",
        },
        {
          id: 76,
          name: "Payroll Calculation AI Agent",
          slug: "payrollCalculationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Compute accurate payroll, deductions, bonuses, and generate salary slips for employees on schedule.",
          icon: "💰",
          color: "from-yellow-600 to-amber-500",
          tags: ["Payroll", "Salary", "HR Operations"],
          rating: "4.8",
          usage: "13.6k",
          speed: "Medium",
        },
        {
          id: 77,
          name: "Onboarding AI Agent",

          slug: "onboardingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Guide new hires through onboarding tasks, compliance documents, and training modules with an interactive experience.",
          icon: "🚀",
          color: "from-lime-500 to-green-600",
          tags: ["Onboarding", "HR", "Guidance"],
          rating: "4.7",
          usage: "12.4k",
          speed: "Fast",
        },
      ],
    },
    {
      name: "Finance & Accounting",
      description:
        "AI agents that streamline financial operations, ensure accuracy in accounting, and enhance financial decision-making with intelligent automation.",
      agents: [
        {
          id: 37,
          name: "Expense Management AI Agent",
          slug: "expenseManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Track, categorize, and analyze company expenses automatically, providing insights and reducing manual bookkeeping.",
          icon: "💸",
          color: "from-rose-500 to-red-600",
          tags: ["Expenses", "Tracking", "Automation"],
          rating: "4.9",
          usage: "14.3k",
          speed: "Fast",
        },
        {
          id: 38,
          name: "Invoice Processing AI Agent",
          slug: "invoiceProcessingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate invoice reading, validation, and entry into your accounting system, reducing errors and speeding up workflows.",
          icon: "🧾",
          color: "from-indigo-500 to-blue-600",
          tags: ["Invoices", "OCR", "Automation"],
          rating: "4.8",
          usage: "12.7k",
          speed: "Fast",
        },
        {
          id: 39,
          name: "Tax Calculation AI Agent",
          slug: "taxCalculationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Handle tax calculations, rule compliance, and filing support with jurisdiction-specific automation.",
          icon: "📊",
          color: "from-green-500 to-emerald-600",
          tags: ["Taxes", "Compliance", "Filing"],
          rating: "4.7",
          usage: "9.8k",
          speed: "Medium",
        },
        {
          id: 40,
          name: "Financial Forecasting AI Agent",
          slug: "financialForecastingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Predict financial trends, budget needs, and investment opportunities using advanced analytics and historical data.",
          icon: "📈",
          color: "from-blue-500 to-cyan-600",
          tags: ["Forecasting", "Finance", "Analytics"],
          rating: "4.9",
          usage: "11.5k",
          speed: "Fast",
        },
        {
          id: 41,
          name: "Accounts Payable AI Agent",
          slug: "accountsPayableAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Manage the entire accounts payable process with automated invoice matching, approval workflows, and payment scheduling.",
          icon: "🏦",
          color: "from-yellow-500 to-amber-600",
          tags: ["Payables", "Workflow", "Payments"],
          rating: "4.8",
          usage: "10.2k",
          speed: "Fast",
        },
        {
          id: 42,
          name: "Accounts Receivable AI Agent",
          slug: "accountsReceivableAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Track incoming payments, send automated reminders, and generate receivables reports to ensure healthy cash flow.",
          icon: "📥",
          color: "from-purple-500 to-pink-600",
          tags: ["Receivables", "Reminders", "Reports"],
          rating: "4.7",
          usage: "8.6k",
          speed: "Fast",
        },
        {
          id: 43,
          name: "Payroll Processing AI Agent",
          slug: "payrollProcessingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate payroll calculations, deductions, and compliance checks to ensure accurate and timely employee payments.",
          icon: "💼",
          color: "from-teal-500 to-blue-600",
          tags: ["Payroll", "Salary", "Automation"],
          rating: "4.8",
          usage: "13.1k",
          speed: "Fast",
        },
        {
          id: 44,
          name: "Financial Compliance AI Agent",
          slug: "financialComplianceAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Monitor compliance with financial regulations, flag suspicious transactions, and generate audit-ready reports.",
          icon: "🛡️",
          color: "from-slate-500 to-gray-600",
          tags: ["Compliance", "Audit", "Monitoring"],
          rating: "4.8",
          usage: "6.9k",
          speed: "Medium",
        },
      ],
    },
    {
      name: "Social Media",
      description:
        "AI agents for managing, optimizing, and automating social media strategies across platforms to boost engagement and visibility.",
      agents: [
        {
          id: 60,
          name: "Content Creation AI Agent",
          slug: "contentCreationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Generate engaging posts, captions, and hashtags tailored for your audience across platforms like Instagram, LinkedIn, and Twitter.",
          icon: "📝",
          color: "from-indigo-500 to-purple-600",
          tags: ["Content", "Generation", "Marketing"],
          rating: "4.9",
          usage: "22.5k",
          speed: "Fast",
        },
        {
          id: 61,
          name: "Post Scheduler AI Agent",
          slug: "postSchedulerAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Plan and automatically publish posts at optimal times for maximum visibility and engagement.",
          icon: "🗓️",
          color: "from-green-500 to-teal-600",
          tags: ["Scheduling", "Automation", "Publishing"],
          rating: "4.8",
          usage: "19.4k",
          speed: "Instant",
        },
        {
          id: 62,
          name: "Engagement Tracker AI Agent",
          slug: "engagementTrackerAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Monitor likes, shares, comments, and follower growth to evaluate campaign effectiveness in real-time.",
          icon: "📈",
          color: "from-blue-500 to-cyan-600",
          tags: ["Analytics", "Engagement", "Tracking"],
          rating: "4.7",
          usage: "17.6k",
          speed: "Fast",
        },
        {
          id: 63,
          name: "Comment Moderation AI Agent",
          slug: "commentModerationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automatically moderate comments by filtering spam, hate speech, and inappropriate content across platforms.",
          icon: "🛡️",
          color: "from-red-500 to-pink-600",
          tags: ["Moderation", "Filtering", "Security"],
          rating: "4.8",
          usage: "14.3k",
          speed: "Ultra Fast",
        },
        {
          id: 64,
          name: "Social Listening AI Agent",
          slug: "socialListeningAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Track brand mentions, sentiment, and competitor activity to stay ahead in your market niche.",
          icon: "👂",
          color: "from-orange-500 to-yellow-600",
          tags: ["Sentiment Analysis", "Brand Monitoring", "Listening"],
          rating: "4.9",
          usage: "13.1k",
          speed: "Medium",
        },
        {
          id: 65,
          name: "Influencer Outreach AI Agent",
          slug: "influencerOutreachAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Identify and connect with relevant influencers, automate outreach messages, and track collaboration performance.",
          icon: "🤝",
          color: "from-pink-500 to-rose-600",
          tags: ["Outreach", "Influencer", "Partnership"],
          rating: "4.7",
          usage: "10.5k",
          speed: "Fast",
        },
        {
          id: 66,
          name: "Trend Detection AI Agent",
          slug: "trendDetectionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Analyze real-time social data to spot emerging trends, hashtags, and viral topics before competitors.",
          icon: "📊",
          color: "from-violet-500 to-indigo-600",
          tags: ["Trends", "Insights", "Hashtags"],
          rating: "4.9",
          usage: "12.8k",
          speed: "Fast",
        },
      ],
    },

    {
      name: "Legal",
      description:
        "Legal AI agents that assist with document review, contract analysis, compliance monitoring, and legal research tasks.",
      agents: [
        {
          id: 19,
          name: "Contract Analysis AI Agent",
          slug: "contractAnalysisAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Review and analyze contracts for key terms, risks, and compliance issues with detailed summaries and recommendations.",
          icon: "📜",
          color: "from-slate-500 to-gray-600",
          tags: ["Contracts", "Analysis", "Risk Assessment"],
          rating: "4.9",
          usage: "12.7k",
          speed: "Fast",
        },
        {
          id: 20,
          name: "Legal Research AI Agent",
          slug: "legalResearchAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Conduct comprehensive legal research, find relevant case law, and generate detailed research reports with citations.",
          icon: "⚖️",
          color: "from-blue-500 to-indigo-600",
          tags: ["Research", "Case Law", "Citations"],
          rating: "4.8",
          usage: "9.5k",
          speed: "Medium",
        },
        {
          id: 21,
          name: "Compliance Monitoring AI Agent",
          slug: "complianceMonitoringAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Monitor regulatory compliance, track changes in laws, and alert teams to potential compliance risks and requirements.",
          icon: "🛡️",
          color: "from-red-500 to-pink-600",
          tags: ["Compliance", "Monitoring", "Regulations"],
          rating: "4.8",
          usage: "7.3k",
          speed: "Fast",
        },
        {
          id: 22,
          name: "Document Redaction AI Agent",
          slug: "documentRedactionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automatically identify and redact sensitive information from legal documents while maintaining document integrity.",
          icon: "✂️",
          color: "from-purple-500 to-violet-600",
          tags: ["Redaction", "Privacy", "Document Processing"],
          rating: "4.7",
          usage: "6.1k",
          speed: "Fast",
        },
        {
          id: 78,
          name: "Document Review AI Agent",
          slug: "documentReviewAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Analyze and review legal documents for accuracy, consistency, and compliance with relevant standards and laws.",
          icon: "📑",
          color: "from-indigo-500 to-blue-600",
          tags: ["Document Review", "Legal", "Compliance"],
          rating: "4.8",
          usage: "10.4k",
          speed: "Medium",
        },
        {
          id: 79,
          name: "Contract Management AI Agent",
          slug: "contractManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Manage contract lifecycle including creation, tracking, renewals, and audit with automated alerts and version control.",
          icon: "📝",
          color: "from-green-500 to-teal-600",
          tags: ["Contracts", "Management", "Automation"],
          rating: "4.7",
          usage: "8.9k",
          speed: "Fast",
        },
        {
          id: 80,
          name: "Legal Document Classifier AI Agent",
          slug: "legalDocumentClassifierAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Classify legal documents into predefined categories for efficient organization, retrieval, and processing.",
          icon: "📂",
          color: "from-purple-600 to-pink-700",
          tags: ["Classification", "Legal Documents", "Organization"],
          rating: "4.6",
          usage: "7.8k",
          speed: "Fast",
        },
      ],
    },
    {
      name: "Healthcare",
      description:
        "Healthcare AI agents designed to assist medical professionals with patient care, diagnosis support, and administrative tasks.",
      agents: [
        {
          id: 23,
          name: "Medical Diagnosis AI Agent",
          slug: "medicalDiagnosisAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Assist healthcare professionals with preliminary diagnosis suggestions based on symptoms, medical history, and test results.",
          icon: "🩺",
          color: "from-red-500 to-rose-600",
          tags: ["Diagnosis", "Medical", "Decision Support"],
          rating: "4.9",
          usage: "16.8k",
          speed: "Fast",
        },
        {
          id: 24,
          name: "Patient Scheduling AI Agent",
          slug: "patientSchedulingAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Optimize patient scheduling, reduce no-shows, and manage appointment calendars with intelligent booking algorithms.",
          icon: "📅",
          color: "from-teal-500 to-cyan-600",
          tags: ["Scheduling", "Appointments", "Optimization"],
          rating: "4.8",
          usage: "23.4k",
          speed: "Instant",
        },
        {
          id: 25,
          name: "Medical Records AI Agent",
          slug: "medicalRecordsAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Process and organize medical records, extract key information, and ensure HIPAA-compliant data management.",
          icon: "📋",
          color: "from-blue-500 to-indigo-600",
          tags: ["Records", "HIPAA", "Data Management"],
          rating: "4.8",
          usage: "14.9k",
          speed: "Medium",
        },
        {
          id: 26,
          name: "Medication Reminder AI Agent",
          slug: "medicationReminderAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Send personalized medication reminders, track adherence, and provide drug interaction warnings to patients.",
          icon: "💊",
          color: "from-green-500 to-emerald-600",
          tags: ["Medication", "Reminders", "Adherence"],
          rating: "4.7",
          usage: "11.2k",
          speed: "Instant",
        },
        {
          id: 81,
          name: "Patient Intake Scheduler AI Agent",
          slug: "patientIntakeSchedulerAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Efficiently manage and schedule patient intake appointments to streamline clinic workflows and reduce waiting times.",
          icon: "🗓️",
          color: "from-indigo-500 to-blue-600",
          tags: ["Scheduling", "Patient Intake", "Appointments"],
          rating: "4.8",
          usage: "12.3k",
          speed: "Instant",
        },
        {
          id: 82,
          name: "Lab Results Extraction AI Agent",
          slug: "labResultsExtractionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Extract and organize lab test results from various sources for easy access and integration into patient records.",
          icon: "🧪",
          color: "from-purple-500 to-violet-600",
          tags: ["Lab Results", "Data Extraction", "Healthcare"],
          rating: "4.7",
          usage: "9.6k",
          speed: "Fast",
        },
        {
          id: 83,
          name: "Healthcare AI Agent",
          slug: "healthcareAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "General-purpose healthcare AI agent providing support for patient management, diagnostics, and administrative tasks.",
          icon: "🏥",
          color: "from-red-600 to-pink-700",
          tags: ["Healthcare", "Support", "Administration"],
          rating: "4.8",
          usage: "14.1k",
          speed: "Fast",
        },
        {
          id: 84,
          name: "Patient Service AI Agent",
          slug: "patientServiceAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Enhance patient experience with real-time support, information provision, and service coordination across healthcare facilities.",
          icon: "🤝",
          color: "from-green-600 to-teal-700",
          tags: ["Patient Service", "Support", "Experience"],
          rating: "4.7",
          usage: "11.8k",
          speed: "Instant",
        },
      ],
    },
    {
      name: "Insurance",
      description:
        "Insurance-focused AI agents for claims processing, risk assessment, policy management, and customer service in the insurance sector.",
      agents: [
        {
          id: 27,
          name: "Insurance Claims AI Agent",
          slug: "insuranceClaimsAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Streamline claims processing with automated assessment, fraud detection, and policy verification for faster claim resolution.",
          icon: "🏛️",
          color: "from-indigo-500 to-blue-600",
          tags: ["Claims", "Assessment", "Fraud Detection"],
          rating: "4.8",
          usage: "14.3k",
          speed: "Fast",
          path: "/aiAgents/insuranceClaimsAiAgent",
        },
        {
          id: 28,
          name: "Risk Assessment AI Agent",
          slug: "riskAssessmentAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Evaluate risk profiles, identify potential vulnerabilities, and provide recommendations for risk mitigation strategies.",
          icon: "📊",
          color: "from-yellow-500 to-orange-600",
          tags: ["Risk", "Assessment", "Mitigation"],
          rating: "4.7",
          usage: "10.8k",
          speed: "Medium",
          path: "/aiAgents/riskAssessmentAiAgent",
        },
      ],
    },
    {
      name: "Property Management",
      description:
        "AI agents tailored for real estate and property management, automating leasing, maintenance, tenant communication, and more.",
      agents: [
        {
          id: 53,
          name: "Tenant Screening AI Agent",
          slug: "tenantScreeningAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Evaluate tenant applications by analyzing credit history, background checks, and rental history to ensure reliable occupancy.",
          icon: "🔍",
          color: "from-blue-500 to-indigo-600",
          tags: ["Tenant", "Screening", "Leasing"],
          rating: "4.8",
          usage: "12.4k",
          speed: "Fast",
        },
        {
          id: 54,
          name: "Lease Management AI Agent",
          slug: "leaseManagementAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Track lease agreements, automate renewals, and alert landlords and tenants about upcoming expirations.",
          icon: "📑",
          color: "from-teal-500 to-green-600",
          tags: ["Lease", "Contracts", "Renewals"],
          rating: "4.7",
          usage: "9.3k",
          speed: "Medium",
        },
        {
          id: 55,
          name: "Maintenance Request AI Agent",
          slug: "maintenanceRequestAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Handle tenant maintenance requests automatically and dispatch repair personnel based on availability and urgency.",
          icon: "🛠️",
          color: "from-orange-500 to-yellow-600",
          tags: ["Maintenance", "Repairs", "Automation"],
          rating: "4.9",
          usage: "14.1k",
          speed: "Fast",
        },
        {
          id: 56,
          name: "Rent Collection AI Agent",
          slug: "rentCollectionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Automate rent reminders, collect payments securely, and provide real-time reporting for landlords and tenants.",
          icon: "💰",
          color: "from-green-500 to-emerald-600",
          tags: ["Rent", "Payments", "Automation"],
          rating: "4.8",
          usage: "15.2k",
          speed: "Fast",
        },
        {
          id: 57,
          name: "Virtual Property Tour AI Agent",
          slug: "virtualPropertyTourAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Deliver immersive and interactive virtual property tours to prospective tenants and buyers, reducing site visit needs.",
          icon: "🏡",
          color: "from-pink-500 to-rose-600",
          tags: ["Virtual Tour", "Marketing", "Real Estate"],
          rating: "4.9",
          usage: "10.7k",
          speed: "Instant",
        },
        {
          id: 58,
          name: "Vacancy Prediction AI Agent",
          slug: "vacancyPredictionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Predict upcoming vacancies using historical data and tenant behavior patterns to reduce unoccupied periods.",
          icon: "📊",
          color: "from-purple-500 to-violet-600",
          tags: ["Vacancy", "Prediction", "Analytics"],
          rating: "4.8",
          usage: "8.9k",
          speed: "Fast",
        },
        {
          id: 59,
          name: "Tenant Communication AI Agent",
          slug: "tenantCommunicationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Provide 24/7 communication with tenants for answering queries, sending notices, and managing disputes.",
          icon: "💬",
          color: "from-cyan-500 to-blue-600",
          tags: ["Communication", "Support", "Messaging"],
          rating: "4.7",
          usage: "11.6k",
          speed: "Instant",
        },
      ],
    },

    {
      name: "Custom AI Agent",
      description:
        "Build personalized AI agents tailored to your specific business needs and requirements with our flexible development platform.",
      agents: [
        {
          id: 28,
          name: "Custom Business AI Agent",
          slug: "customBusinessAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Create AI agents specifically designed for your unique business processes, workflows, and industry requirements.",
          icon: "🔧",
          color: "from-violet-500 to-purple-600",
          tags: ["Custom", "Tailored", "Business Specific"],
          rating: "4.9",
          usage: "8.7k",
          speed: "Variable",
        },
        {
          id: 29,
          name: "Industry-Specific AI Agent",
          slug: "industrySpecificAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Develop specialized AI agents for niche industries with custom training data and domain-specific knowledge.",
          icon: "🏭",
          color: "from-amber-500 to-orange-600",
          tags: ["Industry", "Specialized", "Custom Training"],
          rating: "4.8",
          usage: "5.9k",
          speed: "Variable",
        },
        {
          id: 30,
          name: "AI Agent Builder Platform",
          slug: "aiAgentBuilderPlatform",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "No-code platform for building custom AI agents with drag-and-drop interface and pre-built components.",
          icon: "🎨",
          color: "from-pink-500 to-rose-600",
          tags: ["No-Code", "Builder", "Platform"],
          rating: "4.8",
          usage: "12.1k",
          speed: "Fast",
        },
        {
          id: 31,
          name: "Enterprise AI Agent Solution",
          slug: "enterpriseAiAgentSolution",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Full-scale enterprise AI agent deployment with custom integrations, security, and dedicated support.",
          icon: "🏢",
          color: "from-slate-500 to-gray-600",
          tags: ["Enterprise", "Integration", "Support"],
          rating: "4.9",
          usage: "3.2k",
          speed: "Custom",
        },
        {
          id: 32,
          name: "Custom Analytics AI Agent",
          slug: "customAnalyticsAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Build AI agents tailored for your custom data analytics and reporting needs with adaptive algorithms.",
          icon: "📈",
          color: "from-blue-600 to-indigo-700",
          tags: ["Analytics", "Custom", "Data"],
          rating: "4.7",
          usage: "4.5k",
          speed: "Medium",
        },
        {
          id: 33,
          name: "Custom NLP AI Agent",
          slug: "customNlpAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Develop AI agents focused on custom natural language processing tasks such as sentiment analysis and language translation.",
          icon: "🗣️",
          color: "from-green-500 to-teal-600",
          tags: ["NLP", "Language", "Custom"],
          rating: "4.8",
          usage: "6.1k",
          speed: "Fast",
        },
        {
          id: 34,
          name: "Custom Computer Vision AI Agent",
          slug: "customComputerVisionAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Create AI agents specialized in custom image recognition, object detection, and visual data analysis.",
          icon: "📷",
          color: "from-yellow-500 to-orange-600",
          tags: ["Computer Vision", "Image", "Custom"],
          rating: "4.8",
          usage: "5.8k",
          speed: "Fast",
        },
        {
          id: 35,
          name: "Custom Workflow Automation AI Agent",
          slug: "customWorkflowAutomationAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Design AI agents that automate your unique business workflows and processes with full customization.",
          icon: "⚙️",
          color: "from-red-500 to-pink-600",
          tags: ["Workflow", "Automation", "Custom"],
          rating: "4.7",
          usage: "7.0k",
          speed: "Ultra Fast",
        },
        {
          id: 36,
          name: "Custom Chatbot AI Agent",
          slug: "customChatbotAiAgent",
          youtubeUrl:
            "https://www.youtube.com/watch?v=H58vbez_m4E&ab_channel=KendrickLamarVEVO",
          description:
            "Build chatbots customized to your brand voice, customer interaction style, and domain knowledge.",
          icon: "💬",
          color: "from-purple-500 to-indigo-600",
          tags: ["Chatbot", "Custom", "Customer Service"],
          rating: "4.8",
          usage: "9.4k",
          speed: "Instant",
        },
      ],
    },
  ];

  const filteredCategories =
    searchQuery.trim() === ""
      ? categories
      : categories
          .map((category) => ({
            ...category,
            agents: category.agents.filter(
              (agent) =>
                agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                agent.description
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                agent.tags.some((tag) =>
                  tag.toLowerCase().includes(searchQuery.toLowerCase())
                )
            ),
          }))
          .filter((category) => category.agents.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 py-20 pt-24 sm:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
            animationDelay: "1s",
          }}
        ></div>

        <div
          className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
            <Bot className="w-4 h-4 mr-2 text-blue-400" />
            AI Agent Templates
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
            Ready-to-use AI Agents for
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Every Business Need
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover powerful AI agents designed to automate tasks, solve
            problems, and enhance your business operations across multiple
            industries and use cases.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search AI agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Start Building AI Agents</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>{" "}
            {/* <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 hover:scale-105 transition-all duration-300">
                            View Documentation
                        </button> */}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredCategories.map((category, index) => (
            <AgentSlider
              key={index}
              category={category}
              isVisible={isVisible}
              onTryAgent={handleTryAgent}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 p-12 group-hover:border-slate-600/50 transition-all duration-500">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Start building AI agents
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  to automate processes
                </span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI agents to
                streamline operations and boost productivity.
              </p>
              <Link href="/contact" passHref>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
