import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

export default function MarkdownContent({ content }: Props) {
  if (!content) {
    return null;
  }

  return (
    <article className="max-w-none text-[15px] leading-7 text-gray-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-6 mt-2 text-3xl font-bold tracking-tight text-gray-900">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-4 mt-10 text-2xl font-semibold text-gray-900">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-5 leading-7">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="mb-5 ml-6 list-disc space-y-2">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-5 ml-6 list-decimal space-y-2">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="pl-1">
              {children}
            </li>
          ),

          strong: ({ children }) => (
            <strong className="font-semibold text-gray-900">
              {children}
            </strong>
          ),

          em: ({ children }) => (
            <em className="italic">
              {children}
            </em>
          ),

          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-teal-600 bg-gray-50 px-5 py-4 text-gray-600">
              {children}
            </blockquote>
          ),

          code: ({ children }) => (
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em] text-gray-800">
              {children}
            </code>
          ),

          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-xl bg-gray-900 p-5 text-sm leading-6 text-gray-100">
              {children}
            </pre>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              className="text-teal-700 underline decoration-teal-300 underline-offset-2 hover:text-teal-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),

          hr: () => (
            <hr className="my-10 border-gray-200" />
          ),

          table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),

          th: ({ children }) => (
            <th className="border border-gray-200 bg-gray-50 px-4 py-3 text-left font-semibold text-gray-900">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="border border-gray-200 px-4 py-3 align-top">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}