import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-xl">
              🏏
            </div>

            <div>
              <h1 className="font-bold text-lg">
                IPL MOCK AUCTION
              </h1>
              <p className="text-xs text-gray-500">
                Build Your Dream Squad
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <span className="text-white">Home</span>
            <span className="hover:text-white cursor-pointer transition">
              How It Works
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Teams
            </span>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">

        <div className="max-w-4xl mx-auto text-center">

          {/* Season Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            IPL 2026 MOCK AUCTION
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Build Your
            <span className="block text-orange-500">
              Dream IPL Squad
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Enter the auction room, make smart bids, manage your purse
            and create a squad capable of winning the IPL.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <Link
              href="/auction"
              className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg transition-all hover:scale-105"
            >
              Start Auction →
            </Link>

            <button
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 font-semibold text-lg transition"
            >
              How It Works
            </button>

          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-24">

          {/* Card 1 */}
          <div className="group border border-white/10 bg-white/[0.03] rounded-2xl p-7 hover:border-orange-500/40 hover:bg-orange-500/[0.04] transition">

            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-2xl mb-5">
              💰
            </div>

            <h3 className="text-xl font-bold mb-2">
              Smart Bidding
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Manage your purse and make strategic bids to build a balanced squad.
            </p>

          </div>

          {/* Card 2 */}
          <div className="group border border-white/10 bg-white/[0.03] rounded-2xl p-7 hover:border-orange-500/40 hover:bg-orange-500/[0.04] transition">

            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-2xl mb-5">
              🏆
            </div>

            <h3 className="text-xl font-bold mb-2">
              Build Your Squad
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Pick your players, create your playing XI and build a championship squad.
            </p>

          </div>

          {/* Card 3 */}
          <div className="group border border-white/10 bg-white/[0.03] rounded-2xl p-7 hover:border-orange-500/40 hover:bg-orange-500/[0.04] transition">

            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-2xl mb-5">
              ⚡
            </div>

            <h3 className="text-xl font-bold mb-2">
              Live Auction
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Experience an auction-style interface with players appearing one by one.
            </p>

          </div>

        </div>

        {/* Bottom Stats */}
        <div className="mt-16 border-y border-white/10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <p className="text-3xl font-bold">10</p>
            <p className="text-gray-500 text-sm mt-1">IPL Teams</p>
          </div>

          <div>
            <p className="text-3xl font-bold">150 Cr</p>
            <p className="text-gray-500 text-sm mt-1">Starting Purse</p>
          </div>

          <div>
            <p className="text-3xl font-bold">25</p>
            <p className="text-gray-500 text-sm mt-1">Max Squad Size</p>
          </div>

          <div>
            <p className="text-3xl font-bold">2026</p>
            <p className="text-gray-500 text-sm mt-1">Auction Season</p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-600 text-sm">
        IPL Mock Auction • Build. Bid. Conquer.
      </footer>

    </main>
  );
}