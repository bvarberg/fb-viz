import type { League } from "./structures/league";

export const epl: League = {
  id: "epl",
  type: "league",
  name: "English Premier League",
  teams: [
    {
      id: "TOT",
      type: "team",
      name: "Tottenham Hotspur",
      players: [
        {
          id: "37",
          type: "player",
          name: "Micky van de Ven",
        },
        {
          id: "7",
          type: "player",
          name: "Son Heung-Min",
        },
      ],
    },
    {
      id: "CHE",
      type: "team",
      name: "Chelsea",
      players: [
        {
          id: "11",
          type: "player",
          name: "Noni Madueke",
        },
      ],
    },
  ],
};
