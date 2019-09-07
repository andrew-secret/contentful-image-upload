import React from "react";
import netlifyIdentity, { User } from "netlify-identity-widget";

export interface UserContextValue {
  user: User | null;
  isAuthenticated: boolean;
}

export interface UserContextActions {
  setUser: (user: User) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const UserContext = React.createContext<
  UserContextValue & UserContextActions
>({
  user: null,
  isAuthenticated: false,
  setUser: () => null,
  setIsAuthenticated: () => null
});
