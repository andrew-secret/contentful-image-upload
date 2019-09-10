import React, { useState, useContext, useEffect } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import netlifyIdentity from "netlify-identity-widget";
import { UserContext } from "../context/UserContext";
import { Button } from "../components/Button/Button";

export const Login: React.FC<RouteComponentProps> = () => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
    UserContext
  );

  const login = () => {
    netlifyIdentity.open();
    netlifyIdentity.on("login", user => {
      setRedirectToReferrer(true);
      setUser(user);
      setIsAuthenticated(true);
    });
  };

  const logout = () => {
    netlifyIdentity.logout();
    netlifyIdentity.on("logout", () => {
      setRedirectToReferrer(false);
      setIsAuthenticated(false);
    });
  };

  if (redirectToReferrer) {
    navigate("/upload");
  }

  return (
    <div>
      {isAuthenticated ? (
        <Button isInverted onClick={() => logout()}>
          Logout
        </Button>
      ) : (
        <Button isInverted onClick={() => login()}>
          Login
        </Button>
      )}
    </div>
  );
};
