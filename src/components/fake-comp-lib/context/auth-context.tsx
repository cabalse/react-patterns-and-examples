import React, { createContext, useContext } from "react";
import type { AuthPort } from "../ports/auth-port";

const guestAuth: AuthPort = { user: null, isAuthenticated: false };

const AuthContext = createContext<AuthPort>(guestAuth);

export function AuthProvider({
  adapter,
  children,
}: React.PropsWithChildren<{ adapter: AuthPort }>) {
  return (
    <AuthContext.Provider value={adapter}>{children}</AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthPort {
  return useContext(AuthContext);
}
