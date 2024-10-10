import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { type Player } from "../structures/player";

export const playerFactory = Factory.define<Player>(({ sequence, params }) => {
  const { id = `player-${sequence}` } = params;

  return {
    id,
    type: "player",
    name: faker.person.fullName(),
  };
});
