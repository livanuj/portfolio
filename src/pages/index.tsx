import Head from "next/head";
import { Header, Footer } from "@/components/layout";
import {
  Hero,
  About,
  Skills,
  Experience,
  Education,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - livanuj</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Full-stack developer building modern web applications with React, TypeScript, Ruby on Rails, and Elixir."
        />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </>
  );
}
