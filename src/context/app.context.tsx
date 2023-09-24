import { createContext, type PropsWithChildren, useState, useEffect } from 'react';
import { useInterval } from 'react-use';
import { CONFIG } from '../constants';
import { World } from '../types';
import { getInitialWorld, getNextBoard } from '../utils';

type AppContextStateType = {
  alive: number;
  deaths: number;
  births: number;
  generation: number;
  stop: boolean;
  board: World;
}

const initialState: AppContextStateType = {
  alive: 0,
  deaths: 0,
  births: 0,
  generation: 0,
  stop: true,
  board: getInitialWorld(),
}

export type AppContextType = AppContextStateType & {
  toggleStop: () => void;
  killSideEffect: () => void;
  resurrectSideEffect: () => void;
};

export const AppContext = createContext<AppContextType>({
  ...initialState,
  toggleStop: () => { },
  killSideEffect: () => { },
  resurrectSideEffect: () => { },
});

type AppProviderProps = PropsWithChildren<unknown>;

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, setState] = useState<AppContextStateType>(initialState);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      births: prevState.board.reduce((acc, row) => acc + row.filter(cell => cell.isAlive).length, 0),
    }))
  }, [])

  const toggleStop = () => {
    setState((prevState) => ({
      ...prevState,
      stop: !prevState.stop,
    }))
  }

  const killSideEffect = () => {
    setState((prevState) => ({
      ...prevState,
      deaths: prevState.deaths + 1,
    }))
  }

  const resurrectSideEffect = () => {
    setState((prevState) => ({
      ...prevState,
      births: prevState.births + 1,
    }))
  }

  const prepareNextBoard = () => {
    setState((prevState) => {
      const nextBoard = getNextBoard({ board: prevState.board, killSideEffect, resurrectSideEffect });
      const alive = nextBoard.reduce((acc, row) => acc + row.filter(cell => cell.isAlive).length, 0);
      return {
        ...prevState,
        board: nextBoard,
        generation: prevState.generation + 1,
        alive,
      }
    });
  }

  const animate = () => {
    const ragnarok = state.board.every(row => row.every(cell => !cell.isAlive));

    if (ragnarok) {
      toggleStop();
      return;
    }

    prepareNextBoard();
  }

  useInterval(
    animate,
    state.stop ? null : CONFIG.delayMs
  );

  return (
    <AppContext.Provider value={{
      ...state,
      toggleStop,
      killSideEffect,
      resurrectSideEffect,
    }}>{children}</AppContext.Provider>
  );
}

export { AppProvider };
