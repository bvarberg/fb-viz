import { z } from "zod";
import { Player } from "./player";

export const TeamID = z.string();
export type TeamID = z.infer<typeof TeamID>;

export const Team = z.object({
  id: TeamID,
  type: z.literal("team"),
  name: z.string(),
  players: z.array(Player),
});
export type Team = z.infer<typeof Team>;
