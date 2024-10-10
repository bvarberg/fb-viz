import { z } from "zod";

export const PlayerID = z.string();
export type PlayerID = z.infer<typeof PlayerID>;

export const Player = z.object({
  id: PlayerID,
  type: z.literal("player"),
  name: z.string(),
});
export type Player = z.infer<typeof Player>;
