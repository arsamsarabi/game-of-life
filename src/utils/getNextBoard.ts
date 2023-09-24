import { SideEffects, World } from "../types";
import { countAliveNeighbours } from "./countAliveNeighbours";
import { getNextCell } from "./getNextCell";

type GetNextBoardArgs = SideEffects & {
  board: World;
};

type GetNextBoard = (args: GetNextBoardArgs) => World;

export const getNextBoard: GetNextBoard = ({
  board,
  killSideEffect,
  resurrectSideEffect,
}) => {
  const _board = board.map((row, rowIndex) => {
    return row.map((dude, cellIndex) => {
      const neighbourCount = countAliveNeighbours({
        board,
        row: rowIndex,
        cell: cellIndex,
      });

      const _cell = getNextCell({
        cell: dude,
        neighbourCount,
        killSideEffect,
        resurrectSideEffect,
      });

      return _cell;
    });
  });

  return _board;
};
