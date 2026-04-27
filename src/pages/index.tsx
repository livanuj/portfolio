import { Layout } from "@/components/layout";
import { AnimatedDiv } from "@/components/ui";
import { site } from "@/data/site";
import { IconBrandGithub, IconMail, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title={site.home.metaTitle} description={site.home.metaDescription}>
      <div className="flex min-h-[calc(100vh-160px)] items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
              <AnimatedDiv delay="0.1s" className="flex-shrink-0">
                <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48">
                  <div className="flex h-full w-full items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-accent-400 to-accent-600 shadow-xl dark:border-gray-800">
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

              <div className="flex-1 space-y-6 text-center md:text-left">
                <AnimatedDiv delay="0.2s" className="space-y-3">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
                    {site.fullName}
                  </h1>
                  <p className="text-xl font-medium text-accent-600 dark:text-accent-400 sm:text-2xl md:text-3xl">
                    {site.home.role}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 md:justify-start">
                    <IconMapPin size={20} />
                    <span>{site.location}</span>
                  </div>
                </AnimatedDiv>
                <AnimatedDiv
                  delay="0.4s"
                  className="text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg"
                >
                  <p>{site.home.intro}</p>
                </AnimatedDiv>
                <AnimatedDiv
                  delay="0.6s"
                  className="flex flex-wrap justify-center gap-4 pt-2 md:justify-start"
                >
                  <Link
                    href="/bio"
                    className="rounded-lg bg-accent-600 px-8 py-3 font-medium text-white transition-colors hover:bg-accent-700"
                  >
                    View Bio
                  </Link>
                  <Link
                    href="/work"
                    className="rounded-lg border-2 border-gray-300 px-8 py-3 font-medium text-gray-900 transition-colors hover:border-accent-600 hover:text-accent-600 dark:border-gray-700 dark:text-gray-100 dark:hover:border-accent-400 dark:hover:text-accent-400"
                  >
                    See Work
                  </Link>
                </AnimatedDiv>
                <AnimatedDiv
                  delay="0.8s"
                  className="flex justify-center gap-6 pt-2 md:justify-start"
                >
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-2 text-gray-600 transition-colors hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-400"
                    aria-label={`Email ${site.contact.email}`}
                  >
                    <IconMail size={20} />
                    <span>Email</span>
                  </a>
                  <a
                    href={site.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 transition-colors hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-400"
                  >
                    <IconBrandGithub size={20} />
                    <span>GitHub</span>
                  </a>
                </AnimatedDiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
