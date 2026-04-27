import { site } from "@/data/site";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 transition-colors dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {site.fullName}
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-400"
              aria-label={`Email ${site.contact.email}`}
            >
              <IconMail size={18} />
              <span>{site.contact.email}</span>
            </a>
            {site.contact.phone ? (
              <a
                href={`tel:${site.contact.phone}`}
                className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-400"
                aria-label={`Call ${site.contact.phone}`}
              >
                <IconPhone size={18} />
                <span>{site.contact.phone}</span>
              </a>
            ) : null}
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-400"
              aria-label="GitHub"
            >
              <IconBrandGithub size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-400"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
