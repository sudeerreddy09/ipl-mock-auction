"use client";

import { useEffect, useState } from "react";
import players from "../../data/players";

export default function AuctionRoom() {
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

  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div>
            <p className="text-orange-500 font-bold tracking-widest">
              IPL 2026
            </p>

            <h1 className="text-xl font-bold">
              Mock Auction
            </h1>
          </div>

          <div className="text-right">
            <p className="text-gray-400 text-sm">
              Your Team
            </p>

            <p className="font-bold">
              {team ? team.shortName : "Loading..."}
            </p>
          </div>

        </div>
      </header>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Player Card */}
          <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-8">

            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
              Current Player
            </p>

            <h2 className="text-5xl font-bold mb-3">
              {currentPlayer.name}
            </h2>

            <p className="text-gray-400 text-lg mb-8">
              {currentPlayer.role} • {currentPlayer.nationality}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">

              <div className="bg-gray-800 rounded-xl p-5">
                <p className="text-gray-400 text-sm">
                  Base Price
                </p>

                <p className="text-2xl font-bold mt-1">
                  ₹{currentPlayer.basePrice} Cr
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-5">
                <p className="text-gray-400 text-sm">
                  Current Bid
                </p>

                <p className="text-2xl font-bold mt-1 text-orange-500">
                  ₹{currentBid} Cr
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-5">
                <p className="text-gray-400 text-sm">
                  Rating
                </p>

                <p className="text-2xl font-bold mt-1">
                  {currentPlayer.rating}
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <button
                onClick={increaseBid}
                className="flex-1 bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold transition"
              >
                Bid ₹{(currentBid + 0.5).toFixed(1)} Cr
              </button>

              <button
                onClick={nextPlayer}
                className="px-8 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold transition"
              >
                Next Player
              </button>

            </div>

          </div>

          {/* Team Panel */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-6">
              Your Team
            </h2>

            <div className="bg-gray-800 rounded-xl p-5 mb-6">

              <p className="text-gray-400 text-sm">
                Team
              </p>

              <p className="text-2xl font-bold mt-1">
                {team ? team.name : "Loading..."}
              </p>

            </div>

            <div className="bg-gray-800 rounded-xl p-5 mb-6">

              <p className="text-gray-400 text-sm">
                Remaining Purse
              </p>

              <p className="text-3xl font-bold text-orange-500 mt-1">
                ₹150 Cr
              </p>

            </div>

            <div className="flex justify-between border-b border-gray-800 pb-4">
              <span className="text-gray-400">
                Players
              </span>

              <span className="font-semibold">
                0
              </span>
            </div>

            <div className="flex justify-between py-4">
              <span className="text-gray-400">
                Squad Size
              </span>

              <span className="font-semibold">
                0 / 25
              </span>
            </div>

          </div>

        </div>

        {/* Auction Status */}
        <div className="mt-6 bg-gray-900 border border-gray-800 rounded-2xl p-6">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-400 text-sm">
                Auction Progress
              </p>

              <p className="font-bold mt-1">
                Player {currentPlayerIndex + 1} of {players.length}
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-400 text-sm">
                Status
              </p>

              <p className="text-orange-500 font-bold mt-1">
                LIVE
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}