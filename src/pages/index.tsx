import { Layout } from "@/components/layout";
import { AnimatedDiv } from "@/components/ui";
import { site } from "@/data/site";
import { IconBrandGithub, IconMail, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title={site.home.metaTitle} description={site.home.metaDescription}>
      {/* Header is 73px tall; the background photo fills the rest of the first screen */}
      <section className="relative flex min-h-[calc(100svh-73px)] items-center overflow-hidden bg-gray-900">
        {/* Static export disables next/image optimization, so responsive variants are pre-generated */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.bannerImage.src(1920)}
          srcSet={site.bannerImage.widths.map((w) => `${site.bannerImage.src(w)} ${w}w`).join(", ")}
          sizes="100vw"
          alt=""
          width={2560}
          height={1440}
          // Below lg there is no room beside the content, so crop to the mountains (person out of frame)
          className="absolute inset-0 h-full w-full object-cover object-[85%_center] lg:object-[10%_center]"
        />
        {/* Below lg: even dim behind centered content */}
        <div className="absolute inset-0 bg-black/55 lg:hidden" />
        {/* lg+: keep the left (person) bright, darken the right behind the text */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black/10 from-20% via-black/50 via-50% to-black/80 lg:block" />

        <div className="container relative mx-auto px-4 py-16">
          <div className="mx-auto max-w-xl space-y-6 text-center lg:mr-0 lg:text-left">
            <AnimatedDiv
              delay="0.1s"
              className="flex flex-col items-center gap-5 lg:flex-row lg:items-center"
            >
              <div className="relative h-24 w-24 flex-shrink-0 rounded-full border-4 border-white/90 bg-gradient-to-br from-accent-400 to-accent-600 shadow-xl">
                <Image
                  src={site.profileImage}
                  alt={site.fullName}
                  fill
                  sizes="96px"
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-white sm:text-5xl">{site.fullName}</h1>
                <p className="text-xl font-medium text-accent-300 sm:text-2xl">{site.home.role}</p>
              </div>
            </AnimatedDiv>
            <AnimatedDiv
              delay="0.2s"
              className="flex items-center justify-center gap-2 text-gray-200 lg:justify-start"
            >
              <IconMapPin size={20} />
              <span>{site.location}</span>
            </AnimatedDiv>
            <AnimatedDiv
              delay="0.4s"
              className="text-base leading-relaxed text-gray-100 sm:text-lg"
            >
              <p>{site.home.intro}</p>
            </AnimatedDiv>
            <AnimatedDiv
              delay="0.6s"
              className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start"
            >
              <Link
                href="/bio"
                className="rounded-lg bg-accent-600 px-8 py-3 font-medium text-white transition-colors hover:bg-accent-700"
              >
                View Bio
              </Link>
              <Link
                href="/work"
                className="rounded-lg border-2 border-white/70 px-8 py-3 font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                See Work
              </Link>
            </AnimatedDiv>
            <AnimatedDiv delay="0.8s" className="flex justify-center gap-6 pt-2 lg:justify-start">
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-2 text-gray-200 transition-colors hover:text-white"
                aria-label={`Email ${site.contact.email}`}
              >
                <IconMail size={20} />
                <span>Email</span>
              </a>
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 transition-colors hover:text-white"
              >
                <IconBrandGithub size={20} />
                <span>GitHub</span>
              </a>
            </AnimatedDiv>
          </div>
        </div>
      </section>
    </Layout>
  );
}
