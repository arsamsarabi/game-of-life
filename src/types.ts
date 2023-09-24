export type Dude = {
  age: number;
  isAlive: boolean;
};

export type World = Dude[][];

export type SideEffects = {
  killSideEffect: () => void;
  resurrectSideEffect: () => void;
};
