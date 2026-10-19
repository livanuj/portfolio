import { Logo } from "@/components/ui";
import { site } from "@/data/site";
import { cn } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white transition-colors">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="transition-transform group-hover:scale-105">
              <Logo className="h-10 w-10 drop-shadow-md" />
            </div>
            <span className="hidden text-xl font-bold text-gray-900 sm:block">{site.fullName}</span>
          </Link>

          <div className="flex items-center gap-6">
            <ul className="flex gap-1 sm:gap-2">
              <li>
                <Link
                  href="/bio"
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 sm:text-base",
                    isActive("/bio")
                      ? "bg-accent-50 text-accent-600"
                      : "text-gray-700 hover:bg-gray-100",
                  )}
                >
                  Bio
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 sm:text-base",
                    isActive("/work") || router.pathname.startsWith("/work/")
                      ? "bg-accent-50 text-accent-600"
                      : "text-gray-700 hover:bg-gray-100",
                  )}
                >
                  Work
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
