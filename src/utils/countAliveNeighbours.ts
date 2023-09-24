import { CONFIG } from "../constants/config";
import { World } from "../types";

type CountAliveNeighbours = (args: {
  board: World;
  row: number;
  cell: number;
}) => number;

export const countAliveNeighbours: CountAliveNeighbours = ({
  board,
  row,
  cell,
}) => {
  const neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    /* current cell */ [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let count = 0;
  neighbors.forEach(([dx, dy]) => {
    const newX = row + dx;
    const newY = cell + dy;

    if (
      newX >= 0 &&
      newX < CONFIG.dimension &&
      newY >= 0 &&
      newY < CONFIG.dimension
    ) {
      if (board[newX][newY].isAlive) {
        count++;
      }
    }
  });

  return count;
};
