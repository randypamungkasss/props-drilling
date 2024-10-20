"use client";

import { Header } from "@/components/header";
import { createContext } from "react";

export const UserContext = createContext();

export default function App() {
  const username = "Account";
  return (
    <UserContext.Provider value={{ username }}>
      <Header />
    </UserContext.Provider>
  );
}
