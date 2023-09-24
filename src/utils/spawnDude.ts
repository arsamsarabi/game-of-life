import { Dude } from "../types";

export const spawnDude = (): Dude => {
  const isAlive = Math.random() > 0.5;

  return {
    age: isAlive ? 1 : 0,
    isAlive,
  };
};
