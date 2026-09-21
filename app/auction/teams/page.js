"use client";

import { useState } from "react";
import Link from "next/link";

const teams = [
  {
    name: "Chennai Super Kings",
    shortName: "CSK",
    color: "from-yellow-500/20",
    emoji: "🦁",
  },
  {
    name: "Delhi Capitals",
    shortName: "DC",
    color: "from-blue-500/20",
    emoji: "🔵",
  },
  {
    name: "Gujarat Titans",
    shortName: "GT",
    color: "from-cyan-500/20",
    emoji: "⚔️",
  },
  {
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    color: "from-purple-500/20",
    emoji: "🟣",
  },
  {
    name: "Lucknow Super Giants",
    shortName: "LSG",
    color: "from-sky-500/20",
    emoji: "🔷",
  },
  {
    name: "Mumbai Indians",
    shortName: "MI",
    color: "from-blue-600/20",
    emoji: "🔷",
  },
  {
    name: "Punjab Kings",
    shortName: "PBKS",
    color: "from-red-500/20",
    emoji: "🔴",
  },
  {
    name: "Rajasthan Royals",
    shortName: "RR",
    color: "from-pink-500/20",
    emoji: "👑",
  },
  {
    name: "Royal Challengers Bengaluru",
    shortName: "RCB",
    color: "from-red-600/20",
    emoji: "🔥",
  },
  {
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    color: "from-orange-600/20",
    emoji: "🧡",
  },
];

export default function TeamSelection() {
  const [selectedTeams, setSelectedTeams] = useState([]);

  function toggleTeam(team) {
    setSelectedTeams((current) => {
      const alreadySelected = current.some(
        (selected) => selected.shortName === team.shortName
      );

      if (alreadySelected) {
        return current.filter(
          (selected) => selected.shortName !== team.shortName
        );
      }

      return [...current, team];
    });
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            href="/auction"
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
            Step <span className="text-white font-bold">2</span> of 3
          </div>

        </div>
      </header>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* Heading */}
        <div className="mb-10">

          <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Team Selection
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Choose Your Auction Teams
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl">
            Select the IPL teams that will participate in your mock auction.
            You need at least 2 teams to continue.
          </p>

        </div>

        {/* Selection Status */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-white/10 bg-white/[0.03] rounded-2xl p-5">

          <div>
            <p className="text-gray-500 text-sm">
              Teams Selected
            </p>

            <p className="text-2xl font-bold mt-1">
              {selectedTeams.length}
              <span className="text-gray-600 text-lg">
                {" "} / 10
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2">

            {selectedTeams.length === 0 ? (
              <span className="text-gray-600 text-sm">
                No teams selected yet
              </span>
            ) : (
              selectedTeams.map((team) => (
                <span
                  key={team.shortName}
                  className="px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold"
                >
                  {team.shortName}
                </span>
              ))
            )}

          </div>

        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">

          {teams.map((team) => {

            const isSelected = selectedTeams.some(
              (selected) => selected.shortName === team.shortName
            );

            return (
              <button
                key={team.shortName}
                onClick={() => toggleTeam(team)}
                className={`relative text-left overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? "border-orange-500 bg-orange-500/[0.08] -translate-y-1 shadow-lg shadow-orange-500/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >

                {/* Selection Badge */}
                {isSelected && (
                  <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-orange-500 text-black flex items-center justify-center font-black">
                    ✓
                  </div>
                )}

                {/* Team Visual */}
                <div
                  className={`h-36 bg-gradient-to-br ${team.color} to-transparent flex items-center justify-center`}
                >
                  <div className="w-20 h-20 rounded-full bg-black/30 border border-white/10 flex items-center justify-center text-4xl">
                    {team.emoji}
                  </div>
                </div>

                {/* Team Info */}
                <div className="p-5">

                  <p className="text-orange-500 text-xs font-bold tracking-widest mb-2">
                    {team.shortName}
                  </p>

                  <h3 className="font-bold leading-tight min-h-[48px]">
                    {team.name}
                  </h3>

                  <div className="mt-5 pt-4 border-t border-white/10">

                    <p
                      className={`text-sm font-semibold ${
                        isSelected
                          ? "text-orange-400"
                          : "text-gray-500"
                      }`}
                    >
                      {isSelected
                        ? "✓ Selected"
                        : "Click to Select"}
                    </p>

                  </div>

                </div>

              </button>
            );
          })}

        </div>

        {/* Bottom Action */}
        <div className="mt-10 border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm text-center md:text-left">
            {selectedTeams.length < 2
              ? "Select at least 2 teams to continue."
              : `${selectedTeams.length} teams selected. You're ready to continue.`}
          </p>

          <Link
            href="/auction/teams/choose"
            className={`w-full md:w-auto px-8 py-4 rounded-xl text-center font-bold transition ${
              selectedTeams.length >= 2
                ? "bg-orange-500 hover:bg-orange-600 text-black hover:scale-[1.02]"
                : "bg-gray-800 text-gray-600 pointer-events-none"
            }`}
          >
            Continue →
          </Link>

        </div>

      </section>

    </main>
  );
}