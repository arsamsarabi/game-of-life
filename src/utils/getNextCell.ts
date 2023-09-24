import { Dude } from "../types";

type GetNextCell = (args: {
  cell: Dude;
  neighbourCount: number;
  killSideEffect: () => void;
  resurrectSideEffect: () => void;
}) => Dude;

export const getNextCell: GetNextCell = ({
  cell,
  neighbourCount,
  killSideEffect,
  resurrectSideEffect,
}) => {
  const _cell = { ...cell };

  const kill = () => {
    _cell.isAlive = false;
    _cell.age = 0;
    killSideEffect();
  };

  const resurrect = () => {
    _cell.isAlive = true;
    _cell.age = 1;
    resurrectSideEffect();
  };

  const age = () => {
    _cell.age += 1;

    if (_cell.age > 10) {
      kill();
    }
  };

  if (_cell.isAlive) {
    if (neighbourCount === 2 || neighbourCount === 3) {
      age();
    } else {
      kill();
    }
    return _cell;
  }

  if (neighbourCount === 3) {
    resurrect();
  }

  return _cell;
};
