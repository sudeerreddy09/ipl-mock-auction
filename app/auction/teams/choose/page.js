"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const teams = [
  { id: 1, name: "Chennai Super Kings", shortName: "CSK" },
  { id: 2, name: "Delhi Capitals", shortName: "DC" },
  { id: 3, name: "Gujarat Titans", shortName: "GT" },
  { id: 4, name: "Kolkata Knight Riders", shortName: "KKR" },
  { id: 5, name: "Lucknow Super Giants", shortName: "LSG" },
  { id: 6, name: "Mumbai Indians", shortName: "MI" },
  { id: 7, name: "Punjab Kings", shortName: "PBKS" },
  { id: 8, name: "Rajasthan Royals", shortName: "RR" },
  { id: 9, name: "Royal Challengers Bengaluru", shortName: "RCB" },
  { id: 10, name: "Sunrisers Hyderabad", shortName: "SRH" },
];

export default function ChooseTeam() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const router = useRouter();

  function startAuction() {
    if (!selectedTeam) return;

    const team = teams.find((team) => team.id === selectedTeam);

    localStorage.setItem("selectedTeam", JSON.stringify(team));

    router.push("/auction/room");
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">

        <p className="text-orange-500 font-semibold tracking-widest uppercase mb-3">
          IPL 2026
        </p>

        <h1 className="text-4xl font-bold mb-3">
          Choose Your Team
        </h1>

        <p className="text-gray-400 mb-8">
          Select the team you want to control during the auction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {teams.map((team) => {
            const selected = selectedTeam === team.id;

            return (
              <button
                key={team.id}
                onClick={() => setSelectedTeam(team.id)}
                className={`p-6 rounded-xl border text-left transition ${
                  selected
                    ? "border-orange-500 bg-orange-500/10"
                    : "border-gray-800 bg-gray-900 hover:border-gray-600"
                }`}
              >
                <div className="flex justify-between items-center">

                  <div>
                    <div className="text-2xl font-bold">
                      {team.shortName}
                    </div>

                    <div className="text-gray-400 mt-1">
                      {team.name}
                    </div>
                  </div>

                  {selected && (
                    <span className="text-orange-500 text-2xl">
                      ✓
                    </span>
                  )}

                </div>
              </button>
            );
          })}

        </div>

        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-xl p-5 flex justify-between items-center">

          <div>
            <p className="font-semibold">
              Your Team
            </p>

            <p className="text-gray-400">
              {selectedTeam
                ? teams.find((team) => team.id === selectedTeam)?.name
                : "No team selected"}
            </p>
          </div>

          <button
            onClick={startAuction}
            disabled={!selectedTeam}
            className="px-6 py-3 rounded-lg font-semibold bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:text-gray-500"
          >
            Start Auction
          </button>

        </div>

      </div>
    </main>
  );
}