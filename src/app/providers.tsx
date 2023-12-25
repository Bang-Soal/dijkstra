"use client";

// libs
import { Provider } from "jotai";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <Provider>{children}</Provider>;
      </PersistGate>
    </ReduxProvider>
  );
}
