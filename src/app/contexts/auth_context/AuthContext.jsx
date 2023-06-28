'use client';
import { createContext, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const providerData = {
    email,
    setEmail,
    password,
    setPassword,
  }

  return (
    <AuthContext.Provider value={providerData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;