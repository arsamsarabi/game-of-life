import { type PropsWithChildren } from "react";
import { AppProvider } from "./app.context";

export const ContextProvider = ({ children }: PropsWithChildren<unknown>) => (
  <AppProvider>
    {children}
  </AppProvider>
);
