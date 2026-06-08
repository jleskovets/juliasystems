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
    overview:
      "Centralized integration platform connecting OEM systems and Dealer Management Systems (DMS) in a complex multi-system ecosystem. The platform enabled synchronization of customer, vehicle, contract, invoice, and appointment data between OEM and dealer systems.",
    roleDescription:
      "I worked on requirements engineering, integration analysis, solution design, API specification, and stakeholder collaboration throughout the delivery lifecycle.",
    deliverables: [
      "Functional and technical specifications",
      "API documentation and OpenAPI contracts",
      "Integration diagrams and data flow descriptions",
      "Validation rules and error-handling scenarios",
    ],
    achievements: [
      "Delivered 3 integration projects within 5 months",
      "Designed synchronization processes for customer, order and contract data",
      "Contributed to a centralized integration platform connecting OEM and DMS ecosystems",
      "Implemented API orchestration and automated data export processes",
    ],
    technologies: ["REST API", "JSON", "XML", "OpenAPI", "Jira", "Confluence", "Postman"],
  },
  {
    icon: "E",
    company: "Eqvanta",
    role: "Senior System Analyst",
    period: "Jan 2025 – Sep 2025",
    description:
      "Greenfield investment platform for retail investors focused on product launch, investor lifecycle workflows and reporting automation.",
    overview:
      "Greenfield investment platform for retail investors. The project required building product logic, analytical processes, and documentation standards from scratch while supporting MVP delivery.",
    roleDescription:
      "I established the business analysis function, created documentation standards, organized the knowledge base, worked directly with stakeholders, and collaborated with development and QA teams on solution design and implementation planning.",
    deliverables: [
      "Business and functional requirements",
      "BPMN and UML diagrams",
      "ERD models and acceptance criteria",
      "User stories and product documentation",
      "Competitor analysis transformed into product improvements",
    ],
    achievements: [
      "Successfully launched MVP of the investment platform",
      "Built documentation standards, templates and Confluence knowledge base",
      "Introduced automated investment reporting and role-based access concepts",
      "Created scalable analysis processes adopted by the team",
    ],
    technologies: ["BPMN", "UML", "ERD", "SQL", "Confluence", "Jira"],
  },
  {
    icon: "R",
    company: "Raiffeisen Bank",
    role: "System Analyst",
    period: "Feb 2023 – Dec 2024",
    description:
      "High-load customer notification platform delivering SMS, Email and Push communications across banking channels.",
    overview:
      "High-load customer notification platform delivering SMS, Email and Push communications across multiple banking channels. The platform supported mission-critical customer communication flows.",
    roleDescription:
      "I worked at the intersection of business, development, and integration teams. My work included gathering requirements, modeling processes, analyzing integrations, and supporting migration of platform components from monolithic architecture to microservices.",
    deliverables: [
      "Functional specifications",
      "BPMN and UML diagrams",
      "API contracts and integration descriptions",
      "Requirements documentation",
      "Confluence knowledge base updates",
    ],
    achievements: [
      "Reduced requirements clarification effort by ~50% through legacy system analysis",
      "Improved onboarding efficiency through documentation restructuring",
      "Contributed to migration of key modules to microservices architecture",
      "Optimized notification routing logic reducing operational messaging costs",
    ],
    technologies: ["Microservices", "BPMN", "UML", "REST API", "CRM Integrations"],
  },
  {
    icon: "A",
    company: "Andersen / Aston",
    role: "Business Analyst",
    period: "Jan 2022 – Feb 2023",
    description:
      "Greenfield real-estate marketplace platform with service-oriented architecture and event-driven integrations.",
    overview:
      "Greenfield real-estate marketplace platform. The project focused on MVP delivery, product discovery, requirements engineering, and integration design.",
    roleDescription:
      "I participated in product discovery, MVP definition, requirements engineering, and solution design. I worked with stakeholders and developers on Vision & Scope, SRS documentation, user stories, functional and non-functional requirements, and integration design.",
    deliverables: [
      "Vision & Scope documentation",
      "SRS and user stories",
      "BPMN diagrams and ERD models",
      "API specifications and data mappings",
      "Integration designs and architecture-related documentation",
    ],
    achievements: [
      "Successfully launched MVP platform",
      "Contributed to service-oriented architecture design",
      "Designed integrations between internal and external systems",
      "Established reusable documentation templates and standards",
    ],
    technologies: ["Kafka", "REST API", "SOA", "UML", "Data Modeling"],
  },
  {
    icon: "S",
    company: "SBER",
    role: "Lead System Analyst",
    period: "Feb 2021 – Jan 2022",
    description:
      "Migration of a banking front-office platform from legacy architecture to microservices.",
    overview:
      "Migration of a banking front-office platform from legacy architecture to microservices. The project involved reconstructing undocumented functionality and defining future-state processes.",
    roleDescription:
      "I led analytical activities, defined requirements standards, coordinated stakeholder approvals, reconstructed undocumented legacy functionality through source code and database analysis, and mentored analysts.",
    deliverables: [
      "Business and system requirements",
      "BPMN and UML diagrams",
      "API specifications and ERD models",
      "UX artifacts",
      "ESB integration requirements",
      "Current-state and future-state process documentation",
    ],
    achievements: [
      "Successfully launched MVP into production",
      "Built and standardized analytical processes and templates",
      "Reduced analysis effort by ~50% through formalization of legacy behavior",
      "Supported team growth through mentoring and interviewing",
    ],
    technologies: ["Microservices", "ESB", "REST", "SOAP", "BPMN", "UML"],
  },
  {
    icon: "C",
    company: "Cinimex",
    role: "System Analyst",
    period: "2019 – 2021",
    description:
      "Core Banking System enhancement project for a major bank in a regulated banking environment.",
    overview:
      "Core Banking System enhancement project for a major bank. This role provided my foundation in business and system analysis within a highly regulated banking environment.",
    roleDescription:
      "I gathered and formalized requirements, modeled business processes, prepared specifications, created UI mockups, and supported testing activities in close collaboration with business users, developers, and QA specialists.",
    deliverables: [
      "BPMN and UML diagrams",
      "Requirements specifications",
      "Printable forms and UI mockups",
      "UX artifacts",
      "API descriptions",
      "Test cases supporting implementation and validation",
    ],
    achievements: [
      "Introduced a new requirements specification format",
      "Improved consistency and quality of analytical documentation",
      "Supported delivery of multiple banking enhancements",
    ],
    technologies: ["CBS", "BPMN", "UML", "SQL"],
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
        {experience.map((item) => {
          const isOpen = openProject === item.company;

          return (
            <article
              key={item.company}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:border-teal-100 hover:bg-teal-50/30"
            >
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 font-bold text-teal-700">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-950">
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

              <button
                onClick={() => setOpenProject(isOpen ? null : item.company)}
                className="text-sm font-medium text-teal-700 hover:text-teal-800"
              >
                {isOpen ? "Hide Case Study" : "View Case Study →"}
              </button>

              {isOpen && (
                <div className="mt-6 border-t border-gray-100 pt-6">
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <h4 className="font-semibold text-gray-950">
                        Project Overview
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {item.overview}
                      </p>

                      <h4 className="mt-6 font-semibold text-gray-950">
                        My Role
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {item.roleDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-950">
                        Key Deliverables
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm leading-6 text-gray-600">
                        {item.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex gap-2">
                            <span className="text-teal-700">•</span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="mt-6 font-semibold text-gray-950">
                        Key Achievements
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm leading-6 text-gray-600">
                        {item.achievements.map((achievement) => (
                          <li key={achievement} className="flex gap-2">
                            <span className="text-teal-700">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="mt-6 font-semibold text-gray-950">
                        Technologies
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}