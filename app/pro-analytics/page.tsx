import Header from "@/components/Header";
import ProAnalyticsClient from "@/components/ProAnalyticsClient";
import fs from "fs";
import path from "path";

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

const sectionTitles: Record<Language, Record<string, string>> = {
  ru: {
    "1": "Введение",
    "2": "Требования",
    "3": "Бизнес-анализ",
    "4": "Системный анализ",
  },

  en: {
    "1": "Introduction",
    "2": "Requirements",
    "3": "Business Analysis",
    "4": "System Analysis",
  },
};

function loadArticles(language: Language): Section[] {
  const directory = path.join(
    process.cwd(),
    "app",
    "content",
    "pro-analytics",
    language
  );

  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"));

  const articles: Article[] = files.map((file) => {
    const filePath = path.join(directory, file);

    const rawContent = fs.readFileSync(filePath, "utf-8");

    const lines = rawContent.split(/\r?\n/);

    // First line of Markdown file = article title
    const title = lines[0]
      .replace(/^#\s*/, "")
      .trim();

    // Everything after the first line = article content
    const content = lines
      .slice(1)
      .join("\n")
      .trim();

    const fileName = file.replace(/\.md$/, "");

    /*
      Expected filename:

      1-1-about-me.md
      1-2-who-is-an-analyst.md
      2-1-what-are-requirements.md

      Structure:

      section-article-slug
    */

    const match = fileName.match(
      /^(\d+)-(\d+)-(.+)$/
    );

    if (!match) {
      throw new Error(
        `Invalid article filename: ${file}. Expected format: 1-1-about-me.md`
      );
    }

    const sectionNumber = match[1];
    const articleNumber = match[2];
    const slug = match[3];

    return {
      number: `${sectionNumber}.${articleNumber}`,
      title,
      slug,
      content,
    };
  });

  /*
    Important:
    Sort numerically, not alphabetically.

    Otherwise:
    1.10
    could appear before
    1.2
  */

  articles.sort((a, b) => {
    const [aSection, aArticle] = a.number
      .split(".")
      .map(Number);

    const [bSection, bArticle] = b.number
      .split(".")
      .map(Number);

    if (aSection !== bSection) {
      return aSection - bSection;
    }

    return aArticle - bArticle;
  });

  /*
    Build the section structure:

    Section 1
      1.1
      1.2
      1.3

    Section 2
      2.1
      2.2
      ...
  */

  const sections: Section[] = [];

  for (const article of articles) {
    const sectionNumber = article.number.split(".")[0];

    let section = sections.find(
      (item) => item.number === sectionNumber
    );

    if (!section) {
      section = {
        number: sectionNumber,
        title:
          sectionTitles[language][sectionNumber] ??
          `Section ${sectionNumber}`,
        articles: [],
      };

      sections.push(section);
    }

    section.articles.push(article);
  }

  return sections;
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