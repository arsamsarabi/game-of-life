import { CONFIG } from "../constants/config";
import { World } from "../types";
import { spawnDude } from "./spawnDude";

type GetInitialWorld = () => World;

export const getInitialWorld: GetInitialWorld = () => {
  return Array.from({ length: CONFIG.dimension }, () =>
    Array.from({ length: CONFIG.dimension }, () => spawnDude())
  );
};
