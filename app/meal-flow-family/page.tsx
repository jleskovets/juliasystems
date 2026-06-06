import Header from "@/components/Header";

export default function MealFlowFamily() {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-6">
          Meal Flow Family
        </h1>

        <p className="text-xl text-gray-600 mb-12">
          AI-powered meal planning for modern families.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Problem
            </h2>

            <p>
              Families spend significant time planning meals,
              managing shopping lists and coordinating food
              preparation.
            </p>
          </section>

            <h2 className="text-2xl font-semibold mb-3">
              Solution
            </h2>

            <p>
              Meal Flow Family helps families organize meals,
              recipes and grocery shopping in one place.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}