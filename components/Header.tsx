export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-teal-700">
            JuliaSystems
          </h1>
        </div>

        <nav className="flex gap-8">
          <a href="/" className="hover:text-teal-700">
            Home
          </a>

          <a
            href="/meal-flow-family"
            className="hover:text-teal-700"
          >
            Meal Flow Family
          </a>
        </nav>
      </div>
    </header>
  );
}