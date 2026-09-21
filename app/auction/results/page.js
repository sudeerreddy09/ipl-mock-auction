"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const squadPlayers = [
  { id: 1, name: "KL Rahul", role: "Wicketkeeper Batter", nationality: "India", rating: 95, price: 12.5 },
  { id: 2, name: "Virat Kohli", role: "Batter", nationality: "India", rating: 96, price: 14 },
  { id: 3, name: "Jasprit Bumrah", role: "Bowler", nationality: "India", rating: 98, price: 15 },
  { id: 4, name: "Rohit Sharma", role: "Batter", nationality: "India", rating: 94, price: 10 },
  { id: 5, name: "Rishabh Pant", role: "Wicketkeeper Batter", nationality: "India", rating: 94, price: 11 },
  { id: 6, name: "Hardik Pandya", role: "All-Rounder", nationality: "India", rating: 93, price: 10.5 },
  { id: 7, name: "Ravindra Jadeja", role: "All-Rounder", nationality: "India", rating: 92, price: 9 },
  { id: 8, name: "Suryakumar Yadav", role: "Batter", nationality: "India", rating: 93, price: 8.5 },
  { id: 9, name: "Shubman Gill", role: "Batter", nationality: "India", rating: 92, price: 9.5 },
  { id: 10, name: "Yashasvi Jaiswal", role: "Batter", nationality: "India", rating: 91, price: 8 },
  { id: 11, name: "Kuldeep Yadav", role: "Bowler", nationality: "India", rating: 90, price: 7 },
  { id: 12, name: "Mohammed Siraj", role: "Bowler", nationality: "India", rating: 89, price: 7.5 },
  { id: 13, name: "Arshdeep Singh", role: "Bowler", nationality: "India", rating: 88, price: 6.5 },
  { id: 14, name: "Axar Patel", role: "All-Rounder", nationality: "India", rating: 89, price: 7 },
  { id: 15, name: "Rinku Singh", role: "Batter", nationality: "India", rating: 87, price: 6 },
  { id: 16, name: "Sanju Samson", role: "Wicketkeeper Batter", nationality: "India", rating: 88, price: 7.5 },
  { id: 17, name: "Ishan Kishan", role: "Wicketkeeper Batter", nationality: "India", rating: 85, price: 5.5 },
  { id: 18, name: "Shreyas Iyer", role: "Batter", nationality: "India", rating: 89, price: 8 },
  { id: 19, name: "Varun Chakravarthy", role: "Bowler", nationality: "India", rating: 88, price: 6 },
  { id: 20, name: "Yuzvendra Chahal", role: "Bowler", nationality: "India", rating: 86, price: 5 },
  { id: 21, name: "Washington Sundar", role: "All-Rounder", nationality: "India", rating: 84, price: 4.5 },
  { id: 22, name: "Shivam Dube", role: "All-Rounder", nationality: "India", rating: 85, price: 5 },
  { id: 23, name: "Prasidh Krishna", role: "Bowler", nationality: "India", rating: 83, price: 4 },
  { id: 24, name: "Mukesh Kumar", role: "Bowler", nationality: "India", rating: 80, price: 3 },
  { id: 25, name: "Nitish Kumar Reddy", role: "All-Rounder", nationality: "India", rating: 84, price: 4.5 },
];

export default function AuctionResults() {
  const [team, setTeam] = useState(null);
  const [playingXI, setPlayingXI] = useState([]);
  const [captain, setCaptain] = useState(null);
  const [viceCaptain, setViceCaptain] = useState(null);
  const [impactPlayer, setImpactPlayer] = useState(null);

  useEffect(() => {
    const savedTeam = localStorage.getItem("selectedTeam");

    if (savedTeam) {
      setTeam(JSON.parse(savedTeam));
    }
  }, []);

  function togglePlayingXI(player) {
    setPlayingXI((current) => {
      const alreadySelected = current.includes(player.id);

      if (alreadySelected) {
        if (captain === player.id) {
          setCaptain(null);
        }

        if (viceCaptain === player.id) {
          setViceCaptain(null);
        }

        return current.filter((id) => id !== player.id);
      }

      if (current.length >= 11) {
        return current;
      }

      return [...current, player.id];
    });
  }

  function selectCaptain(player) {
    if (!playingXI.includes(player.id)) return;

    setCaptain(player.id);

    if (viceCaptain === player.id) {
      setViceCaptain(null);
    }
  }

  function selectViceCaptain(player) {
    if (!playingXI.includes(player.id)) return;
    if (captain === player.id) return;

    setViceCaptain(player.id);
  }

  function selectImpactPlayer(player) {
    if (playingXI.includes(player.id)) return;

    setImpactPlayer(player.id);
  }

  const selectedPlayingXI = useMemo(() => {
    return squadPlayers.filter((player) =>
      playingXI.includes(player.id)
    );
  }, [playingXI]);

  const totalSpent = squadPlayers.reduce(
    (sum, player) => sum + player.price,
    0
  );

  const remainingPurse = 150 - totalSpent;

  const squadRating = Math.round(
    squadPlayers.reduce(
      (sum, player) => sum + player.rating,
      0
    ) / squadPlayers.length
  );

  const playingXIRating =
    selectedPlayingXI.length > 0
      ? Math.round(
          selectedPlayingXI.reduce(
            (sum, player) => sum + player.rating,
            0
          ) / selectedPlayingXI.length
        )
      : 0;

  const isComplete =
    playingXI.length === 11 &&
    captain !== null &&
    viceCaptain !== null;

  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* HEADER */}

      <header className="border-b border-white/10 bg-[#0b0b0b]">

        <div className="max-w-[1500px] mx-auto px-5 md:px-8 py-5">

          <div className="flex items-center justify-between">

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

            <Link
              href="/auction/room"
              className="px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
            >
              ← Auction Room
            </Link>

          </div>

          {/* NAVIGATION */}

          <div className="flex items-center gap-2 mt-5 border-t border-white/5 pt-4">

            <Link
              href="/auction/room"
              className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-semibold text-sm transition"
            >
              🏏 Auction Room
            </Link>

            <Link
              href="/auction/squad"
              className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-semibold text-sm transition"
            >
              👥 My Squad
            </Link>

            <Link
              href="/auction/results"
              className="px-4 py-2 rounded-lg bg-orange-500 text-black font-bold text-sm"
            >
              📊 Results
            </Link>

            <Link
              href="/auction/playing-xi"
              className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-semibold text-sm transition"
            >
              🏏 Playing XI
            </Link>

          </div>

        </div>

      </header>

      {/* PAGE TITLE */}

      <section className="max-w-[1500px] mx-auto px-5 md:px-8 pt-8">

        <div>

          <p className="text-orange-500 text-xs font-bold tracking-widest">
            AUCTION RESULTS
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Build Your Final Squad
          </h2>

          <p className="text-gray-500 mt-3">
            Manage your 25-player squad and select your final Playing XI.
          </p>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-[1500px] mx-auto px-5 md:px-8 py-7">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-5">
            <p className="text-gray-500 text-xs">
              SQUAD SIZE
            </p>

            <p className="text-3xl font-black mt-2">
              {squadPlayers.length}
              <span className="text-gray-600 text-lg">
                {" "} / 25
              </span>
            </p>
          </div>

          <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-5">
            <p className="text-gray-500 text-xs">
              SQUAD RATING
            </p>

            <p className="text-3xl font-black text-orange-500 mt-2">
              {squadRating}
            </p>
          </div>

          <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-5">
            <p className="text-gray-500 text-xs">
              TOTAL SPENT
            </p>

            <p className="text-3xl font-black mt-2">
              ₹{totalSpent.toFixed(1)} Cr
            </p>
          </div>

          <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-5">
            <p className="text-gray-500 text-xs">
              REMAINING PURSE
            </p>

            <p className="text-3xl font-black text-green-400 mt-2">
              ₹{remainingPurse.toFixed(1)} Cr
            </p>
          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}

      <section className="max-w-[1500px] mx-auto px-5 md:px-8 pb-10">

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* FULL SQUAD */}

          <div className="xl:col-span-2">

            <div className="border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden">

              <div className="px-6 py-5 border-b border-white/10">

                <div className="flex items-center justify-between">

                  <div>
                    <h3 className="text-xl font-bold">
                      Full Squad
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      All 25 players in your squad
                    </p>
                  </div>

                  <Link
                    href="/auction/playing-xi"
                    className="px-4 py-2 rounded-lg bg-orange-500 text-black font-bold text-sm hover:bg-orange-600 transition"
                  >
                    Select Playing XI →
                  </Link>

                </div>

              </div>

              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-3">

                {squadPlayers.map((player) => {

                  const selected = playingXI.includes(player.id);
                  const isCaptain = captain === player.id;
                  const isViceCaptain = viceCaptain === player.id;
                  const isImpact = impactPlayer === player.id;

                  return (
                    <div
                      key={player.id}
                      className={`rounded-xl border p-4 transition ${
                        selected
                          ? "border-orange-500/50 bg-orange-500/[0.05]"
                          : "border-white/10 bg-[#111]"
                      }`}
                    >

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-3">

                          <div className="w-11 h-11 rounded-full bg-[#1b1b1b] border border-white/10 flex items-center justify-center text-lg">
                            🏏
                          </div>

                          <div>

                            <p className="font-bold">
                              {player.name}
                            </p>

                            <p className="text-gray-500 text-xs mt-1">
                              {player.role}
                            </p>

                          </div>

                        </div>

                        <div className="text-right">

                          <p className="text-orange-500 font-black">
                            {player.rating}
                          </p>

                          <p className="text-gray-600 text-[10px]">
                            RATING
                          </p>

                        </div>

                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">

                        <button
                          onClick={() => togglePlayingXI(player)}
                          className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                            selected
                              ? "bg-orange-500 text-black"
                              : "border border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {selected
                            ? "✓ In Playing XI"
                            : "+ Add to XI"}
                        </button>

                        {!selected && (
                          <button
                            onClick={() => selectImpactPlayer(player)}
                            className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                              isImpact
                                ? "bg-purple-500 text-white"
                                : "border border-purple-500/20 text-purple-400 hover:bg-purple-500/10"
                            }`}
                          >
                            {isImpact
                              ? "✓ Impact Player"
                              : "Impact Player"}
                          </button>
                        )}

                        {selected && (
                          <>
                            <button
                              onClick={() => selectCaptain(player)}
                              className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                                isCaptain
                                  ? "bg-yellow-500 text-black"
                                  : "border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/10"
                              }`}
                            >
                              {isCaptain
                                ? "★ Captain"
                                : "Captain"}
                            </button>

                            <button
                              onClick={() => selectViceCaptain(player)}
                              className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                                isViceCaptain
                                  ? "bg-blue-500 text-white"
                                  : "border border-blue-500/20 text-blue-400 hover:bg-blue-500/10"
                              }`}
                            >
                              {isViceCaptain
                                ? "★ Vice Captain"
                                : "Vice Captain"}
                            </button>
                          </>
                        )}

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

          {/* SIDEBAR */}

          <aside className="space-y-5">

            {/* TEAM */}

            <div className="border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden">

              <div className="p-6">

                <p className="text-gray-500 text-xs font-bold tracking-widest">
                  YOUR TEAM
                </p>

                <h3 className="text-2xl font-black mt-2">
                  {team ? team.name : "Loading..."}
                </h3>

                <p className="text-orange-500 font-bold mt-1">
                  {team ? team.shortName : ""}
                </p>

              </div>

            </div>

            {/* PLAYING XI */}

            <div className="border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden">

              <div className="p-6 border-b border-white/10">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="font-bold text-lg">
                      Playing XI
                    </h3>

                    <p className="text-gray-500 text-xs mt-1">
                      Selected players
                    </p>

                  </div>

                  <span className="text-orange-500 font-black">
                    {playingXI.length}/11
                  </span>

                </div>

              </div>

              <div className="p-5 space-y-2">

                {selectedPlayingXI.length === 0 && (
                  <p className="text-gray-600 text-sm text-center py-6">
                    No players selected yet.
                  </p>
                )}

                {selectedPlayingXI.map((player, index) => (

                  <div
                    key={player.id}
                    className="flex items-center justify-between bg-[#111] border border-white/5 rounded-lg px-4 py-3"
                  >

                    <div className="flex items-center gap-3">

                      <span className="text-gray-600 text-xs w-4">
                        {index + 1}
                      </span>

                      <div>

                        <p className="text-sm font-semibold">
                          {player.name}
                        </p>

                        <p className="text-gray-600 text-[10px]">
                          {player.role}
                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-1">

                      {captain === player.id && (
                        <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 text-[10px] font-bold">
                          C
                        </span>
                      )}

                      {viceCaptain === player.id && (
                        <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold">
                          VC
                        </span>
                      )}

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* IMPACT PLAYER */}

            <div className="border border-purple-500/20 bg-purple-500/[0.04] rounded-2xl p-6">

              <p className="text-purple-400 text-xs font-bold tracking-widest">
                IMPACT PLAYER
              </p>

              {impactPlayer ? (
                <div className="mt-3">

                  <p className="text-lg font-bold">
                    {
                      squadPlayers.find(
                        (player) => player.id === impactPlayer
                      )?.name
                    }
                  </p>

                  <p className="text-gray-500 text-sm">
                    Impact Player
                  </p>

                </div>
              ) : (
                <p className="text-gray-600 text-sm mt-3">
                  No impact player selected.
                </p>
              )}

            </div>

            {/* PLAYING XI BUTTON */}

            <Link
              href="/auction/playing-xi"
              className={`block text-center w-full py-4 rounded-xl font-black text-lg transition ${
                isComplete
                  ? "bg-green-500 hover:bg-green-600 text-black"
                  : "bg-orange-500 hover:bg-orange-600 text-black"
              }`}
            >
              {isComplete
                ? "✓ View Final Playing XI"
                : "Select Playing XI →"}
            </Link>

          </aside>

        </div>

      </section>

      <footer className="border-t border-white/10 py-6 text-center text-gray-600 text-sm">
        IPL Mock Auction • Build. Bid. Conquer.
      </footer>

    </main>
  );
}