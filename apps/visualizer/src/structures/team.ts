import { z } from "zod";
import { ZPlayer } from "./player";

export const ZTeamID = z.string();
export type TeamID = z.infer<typeof ZTeamID>;

export const ZTeam = z.object({
  id: ZTeamID,
  type: z.literal("team"),
  name: z.string(),
  players: z.array(ZPlayer),
});
export type Team = z.infer<typeof ZTeam>;
