import React, { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { User } from "netlify-identity-widget";
import netlifyIdentity from "netlify-identity-widget";

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getUser = async () => {
    const user = await netlifyIdentity.currentUser();
    return user;
  };

  useEffect(() => {
    setUser(netlifyIdentity.currentUser());
  }, [user]);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        setUser,
        setIsAuthenticated
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
