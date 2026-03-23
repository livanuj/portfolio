import { Layout } from "@/components/layout";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { smartflowData } from "@/data/projectShowcases/smartflow";

export default function SmartFlow() {
  return (
    <Layout
      title="SmartFlows Platform - Taktikal | Anuj Shrestha"
      description="Enterprise workflow automation and digital onboarding platform built with React, TypeScript, and Next.js"
    >
      <div className="container mx-auto px-4 py-12">
        <ProjectShowcase data={smartflowData} />
      </div>
    </Layout>
  );
}
