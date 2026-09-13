import Header from "@/components/Header";
import ProAnalyticsClient from "@/components/ProAnalyticsClient";
import fs from "fs";
import path from "path";

type Language = "ru" | "en";

type ArticleConfig = {
  number: string;
  title: string;
  slug: string;
  file: string;
};

type SectionConfig = {
  number: string;
  title: string;
  articles: ArticleConfig[];
};

type Article = ArticleConfig & {
  content: string;
};

type Section = {
  number: string;
  title: string;
  articles: Article[];
};

/*
 * Static structure of PRO analytics.
 *
 * The structure is defined manually.
 * Markdown files are optional.
 * If a file does not exist, the article will simply have empty content.
 */

const structure: Record<Language, SectionConfig[]> = {
  ru: [
    {
      number: "1",
      title: "Введение",
      articles: [
        {
          number: "1.1",
          title: "Обо мне",
          slug: "about-me",
          file: "1-1-about-me.md",
        },
        {
          number: "1.2",
          title: "Кто такой аналитик?",
          slug: "who-is-an-analyst",
          file: "1-2-who-is-an-analyst.md",
        },
        {
          number: "1.3",
          title:
            "Business Analyst vs System Analyst vs Solution Analyst",
          slug: "ba-vs-sa-vs-solution-analyst",
          file: "1-3-ba-vs-sa-vs-solution-analyst.md",
        },
        {
          number: "1.4",
          title:
            "Как вообще выглядит жизненный цикл разработки?",
          slug: "software-development-lifecycle",
          file: "1-4-software-development-lifecycle.md",
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
          file: "2-1-what-are-requirements.md",
        },
        {
          number: "2.2",
          title: "Какие бывают требования?",
          slug: "types-of-requirements",
          file: "2-2-types-of-requirements.md",
        },
        {
          number: "2.3",
          title:
            "Идеальные требования существуют? И почему требования никогда не бывают полными?",
          slug: "perfect-requirements",
          file: "2-3-perfect-requirements.md",
        },
        {
          number: "2.4",
          title: "Что на самом деле нужно разработчикам?",
          slug: "what-developers-need",
          file: "2-4-what-developers-need.md",
        },
        {
          number: "2.5",
          title: "Как задавать правильные вопросы?",
          slug: "how-to-ask-right-questions",
          file: "2-5-how-to-ask-right-questions.md",
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
          file: "3-1-business-processes.md",
        },
        {
          number: "3.2",
          title: "BPMN — как описывать бизнес-процессы",
          slug: "bpmn",
          file: "3-2-bpmn.md",
        },
        {
          number: "3.3",
          title: "AS IS → TO BE",
          slug: "as-is-to-be",
          file: "3-3-as-is-to-be.md",
        },
        {
          number: "3.4",
          title: "Выявление требований",
          slug: "requirements-elicitation",
          file: "3-4-requirements-elicitation.md",
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
          file: "4-1-introduction-to-system-analysis.md",
        },
      ],
    },
  ],

  en: [
    {
      number: "1",
      title: "Introduction",
      articles: [
        {
          number: "1.1",
          title: "About Me",
          slug: "about-me",
          file: "1-1-about-me.md",
        },
        {
          number: "1.2",
          title: "Who Is an Analyst?",
          slug: "who-is-an-analyst",
          file: "1-2-who-is-an-analyst.md",
        },
        {
          number: "1.3",
          title:
            "Business Analyst vs System Analyst vs Solution Analyst",
          slug: "ba-vs-sa-vs-solution-analyst",
          file: "1-3-ba-vs-sa-vs-solution-analyst.md",
        },
        {
          number: "1.4",
          title:
            "What Does the Software Development Lifecycle Look Like?",
          slug: "software-development-lifecycle",
          file: "1-4-software-development-lifecycle.md",
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
          file: "2-1-what-are-requirements.md",
        },
        {
          number: "2.2",
          title: "What Types of Requirements Are There?",
          slug: "types-of-requirements",
          file: "2-2-types-of-requirements.md",
        },
        {
          number: "2.3",
          title:
            "Do Perfect Requirements Exist? And Why Are Requirements Never Complete?",
          slug: "perfect-requirements",
          file: "2-3-perfect-requirements.md",
        },
        {
          number: "2.4",
          title: "What Do Developers Actually Need?",
          slug: "what-developers-need",
          file: "2-4-what-developers-need.md",
        },
        {
          number: "2.5",
          title: "How to Ask the Right Questions?",
          slug: "how-to-ask-right-questions",
          file: "2-5-how-to-ask-right-questions.md",
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
          file: "3-1-business-processes.md",
        },
        {
          number: "3.2",
          title: "BPMN — How to Describe Business Processes",
          slug: "bpmn",
          file: "3-2-bpmn.md",
        },
        {
          number: "3.3",
          title: "AS IS → TO BE",
          slug: "as-is-to-be",
          file: "3-3-as-is-to-be.md",
        },
        {
          number: "3.4",
          title: "Requirements Elicitation",
          slug: "requirements-elicitation",
          file: "3-4-requirements-elicitation.md",
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
          file: "4-1-introduction-to-system-analysis.md",
        },
      ],
    },
  ],
};

function loadArticles(language: Language): Section[] {
  const directory = path.join(
    process.cwd(),
    "app",
    "content",
    "pro-analytics",
    language
  );

  return structure[language].map((section) => {
    const articles = section.articles.map((article) => {
      const filePath = path.join(directory, article.file);

      let content = "";

      /*
       * The Markdown file is optional.
       *
       * If it exists — load its content.
       * If it doesn't exist — leave content empty.
       */

      if (fs.existsSync(filePath)) {
        content = fs.readFileSync(filePath, "utf-8").trim();
      }

      return {
        ...article,
        content,
      };
    });

    return {
      ...section,
      articles,
    };
  });
}

export default function ProAnalyticsPage() {
  const ruArticles = loadArticles("ru");
  const enArticles = loadArticles("en");

  return (
    <>
      <Header />

      <ProAnalyticsClient
        ru={ruArticles}
        en={enArticles}
      />
    </>
  );
}