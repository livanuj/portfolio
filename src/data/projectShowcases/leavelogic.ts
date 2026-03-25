import type { ProjectShowcaseData } from "@/types/portfolio";

export const leavelogicData: ProjectShowcaseData = {
  title: "LeaveLogic",
  company: "LeaveLogic (via Whitehat Engineering)",
  role: "Full-stack Developer",
  period: "2017 - 2023",
  type: "Leave Management Platform",
  overview:
    "LeaveLogic is an employee leave planning platform that helps employees confidently " +
    "navigate, plan, and manage their leave of absence for life events such as parental leave, " +
    "medical leave, family care, adoption, and maternity leave. I was one of three core developers " +
    "building the Ruby on Rails backend for 4 years, developing the benefits calculation engine, " +
    "API architecture, HR platform integrations, and business logic for leave eligibility. " +
    "In 2021, I transitioned to lead the React migration for the employee-facing portal, " +
    "architecting the frontend from scratch with Material-UI design system. The platform consolidates " +
    "leave benefits, job protections, personalized to-do lists, and claims processing into a single, " +
    "intuitive interface - empowering employees with confidential planning tools and real-time updates " +
    "throughout their leave journey.",
  link: "https://leavelogic.com/how-it-works/",
  features: [
    {
      title: "Backend API & Business Logic",
      bullets: [
        "Developed Ruby on Rails API serving employee portal, admin dashboard, and third-party integrations as one of three core backend developers",
        "Built benefits calculation engine with complex eligibility rules processing company-specific policies and state statutory requirements",
        "Designed database schema and ActiveRecord models for leave plans, benefits, claims, tasks, and multi-tenant user management",
        "Integrated HR platforms (Workday, Namely) to automatically import employee data including employment details, department, manager information before leave application",
        "Implemented RESTful endpoints with token-based authentication, role-based authorization, and data isolation across multiple enterprise clients",
        "Created background jobs using Sidekiq for automated benefit assignments, email notifications, and third-party data synchronization",
      ],
    },
    {
      title: "Multi-Step Onboarding Wizard",
      bullets: [
        "Built comprehensive guided onboarding flow spanning 7+ steps including employee location, leave category selection, scenario customization, due date, expected return date, employment details, and time-off worksheet",
        "Implemented context-driven state management to preserve user progress across sessions and form validation with detailed error messaging",
        "Designed confidential planning mode where leave plans remain private until the employee chooses to share with HR or managers",
        "Created intuitive step navigation with progress indicators and ability to edit previous sections",
      ],
    },
    {
      title: "Interactive Dashboard & Visual Timeline",
      bullets: [
        "Developed interactive dashboard featuring customized LeavePlan timelines tailored to each employee's specific circumstances with easily adjustable milestone dates",
        "Built visual benefit timeline showing paid, unpaid, and job-protected leave segments using custom React components",
        "Integrated calendar view with React Datepicker and Moment.js for milestone management and date selection",
        "Implemented support for viewing multiple concurrent leave plans with consolidated benefit source breakdown displaying weeks and days views",
        "Created individualized to-do lists organized by timeline phases (before, during, after leave) with progress tracking and completion states",
      ],
    },
    {
      title: "Claims Processing Workflow",
      bullets: [
        "Engineered end-to-end claims workflow enabling employees to start, edit, submit, and track claims status in real-time",
        "Built multi-section claim forms with field-level validation and custom form reducers for complex state management",
        "Developed YAML-based dynamic form configuration system allowing admins to customize claim form fields, validation rules, and prefill employee data without code changes",
        "Integrated webhook-based claim submission to external system, mapping and delivering required metadata collected from claim forms with proper authentication",
        "Implemented TinyMCE rich text editor for claim descriptions, enabling companies to change the description of the claims",
        "Implemented form auto-save functionality to prevent data loss and resume capability for incomplete claims",
        "Created status tracking system with visual indicators showing claim progress from draft to submission to approval",
      ],
    },
    {
      title: "Benefits Management & Content Editing",
      bullets: [
        "Developed benefits browsing interface with filtering by provider and category, displaying curated benefits specific to each employee's life event and circumstances",
        "Built frontend integration consuming the calculation engine API that determines benefit eligibility based on company-specific policies and state statutory rules",
        "Integrated TinyMCE rich text editor for both employee notes and admin benefit description management, enabling rich formatting with lists, tables, and styled content",
        "Worked on admin interface for creating and editing benefit descriptions using TinyMCE, allowing HR teams to maintain up-to-date benefit documentation without developer involvement",
        "Worked on search functionality using Elasticsearch across benefits with highlighted results and detailed benefit information modals showing eligibility criteria, coverage details, and related to-do tasks",
      ],
    },
  ],
  technologies: [
    "Ruby on Rails",
    "React",
    "React Query",
    "Material-UI",
    "Styled Components",
    "React Router",
    "React Datepicker",
    "TinyMCE",
    "Honeybadger",
    "Intercom",
    "Sidekiq",
    "PostgreSQL",
    "AWS",
    "Jira",
    "SparkPost",
  ],
  achievements: [
    "Core backend development - Spent 4 years as one of 3 core developers building Ruby on Rails backend including benefits calculation engine, API architecture, HR platform integrations (Workday, Namely), and YAML-based dynamic form configuration system",
    "Led React migration for employee portal - Transitioned to frontend leadership in 2021, spearheading migration from Ruby on Rails monolith to dedicated React 17 SPA for employee-facing features with Material-UI v4 design system",
    "Implemented React Query caching layer - Optimized server state management with intelligent caching, mutations, and optimistic updates for real-time data synchronization across leave plans, benefits, tasks, and claims",
    "Engineered multi-tenant theming system - Developed dynamic company-specific CSS loading based on subdomain enabling white-label deployment for multiple enterprise clients with customized branding",
  ],
  backLink: "/work",
};
