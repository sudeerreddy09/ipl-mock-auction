"use client";

import { useState } from "react";

const teams = [
  { id: "csk", name: "Chennai Super Kings", shortName: "CSK" },
  { id: "dc", name: "Delhi Capitals", shortName: "DC" },
  { id: "gt", name: "Gujarat Titans", shortName: "GT" },
  { id: "kkr", name: "Kolkata Knight Riders", shortName: "KKR" },
  { id: "lsg", name: "Lucknow Super Giants", shortName: "LSG" },
  { id: "mi", name: "Mumbai Indians", shortName: "MI" },
  { id: "pk", name: "Punjab Kings", shortName: "PBKS" },
  { id: "rr", name: "Rajasthan Royals", shortName: "RR" },
  { id: "rcb", name: "Royal Challengers Bengaluru", shortName: "RCB" },
  { id: "srh", name: "Sunrisers Hyderabad", shortName: "SRH" },
];

export default function TeamSelection() {
  const [selectedTeams, setSelectedTeams] = useState([]);

  function toggleTeam(teamId) {
    if (selectedTeams.includes(teamId)) {
      setSelectedTeams(selectedTeams.filter((id) => id !== teamId));
    } else {
      setSelectedTeams([...selectedTeams, teamId]);
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">

        <p className="text-orange-400 font-semibold tracking-widest uppercase mb-3">
          IPL 2026
        </p>

        <h1 className="text-4xl font-bold mb-3">
          Select Teams
        </h1>

        <p className="text-gray-400 mb-8">
          Choose the teams that will participate in your mock auction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teams.map((team) => {
            const isSelected = selectedTeams.includes(team.id);

            return (
              <button
                key={team.id}
                onClick={() => toggleTeam(team.id)}
                className={`text-left p-5 rounded-xl border transition ${
                  isSelected
                    ? "border-orange-500 bg-orange-500/10"
                    : "border-gray-800 bg-gray-900 hover:border-gray-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold">
                      {team.shortName}
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      {team.name}
                    </p>
                  </div>

                  {isSelected && (
                    <span className="text-orange-400 text-xl">
                      ✓
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div>
            <p className="font-semibold">
              Teams Selected
            </p>

            <p className="text-gray-400 text-sm">
              {selectedTeams.length} teams
            </p>
          </div>

          <button
            disabled={selectedTeams.length < 2}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:text-gray-500 px-6 py-3 rounded-lg font-semibold transition"
          >
            Continue
          </button>
        </div>

      </div>
    </main>
  );
}