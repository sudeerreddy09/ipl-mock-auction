"use client";

import { useState } from "react";

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

export default function TeamSelection() {
  const [selectedTeams, setSelectedTeams] = useState([]);

  const toggleTeam = (id) => {
    if (selectedTeams.includes(id)) {
      setSelectedTeams(selectedTeams.filter((teamId) => teamId !== id));
    } else {
      setSelectedTeams([...selectedTeams, id]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">

      <div className="max-w-6xl mx-auto">

        <p className="text-orange-500 font-semibold mb-2">
          IPL 2026
        </p>

        <h1 className="text-4xl font-bold mb-2">
          Select Teams
        </h1>

        <p className="text-gray-400 mb-8">
          Select the teams that will participate in your auction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {teams.map((team) => (
            <button
              key={team.id}
              onClick={() => toggleTeam(team.id)}
              className={`p-6 rounded-xl border text-left transition ${
                selectedTeams.includes(team.id)
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

                {selectedTeams.includes(team.id) && (
                  <div className="text-orange-500 text-2xl">
                    ✓
                  </div>
                )}

              </div>

            </button>
          ))}

        </div>

        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-xl p-5 flex justify-between items-center">

          <div>
            <p className="font-semibold">
              Selected Teams
            </p>

            <p className="text-gray-400">
              {selectedTeams.length} teams selected
            </p>
          </div>

          <button
            disabled={selectedTeams.length < 2}
            className="px-6 py-3 rounded-lg font-semibold bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:text-gray-500"
          >
            Continue
          </button>

        </div>

      </div>

    </main>
  );
}