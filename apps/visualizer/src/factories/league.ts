import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import type { League } from "../structures/league";
import { teamFactory } from "./team";

export const leagueFactory = Factory.define<League>(
  ({ sequence, params, associations }) => {
    const { id = `league-${sequence}` } = params;

    return {
      id,
      type: "league",
      name: faker.commerce.productName(),
      teams: associations.teams ?? teamFactory.buildList(20),
    };
  },
);
