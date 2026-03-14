import React from "react";
import { Logo } from "@/components/ui";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="group flex items-center gap-2">
            <div className="transition-transform group-hover:scale-105">
              <Logo className="h-10 w-10 drop-shadow-md" />
            </div>
            <span className="hidden text-xl font-bold text-gray-900 sm:block">
              Portfolio - livanuj
            </span>
          </a>
          <ul className="flex gap-1 sm:gap-2">
            <li>
              <a
                href="#about"
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700 sm:px-4 sm:text-base"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700 sm:px-4 sm:text-base"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700 sm:px-4 sm:text-base"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700 sm:px-4 sm:text-base"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700 sm:px-4 sm:text-base"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
