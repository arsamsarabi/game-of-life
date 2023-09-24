import { useContext } from "react";
import { type AppContextType, AppContext } from "../context";

export const useAppContext = (): AppContextType => useContext(AppContext);
