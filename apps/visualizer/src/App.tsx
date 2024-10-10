import { hierarchy, pack } from "d3-hierarchy";

import { leagueFactory } from "./factories/league";
import type { League } from "./structures/league";
import type { Team } from "./structures/team";
import type { Player } from "./structures/player";

type FBDatum = League | Team | Player;

export default function App() {
  const data = leagueFactory.build();

  const root = hierarchy<FBDatum>(data, function childrenAccessor(datum) {
    switch (datum.type) {
      case "league":
        return datum.teams;
      case "team":
        return datum.players;
      case "player":
      default:
        return undefined; // leaf node
    }
  });

  // Must be called to generate a `value` for each node.
  // The `value` affects the radius of the circle.
  // All nodes equal, for now
  root.sum((_datum) => 1);

  const width = 900;
  const height = 600;
  const layout = pack<FBDatum>()
    .size([width, height])
    .padding((node) => {
      switch (node.data.type) {
        case "league":
          return 10;
        case "team":
          return 5;
        case "player":
        default:
          return 0;
      }
    });

  const enhancedRoot = layout(root);

  return (
    <>
      <h1>fb-viz</h1>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        {enhancedRoot.descendants().map((node) => {
          switch (node.data.type) {
            case "league":
              return (
                <circle
                  key={`${node.data.type}-${node.data.id}`}
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  stroke="blue"
                  fill="none"
                />
              );
            case "team":
              return (
                <circle
                  key={`${node.data.type}-${node.data.id}`}
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  stroke="red"
                  fill="none"
                />
              );
            case "player":
              return (
                <circle
                  key={`${node.data.type}-${node.data.id}`}
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  stroke="green"
                  fill="none"
                />
              );
            default:
              return null;
          }
        })}
      </svg>
    </>
  );
}
