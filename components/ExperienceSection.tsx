"use client";

import { useState } from "react";

const experience = [
  {
    icon: "L",
    company: "Lembitech",
    role: "Senior System Analyst",
    period: "Dec 2025 – Present",
    description:
      "Centralized integration platform connecting OEM systems and Dealer Management Systems (DMS) in a multi-system enterprise environment.",
    details: {
      overview:
        "Centralized integration platform connecting OEM systems and Dealer Management Systems (DMS) in a multi-system enterprise environment.",
      role:
        "Requirements engineering, integration analysis, API design, interaction flows, solution design and stakeholder collaboration.",
      achievements: [
        "Delivered 3 integration projects within 5 months",
        "Designed synchronization processes for customer, order and contract data",
        "Implemented API orchestration and automated export processes",
      ],
      technologies: "REST API, JSON, XML, OpenAPI, Jira, Confluence, Postman",
    },
  },
  {
    icon: "E",
    company: "Eqvanta",
    role: "Senior System Analyst",
    period: "Jan 2025 – Sep 2025",
    description:
      "Greenfield investment platform for retail investors. Built analytical processes from scratch and supported MVP delivery.",
    details: {
      overview:
        "Greenfield investment platform for retail investors focused on product launch, investor lifecycle workflows and reporting automation.",
      role:
        "Built the business analysis function from scratch, created documentation standards, organized the knowledge base and collaborated with stakeholders, developers and QA engineers.",
      achievements: [
        "Successfully launched MVP of the investment platform",
        "Built documentation standards, templates and Confluence knowledge base",
        "Introduced automated investment reporting and role-based access concepts",
      ],
      technologies: "BPMN, UML, ERD, SQL, Confluence, Jira",
    },
  },
  {
    icon: "R",
    company: "Raiffeisen Bank",
    role: "System Analyst",
    period: "Feb 2023 – Dec 2024",
    description:
      "High-load customer notification platform delivering SMS, Email and Push communications across banking channels.",
    details: {
      overview:
        "Enterprise customer notification platform delivering SMS, Email and Push communications across multiple banking channels.",
      role:
        "Worked with business, development and integration teams on requirements, process modeling, integration analysis and migration from monolith to microservices.",
      achievements: [
        "Contributed to migration of key modules to microservices architecture",
        "Improved onboarding efficiency through documentation restructuring",
        "Optimized notification routing logic and reduced operational messaging costs",
      ],
      technologies: "Microservices, BPMN, UML, REST API, CRM Integrations",
    },
  },
  {
    icon: "A",
    company: "Andersen / Aston",
    role: "Business Analyst",
    period: "Jan 2022 – Feb 2023",
    description:
      "Greenfield real-estate marketplace platform focused on MVP delivery and integration design.",
    details: {
      overview:
        "Greenfield real-estate marketplace platform with service-oriented architecture and event-driven integrations.",
      role:
        "Participated in product discovery, MVP definition, requirements engineering, solution design and integration design using Kafka and REST APIs.",
      achievements: [
        "Successfully launched MVP platform",
        "Contributed to service-oriented architecture design",
        "Established reusable documentation templates and standards",
      ],
      technologies: "Kafka, REST API, SOA, UML, Data Modeling",
    },
  },
  {
    icon: "S",
    company: "SBER",
    role: "Lead System Analyst",
    period: "Feb 2021 – Jan 2022",
    description:
      "Migration of a banking front-office platform from legacy architecture to microservices.",
    details: {
      overview:
        "Migration of a banking front-office platform from legacy architecture to microservices.",
      role:
        "Led analytical activities, reconstructed undocumented legacy functionality, defined future-state processes, coordinated requirements and mentored analysts.",
      achievements: [
        "Successfully launched MVP into production",
        "Built and standardized analytical processes and templates",
        "Supported team growth through mentoring and interviewing",
      ],
      technologies: "Microservices, ESB, REST, SOAP, BPMN, UML",
    },
  },
  {
    icon: "C",
    company: "Cinimex",
    role: "System Analyst",
    period: "2019 – 2021",
    description:
      "Core Banking System enhancement project for a major bank.",
    details: {
      overview:
        "Core Banking System enhancement project for a major bank in a regulated banking environment.",
      role:
        "Gathered and formalized requirements, modeled business processes, prepared specifications, created UI mockups and supported testing activities.",
      achievements: [
        "Introduced a new requirements specification format",
        "Improved consistency and quality of analytical documentation",
        "Supported delivery of multiple banking enhancements",
      ],
      technologies: "CBS, BPMN, UML, SQL",
    },
  },
];

export default function ExperienceSection() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-8 py-16">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-teal-700">
          Experience
        </p>

        <h2 className="text-4xl font-bold">
          Enterprise systems, integrations and product delivery.
        </h2>
      </div>

      <div className="space-y-5">
        {experience.map((item) => (
          <article
            key={item.company}
            className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:border-teal-100 hover:bg-teal-50/30"
          >
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 font-bold text-teal-700">
                    {item.icon}
                </div>

                <div>
                    <h3 className="text-2xl font-bold">
                    {item.company}
                    </h3>

                    <p className="mt-2 font-medium text-gray-800">
                    {item.role}
                    </p>
                </div>
                </div>

              <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                {item.period}
              </span>
            </div>

            <p className="mb-5 text-sm leading-7 text-gray-600">
              {item.description}
            </p>

            {item.details && (
              <>
                <button
                  onClick={() =>
                    setOpenProject(
                      openProject === item.company
                        ? null
                        : item.company
                    )
                  }
                  className="text-sm font-medium text-teal-700 hover:text-teal-800"
                >
                  {openProject === item.company
                    ? "Hide Details"
                    : "Read More"}
                </button>

                {openProject === item.company && (
                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-semibold">
                      Project Overview
                    </h4>

                    <p className="mt-2 text-sm text-gray-600">
                      {item.details.overview}
                    </p>

                    <h4 className="mt-5 font-semibold">
                      My Role
                    </h4>

                    <p className="mt-2 text-sm text-gray-600">
                      {item.details.role}
                    </p>

                    <h4 className="mt-5 font-semibold">
                      Key Achievements
                    </h4>

                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                      {item.details.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>

                    <h4 className="mt-5 font-semibold">
                      Technologies
                    </h4>

                    <p className="mt-2 text-sm text-gray-600">
                      {item.details.technologies}
                    </p>
                  </div>
                )}
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}