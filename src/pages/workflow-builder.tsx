import { Footer, Header } from "@/components/layout";
import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import Head from "next/head";
import Link from "next/link";

export default function WorkflowBuilder() {
  return (
    <>
      <Head>
        <title>Workflow Builder Demo | Anuj Shrestha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Interactive workflow builder demonstrating complex state management, dynamic UI, and system design thinking."
        />
      </Head>
      <div className="min-h-screen bg-gray-50 transition-colors dark:bg-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-12">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
            >
              <IconArrowLeft size={20} className="mr-2" />
              Back to Work
            </Link>
          </div>

          {/* Demo Title */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-gray-100">
              Workflow Builder Demo
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
              Interactive drag-and-drop workflow builder
            </p>
          </div>

          {/* Placeholder */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-lg transition-colors dark:border-gray-700 dark:bg-gray-800">
            <div className="flex min-h-[400px] items-center justify-center p-12">
              <div className="max-w-md text-center">
                <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
                  Interactive demo coming soon
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  This demo showcases a drag-and-drop workflow builder with complex state management
                  using React, TypeScript, Zustand, and dnd-kit.
                </p>
              </div>
            </div>

            {/* Implementation Notes */}
            <div className="border-t border-gray-200 bg-gray-50 p-6 transition-colors dark:border-gray-700 dark:bg-gray-900">
              <h4 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
                Implementation Details
              </h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="mb-1 font-medium text-gray-700 dark:text-gray-300">
                    State Management
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Zustand store managing workflow nodes, connections, and execution state
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-gray-700 dark:text-gray-300">Drag & Drop</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    dnd-kit library for smooth, accessible drag-and-drop interactions
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-gray-700 dark:text-gray-300">Validation</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Zod schemas for form validation and workflow rule enforcement
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow transition-colors dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                Technical Highlights
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <IconCheck
                    size={20}
                    className="mr-3 mt-0.5 flex-shrink-0 text-accent-600 dark:text-accent-400"
                  />
                  <span>Complex state synchronization across workflow nodes</span>
                </li>
                <li className="flex items-start">
                  <IconCheck
                    size={20}
                    className="mr-3 mt-0.5 flex-shrink-0 text-accent-600 dark:text-accent-400"
                  />
                  <span>Real-time validation and error handling</span>
                </li>
                <li className="flex items-start">
                  <IconCheck
                    size={20}
                    className="mr-3 mt-0.5 flex-shrink-0 text-accent-600 dark:text-accent-400"
                  />
                  <span>Undo/redo functionality with history management</span>
                </li>
                <li className="flex items-start">
                  <IconCheck
                    size={20}
                    className="mr-3 mt-0.5 flex-shrink-0 text-accent-600 dark:text-accent-400"
                  />
                  <span>Optimistic UI updates for smooth user experience</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow transition-colors dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                Architecture Decisions
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <IconCheck
                    size={20}
                    className="mr-3 mt-0.5 flex-shrink-0 text-accent-600 dark:text-accent-400"
                  />
                  <span>Component-based architecture for reusability</span>
                </li>
                <li className="flex items-start">
                  <IconCheck
                    size={20}
                    className="mr-3 mt-0.5 flex-shrink-0 text-accent-600 dark:text-accent-400"
                  />
                  <span>Type-safe workflow definitions with TypeScript</span>
                </li>
                <li className="flex items-start">
                  <IconCheck
                    size={20}
                    className="mr-3 mt-0.5 flex-shrink-0 text-accent-600 dark:text-accent-400"
                  />
                  <span>Separation of concerns (UI, state, business logic)</span>
                </li>
                <li className="flex items-start">
                  <IconCheck
                    size={20}
                    className="mr-3 mt-0.5 flex-shrink-0 text-accent-600 dark:text-accent-400"
                  />
                  <span>Extensible design for adding new workflow step types</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
