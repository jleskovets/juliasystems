"use client";

import { useState } from "react";

type Language = "ru" | "en";

type Article = {
  number: string;
  title: string;
  slug: string;
  content: string;
};

type Section = {
  number: string;
  title: string;
  articles: Article[];
};

type Props = {
  ru: Section[];
  en: Section[];
};

const pageContent = {
  ru: {
    title: "Аналитика и разработка",
    description:
      "Здесь я разбираю профессию аналитика, требования, бизнес- и системный анализ, процессы разработки и взаимодействие между бизнесом и IT.",
  },

  en: {
    title: "Analytics & Software Development",
    description:
      "A practical guide to the analyst profession, requirements, business and system analysis, software development processes, and collaboration between business and IT.",
  },
};

export default function ProAnalyticsClient({ ru, en }: Props) {
  const [language, setLanguage] = useState<Language>("ru");

  const sections = language === "ru" ? ru : en;

  const [selectedSlug, setSelectedSlug] = useState(
    sections[0]?.articles[0]?.slug ?? ""
  );

  const selectedArticle =
    sections
      .flatMap((section) => section.articles)
      .find((article) => article.slug === selectedSlug) ??
    sections[0]?.articles[0];

  const currentPage = pageContent[language];

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);

    const newSections = newLanguage === "ru" ? ru : en;

    const currentArticle = newSections
      .flatMap((section) => section.articles)
      .find((article) => article.slug === selectedSlug);

    if (currentArticle) {
      setSelectedSlug(currentArticle.slug);
    } else {
      setSelectedSlug(
        newSections[0]?.articles[0]?.slug ?? ""
      );
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-8 py-12">
      {/* Page header */}
      <div className="mb-12">
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="mb-2 text-sm font-medium text-teal-700">
              PRO analytics
            </p>

            <h1 className="text-4xl font-bold text-gray-900">
              {currentPage.title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              {currentPage.description}
            </p>
          </div>

          {/* Language switcher */}
          <div className="flex shrink-0 items-center rounded-md border border-gray-200 bg-white p-1 text-sm">
            <button
              type="button"
              onClick={() => handleLanguageChange("ru")}
              className={`rounded px-3 py-1.5 font-medium transition ${
                language === "ru"
                  ? "bg-gray-100 text-teal-700"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              RU
            </button>

            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              className={`rounded px-3 py-1.5 font-medium transition ${
                language === "en"
                  ? "bg-gray-100 text-teal-700"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr]">
        {/* Sidebar */}
        <aside className="lg:border-r lg:pr-8">
          <nav>
            <div className="space-y-7">
              {sections.map((section) => (
                <div key={section.number}>
                  <h3 className="mb-2 text-sm font-bold text-gray-900">
                    {section.number}. {section.title}
                  </h3>

                  <ul className="space-y-1 border-l border-gray-200 pl-3">
                    {section.articles.map((article) => {
                      const isSelected =
                        selectedArticle?.slug === article.slug;

                      return (
                        <li key={article.slug}>
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedSlug(article.slug)
                            }
                            className={`block w-full rounded-md px-3 py-2 text-left text-sm leading-5 transition ${
                              isSelected
                                ? "bg-gray-100 font-medium text-teal-700"
                                : "text-gray-600 hover:bg-gray-50 hover:text-teal-700"
                            }`}
                          >
                            <span
                              className={`mr-2 ${
                                isSelected
                                  ? "text-teal-600"
                                  : "text-gray-400"
                              }`}
                            >
                              {article.number}
                            </span>

                            {article.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </aside>

        {/* Article */}
        <section>
          {selectedArticle && (
            <article className="max-w-3xl">
              <p className="text-sm font-medium text-teal-700">
                {selectedArticle.number}
              </p>

              <h2 className="mt-2 text-3xl font-bold leading-tight text-gray-900">
                {selectedArticle.title}
              </h2>

              <div className="mt-8 whitespace-pre-wrap text-lg leading-8 text-gray-700">
                {selectedArticle.content}
              </div>
            </article>
          )}
        </section>
      </div>
    </main>
  );
}