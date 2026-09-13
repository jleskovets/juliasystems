import Header from "@/components/Header";
import ProAnalyticsClient from "@/components/ProAnalyticsClient";
import fs from "fs";
import path from "path";

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

const sectionTitles = {
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

function loadArticles(language: "ru" | "en"): Section[] {
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
    .filter((file) => file.endsWith(".md"))
    .sort();

  const articles: Article[] = files.map((file) => {
    const filePath = path.join(directory, file);

    const rawContent = fs.readFileSync(filePath, "utf-8");

    const lines = rawContent.split(/\r?\n/);

    // Первая строка файла = название статьи
    const title = lines[0].replace(/^#\s*/, "").trim();

    // Всё после первой строки = содержание статьи
    const content = lines.slice(1).join("\n").trim();

    // Например:
    // 2-3-perfect-requirements.md
    //
    // превращается в:
    // number = 2.3
    // slug = perfect-requirements

    const fileName = file.replace(".md", "");

    const match = fileName.match(
      /^(\d+)-(\d+)-(.+)$/
    );

    if (!match) {
      throw new Error(
        `Invalid article filename: ${file}`
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
          sectionTitles[language][
            sectionNumber as keyof typeof sectionTitles.ru
          ] ?? `Section ${sectionNumber}`,
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