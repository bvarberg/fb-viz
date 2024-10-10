import { expect, test } from "vitest";

import { epl } from "./fixture";

import { layout, makeHierarchy } from "./layout";

test("layout is deterministic", () => {
  const league = epl; // it's important that this data is consistent, which is why we're not using the randomized factory here

  const tree = makeHierarchy(league);
  const root = layout(tree, {
    width: 500,
    height: 500,
  });

  expect(root).toMatchInlineSnapshot(`
    Node {
      "children": [
        Node {
          "children": [
            Node {
              "data": {
                "id": "37",
                "name": "Micky van de Ven",
                "type": "player",
              },
              "depth": 2,
              "height": 0,
              "parent": [Circular],
              "r": 75.07507507507508,
              "value": 1,
              "x": 88.58858858858856,
              "y": 250,
            },
            Node {
              "data": {
                "id": "7",
                "name": "Son Heung-Min",
                "type": "player",
              },
              "depth": 2,
              "height": 0,
              "parent": [Circular],
              "r": 75.07507507507508,
              "value": 1,
              "x": 243.24324324324323,
              "y": 250,
            },
          ],
          "data": {
            "id": "TOT",
            "name": "Tottenham Hotspur",
            "players": [
              {
                "id": "37",
                "name": "Micky van de Ven",
                "type": "player",
              },
              {
                "id": "7",
                "name": "Son Heung-Min",
                "type": "player",
              },
            ],
            "type": "team",
          },
          "depth": 1,
          "height": 1,
          "parent": [Circular],
          "r": 156.9069069069069,
          "value": 3,
          "x": 165.9159159159159,
          "y": 250,
        },
        Node {
          "children": [
            Node {
              "data": {
                "id": "11",
                "name": "Noni Madueke",
                "type": "player",
              },
              "depth": 2,
              "height": 0,
              "parent": [Circular],
              "r": 75.07507507507508,
              "value": 1,
              "x": 411.41141141141145,
              "y": 250,
            },
          ],
          "data": {
            "id": "CHE",
            "name": "Chelsea",
            "players": [
              {
                "id": "11",
                "name": "Noni Madueke",
                "type": "player",
              },
            ],
            "type": "team",
          },
          "depth": 1,
          "height": 1,
          "parent": [Circular],
          "r": 79.57957957957959,
          "value": 2,
          "x": 411.41141141141145,
          "y": 250,
        },
      ],
      "data": {
        "id": "epl",
        "name": "English Premier League",
        "teams": [
          {
            "id": "TOT",
            "name": "Tottenham Hotspur",
            "players": [
              {
                "id": "37",
                "name": "Micky van de Ven",
                "type": "player",
              },
              {
                "id": "7",
                "name": "Son Heung-Min",
                "type": "player",
              },
            ],
            "type": "team",
          },
          {
            "id": "CHE",
            "name": "Chelsea",
            "players": [
              {
                "id": "11",
                "name": "Noni Madueke",
                "type": "player",
              },
            ],
            "type": "team",
          },
        ],
        "type": "league",
      },
      "depth": 0,
      "height": 2,
      "parent": null,
      "r": 250,
      "value": 6,
      "x": 250,
      "y": 250,
    }
  `);
});
