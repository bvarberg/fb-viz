import { z } from "zod";
import { Team } from "./team";

export const LeagueID = z.string();
export type LeagueID = z.infer<typeof LeagueID>;

export const League = z.object({
  id: LeagueID,
  type: z.literal("league"),
  name: z.string(),
  teams: z.array(Team),
});
export type League = z.infer<typeof League>;
