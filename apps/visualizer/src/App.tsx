import { leagueFactory } from "./factories/league";
import { layout, makeHierarchy } from "./layout";

export default function App() {
  const data = leagueFactory.build();

  const width = 900;
  const height = 600;

  const hierarchyRoot = makeHierarchy(data);
  const root = layout(hierarchyRoot, { width, height });

  return (
    <>
      <h1>fb-viz</h1>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        {root.descendants().map((node) => {
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
