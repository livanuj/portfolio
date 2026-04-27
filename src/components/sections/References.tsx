import { Card, Section } from "@/components/ui";
import { references } from "@/data/references";
import { quoteLines } from "@/utils";
import { IconBrandLinkedin, IconMail, IconQuote } from "@tabler/icons-react";
import React, { useState } from "react";

export const References: React.FC = () => {
  const [expandedReferences, setExpandedReferences] = useState<Record<string, boolean>>({});

  const toggleReferenceQuote = (referenceId: string) => {
    setExpandedReferences((previousState) => ({
      ...previousState,
      [referenceId]: !previousState[referenceId],
    }));
  };

  return (
    <Section id="references" title="References" maxWidth="4xl">
      <div className="space-y-6 transition-all delay-100 duration-700">
        {references.length > 0 ? (
          references.map((reference, index) => {
            const referenceId = `${reference.name}-${index}`;
            const normalizedQuote = reference.quote?.trim();
            const renderedLines = normalizedQuote ? quoteLines(normalizedQuote) : [];
            const isExpanded = expandedReferences[referenceId] || false;
            const quoteHasOverflow = renderedLines.length > 3;

            return (
              <Card key={referenceId} hover className="overflow-hidden">
                <div className="relative space-y-5">
                  <div className="flex items-start justify-between gap-4 pt-1">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {reference.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {reference.title} · {reference.company}
                      </p>
                    </div>

                    {normalizedQuote && (
                      <div className="dark:bg-accent-950/30 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 ring-1 ring-accent-100 dark:text-accent-300 dark:ring-accent-900/50">
                        <IconQuote size={20} />
                      </div>
                    )}
                  </div>

                  {normalizedQuote ? (
                    <div className="relative">
                      <blockquote
                        className={`rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-4 text-lg leading-relaxed text-gray-700 transition-all duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-300 ${
                          quoteHasOverflow && !isExpanded
                            ? "max-h-[7.75rem] overflow-hidden"
                            : "max-h-[40rem]"
                        }`}
                      >
                        {renderedLines.map((line, lineIndex) => (
                          <p
                            key={`${referenceId}-line-${lineIndex}`}
                            className={lineIndex > 0 ? "mt-3" : undefined}
                          >
                            {lineIndex === 0 ? "\u201c" : ""}
                            {line}
                            {lineIndex === renderedLines.length - 1 &&
                            (!quoteHasOverflow || isExpanded)
                              ? "\u201d"
                              : ""}
                          </p>
                        ))}
                      </blockquote>

                      {quoteHasOverflow && !isExpanded && (
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-b-2xl bg-gradient-to-t from-gray-50/95 to-transparent dark:from-gray-900/95" />
                      )}
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      {quoteHasOverflow && (
                        <button
                          type="button"
                          onClick={() => toggleReferenceQuote(referenceId)}
                          className="inline-flex items-center text-sm font-medium text-accent-600 transition-colors hover:text-accent-700 hover:underline dark:text-accent-400 dark:hover:text-accent-300"
                        >
                          {isExpanded ? "Show less" : "Read full reference"}
                        </button>
                      )}
                    </div>

                    {(reference.source || reference.sourceUrl) && (
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        {reference.sourceUrl ? (
                          <a
                            href={reference.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${reference.source || "LinkedIn recommendation"} for ${reference.name}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-gray-600 transition-colors hover:bg-gray-100 hover:text-accent-600 dark:bg-gray-900/60 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-accent-400"
                          >
                            <IconBrandLinkedin size={16} />
                            <span>{reference.source || "LinkedIn recommendation"}</span>
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-gray-600 dark:bg-gray-900/60 dark:text-gray-400">
                            <IconBrandLinkedin size={16} />
                            <span>{reference.source}</span>
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <a
                      href={`mailto:${reference.email}`}
                      className="inline-flex items-center gap-1.5 font-medium text-accent-700 hover:underline dark:text-accent-300"
                    >
                      <IconMail size={15} />
                      <span>{reference.email}</span>
                    </a>

                    {reference.link && (
                      <a
                        href={reference.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open LinkedIn profile for ${reference.name}`}
                        className="inline-flex items-center text-accent-700 transition-colors hover:text-accent-600 dark:text-accent-300 dark:hover:text-accent-200"
                      >
                        <IconBrandLinkedin size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <Card className="overflow-hidden">
            <div className="relative space-y-4">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-500 via-cyan-400 to-emerald-400" />
              <div className="flex items-start justify-between gap-4 pt-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    References
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Professional references can be shared on request.
                  </p>
                </div>
                <div className="dark:bg-accent-950/30 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 ring-1 ring-accent-100 dark:text-accent-300 dark:ring-accent-900/50">
                  <IconQuote size={20} />
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/60 px-4 py-4 dark:border-gray-800 dark:bg-gray-900/40">
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Add reference entries to{" "}
                  <span className="font-medium">src/data/references.ts</span>, with or without a
                  quote.
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </Section>
  );
};
