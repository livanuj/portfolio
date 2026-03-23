import { Footer, Header } from "@/components/layout";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { smartflowData } from "@/data/projectShowcases/smartflow";
import Head from "next/head";

export default function SmartFlow() {
  return (
    <>
      <Head>
        <title>SmartFlows Platform - Taktikal | Anuj Shrestha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Enterprise workflow automation and digital onboarding platform built with React, TypeScript, and Next.js"
        />
      </Head>
      <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <ProjectShowcase data={smartflowData} />
        </main>
        <Footer />
      </div>
    </>
  );
}
