import { hierarchy, pack } from "d3-hierarchy";

interface Player {
  id: string;
  type: "player";
  name: string;
}

interface Team {
  id: string;
  type: "team";
  name: string;
  players: Array<Player>;
}

interface League {
  id: string;
  type: "league";
  name: string;
  teams: Array<Team>;
}

type FBDatum = League | Team | Player;

export default function App() {
  const data: League = {
    id: "epl",
    type: "league",
    name: "English Premier League",
    teams: [
      {
        id: "TOT",
        type: "team",
        name: "Tottenham Hotspur",
        players: [
          {
            id: "37",
            type: "player",
            name: "Micky van de Ven",
          },
          {
            id: "7",
            type: "player",
            name: "Son Heung-Min",
          },
        ],
      },
      {
        id: "CHE",
        type: "team",
        name: "Chelsea",
        players: [
          {
            id: "11",
            type: "player",
            name: "Noni Madueke",
          },
        ],
      },
    ],
  };

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
