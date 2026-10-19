import type { EducationItem } from "@/types/portfolio";

export const education: EducationItem[] = [
  {
    degree: "MSc in Computer Science",
    institution: "Háskóli Íslands",
    location: "Reykjavík, Iceland",
    period: "Aug 2022 – Oct 2026",
    status: "Thesis topic - AI-assisted usability feedback analysis",
    details: [
      "Usability feedback analysis on SmartFlows at Taktikal was done manually. Designed and built an AI-assisted tool using Elixir and Phoenix LiveView that uses a sentence-similarity AI model to group comments describing the same usability issue.",
      "Deployed a working MVP and its AI service on Azure.",
      "Evaluated AI-assisted grouping against the product manager’s manual workflow across three studies, using real company feedback and synthetic data.",
      "Found that accurate grouping alone is not enough. The tool is most useful when UX experts can review and correct groups and use them to define usability issues.",
    ],
  },
  {
    degree: "BE in Computer Engineering",
    institution: "Kathmandu University",
    location: "Nepal",
    period: "2009 – 2013",
  },
];
