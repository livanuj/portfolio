import { Layout } from "@/components/layout";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { leavelogicData } from "@/data/projectShowcases/leavelogic";

export default function LeaveLogic() {
  return (
    <Layout
      title="LeaveLogic - Whitehat Engineering | Anuj Shrestha"
      description="Employee leave planning platform with React, React Query, and Material-UI. Led React migration from Rails monolith to SPA."
    >
      <div className="container mx-auto px-4 py-12">
        <ProjectShowcase data={leavelogicData} />
      </div>
    </Layout>
  );
}
