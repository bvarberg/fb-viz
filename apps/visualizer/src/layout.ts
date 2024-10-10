import { hierarchy, type HierarchyNode, pack } from "d3-hierarchy";

import { type League } from "./structures/league";
import { type Team } from "./structures/team";
import { type Player } from "./structures/player";

export type FBDatum = League | Team | Player;

/**
 * Transforms hierarchical domain data into a tree structure.
 */
export function makeHierarchy(data: FBDatum) {
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

  return root;
}

/**
 * Enhances a tree structure with positional information for rendering as a
 * circle-packed enclosure diagram.
 */
export function layout(
  tree: HierarchyNode<FBDatum>,
  options: { width: number; height: number },
) {
  // Must be called to generate a `value` for each node.
  // The `value` affects the radius of the circle.
  // All nodes equal, for now
  tree.sum((_datum) => 1);

  const layout = pack<FBDatum>()
    .size([options.width, options.height])
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

  return layout(tree);
}
