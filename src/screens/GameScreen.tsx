import { Board, Header } from "../components";

export const GameScreen = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Header />
      <Board />
    </div>
  )
};
