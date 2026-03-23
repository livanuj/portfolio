import { Layout } from "@/components/layout";
import { BulletList, Card } from "@/components/ui";

export default function WorkflowBuilder() {
  const technicalHighlights = [
    "Complex state synchronization across workflow nodes",
    "Real-time validation and error handling",
    "Undo/redo functionality with history management",
    "Optimistic UI updates for smooth user experience",
  ];

  const architectureDecisions = [
    "Component-based architecture for reusability",
    "Type-safe workflow definitions with TypeScript",
    "Separation of concerns (UI, state, business logic)",
    "Extensible design for adding new workflow step types",
  ];

  return (
    <Layout
      title="Workflow Builder Demo | Anuj Shrestha"
      description="Interactive workflow builder demonstrating complex state management, dynamic UI, and system design thinking."
    >
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-gray-100">
          Workflow Builder Demo
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
          Interactive drag-and-drop workflow builder
        </p>
      </div>

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

        <div className="border-t border-gray-200 bg-gray-50 p-6 transition-colors dark:border-gray-700 dark:bg-gray-900">
          <h4 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
            Implementation Details
          </h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="mb-1 font-medium text-gray-700 dark:text-gray-300">State Management</p>
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

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Technical Highlights
          </h3>
          <BulletList items={technicalHighlights} icon="check" />
        </Card>

        <Card>
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Architecture Decisions
          </h3>
          <BulletList items={architectureDecisions} icon="check" />
        </Card>
      </div>
    </Layout>
  );
}
