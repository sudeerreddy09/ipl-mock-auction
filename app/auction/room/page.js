"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import players from "../../data/players";

export default function AuctionRoom() {
  const router = useRouter();

  const [team, setTeam] = useState(null);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentBid, setCurrentBid] = useState(0);

  const currentPlayer = players[currentPlayerIndex];

  useEffect(() => {
    const savedTeam = localStorage.getItem("selectedTeam");

    if (savedTeam) {
      setTeam(JSON.parse(savedTeam));
    }
  }, []);

  useEffect(() => {
    if (currentPlayer) {
      setCurrentBid(currentPlayer.basePrice);
    }
  }, [currentPlayerIndex, currentPlayer]);

  function increaseBid() {
    setCurrentBid((previousBid) => previousBid + 0.5);
  }

  function nextPlayer() {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex((previousIndex) => previousIndex + 1);
    }
  }

  function previousPlayer() {
    if (currentPlayerIndex > 0) {
      setCurrentPlayerIndex((previousIndex) => previousIndex - 1);
    }
  }

  function exitAuction() {
    router.push("/");
  }

  const progress =
    ((currentPlayerIndex + 1) / players.length) * 100;

  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b0b0b]">

        <div className="max-w-[1500px] mx-auto px-5 md:px-8 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">

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

            </div>

            {/* Right */}
            <div className="flex items-center gap-3">

              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />

                <span className="text-red-400 text-sm font-bold">
                  LIVE
                </span>
              </div>

              <button
                onClick={exitAuction}
                className="px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
              >
                Exit
              </button>

            </div>

          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2 mt-5 border-t border-white/5 pt-4">

            <Link
              href="/auction/room"
              className="px-4 py-2 rounded-lg bg-orange-500 text-black font-bold text-sm"
            >
              🏏 Auction Room
            </Link>

            <Link
              href="/auction/squad"
              className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-semibold text-sm transition"
            >
              👥 My Squad
            </Link>

          </div>

        </div>

      </header>

      {/* Main */}
      <section className="max-w-[1500px] mx-auto px-5 md:px-8 py-6">

        {/* Progress */}
        <div className="mb-6">

          <div className="flex justify-between items-end mb-3">

            <div>
              <p className="text-gray-500 text-sm">
                AUCTION PROGRESS
              </p>

              <p className="font-bold mt-1">
                Player {currentPlayerIndex + 1}
                <span className="text-gray-600">
                  {" "}of {players.length}
                </span>
              </p>
            </div>

            <p className="text-orange-500 font-bold text-sm">
              {Math.round(progress)}%
            </p>

          </div>

          <div className="h-2 bg-gray-900 rounded-full overflow-hidden">

            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />

          </div>

        </div>

        {/* Dashboard */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">

          {/* Auction */}
          <div className="xl:col-span-3">

            <div className="border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden">

              {/* Player Header */}
              <div className="border-b border-white/10 px-6 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                <div>
                  <p className="text-orange-500 text-xs font-bold tracking-widest">
                    CURRENT PLAYER
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Player #{currentPlayerIndex + 1}
                  </p>
                </div>

                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
                  Base Price:{" "}
                  <span className="font-bold text-white">
                    ₹{currentPlayer.basePrice} Cr
                  </span>
                </div>

              </div>

              {/* Player */}
              <div className="p-6 md:p-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                  {/* Avatar */}
                  <div className="flex justify-center">

                    <div className="relative">

                      <div className="w-52 h-52 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/20 flex items-center justify-center">

                        <div className="w-32 h-32 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center text-7xl">
                          🏏
                        </div>

                      </div>

                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-orange-500 text-black font-black text-sm">
                        RATING {currentPlayer.rating}
                      </div>

                    </div>

                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2">

                    <p className="text-orange-500 font-bold text-sm tracking-widest uppercase">
                      {currentPlayer.nationality}
                    </p>

                    <h2 className="text-4xl md:text-6xl font-black mt-2">
                      {currentPlayer.name}
                    </h2>

                    <p className="text-gray-400 text-lg mt-3">
                      {currentPlayer.role}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">

                      <div className="bg-[#151515] border border-white/10 rounded-xl p-4">
                        <p className="text-gray-500 text-xs">
                          BASE PRICE
                        </p>

                        <p className="text-xl font-bold mt-2">
                          ₹{currentPlayer.basePrice} Cr
                        </p>
                      </div>

                      <div className="bg-[#151515] border border-orange-500/20 rounded-xl p-4">
                        <p className="text-gray-500 text-xs">
                          CURRENT BID
                        </p>

                        <p className="text-xl font-bold mt-2 text-orange-500">
                          ₹{currentBid.toFixed(1)} Cr
                        </p>
                      </div>

                      <div className="bg-[#151515] border border-white/10 rounded-xl p-4">
                        <p className="text-gray-500 text-xs">
                          RATING
                        </p>

                        <p className="text-xl font-bold mt-2">
                          {currentPlayer.rating}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Bid Area */}
                <div className="mt-10 bg-[#111] border border-white/10 rounded-2xl p-6">

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                    <div>
                      <p className="text-gray-500 text-sm">
                        CURRENT BID
                      </p>

                      <p className="text-4xl font-black text-orange-500 mt-1">
                        ₹{currentBid.toFixed(1)} Cr
                      </p>
                    </div>

                    <button
                      onClick={increaseBid}
                      className="px-10 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-black text-lg transition hover:scale-105"
                    >
                      BID + ₹0.5 Cr
                    </button>

                  </div>

                  {/* Future Timer Area */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">

                    <div>
                      <p className="text-gray-600 text-xs">
                        AUTO-SOLD TIMER
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        Timer will reset whenever a new bid is placed.
                      </p>
                    </div>

                    <div className="text-2xl font-black text-orange-500">
                      5s
                    </div>

                  </div>

                </div>

                {/* Player Navigation */}
                <div className="flex justify-between mt-5">

                  <button
                    onClick={previousPlayer}
                    disabled={currentPlayerIndex === 0}
                    className="px-5 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 disabled:opacity-30 transition"
                  >
                    ← Previous
                  </button>

                  <button
                    onClick={nextPlayer}
                    disabled={
                      currentPlayerIndex === players.length - 1
                    }
                    className="px-5 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 disabled:opacity-30 transition"
                  >
                    Next Player →
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* Team Sidebar */}
          <aside className="border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden h-fit">

            <div className="p-6 border-b border-white/10">

              <p className="text-gray-500 text-xs font-bold tracking-widest">
                YOUR TEAM
              </p>

              <h2 className="text-2xl font-black mt-2">
                {team ? team.name : "Loading..."}
              </h2>

              <p className="text-orange-500 font-bold mt-1">
                {team ? team.shortName : ""}
              </p>

            </div>

            <div className="p-6">

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">

                <p className="text-gray-500 text-xs">
                  REMAINING PURSE
                </p>

                <p className="text-3xl font-black text-orange-500 mt-2">
                  ₹150 Cr
                </p>

              </div>

              <div className="mt-5 space-y-4">

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Players Bought
                  </span>

                  <span className="font-bold">
                    0
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Squad Size
                  </span>

                  <span className="font-bold">
                    0 / 25
                  </span>
                </div>

              </div>

              <Link
                href="/auction/squad"
                className="block text-center mt-7 px-5 py-3 rounded-xl border border-orange-500/30 text-orange-400 hover:bg-orange-500/10 font-bold transition"
              >
                View My Squad →
              </Link>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}