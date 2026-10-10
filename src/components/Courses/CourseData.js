import {
  Languages,
  MessageCircle,
  Monitor,
  Calculator,
} from "lucide-react";

export const courses = [
  {
    id: 1,
    icon: Languages,
    title: "Basic English",
    duration: "45 days",
    level: "Beginner",
    description:
      "Build confidence in grammar, vocabulary, reading, writing, and daily conversations.",
    color: "bg-blue-100 text-blue-600",
    options : [
      "Sentence Formation Skills",
      "Accuracy in English Grammar",
      "Speaking Practice & Exercises",
      "Confidence Building",
      "Interview Preparation",
      "Self-Introduction Mastery",
    ],
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Advanced English Speaking",
    duration: "2 Months",
    level: "Advanced",
    description:
      "Improve fluency, pronunciation, interview skills, public speaking, and personality development.",
    color: "bg-green-100 text-green-600",
    options : [
      " Improve Listening Skills",
      "Role Play Sessions",
      "Remove Hesitation while speaking",
      "Golden Rules of Presentation",
      "Leadership Development",
      "Public Speaking",
      "Real-Life Conversations",
      "Practical Enhancement",
      "Art of Living Skills",
      "Financial Literacy Basics",
    ]
  },
  {
    id: 3,
    icon: Monitor,
    title: "Office Automation[Professional]",
    duration: "2 Months",
    level: "Beginner",
    description:
      "Learn Windows, MS Word, Excel, PowerPoint, Internet, Email, and typing skills.",
    color: "bg-purple-100 text-purple-600",
    options : [
      "Computer Office Automation",
      "Basic Computer for Kids",
      " Smart Accounting",
      "Graphics Designing",
      "Full MIS (For Office Use Only)",
    ]
  },
  {
    id: 4,
    icon: Calculator,
    title: "Tally Prime",
    duration: "2 Months",
    level: "Professional",
    description:
      "Master Tally Prime, GST, accounting, inventory management, and business reporting.",
    color: "bg-orange-100 text-orange-600",
    options : [
      "Company Creation",
      "Ledge Creation",
      "Sales and Purches Entry",
      "Assets Entry Creation",
      "GST Tax Entry",
      "TDS Tax Entry",
      "Salary Sheet Entry Creation",
      "Item Sales and Purches Entry"
    ]
  },
];