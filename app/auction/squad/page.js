"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const demoPlayers = [
  {
    name: "KL Rahul",
    role: "Wicketkeeper Batter",
    nationality: "India",
    rating: 95,
    price: 12.5,
  },
  {
    name: "Jasprit Bumrah",
    role: "Bowler",
    nationality: "India",
    rating: 98,
    price: 15,
  },
  {
    name: "Hardik Pandya",
    role: "All-Rounder",
    nationality: "India",
    rating: 93,
    price: 10.5,
  },
];

export default function SquadPage() {
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState(demoPlayers);

  useEffect(() => {
    const savedTeam = localStorage.getItem("selectedTeam");

    if (savedTeam) {
      setTeam(JSON.parse(savedTeam));
    }
  }, []);

  const totalSpent = players.reduce(
    (total, player) => total + player.price,
    0
  );

  const remainingPurse = 150 - totalSpent;

  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            href="/auction/room"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-xl">
              🏏
            </div>

            <div>
              <p className="text-orange-500 text-xs font-bold tracking-widest">
                IPL 2026
              </p>

              <h1 className="font-bold">
                MOCK AUCTION
              </h1>
            </div>
          </Link>

          <Link
            href="/auction/room"
            className="px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
          >
            ← Auction Room
          </Link>

        </div>
      </header>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* Team Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

          <div>

            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase">
              My Squad
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-2">
              {team ? team.name : "Your Team"}
            </h2>

            <p className="text-gray-500 mt-2">
              Manage your auction signings and squad.
            </p>

          </div>

          <div className="px-5 py-3 rounded-xl bg-orange-500/10 border border-orange-500/20">

            <p className="text-gray-500 text-xs">
              TEAM
            </p>

            <p className="text-orange-500 font-black text-xl">
              {team ? team.shortName : "---"}
            </p>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

          <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Squad Size
            </p>

            <p className="text-3xl font-black mt-2">
              {players.length}
              <span className="text-gray-600 text-lg">
                {" "} / 25
              </span>
            </p>

          </div>

          <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Total Spent
            </p>

            <p className="text-3xl font-black mt-2 text-orange-500">
              ₹{totalSpent.toFixed(1)} Cr
            </p>

          </div>

          <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Remaining Purse
            </p>

            <p className="text-3xl font-black mt-2">
              ₹{remainingPurse.toFixed(1)} Cr
            </p>

          </div>

          <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Average Rating
            </p>

            <p className="text-3xl font-black mt-2">
              {Math.round(
                players.reduce(
                  (sum, player) => sum + player.rating,
                  0
                ) / players.length
              )}
            </p>

          </div>

        </div>

        {/* Squad Header */}
        <div className="flex items-center justify-between mb-5">

          <div>
            <h3 className="text-2xl font-bold">
              Your Players
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              Players purchased during the auction
            </p>
          </div>

          <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm">
            {players.length} Players
          </span>

        </div>

        {/* Player Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {players.map((player) => (
            <div
              key={player.name}
              className="group bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition"
            >

              {/* Player Top */}
              <div className="h-32 bg-gradient-to-br from-orange-500/15 to-transparent flex items-center justify-center">

                <div className="w-20 h-20 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center text-4xl">
                  🏏
                </div>

              </div>

              {/* Player Info */}
              <div className="p-5">

                <div className="flex justify-between items-start gap-3">

                  <div>
                    <h4 className="text-xl font-bold">
                      {player.name}
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                      {player.role}
                    </p>
                  </div>

                  <div className="px-2.5 py-1 rounded-lg bg-orange-500/10 text-orange-500 text-sm font-black">
                    {player.rating}
                  </div>

                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-3 mt-5">

                  <div className="bg-[#151515] rounded-xl p-3">

                    <p className="text-gray-600 text-xs">
                      NATIONALITY
                    </p>

                    <p className="font-semibold text-sm mt-1">
                      {player.nationality}
                    </p>

                  </div>

                  <div className="bg-[#151515] rounded-xl p-3">

                    <p className="text-gray-600 text-xs">
                      SOLD PRICE
                    </p>

                    <p className="font-bold text-sm text-orange-500 mt-1">
                      ₹{player.price} Cr
                    </p>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}