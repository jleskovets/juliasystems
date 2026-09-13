"use client";

import Header from "@/components/Header";
import { useState } from "react";

type Language = "ru" | "en";

type Article = {
  number: string;
  title: string;
  slug: string;
  content: React.ReactNode;
};

type Section = {
  number: string;
  title: string;
  articles: Article[];
};

const content: Record<Language, {
  pageTitle: string;
  pageDescription: string;
  sections: Section[];
}> = {
  ru: {
    pageTitle: "Аналитика и разработка",

    pageDescription:
      "Здесь я разбираю профессию аналитика, требования, бизнес- и системный анализ, процессы разработки и взаимодействие между бизнесом и IT.",

    sections: [
      {
        number: "1",
        title: "Введение",
        articles: [
          {
            number: "1.1",
            title: "Обо мне",
            slug: "about-me",
            content: (
              <>
                <p>
                  Здесь будет статья обо мне и моём профессиональном пути
                  в аналитике и IT.
                </p>
              </>
            ),
          },
          {
            number: "1.2",
            title: "Кто такой аналитик?",
            slug: "who-is-an-analyst",
            content: (
              <>
                <p>
                  Кто такой аналитик, чем он занимается и почему эта
                  профессия находится на пересечении бизнеса, пользователей
                  и технологий.
                </p>

                <p>
                  Здесь будет размещена полная статья.
                </p>
              </>
            ),
          },
          {
            number: "1.3",
            title:
              "Business Analyst vs System Analyst vs Solution Analyst (Product Analyst)",
            slug: "business-vs-system-vs-solution-analyst",
            content: (
              <>
                <p>
                  Разберём различия между Business Analyst, System Analyst,
                  Solution Analyst и Product Analyst.
                </p>
              </>
            ),
          },
          {
            number: "1.4",
            title:
              "Как вообще выглядит жизненный цикл разработки?",
            slug: "software-development-lifecycle",
            content: (
              <>
                <p>
                  От идеи и бизнес-потребности до реализации, тестирования,
                  релиза и дальнейшего развития продукта.
                </p>
              </>
            ),
          },
        ],
      },

      {
        number: "2",
        title: "Требования",
        articles: [
          {
            number: "2.1",
            title: "Что такое требования?",
            slug: "what-are-requirements",
            content: (
              <>
                <p>
                  Что на самом деле скрывается за словом «требование» и
                  почему требования являются основой разработки.
                </p>
              </>
            ),
          },
          {
            number: "2.2",
            title: "Какие бывают требования?",
            slug: "types-of-requirements",
            content: (
              <>
                <p>
                  Разберём основные типы требований и то, как они связаны
                  между собой.
                </p>
              </>
            ),
          },
          {
            number: "2.3",
            title:
              "Идеальные требования существуют? И почему требования никогда не бывают полными?",
            slug: "perfect-requirements",
            content: (
              <>
                <p>
                  Почему невозможно описать систему абсолютно полно и что
                  аналитик должен делать с неизбежной неопределённостью.
                </p>
              </>
            ),
          },
          {
            number: "2.4",
            title: "Что на самом деле нужно разработчикам?",
            slug: "what-developers-really-need",
            content: (
              <>
                <p>
                  Какие знания и информация действительно нужны разработчику,
                  чтобы превратить требование в работающую систему.
                </p>
              </>
            ),
          },
          {
            number: "2.5",
            title: "Как задавать правильные вопросы?",
            slug: "how-to-ask-right-questions",
            content: (
              <>
                <p>
                  Один из главных инструментов аналитика — правильный вопрос.
                  Разберём, как задавать вопросы так, чтобы получать полезную
                  информацию.
                </p>
              </>
            ),
          },
        ],
      },

      {
        number: "3",
        title: "Бизнес-анализ",
        articles: [
          {
            number: "3.1",
            title: "Бизнес-процессы",
            slug: "business-processes",
            content: (
              <>
                <p>
                  Что такое бизнес-процесс, зачем его анализировать и какую
                  роль в этом играет аналитик.
                </p>
              </>
            ),
          },
          {
            number: "3.2",
            title: "BPMN — как описывать бизнес-процессы",
            slug: "bpmn",
            content: (
              <>
                <p>
                  Разберём BPMN и основные элементы, которые используются
                  для моделирования бизнес-процессов.
                </p>
              </>
            ),
          },
          {
            number: "3.3",
            title: "AS IS → TO BE",
            slug: "as-is-to-be",
            content: (
              <>
                <p>
                  Как описывать текущее состояние процесса и проектировать
                  будущее состояние.
                </p>
              </>
            ),
          },
          {
            number: "3.4",
            title: "Выявление требований",
            slug: "requirements-elicitation",
            content: (
              <>
                <p>
                  Основные подходы и техники выявления требований у
                  заинтересованных сторон.
                </p>
              </>
            ),
          },
        ],
      },

      {
        number: "4",
        title: "Системный анализ",
        articles: [
          {
            number: "4.1",
            title: "Введение в системный анализ",
            slug: "introduction-to-system-analysis",
            content: (
              <>
                <p>
                  Что такое системный анализ и чем занимается System Analyst
                  в процессе разработки IT-систем.
                </p>
              </>
            ),
          },
        ],
      },
    ],
  },

  en: {
    pageTitle: "Analytics & Software Development",

    pageDescription:
      "A practical guide to the analyst profession, requirements, business and system analysis, software development processes, and collaboration between business and IT.",

    sections: [
      {
        number: "1",
        title: "Introduction",
        articles: [
          {
            number: "1.1",
            title: "About Me",
            slug: "about-me",
            content: (
              <>
                <p>
                  This article will introduce my professional background
                  and my journey in analytics and IT.
                </p>
              </>
            ),
          },
          {
            number: "1.2",
            title: "Who Is an Analyst?",
            slug: "who-is-an-analyst",
            content: (
              <>
                <p>
                  Who is an analyst, what does an analyst actually do, and
                  why does this profession sit at the intersection of
                  business, users, and technology?
                </p>

                <p>
                  The full article will be published here.
                </p>
              </>
            ),
          },
          {
            number: "1.3",
            title:
              "Business Analyst vs System Analyst vs Solution Analyst (Product Analyst)",
            slug: "business-vs-system-vs-solution-analyst",
            content: (
              <>
                <p>
                  An overview of the differences between Business Analyst,
                  System Analyst, Solution Analyst, and Product Analyst roles.
                </p>
              </>
            ),
          },
          {
            number: "1.4",
            title:
              "What Does the Software Development Lifecycle Actually Look Like?",
            slug: "software-development-lifecycle",
            content: (
              <>
                <p>
                  From an idea and a business need to implementation,
                  testing, release, and further product development.
                </p>
              </>
            ),
          },
        ],
      },

      {
        number: "2",
        title: "Requirements",
        articles: [
          {
            number: "2.1",
            title: "What Are Requirements?",
            slug: "what-are-requirements",
            content: (
              <>
                <p>
                  What does the word “requirement” actually mean, and why
                  are requirements the foundation of software development?
                </p>
              </>
            ),
          },
          {
            number: "2.2",
            title: "What Types of Requirements Are There?",
            slug: "types-of-requirements",
            content: (
              <>
                <p>
                  An overview of the main types of requirements and how they
                  relate to each other.
                </p>
              </>
            ),
          },
          {
            number: "2.3",
            title:
              "Do Perfect Requirements Exist? And Why Are Requirements Never Complete?",
            slug: "perfect-requirements",
            content: (
              <>
                <p>
                  Why it is impossible to describe a system completely,
                  and how analysts should deal with inevitable uncertainty.
                </p>
              </>
            ),
          },
          {
            number: "2.4",
            title: "What Do Developers Actually Need?",
            slug: "what-developers-really-need",
            content: (
              <>
                <p>
                  What information developers really need in order to turn
                  a requirement into a working system.
                </p>
              </>
            ),
          },
          {
            number: "2.5",
            title: "How to Ask the Right Questions?",
            slug: "how-to-ask-right-questions",
            content: (
              <>
                <p>
                  One of the analyst's most important tools is the right
                  question. Let's explore how to ask questions that uncover
                  useful information.
                </p>
              </>
            ),
          },
        ],
      },

      {
        number: "3",
        title: "Business Analysis",
        articles: [
          {
            number: "3.1",
            title: "Business Processes",
            slug: "business-processes",
            content: (
              <>
                <p>
                  What is a business process, why should it be analyzed,
                  and what role does an analyst play in this work?
                </p>
              </>
            ),
          },
          {
            number: "3.2",
            title: "BPMN — How to Describe Business Processes",
            slug: "bpmn",
            content: (
              <>
                <p>
                  An introduction to BPMN and the key elements used to
                  model business processes.
                </p>
              </>
            ),
          },
          {
            number: "3.3",
            title: "AS IS → TO BE",
            slug: "as-is-to-be",
            content: (
              <>
                <p>
                  How to describe the current state of a process and design
                  its future state.
                </p>
              </>
            ),
          },
          {
            number: "3.4",
            title: "Requirements Elicitation",
            slug: "requirements-elicitation",
            content: (
              <>
                <p>
                  Key approaches and techniques for eliciting requirements
                  from stakeholders.
                </p>
              </>
            ),
          },
        ],
      },

      {
        number: "4",
        title: "System Analysis",
        articles: [
          {
            number: "4.1",
            title: "Introduction to System Analysis",
            slug: "introduction-to-system-analysis",
            content: (
              <>
                <p>
                  What is system analysis and what does a System Analyst do
                  during the development of IT systems?
                </p>
              </>
            ),
          },
        ],
      },
    ],
  },
};

export default function ProAnalyticsPage() {
  const [language, setLanguage] = useState<Language>("ru");

  const currentContent = content[language];

  const [selectedSlug, setSelectedSlug] = useState(
    currentContent.sections[0].articles[0].slug
  );

  const selectedArticle =
    currentContent.sections
      .flatMap((section) => section.articles)
      .find((article) => article.slug === selectedSlug) ??
    currentContent.sections[0].articles[0];

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-8 py-12">
        {/* Page header */}
        <div className="mb-12">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="mb-2 text-sm font-medium text-teal-700">
                PRO analytics
              </p>

              <h1 className="text-4xl font-bold text-gray-900">
                {currentContent.pageTitle}
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                {currentContent.pageDescription}
              </p>
            </div>

            {/* Language switcher */}
            <div className="flex shrink-0 items-center rounded-md border border-gray-200 bg-white p-1 text-sm">
              <button
                type="button"
                onClick={() => setLanguage("ru")}
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
                onClick={() => setLanguage("en")}
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

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <aside className="lg:border-r lg:pr-8">
            <nav>
              <div className="space-y-7">
                {currentContent.sections.map((section) => (
                  <div key={section.number}>
                    <h3 className="mb-2 text-sm font-bold text-gray-900">
                      {section.number}. {section.title}
                    </h3>

                    <ul className="space-y-1 border-l border-gray-200 pl-3">
                      {section.articles.map((article) => {
                        const isSelected =
                          selectedArticle.slug === article.slug;

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
            <article className="max-w-3xl">
              <p className="text-sm font-medium text-teal-700">
                {selectedArticle.number}
              </p>

              <h2 className="mt-2 text-3xl font-bold leading-tight text-gray-900">
                {selectedArticle.title}
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
                {selectedArticle.content}
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}