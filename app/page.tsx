import Image from "next/image";
import Header from "@/components/Header";
import ExperienceSection from "@/components/ExperienceSection";

const expertise = [
  [
    "System Analysis",
    "Requirements engineering, business analysis and process modeling.",
  ],
  [
    "API Design & Integration",
    "REST APIs, integration logic, contracts and documentation.",
  ],
  [
    "Distributed Systems",
    "Microservices, Kafka/MQ and system orchestration.",
  ],
  [
    "Data Mapping",
    "Transformation logic, data flows and integration mapping.",
  ],
];

const experience = [
  {
    company: "Lembitech",
    role: "Senior System Analyst",
    period: "Dec 2025 – Present",
    description:
      "Centralized integration platform connecting OEM systems and Dealer Management Systems (DMS) in a multi-system enterprise environment. Responsible for integration analysis, API design, data synchronization workflows, and cross-system orchestration.",
  },
  {
    company: "Eqvanta",
    role: "Senior System Analyst",
    period: "Jan 2025 – Sep 2025",
    description:
      "Greenfield investment platform for retail investors. Built analytical processes from scratch, established documentation standards, and supported MVP delivery from product discovery through implementation.",
  },
  {
    company: "Raiffeisen Bank",
    role: "System Analyst",
    period: "Feb 2023 – Dec 2024",
    description:
      "High-load customer notification platform delivering SMS, Email, and Push communications across banking channels. Participated in platform modernization, integration analysis, and migration to microservices architecture.",
  },
  {
    company: "Andersen / Aston",
    role: "Business Analyst",
    period: "Jan 2022 – Feb 2023",
    description:
      "Greenfield real-estate marketplace platform. Contributed to product discovery, MVP definition, requirements engineering, solution design, and event-driven integrations using Kafka and REST APIs.",
  },
  {
    company: "SBER",
    role: "Lead System Analyst",
    period: "Feb 2021 – Jan 2022",
    description:
      "Migration of a banking front-office platform from legacy architecture to microservices. Led analytical activities, reconstructed undocumented functionality, defined integration requirements, and mentored analysts.",
  },
  {
    company: "Cinimex",
    role: "System Analyst",
    period: "2019 – 2021",
    description:
      "Core Banking System enhancement project for a major bank. Gathered requirements, modeled business processes, prepared specifications, designed UI mockups, and supported testing and delivery activities.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-gray-950">
        <section className="bg-gradient-to-br from-white via-teal-50/50 to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 py-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-teal-700">
                JuliaSystems
              </p>

              <h1 className="mb-4 text-5xl font-bold tracking-tight lg:text-6xl">
                Julia Leskovets
              </h1>

              <h2 className="mb-3 text-2xl font-bold text-teal-700">
                Senior System Analyst

              </h2>
              <p className="mb-3 text-lg font-bold text-teal-700">
                Solution Analyst • Lead System Analyst • Integration Analyst
              </p>

              <p className="mb-8 text-lg text-gray-600">
                Integration Architecture • System Design • APIs
              </p>

              <p className="max-w-3xl text-lg leading-9 text-gray-700">
                I'm a Senior System Analyst with 8 years of experience delivering enterprise-scale banking, fintech, investment, and digital products. 
                Experienced in solution design, system integration, microservices transformation, API design, requirements engineering, and 
                stakeholder management. Proven track record in launching MVP products, modernizing legacy systems, building analytical 
                practices from scratch, and translating business objectives into scalable technical solutions.  
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/cv/Iuliia_Leskovets_cv.pdf"
                  className="rounded-xl bg-teal-700 px-6 py-3 text-white transition hover:bg-teal-800"
                >
                  Download CV
                </a>

                <a
                  href="https://www.linkedin.com/in/yulia-leskovets-bba364109/"
                  target="_blanc"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-gray-300 px-6 py-3 transition hover:border-teal-700 hover:text-teal-700"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[400px] w-[400px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-100 to-white shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Julia Leskovets"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-teal-700">
                About
              </p>
              <h2 className="text-4xl font-bold">
                Designing systems that communicate reliably.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-gray-700">
              <p>
                I specialize in system integrations and API-driven architectures,
                translating complex business needs into structured, scalable
                technical solutions.
              </p>
              <p>
                My experience includes working with microservices, distributed
                systems, messaging systems (Kafka/MQ), and multi-system
                orchestration, supporting full delivery lifecycle — from
                discovery to production rollout.
              </p>
              <p>
                I enjoy working at the intersection of business logic, system
                design, and integration architecture.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-10">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-8 text-3xl font-bold">Core Expertise</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {expertise.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-gray-50 p-6 transition hover:bg-teal-50"
                >
                  <h3 className="mb-2 font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ExperienceSection />

        <footer className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-8 py-8 text-sm text-gray-600">
            <p>© 2026 JuliaSystems</p>
            <p>Barcelona, Spain</p>
            <p>jleskovets@yahoo.com</p>
            <p>X: @juliasystems</p>
          </div>
        </footer>
      </main>
    </>
  );
}