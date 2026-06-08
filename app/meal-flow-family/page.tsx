import Image from "next/image";
import Header from "@/components/Header";

const features = [
  ["Family Profile", "Personalized context based on household members, goals, preferences, allergies and budget."],
  ["Pantry", "A living digital inventory that tracks products, quantities and expiration dates."],
  ["Meal Plan", "Weekly meal planning based on real household context, not random recipes."],
  ["Grocery List", "Smart shopping lists generated from the meal plan and current pantry inventory."],
  ["Recipes", "Recommendations based on available ingredients, dietary needs and food priorities."],
];

const problems = [
  "Food waste from forgotten or expired products",
  "Rising grocery costs and duplicate purchases",
  "Time-consuming weekly meal planning",
  "Disconnected tools for recipes, pantry and shopping",
];

export default function MealFlowFamily() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-gray-950">
        <section className="bg-gradient-to-br from-[#fbfaf4] via-[#eef7e8] to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                Featured Product
              </p>

              <h1 className="mb-4 text-5xl font-bold tracking-tight lg:text-6xl">
                MealFlow
              </h1>

              <h2 className="mb-6 text-2xl font-medium text-green-700">
                AI-powered family food operating system
              </h2>

              <p className="mb-8 max-w-2xl text-lg leading-9 text-gray-700">
                MealFlow helps households plan meals, manage groceries and
                reduce food waste through a single connected workflow.
              </p>

              <p className="mb-10 text-xl font-semibold text-green-800">
                Plan smarter. Waste less. Live better.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/meal-flow/MealFlow_Pitch_Deck.pdf"
                  target="_blank"
                  className="rounded-xl bg-green-700 px-6 py-3 text-white transition hover:bg-green-800"
                >
                  Open Pitch Deck
                </a>

                <a
                  href="/meal-flow/MealFlowProrotype.pdf"
                  target="_blank"
                  className="rounded-xl border border-green-700 px-6 py-3 text-green-800 transition hover:bg-green-50"
                >
                  View Prototype
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-2xl">
              <Image
                src="/meal-flow/Cover.png"
                alt="MealFlow product cover"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-green-700">
                The Problem
              </p>
              <h2 className="text-4xl font-bold">
                Food management is broken.
              </h2>
            </div>

            <div>
              <p className="mb-8 text-base leading-8 text-gray-700">
                Modern households make hundreds of food-related decisions every
                month, yet most tools separate recipes, pantry management,
                grocery shopping and budgeting into disconnected workflows.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {problems.map((problem) => (
                  <div key={problem} className="rounded-2xl bg-green-50/60 p-5">
                    <p className="text-sm leading-6 text-gray-700">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-10">
          <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-green-700">
              The Solution
            </p>

            <h2 className="mb-5 text-4xl font-bold">
              MealFlow starts with the family.
            </h2>

            <p className="max-w-4xl text-base leading-8 text-gray-700">
              Unlike traditional recipe or meal-planning applications, MealFlow
              builds recommendations around household preferences, dietary needs,
              budget goals, pantry inventory and family habits. The result is
              personalized meal planning, smarter grocery lists and better food
              decisions in one connected system.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-16">
          <div className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-green-700">
              Workflow
            </p>
            <h2 className="text-4xl font-bold">
              From chaos to clarity.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-sm">
            <Image
              src="/meal-flow/Workflow.png"
              alt="MealFlow workflow"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-16">
          <div className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-green-700">
              Product Experience
            </p>
            <h2 className="text-4xl font-bold">
              One system for everyday food decisions.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, text]) => (
              <article
                key={title}
                className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:border-green-100 hover:bg-green-50/30"
              >
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-sm leading-7 text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-16">
          <div className="rounded-3xl bg-gradient-to-br from-green-900 to-green-700 p-10 text-white">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-green-100">
              Impact
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              Better decisions. Happier families.
            </h2>

            <div className="grid gap-5 md:grid-cols-4">
              {["Save time", "Spend smarter", "Waste less", "Eat better"].map(
                (item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-5">
                    <p className="font-semibold">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-green-700">
                Vision
              </p>

              <h2 className="mb-5 text-4xl font-bold">
                Reimagining how families manage food.
              </h2>

              <p className="text-base leading-8 text-gray-700">
                MealFlow is designed to help families waste less, spend smarter
                and build healthier habits — one meal at a time. The vision is
                to create a more intelligent and responsible household food
                ecosystem, from pantry to plate.
              </p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-green-50/60 p-8">
              <h3 className="mb-4 text-2xl font-bold">
                Investment Status
              </h3>

              <p className="mb-6 text-base leading-8 text-gray-700">
                MealFlow is currently in product discovery and prototype stage.
                The project is being developed as an independent product under
                the JuliaSystems brand.
              </p>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-green-800">
                Seeking early-stage investment and strategic partnerships
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}