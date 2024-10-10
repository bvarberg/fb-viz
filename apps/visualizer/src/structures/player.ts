import { z } from "zod";

export const ZPlayerID = z.string();
export type PlayerID = z.infer<typeof ZPlayerID>;

export const ZPlayer = z.object({
  id: ZPlayerID,
  type: z.literal("player"),
  name: z.string(),
});
export type Player = z.infer<typeof ZPlayer>;
