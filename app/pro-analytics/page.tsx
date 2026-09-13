import Header from "@/components/Header";
import Link from "next/link";

const sections = [
  {
    number: "1",
    title: "Введение",
    articles: [
      {
        number: "1.1",
        title: "Обо мне",
        slug: "about-me",
      },
      {
        number: "1.2",
        title: "Кто такой аналитик?",
        slug: "who-is-an-analyst",
      },
      {
        number: "1.3",
        title:
          "Business Analyst vs System Analyst vs Solution Analyst (Product Analyst)",
        slug: "business-vs-system-vs-solution-analyst",
      },
      {
        number: "1.4",
        title: "Как вообще выглядит жизненный цикл разработки?",
        slug: "software-development-lifecycle",
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
      },
      {
        number: "2.2",
        title: "Какие бывают требования?",
        slug: "types-of-requirements",
      },
      {
        number: "2.3",
        title:
          "Идеальные требования существуют? И почему требования никогда не бывают полными?",
        slug: "perfect-requirements",
      },
      {
        number: "2.4",
        title: "Что на самом деле нужно разработчикам?",
        slug: "what-developers-really-need",
      },
      {
        number: "2.5",
        title: "Как задавать правильные вопросы?",
        slug: "how-to-ask-right-questions",
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
      },
      {
        number: "3.2",
        title: "BPMN — как описывать бизнес-процессы",
        slug: "bpmn",
      },
      {
        number: "3.3",
        title: "AS IS → TO BE",
        slug: "as-is-to-be",
      },
      {
        number: "3.4",
        title: "Выявление требований",
        slug: "requirements-elicitation",
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
      },
    ],
  },
];

export default function ProAnalyticsPage() {
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

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <aside className="lg:border-r lg:pr-8">
            <div className="sticky top-8">
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Содержание
              </h2>

              <nav>
                <div className="space-y-7">
                  {sections.map((section) => (
                    <div key={section.number}>
                      <h3 className="mb-2 text-sm font-bold text-gray-900">
                        {section.number}. {section.title}
                      </h3>

                      <ul className="space-y-1 border-l border-gray-200 pl-3">
                        {section.articles.map((article) => (
                          <li key={article.slug}>
                            <Link
                              href={`/pro-analytics/${article.slug}`}
                              className="block rounded-md px-3 py-2 text-sm leading-5 text-gray-600 transition hover:bg-gray-50 hover:text-teal-700"
                            >
                              <span className="mr-2 text-gray-400">
                                {article.number}
                              </span>
                              {article.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <section>
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-teal-700">
                PRO analytics
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Добро пожаловать
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
                <p>
                  Это пространство о профессии аналитика и о том, как
                  устроена разработка IT-систем.
                </p>

                <p>
                  Здесь я разбираю путь от идеи и бизнес-потребности до
                  работающей системы: требования, бизнес-процессы,
                  системный анализ, API, интеграции и взаимодействие
                  бизнеса с командой разработки.
                </p>

                <p>
                  Я стараюсь говорить не только о методологиях и
                  инструментах, но и о том, что действительно происходит
                  в реальных проектах.
                </p>

                <p className="font-medium text-gray-900">
                  Выберите тему в меню слева, чтобы начать читать.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}