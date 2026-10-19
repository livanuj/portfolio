import type { ProjectShowcaseData } from "@/types/portfolio";

const shot = (name: string) => `/screenshots/side-projects/uno-${name}.webp`;

export const homemadeUnoData: ProjectShowcaseData = {
  title: "Homemade UNO",
  role: "Product owner",
  type: "Built with Kiro (AI-DLC)",
  overview: [
    "I wanted to play Uno with friends in a 2v2 mode, where partners see each other's cards and play together. I couldn't find that in most Uno games, so I had AI agents build it. " +
      "Kiro wrote all of the code. I described what I wanted and tested every flow end to end by playing it. " +
      "I followed the AI-DLC method, reviewing the requirements and tasks, and asked the AI to add animations wherever they were needed.",
    "Homemade Uno is a web app for playing Uno with friends in real time, on a phone, tablet, or desktop. " +
      "You create a room, share the code, and play. No account is needed. " +
      "It includes calling and catching UNO, stacking +2/+4 cards, a Team mode where partners can " +
      "see each other's hands, and auto-pause with a grace period when a player disconnects. " +
      "It is also a Progressive Web App (PWA), so it can be installed to the home screen and opened like a native app.",
  ],
  link: "https://homemade-uno.livanuj.dev/",
  featuresTitle: "Features",
  features: [
    {
      title: "Works on any screen",
      description:
        "The layout adapts from a phone in portrait to a tablet or desktop in landscape, " +
        "so everyone at the table can play on whatever device they have.",
      screenshots: [
        {
          src: shot("landscape-03-game-2v2"),
          alt: "2v2 game on a wide screen, with the partner's hand face-up at the top of the table",
        },
        {
          src: shot("landscape-02d-lobby-2v2-ready"),
          alt: "Game room on a wide screen with Play 2v2 selected and players split into Team A and Team B",
        },
      ],
    },
    {
      title: "Rooms, no accounts",
      description:
        "Enter a name, create a room, and share the four-letter code or an invite link. " +
        "Friends join using anonymous sign-in, so nobody has to register before a game.",
      screenshotLayout: "phone",
      screenshots: [
        {
          src: shot("01-home"),
          alt: "Homemade Uno home screen with options to create a room or join with a room code",
        },
      ],
    },
    {
      title: "2v2 Team mode",
      description:
        "The twist on regular Uno: two teams of two, where partners see each other's cards and play together. " +
        "Pick the mode in the game room and drag players between teams. " +
        "During the game, your partner's hand is shown face-up at the top of the table.",
      screenshotLayout: "phone",
      screenshots: [
        {
          src: shot("02e-lobby-dragging"),
          alt: "Game room in 2v2 mode with a player being dragged to swap teams",
        },
        {
          src: shot("03-game-2v2"),
          alt: "2v2 game in progress, with the partner's hand shown face-up at the top of the table",
        },
      ],
    },
    {
      title: "The rules you play at home",
      description:
        "Stack +2 and +4 cards, pick a color after a wild card, and choose whether to play or keep a card you just drew.",
      screenshotLayout: "phone",
      screenshots: [
        {
          src: shot("06a-wild-color-picker"),
          alt: "Color picker shown after a +4, with the next player drawing 4 unless they can stack",
        },
        {
          src: shot("06b-drew-playable-card"),
          alt: "Prompt to play or keep a card that was just drawn and fits the pile",
        },
        {
          src: shot("07-game-over"),
          alt: "Game over screen announcing Team A wins, with cards left for each player",
        },
      ],
    },
    {
      title: "Handles dropped connections",
      description:
        "When a player loses connection, the game waits for them with a grace period and skips their turns if needed. " +
        "In 2v2, if a whole team drops, the game pauses by itself and resumes when they come back.",
      screenshotLayout: "phone",
      screenshots: [
        {
          src: shot("06c-player-disconnected"),
          alt: "Table showing that Nora lost connection, with a countdown before her turn is skipped",
        },
        {
          src: shot("08c-paused-team-offline"),
          alt: "Game paused because Team B lost connection, with an option to end the game",
        },
      ],
    },
    {
      title: "Server-authoritative game engine",
      bullets: [
        "One rules engine, written as a pure TypeScript reducer, is shared by the React client and a Supabase Edge Function",
        "The server checks and applies every move in an atomic transaction, so players can't cheat or get out of sync",
        "Each player's screen updates instantly over Supabase Realtime",
        "Row Level Security keeps each hand private, readable only by its owner and, in Team mode, their partner",
      ],
    },
    {
      title: "Automated tests",
      bullets: [
        "Property-based tests with fast-check for the game rules",
        "Component tests with Vitest and React Testing Library",
        "Playwright visual tests comparing each screen against the design mockups, in portrait and landscape",
      ],
    },
  ],
  technologies: [
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Motion",
    "Supabase",
    "Realtime",
    "PWA",
    "Vitest",
    "Playwright",
    "Vercel",
  ],
  achievements: [],
  backLink: "/work",
};
