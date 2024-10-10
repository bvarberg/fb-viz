import { z } from "zod";
import { ZTeam } from "./team";

export const ZLeagueID = z.string();
export type LeagueID = z.infer<typeof ZLeagueID>;

export const ZLeague = z.object({
  id: ZLeagueID,
  type: z.literal("league"),
  name: z.string(),
  teams: z.array(ZTeam),
});
export type League = z.infer<typeof ZLeague>;
