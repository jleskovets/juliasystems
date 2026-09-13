"use client";

import Header from "@/components/Header";
import { useState } from "react";

const sections = [
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
              Здесь будет статья обо мне и моём профессиональном пути в
              аналитике и IT.
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
              Кто такой аналитик, чем он занимается и почему эта профессия
              находится на пересечении бизнеса, пользователей и технологий.
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
        title: "Как вообще выглядит жизненный цикл разработки?",
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
              Что на самом деле скрывается за словом «требование» и почему
              требования являются основой разработки.
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
              Разберём основные типы требований и то, как они связаны между
              собой.
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
              Что такое бизнес-процесс, зачем его анализировать и какую роль
              в этом играет аналитик.
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
              Разберём BPMN и основные элементы, которые используются для
              моделирования бизнес-процессов.
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
              Что такое системный анализ и чем занимается System Analyst в
              процессе разработки IT-систем.
            </p>
          </>
        ),
      },
    ],
  },
];

export default function ProAnalyticsPage() {
  const [selectedArticle, setSelectedArticle] = useState(
    sections[0].articles[0]
  );

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-8 py-12">
        {/* Page header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium text-teal-700">
            PRO analytics
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            Аналитика и разработка
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Здесь я разбираю профессию аналитика, требования, бизнес- и
            системный анализ, процессы разработки и взаимодействие между
            бизнесом и IT.
          </p>
        </div>

        {/* Main content */}
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
                          selectedArticle.slug === article.slug;

                        return (
                          <li key={article.slug}>
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedArticle(article)
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