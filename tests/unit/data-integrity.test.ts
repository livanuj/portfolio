import { describe, expect, it } from "vitest";

import { education } from "@/data/education";
import { bioPageSections, workPageSections } from "@/data/navigation";
import { otherSkills } from "@/data/otherSkills";
import { portfolioData } from "@/data/projects";
import { references } from "@/data/references";
import { site } from "@/data/site";
import { skillCategories } from "@/data/techSkills";
import { experiences } from "@/data/timeline";
import { workGridByCategory } from "@/data/workGrid";
import type { Project } from "@/types/portfolio";

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const isValidInternalOrExternalLink = (value: string): boolean =>
  value.startsWith("/") || /^https?:\/\//.test(value);

const expectProjectEntry = (project: Project): void => {
  expect(isNonEmptyString(project.title)).toBe(true);
  expect(isNonEmptyString(project.role)).toBe(true);
  expect(isNonEmptyString(project.type)).toBe(true);
  expect(isNonEmptyString(project.period)).toBe(true);
  expect(isNonEmptyString(project.description)).toBe(true);

  if (project.company !== undefined) {
    expect(isNonEmptyString(project.company)).toBe(true);
  }

  if (project.link !== undefined) {
    expect(isValidInternalOrExternalLink(project.link)).toBe(true);
  }

  if (project.tags !== undefined) {
    expect(project.tags.length).toBeGreaterThan(0);
    project.tags.forEach((tag) => expect(isNonEmptyString(tag)).toBe(true));
  }
};

describe("portfolio data integrity", () => {
  it("keeps site metadata populated", () => {
    expect(isNonEmptyString(site.fullName)).toBe(true);
    expect(isNonEmptyString(site.location)).toBe(true);
    expect(isNonEmptyString(site.contact.email)).toBe(true);
    expect(site.contact.email).toContain("@");
    expect(isNonEmptyString(site.contact.phone)).toBe(true);
    expect(isNonEmptyString(site.githubUrl)).toBe(true);
    expect(isValidInternalOrExternalLink(site.githubUrl)).toBe(true);
    expect(isNonEmptyString(site.linkedinUrl)).toBe(true);
    expect(isValidInternalOrExternalLink(site.linkedinUrl)).toBe(true);
    expect(isNonEmptyString(site.profileImage)).toBe(true);
    expect(isNonEmptyString(site.home.metaTitle)).toBe(true);
    expect(isNonEmptyString(site.home.metaDescription)).toBe(true);
    expect(isNonEmptyString(site.home.role)).toBe(true);
    expect(isNonEmptyString(site.home.intro)).toBe(true);
  });

  it("keeps navigation ids in sync with data sections", () => {
    expect(bioPageSections.length).toBeGreaterThan(0);
    expect(workPageSections.length).toBeGreaterThan(0);

    bioPageSections.forEach((section) => {
      expect(isNonEmptyString(section.id)).toBe(true);
      expect(isNonEmptyString(section.label)).toBe(true);
    });

    workPageSections.forEach((section) => {
      expect(isNonEmptyString(section.id)).toBe(true);
      expect(isNonEmptyString(section.label)).toBe(true);
    });

    expect(bioPageSections.map((section) => section.id)).toEqual([
      "intro",
      "tech-skills",
      "other-skills",
      "timeline",
      "education",
      "references",
    ]);
    expect(workPageSections.map((section) => section.id)).toEqual([
      "professional",
      "freelance",
      "demos",
    ]);

    const workCategoryIds = Object.keys(workGridByCategory);
    expect(workCategoryIds).toContain("professional");
    expect(workCategoryIds).toContain("freelance");
  });

  it("keeps core content collections non-empty and well formed", () => {
    expect(education.length).toBeGreaterThan(0);
    expect(skillCategories.length).toBeGreaterThan(0);
    expect(otherSkills.length).toBeGreaterThan(0);
    expect(experiences.length).toBeGreaterThan(0);
    expect(references.length).toBeGreaterThan(0);

    education.forEach((item) => {
      expect(isNonEmptyString(item.degree)).toBe(true);
      expect(isNonEmptyString(item.institution)).toBe(true);
      expect(isNonEmptyString(item.location)).toBe(true);
      expect(isNonEmptyString(item.period)).toBe(true);
      if (item.status !== undefined) {
        expect(isNonEmptyString(item.status)).toBe(true);
      }
    });

    skillCategories.forEach((category) => {
      expect(isNonEmptyString(category.title)).toBe(true);
      expect(category.skills.length).toBeGreaterThan(0);
      category.skills.forEach((skill) => expect(isNonEmptyString(skill)).toBe(true));
    });

    otherSkills.forEach((item) => {
      expect(isNonEmptyString(item.title)).toBe(true);
      expect(isNonEmptyString(item.description)).toBe(true);
    });

    experiences.forEach((experience) => {
      expect(isNonEmptyString(experience.company)).toBe(true);
      expect(isNonEmptyString(experience.location)).toBe(true);
      expect(isNonEmptyString(experience.period)).toBe(true);
      expect(experience.roles.length).toBeGreaterThan(0);

      experience.roles.forEach((role) => {
        expect(isNonEmptyString(role.title)).toBe(true);
        expect(role.highlights.length).toBeGreaterThan(0);
        role.highlights.forEach((highlight) => expect(isNonEmptyString(highlight)).toBe(true));
      });
    });

    references.forEach((reference) => {
      expect(isNonEmptyString(reference.name)).toBe(true);
      expect(isNonEmptyString(reference.title)).toBe(true);
      expect(isNonEmptyString(reference.company)).toBe(true);
      expect(isNonEmptyString(reference.email)).toBe(true);
      expect(reference.email).toContain("@");

      if (reference.quote !== undefined) {
        expect(isNonEmptyString(reference.quote)).toBe(true);
      }

      if (reference.source !== undefined) {
        expect(isNonEmptyString(reference.source)).toBe(true);
      }

      if (reference.sourceUrl !== undefined) {
        expect(isValidInternalOrExternalLink(reference.sourceUrl)).toBe(true);
      }

      if (reference.link !== undefined) {
        expect(isValidInternalOrExternalLink(reference.link)).toBe(true);
      }
    });
  });

  it("keeps project cards and work categories valid", () => {
    expect(portfolioData.professional.length).toBeGreaterThan(0);
    expect(portfolioData.freelance.length).toBeGreaterThan(0);

    portfolioData.professional.forEach(expectProjectEntry);
    portfolioData.freelance.forEach(expectProjectEntry);

    const categoryProjects = [
      ...workGridByCategory.professional!.projects,
      ...workGridByCategory.freelance!.projects,
    ];

    categoryProjects.forEach(expectProjectEntry);
  });
});
