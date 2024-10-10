import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { type Team } from "../structures/team";
import { playerFactory } from "./player";

export const teamFactory = Factory.define<Team>(
  ({ sequence, params, associations }) => {
    const { id = `team-${sequence}` } = params;

    return {
      id,
      type: "team",
      name: faker.lorem.sentence({ min: 1, max: 2 }),
      players: associations.players ?? playerFactory.buildList(11),
    };
  },
);
