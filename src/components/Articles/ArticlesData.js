import qrcode from "../../assets/images/qrcode-banner.webp";
import s3 from "../../assets/images/s3.webp";
import send from "../../assets/images/send-email.webp";
import pixels from "../../assets/images/pixels.webp";
import startups from "../../assets/images/startups.webp";
import risk from "../../assets/images/risk.webp";
import data from "../../assets/images/data-analytics.webp";

export const articleData = [
  {
    title: "Creating Dynamic QR Codes Using React.js: A Step-by-Step Tutorial",
    live: "https://zaycodes-1686045136273.hashnode.dev/creating-dynamic-qr-codes-using-reactjs-a-step-by-step-tutorial",
    img: qrcode,
    featured: "yes",
    company_name: "Hashnode",
    tags: ["JavaScript", "React.JS", "QR-Code"],
    type: "Tutorials",
  },
  {
    title: "How to Optimize AWS Simple Storage Service for Better Performance",
    live: "https://www.freecodecamp.org/news/how-to-optimize-aws-s3-for-performance/",
    img: s3,
    featured: "yes",
    company_name: "freeCodeCamp",
    tags: ["Cloud Computing", "AWS", "S3"],
    type: "Tutorials",
  },
  {
    title:
      "Fetching Data through Scraping vs. API: How the Scraping Browser Can Save You Money on API Fees",
    live: "https://techjury.net/blog/fetching-data-through-scraping-vs-api/",
    img: send,
    featured: "yes",
    company_name: "Techjury",
    tags: ["Web Scraping", "Python", "JavaScript"],
    type: "Tutorials",
  },
  {
    title: "7 Best VSCode Extensions for React Devs in 2023",
    live: "https://javascript.plainenglish.io/7-best-vscode-extensions-for-react-devs-in-2023-eb565ef47c40?gi=25e8551cfe4d",
    img: send,
    featured: "yes",
    company_name: "inPlain English",
    tags: ["React.JS", "VS Code", "JavaScript"],
    type: "Tutorials",
  },
  {
    title:
      "How to Create and Send Custom Emails using React Email and Resend API",
    live: "https://zaycodes-1686045136273.hashnode.dev/how-to-create-and-send-custom-emails-using-react-email-and-resend-api",
    img: send,
    featured: "yes",
    company_name: "WriteTech Hub",
    tags: ["React.JS", "Resend API", "Email Marketing"],
    type: "Tutorials",
  },
  {
    title:
      "Transforming Pixels into Imagination: Building an AI-Powered Image Generator with React.js and OpenAI API",
    live: "https://zaycodes-1686045136273.hashnode.dev/transforming-pixels-into-imagination-building-an-ai-powered-image-generator-with-reactjs-and-openai-api",
    img: pixels,
    featured: "yes",
    company_name: "WriteTech Hub",
    tags: ["AI", "React.JS", "OpenAI"],
    type: "Tutorials",
  },
  {
    title: "CRC Credit Bureau Migrates its Applications and Data to AWS",
    live: "https://datamellon.com/crc-case-study",
    img: send,
    featured: "no",
    company_name: "Datamellon",
    tags: ["CRC", "Cloud Migration", "AWS"],
    type: "Case Studies",
  },
  {
    title:
      "Fincra Achieves Cost Savings and Optimization with Well-Architected Review",
    live: "https://datamellon.com/fincra-war",
    img: pixels,
    featured: "no",
    company_name: "Datamellon",
    tags: ["Fincra", "AWS"],
    type: "Case Studies",
  },
  {
    title: "Providus Bank Modernizes API Management with AWS & Datamellon",
    live: "https://datamellon.com/providus-case-study",
    img: send,
    featured: "no",
    company_name: "Datamellon",
    tags: ["Providus Bank", "AWS", "API Management"],
    type: "Case Studies",
  },

  {
    title: "SmallSmall Technology Migrates to AWS with Datamellon",
    live: "https://datamellon.com/small-small",
    img: startups,
    featured: "no",
    company_name: "Datamellon",
    tags: ["Cloud Migration", "AWS", "SmallSmall"],
    type: "Case Studies",
  },
  {
    title: "Amazon WAF( Web Application Firewall) Specialization",
    live: "https://datamellon.com/aws-waf",
    img: startups,
    featured: "no",
    company_name: "Datamellon",
    tags: ["WAF", "AWS"],
    type: "Specialization",
  },
  {
    title: "AWS Control Tower Specialization",
    live: "https://datamellon.com/controltower",
    img: send,
    featured: "no",
    company_name: "Datamellon",
    tags: ["Control Tower", "AWS"],
    type: "Specialization",
  },
  {
    title: "AWS CloudFormation Solutions",
    live: "https://datamellon.com/aws-cloudformation",
    img: send,
    featured: "no",
    company_name: "Datamellon",
    tags: ["CloudFormation", "AWS"],
    type: "Specialization",
  },
  {
    title: "AWS API Gateway Specialization",
    live: "https://datamellon.com/aws-api-gateway",
    img: send,
    featured: "no",
    company_name: "Datamellon",
    tags: ["API Gateway", "AWS"],
    type: "Specialization",
  },
  {
    title: "The Importance of Financial Consulting for Startups",
    live: "https://omassociates.com.ng/the-importance-of-financial-consulting-for-startups/",
    img: startups,
    featured: "no",
    company_name: "O.M Associates",
    tags: ["CFO", "Consulting", "Startups"],
    type: "Finance",
  },
  {
    title: "Risk Management and Compliance Strategies for Modern Businesses",
    live: "https://omassociates.com.ng/risk-management-and-compliance-strategies-for-modern-businesses/",
    img: risk,
    featured: "no",
    company_name: "O.M Associates",
    tags: ["Risk Management", "Compliance", "Startups"],
    type: "Finance",
  },
  {
    title:
      "Leveraging Technology and Data Analytics for Accurate Financial Reporting",
    live: "https://omassociates.com.ng/leveraging-technology-and-data-analytics-for-accurate-financial-reporting/",
    img: data,
    featured: "no",
    company_name: "O.M Associates",
    tags: ["Data Analytics", "Financial Reporting", "Tech"],
    type: "Finance",
  },
];
