'use client'

import { useContext } from "react";
import { userContext } from "../contexts/user";

export function useUser() {
  const context = useContext(userContext);

  if (!context)
    throw new Error('useUser must be used inside a UserProvider');

  return context;
}