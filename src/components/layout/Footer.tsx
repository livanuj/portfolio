import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export const Footer: React.FC = () => {
  const { ref: contentRef, isVisible } = useScrollAnimation();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>
      <div className="container relative mx-auto px-4" ref={contentRef}>
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold">Get In Touch</h2>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:livanuj@gmail.com"
              className="group flex items-center gap-2 rounded-lg border-2 border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20"
            >
              <IconMail size={20} />
              Email
            </a>
            <a
              href="https://github.com/livanuj"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border-2 border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20"
            >
              <IconBrandGithub size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/livanuj"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border-2 border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20"
            >
              <IconBrandLinkedin size={20} />
              LinkedIn
            </a>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Portfolio - livanuj. Built with
              Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
