"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuctionSetup() {
  const [auctionName, setAuctionName] = useState("");
  const [numberOfTeams, setNumberOfTeams] = useState("10");
  const [teamPurse, setTeamPurse] = useState("150");

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b0b0b]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            href="/"
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
            Step <span className="text-white font-bold">1</span> of 3
          </div>

        </div>
      </header>

      {/* Main */}
      <section className="max-w-4xl mx-auto px-6 py-14">

        {/* Title */}
        <div className="mb-10">

          <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Auction Setup
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Create Your Auction
          </h2>

          <p className="text-gray-500 mt-3">
            Configure your auction before entering the team selection.
          </p>

        </div>

        {/* Setup Card */}
        <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-7 md:p-9 space-y-8">

          {/* Auction Name */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Auction Name
            </label>

            <input
              type="text"
              value={auctionName}
              onChange={(e) => setAuctionName(e.target.value)}
              placeholder="Example: Friends IPL Auction"
              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-orange-500 transition placeholder:text-gray-600"
            />

            <p className="text-xs text-gray-600 mt-2">
              Give your auction a name.
            </p>
          </div>

          {/* Number of Teams */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Number of Teams
            </label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

              {["5", "7", "10", "15"].map((teams) => (
                <button
                  key={teams}
                  onClick={() => setNumberOfTeams(teams)}
                  className={`py-4 rounded-xl border font-bold transition ${
                    numberOfTeams === teams
                      ? "bg-orange-500 text-black border-orange-500"
                      : "bg-[#111] border-white/10 text-gray-400 hover:border-orange-500/40"
                  }`}
                >
                  {teams} Teams
                </button>
              ))}

            </div>
          </div>

          {/* Team Purse */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Starting Purse
            </label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

              {["150", "120", "100", "80"].map((purse) => (
                <button
                  key={purse}
                  onClick={() => setTeamPurse(purse)}
                  className={`py-4 rounded-xl border font-bold transition ${
                    teamPurse === purse
                      ? "bg-orange-500 text-black border-orange-500"
                      : "bg-[#111] border-white/10 text-gray-400 hover:border-orange-500/40"
                  }`}
                >
                  ₹{purse} Cr
                </button>
              ))}

            </div>
          </div>

          {/* Auction Preview */}
          <div className="border border-orange-500/20 bg-orange-500/[0.05] rounded-xl p-5">

            <p className="text-orange-400 text-sm font-semibold mb-4">
              AUCTION PREVIEW
            </p>

            <div className="grid grid-cols-3 gap-4">

              <div>
                <p className="text-gray-500 text-xs">
                  Teams
                </p>

                <p className="text-xl font-bold mt-1">
                  {numberOfTeams}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">
                  Purse / Team
                </p>

                <p className="text-xl font-bold mt-1">
                  ₹{teamPurse} Cr
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">
                  Season
                </p>

                <p className="text-xl font-bold mt-1">
                  2026
                </p>
              </div>

            </div>

          </div>

          {/* Continue */}
          <Link
            href="/auction/teams"
            className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-black py-4 rounded-xl font-bold text-lg transition hover:scale-[1.01]"
          >
            Continue to Teams →
          </Link>

        </div>

        {/* Footer note */}
        <p className="text-center text-gray-600 text-sm mt-6">
          You can configure your squad and auction settings in the next steps.
        </p>

      </section>

    </main>
  );
}