"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const players = [
  {
    name: "You",
    team: "SRH",
    status: "Ready",
    avatar: "👑",
  },
  {
    name: "Player 2",
    team: "RCB",
    status: "Ready",
    avatar: "🔥",
  },
  {
    name: "Player 3",
    team: "MI",
    status: "Ready",
    avatar: "⚡",
  },
];

const teams = [
  "CSK",
  "DC",
  "GT",
  "KKR",
  "LSG",
  "MI",
  "PBKS",
  "RR",
  "RCB",
  "SRH",
];

export default function AuctionLobby() {
  const router = useRouter();

  const [copied, setCopied] = useState(false);

  const roomCode = "IPL26X7";

  function copyRoomCode() {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function startAuction() {
    router.push("/auction/room");
  }

  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b0b0b]">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            href="/"
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

          <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">

            <div className="flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-green-400 text-sm font-bold">
                WAITING FOR PLAYERS
              </span>

            </div>

          </div>

        </div>

      </header>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* Title */}
        <div className="mb-10">

          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase">
            Auction Lobby
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Get Ready for the Auction
          </h2>

          <p className="text-gray-500 mt-3">
            Invite your friends, choose your teams and start the auction.
          </p>

        </div>

        {/* Room Code */}
        <div className="border border-orange-500/20 bg-orange-500/[0.05] rounded-2xl p-6 mb-6">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

            <div>

              <p className="text-gray-500 text-sm">
                ROOM CODE
              </p>

              <div className="flex items-center gap-4 mt-2">

                <p className="text-3xl md:text-4xl font-black tracking-[0.25em] text-orange-500">
                  {roomCode}
                </p>

                <button
                  onClick={copyRoomCode}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-semibold transition"
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>

              </div>

              <p className="text-gray-600 text-xs mt-3">
                Share this code with your friends to join the auction.
              </p>

            </div>

            <div className="text-left md:text-right">

              <p className="text-gray-500 text-sm">
                PLAYERS
              </p>

              <p className="text-3xl font-black mt-1">
                3
                <span className="text-gray-600 text-lg">
                  {" "} / 10
                </span>
              </p>

            </div>

          </div>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Players */}
          <div className="lg:col-span-2 border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden">

            <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">

              <div>
                <h3 className="text-xl font-bold">
                  Players
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  Everyone must be ready before starting.
                </p>
              </div>

              <span className="text-orange-500 font-bold">
                3 / 10
              </span>

            </div>

            <div className="p-6 space-y-3">

              {players.map((player, index) => (

                <div
                  key={player.name}
                  className="flex items-center justify-between bg-[#151515] border border-white/5 rounded-xl p-4"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                      {player.avatar}
                    </div>

                    <div>

                      <div className="flex items-center gap-2">

                        <p className="font-bold">
                          {player.name}
                        </p>

                        {index === 0 && (
                          <span className="text-[10px] px-2 py-1 rounded bg-orange-500/10 text-orange-400 font-bold">
                            HOST
                          </span>
                        )}

                      </div>

                      <p className="text-gray-600 text-sm mt-1">
                        Team:{" "}
                        <span className="text-gray-400 font-semibold">
                          {player.team}
                        </span>
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-2">

                    <span className="w-2 h-2 rounded-full bg-green-500" />

                    <span className="text-green-400 text-sm font-semibold">
                      {player.status}
                    </span>

                  </div>

                </div>

              ))}

              {/* Empty Slots */}
              {[1, 2].map((slot) => (

                <div
                  key={slot}
                  className="border border-dashed border-white/10 rounded-xl p-4 flex items-center gap-4"
                >

                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] flex items-center justify-center text-gray-700">
                    +
                  </div>

                  <div>
                    <p className="text-gray-600 font-semibold">
                      Waiting for player...
                    </p>

                    <p className="text-gray-700 text-sm">
                      Share the room code
                    </p>
                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Settings */}
          <div className="border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden h-fit">

            <div className="px-6 py-5 border-b border-white/10">

              <h3 className="text-xl font-bold">
                Auction Settings
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                Current room configuration
              </p>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between items-center py-3 border-b border-white/5">

                <span className="text-gray-500">
                  Season
                </span>

                <span className="font-bold">
                  IPL 2026
                </span>

              </div>

              <div className="flex justify-between items-center py-3 border-b border-white/5">

                <span className="text-gray-500">
                  Teams
                </span>

                <span className="font-bold">
                  10
                </span>

              </div>

              <div className="flex justify-between items-center py-3 border-b border-white/5">

                <span className="text-gray-500">
                  Purse / Team
                </span>

                <span className="font-bold text-orange-500">
                  ₹150 Cr
                </span>

              </div>

              <div className="flex justify-between items-center py-3 border-b border-white/5">

                <span className="text-gray-500">
                  Squad Limit
                </span>

                <span className="font-bold">
                  25
                </span>

              </div>

              <div className="flex justify-between items-center py-3">

                <span className="text-gray-500">
                  Auto Sell
                </span>

                <span className="font-bold text-green-400">
                  5 Seconds
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Teams */}
        <div className="mt-6 border border-white/10 bg-[#0c0c0c] rounded-2xl p-6">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h3 className="text-xl font-bold">
                Available Teams
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                Teams available for this auction.
              </p>
            </div>

            <span className="text-gray-500 text-sm">
              10 Teams
            </span>

          </div>

          <div className="flex flex-wrap gap-3">

            {teams.map((team) => (

              <div
                key={team}
                className="px-4 py-3 rounded-xl bg-[#151515] border border-white/10 font-bold text-sm hover:border-orange-500/30 transition"
              >
                {team}
              </div>

            ))}

          </div>

        </div>

        {/* Start */}
        <div className="mt-8 flex flex-col items-center">

          <button
            onClick={startAuction}
            className="w-full md:w-auto min-w-[300px] px-10 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-black text-lg transition hover:scale-[1.02]"
          >
            Start Auction 🚀
          </button>

          <p className="text-gray-600 text-sm mt-4">
            All players are ready. The auction can begin.
          </p>

        </div>

      </section>

    </main>
  );
}