export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
          IPL 2026
        </p>

        <h1 className="text-6xl font-bold mb-6">
          IPL Mock Auction
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          Build your dream IPL squad.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-lg font-semibold transition">
          Start Auction
        </button>

      </div>
    </main>
  );
}