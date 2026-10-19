import type { ProjectShowcaseData } from "@/types/portfolio";

const shot = (name: string) => `/screenshots/side-projects/grocery-${name}.webp`;

export const groceryListData: ProjectShowcaseData = {
  title: "Grocery List",
  role: "Product owner",
  type: "Built with Kiro (AI-DLC)",
  overview: [
    "A grocery list my partner and I use every day, built around the way we actually shop: " +
      "items are organized by store and checked off as the trip goes on. " +
      "Kiro wrote all of the code. I described what I wanted, followed the AI-DLC method by reviewing the requirements and tasks, " +
      "and tested every flow end to end.",
    "It supports multiple shopping locations such as supermarkets, markets, and home stores, " +
      "while keeping the active list quick to scan and easy to update on a phone. ",
    "Multiple users can use it, with simple username-and-password sign-in through Supabase Auth. " +
      "There's no public sign-up: I create each account in Supabase, each user sees only their own stores and items, " +
      "and they stay signed in, so the list is ready whenever they open the app.",
  ],
  link: "https://grocerylist.livanuj.dev/",
  featuresTitle: "Features",
  features: [
    {
      title: "A list for every store",
      description:
        "The dashboard shows each store. Inside a store, add items quickly, " +
        "check them off, edit them, or drag them into the order you walk the aisles.",
      screenshotLayout: "phone",
      screenshots: [
        {
          src: shot("stores"),
          alt: "Store dashboard with Costco, Bonus/Kronan, Pris, and Fiska, each showing a progress bar",
        },
        {
          src: shot("store-list"),
          alt: "Costco list with items to check off, one already bought, and a field to add items",
        },
      ],
    },
    {
      title: "Finish the trip",
      description:
        "When you're done, finish the trip: carry selected unbought items over to the next trip, " +
        "or clear the whole list and start fresh.",
      screenshotLayout: "phone",
      screenshots: [
        {
          src: shot("finish-trip"),
          alt: "Finish shopping screen asking which of the 3 unchecked items to carry to the next trip",
        },
      ],
    },
    {
      title: "Data and sync",
      bullets: [
        "Sign in with Supabase to sync lists across devices, with Row Level Security keeping each user's data private",
        "A backend-agnostic storage interface keeps the UI independent of where data is stored",
        "Runs fully offline in local mode using IndexedDB when Supabase isn't configured",
      ],
    },
    {
      title: "Automated tests",
      bullets: [
        "Property-based tests with fast-check for state, validation, storage, and ownership rules",
        "Unit and component tests with Vitest and Testing Library",
        "Playwright end-to-end user journeys, including offline rendering checks",
      ],
    },
  ],
  technologies: [
    "React 18",
    "TypeScript",
    "Vite",
    "React Router",
    "Tailwind CSS 4",
    "dnd-kit",
    "Tabler Icons",
    "IndexedDB",
    "Supabase",
    "Postgres",
    "Vitest",
    "Testing Library",
    "fast-check",
    "Playwright",
    "Vercel",
  ],
  achievements: [],
  backLink: "/work",
};
