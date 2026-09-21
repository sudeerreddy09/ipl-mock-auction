"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const squadPlayers = [
  { id: 1, name: "KL Rahul", role: "Wicketkeeper Batter", rating: 95 },
  { id: 2, name: "Virat Kohli", role: "Batter", rating: 96 },
  { id: 3, name: "Jasprit Bumrah", role: "Bowler", rating: 98 },
  { id: 4, name: "Rohit Sharma", role: "Batter", rating: 94 },
  { id: 5, name: "Rishabh Pant", role: "Wicketkeeper Batter", rating: 94 },
  { id: 6, name: "Hardik Pandya", role: "All-Rounder", rating: 93 },
  { id: 7, name: "Ravindra Jadeja", role: "All-Rounder", rating: 92 },
  { id: 8, name: "Suryakumar Yadav", role: "Batter", rating: 93 },
  { id: 9, name: "Shubman Gill", role: "Batter", rating: 92 },
  { id: 10, name: "Yashasvi Jaiswal", role: "Batter", rating: 91 },
  { id: 11, name: "Kuldeep Yadav", role: "Bowler", rating: 90 },
  { id: 12, name: "Mohammed Siraj", role: "Bowler", rating: 89 },
  { id: 13, name: "Arshdeep Singh", role: "Bowler", rating: 88 },
  { id: 14, name: "Axar Patel", role: "All-Rounder", rating: 89 },
  { id: 15, name: "Rinku Singh", role: "Batter", rating: 87 },
  { id: 16, name: "Sanju Samson", role: "Wicketkeeper Batter", rating: 88 },
  { id: 17, name: "Ishan Kishan", role: "Wicketkeeper Batter", rating: 85 },
  { id: 18, name: "Shreyas Iyer", role: "Batter", rating: 89 },
  { id: 19, name: "Varun Chakravarthy", role: "Bowler", rating: 88 },
  { id: 20, name: "Yuzvendra Chahal", role: "Bowler", rating: 86 },
  { id: 21, name: "Washington Sundar", role: "All-Rounder", rating: 84 },
  { id: 22, name: "Shivam Dube", role: "All-Rounder", rating: 85 },
  { id: 23, name: "Prasidh Krishna", role: "Bowler", rating: 83 },
  { id: 24, name: "Mukesh Kumar", role: "Bowler", rating: 80 },
  { id: 25, name: "Nitish Kumar Reddy", role: "All-Rounder", rating: 84 },
];

export default function PlayingXI() {
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

  function togglePlayer(player) {
    setPlayingXI((current) => {
      if (current.includes(player.id)) {
        if (captain === player.id) setCaptain(null);
        if (viceCaptain === player.id) setViceCaptain(null);

        return current.filter((id) => id !== player.id);
      }

      if (current.length >= 11) return current;

      return [...current, player.id];
    });
  }

  function chooseCaptain(player) {
    if (!playingXI.includes(player.id)) return;

    setCaptain(player.id);

    if (viceCaptain === player.id) {
      setViceCaptain(null);
    }
  }

  function chooseViceCaptain(player) {
    if (!playingXI.includes(player.id)) return;
    if (captain === player.id) return;

    setViceCaptain(player.id);
  }

  function chooseImpact(player) {
    if (playingXI.includes(player.id)) return;

    setImpactPlayer(player.id);
  }

  const selectedPlayers = useMemo(() => {
    return squadPlayers.filter((player) =>
      playingXI.includes(player.id)
    );
  }, [playingXI]);

  const selectedImpact = squadPlayers.find(
    (player) => player.id === impactPlayer
  );

  const xiRating =
    selectedPlayers.length > 0
      ? Math.round(
          selectedPlayers.reduce(
            (total, player) => total + player.rating,
            0
          ) / selectedPlayers.length
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
              href="/auction/results"
              className="px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
            >
              ← Back
            </Link>

          </div>

          <div className="flex items-center gap-2 mt-5 border-t border-white/5 pt-4">

            <Link
              href="/auction/results"
              className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-semibold"
            >
              👥 Squad
            </Link>

            <Link
              href="/auction/playing-xi"
              className="px-4 py-2 rounded-lg bg-orange-500 text-black text-sm font-bold"
            >
              🏏 Playing XI
            </Link>

          </div>

        </div>

      </header>

      {/* CONTENT */}

      <section className="max-w-[1500px] mx-auto px-5 md:px-8 py-8">

        <div className="mb-8">

          <p className="text-orange-500 text-xs font-bold tracking-widest">
            TEAM SELECTION
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Select Your Playing XI
          </h2>

          <p className="text-gray-500 mt-3">
            Choose 11 players, then assign your Captain and Vice-Captain.
          </p>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* PLAYER LIST */}

          <div className="xl:col-span-2">

            <div className="border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden">

              <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">

                <div>
                  <h3 className="font-bold text-lg">
                    Squad Players
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    Select up to 11 players
                  </p>
                </div>

                <div className="px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <span className="text-orange-500 font-black">
                    {playingXI.length}
                  </span>
                  <span className="text-gray-500">
                    {" "} / 11
                  </span>
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
                          ? "border-orange-500/50 bg-orange-500/[0.06]"
                          : "border-white/10 bg-[#111]"
                      }`}
                    >

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-3">

                          <div className="w-11 h-11 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-lg">
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
                          onClick={() => togglePlayer(player)}
                          className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                            selected
                              ? "bg-orange-500 text-black"
                              : "border border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {selected ? "✓ In Playing XI" : "+ Add to XI"}
                        </button>

                        {!selected && (
                          <button
                            onClick={() => chooseImpact(player)}
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
                              onClick={() => chooseCaptain(player)}
                              className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                                isCaptain
                                  ? "bg-yellow-500 text-black"
                                  : "border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/10"
                              }`}
                            >
                              {isCaptain ? "★ Captain" : "Captain"}
                            </button>

                            <button
                              onClick={() => chooseViceCaptain(player)}
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

          {/* PREVIEW */}

          <aside className="space-y-5">

            <div className="border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden">

              <div className="p-6 border-b border-white/10">

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

              <div className="p-6">

                <div className="grid grid-cols-2 gap-3">

                  <div className="bg-[#151515] border border-white/10 rounded-xl p-4">
                    <p className="text-gray-500 text-xs">
                      PLAYERS
                    </p>

                    <p className="text-2xl font-black mt-1">
                      {playingXI.length}/11
                    </p>
                  </div>

                  <div className="bg-[#151515] border border-white/10 rounded-xl p-4">
                    <p className="text-gray-500 text-xs">
                      XI RATING
                    </p>

                    <p className="text-2xl font-black text-orange-500 mt-1">
                      {xiRating}
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* XI PREVIEW */}

            <div className="border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden">

              <div className="p-6 border-b border-white/10">

                <div className="flex items-center justify-between">

                  <div>
                    <h3 className="font-bold text-lg">
                      Playing XI
                    </h3>

                    <p className="text-gray-500 text-xs mt-1">
                      Your selected lineup
                    </p>
                  </div>

                  <span className="text-orange-500 font-black">
                    {playingXI.length}/11
                  </span>

                </div>

              </div>

              <div className="p-5 space-y-2">

                {selectedPlayers.length === 0 && (
                  <p className="text-gray-600 text-sm text-center py-6">
                    No players selected yet.
                  </p>
                )}

                {selectedPlayers.map((player, index) => (

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

              {selectedImpact ? (
                <div className="mt-3">

                  <p className="text-lg font-bold">
                    {selectedImpact.name}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {selectedImpact.role}
                  </p>

                </div>
              ) : (
                <p className="text-gray-600 text-sm mt-3">
                  No impact player selected.
                </p>
              )}

            </div>

            {/* CONFIRM */}

            <button
              disabled={!isComplete}
              className={`w-full py-4 rounded-xl font-black text-lg transition ${
                isComplete
                  ? "bg-orange-500 hover:bg-orange-600 text-black"
                  : "bg-white/5 text-gray-600 cursor-not-allowed"
              }`}
            >
              {isComplete
                ? "✓ Confirm Playing XI"
                : "Complete Playing XI"}
            </button>

          </aside>

        </div>

      </section>

    </main>
  );
}