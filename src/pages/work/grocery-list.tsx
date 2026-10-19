import { Layout } from "@/components/layout";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { groceryListData } from "@/data/projectShowcases/groceryList";

export default function GroceryList() {
  return (
    <Layout
      title="Grocery List | Anuj Shrestha"
      description="A grocery list organized by store, built with React, TypeScript, and Supabase"
    >
      <div className="container mx-auto px-4 py-12">
        <ProjectShowcase data={groceryListData} />
      </div>
    </Layout>
  );
}
