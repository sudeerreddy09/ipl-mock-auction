"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const teams = [
  {
    name: "Chennai Super Kings",
    shortName: "CSK",
    emoji: "🦁",
    color: "from-yellow-500/20",
  },
  {
    name: "Delhi Capitals",
    shortName: "DC",
    emoji: "🔵",
    color: "from-blue-500/20",
  },
  {
    name: "Gujarat Titans",
    shortName: "GT",
    emoji: "⚔️",
    color: "from-cyan-500/20",
  },
  {
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    emoji: "🟣",
    color: "from-purple-500/20",
  },
  {
    name: "Lucknow Super Giants",
    shortName: "LSG",
    emoji: "🔷",
    color: "from-sky-500/20",
  },
  {
    name: "Mumbai Indians",
    shortName: "MI",
    emoji: "🔷",
    color: "from-blue-600/20",
  },
  {
    name: "Punjab Kings",
    shortName: "PBKS",
    emoji: "🔴",
    color: "from-red-500/20",
  },
  {
    name: "Rajasthan Royals",
    shortName: "RR",
    emoji: "👑",
    color: "from-pink-500/20",
  },
  {
    name: "Royal Challengers Bengaluru",
    shortName: "RCB",
    emoji: "🔥",
    color: "from-red-600/20",
  },
  {
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    emoji: "🧡",
    color: "from-orange-600/20",
  },
];

export default function ChooseTeam() {
  const router = useRouter();
  const [selectedTeam, setSelectedTeam] = useState(null);

  function startAuction() {
    if (!selectedTeam) return;

    localStorage.setItem(
      "selectedTeam",
      JSON.stringify(selectedTeam)
    );

    router.push("/auction/room");
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            href="/auction/teams"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-xl">
              🏏
            </div>

            <div>
              <h1 className="font-bold">
                IPL MOCK AUCTION
              </h1>

              <p className="text-xs text-gray-500">
                IPL 2026
              </p>
            </div>
          </Link>

          <div className="text-sm text-gray-500">
            Step <span className="text-white font-bold">3</span> of 3
          </div>

        </div>
      </header>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Final Setup
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Choose Your Team
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Pick the team you will control during the auction.
            Make every bid count.
          </p>

        </div>

        {/* Selected Team Preview */}
        <div className="mb-10">

          {selectedTeam ? (
            <div className="border border-orange-500/30 bg-orange-500/[0.06] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5">

              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-2xl bg-black/40 border border-orange-500/20 flex items-center justify-center text-4xl">
                  {selectedTeam.emoji}
                </div>

                <div>
                  <p className="text-orange-400 text-xs font-bold tracking-widest">
                    YOUR TEAM
                  </p>

                  <h3 className="text-2xl font-black mt-1">
                    {selectedTeam.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {selectedTeam.shortName}
                  </p>
                </div>

              </div>

              <button
                onClick={() => setSelectedTeam(null)}
                className="text-sm text-gray-500 hover:text-white transition"
              >
                Change Team
              </button>

            </div>
          ) : (
            <div className="border border-dashed border-white/10 rounded-2xl p-6 text-center text-gray-600">
              Select a team below
            </div>
          )}

        </div>

        {/* Teams */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {teams.map((team) => {

            const isSelected =
              selectedTeam?.shortName === team.shortName;

            return (
              <button
                key={team.shortName}
                onClick={() => setSelectedTeam(team)}
                className={`relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? "border-orange-500 bg-orange-500/[0.08] -translate-y-1 shadow-lg shadow-orange-500/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >

                {isSelected && (
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-orange-500 text-black flex items-center justify-center font-black z-10">
                    ✓
                  </div>
                )}

                <div
                  className={`h-28 bg-gradient-to-br ${team.color} to-transparent flex items-center justify-center`}
                >
                  <div className="w-16 h-16 rounded-full bg-black/30 border border-white/10 flex items-center justify-center text-3xl">
                    {team.emoji}
                  </div>
                </div>

                <div className="p-4">

                  <p className="text-orange-500 text-xs font-bold tracking-widest">
                    {team.shortName}
                  </p>

                  <h3 className="font-bold text-sm mt-2 leading-tight min-h-[40px]">
                    {team.name}
                  </h3>

                  <p
                    className={`text-xs font-semibold mt-4 ${
                      isSelected
                        ? "text-orange-400"
                        : "text-gray-600"
                    }`}
                  >
                    {isSelected ? "✓ Selected" : "Select Team"}
                  </p>

                </div>

              </button>
            );
          })}

        </div>

        {/* Start Auction */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center">

          <button
            onClick={startAuction}
            disabled={!selectedTeam}
            className={`w-full md:w-auto min-w-[280px] px-10 py-4 rounded-xl font-bold text-lg transition ${
              selectedTeam
                ? "bg-orange-500 hover:bg-orange-600 text-black hover:scale-[1.02]"
                : "bg-gray-800 text-gray-600 cursor-not-allowed"
            }`}
          >
            {selectedTeam
              ? "Start Auction 🚀"
              : "Select a Team First"}
          </button>

          <p className="text-gray-600 text-sm mt-4">
            You can change your team before starting the auction.
          </p>

        </div>

      </section>

    </main>
  );
}