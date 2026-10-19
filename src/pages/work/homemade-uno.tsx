import { Layout } from "@/components/layout";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { homemadeUnoData } from "@/data/projectShowcases/homemadeUno";

export default function HomemadeUno() {
  return (
    <Layout
      title="Homemade UNO | Anuj Shrestha"
      description="Real-time multiplayer Uno for mobile with a 2v2 team mode, built with React, TypeScript, and Supabase"
    >
      <div className="container mx-auto px-4 py-12">
        <ProjectShowcase data={homemadeUnoData} />
      </div>
    </Layout>
  );
}
