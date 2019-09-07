import React, { useState } from "react";
import { RouteComponentProps, Redirect } from "@reach/router";
import netlifyIdentity from "netlify-identity-widget";

export const Login: React.FC<RouteComponentProps> = props => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let { from } = (props.location && props.location.state) || {
    from: { pathname: "/" }
  };

  const login = () => {
    setIsAuthenticated(true);
    netlifyIdentity.open();
    netlifyIdentity.on("login", user => {
      console.log("user>>>>", user);
      setRedirectToReferrer(true);
    });
  };

  // Get the current user:
  const user = netlifyIdentity.currentUser();
  if (redirectToReferrer) return <Redirect to={from} />;

  return (
    <div>
      <button onClick={() => login()}>Login</button>
      {user && <button onClick={() => netlifyIdentity.logout()}>Logout</button>}
    </div>
  );
};
