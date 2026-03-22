import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { AnimatedDiv } from "@/components/ui";
import { IconMail, IconBrandGithub, IconMapPin } from "@tabler/icons-react";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Head>
        <title>{site.home.metaTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={site.home.metaDescription} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                <AnimatedDiv
                  delay="0.1s"
                  className="flex-shrink-0"
                >
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-800">
                      <Image
                        src={site.profileImage}
                        alt={site.fullName}
                        fill
                        className="rounded-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </AnimatedDiv>

                <div className="flex-1 text-center md:text-left space-y-6">
                  <AnimatedDiv delay="0.2s" className="space-y-3">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
                      {site.fullName}
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-accent-600 dark:text-accent-400 font-medium">
                      {site.home.role}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-400">
                      <IconMapPin size={20} />
                      <span>{site.location}</span>
                    </div>
                  </AnimatedDiv>
                  <AnimatedDiv
                    delay="0.4s"
                    className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    <p>{site.home.intro}</p>
                  </AnimatedDiv>
                  <AnimatedDiv
                    delay="0.6s"
                    className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
                  >
                    <Link
                      href="/bio"
                      className="px-8 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-colors"
                    >
                      View Bio
                    </Link>
                    <Link
                      href="/work"
                      className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-medium rounded-lg hover:border-accent-600 dark:hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      See Work
                    </Link>
                  </AnimatedDiv>
                  <AnimatedDiv
                    delay="0.8s"
                    className="flex gap-6 justify-center md:justify-start pt-2"
                  >
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      <IconMail size={20} />
                      <span>Email</span>
                    </a>
                    <a
                      href={site.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      <IconBrandGithub size={20} />
                      <span>GitHub</span>
                    </a>
                  </AnimatedDiv>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
