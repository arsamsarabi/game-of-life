import { ContextProvider } from "./context";
import { GameScreen } from "./screens";

export const App = () => {
  return (
    <ContextProvider>
      <GameScreen />
    </ContextProvider>
  )
};
