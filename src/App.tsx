import React from "react";
import { Router, Link } from "@reach/router";
import { UploadForm } from "./views/uploadForm";
import { Public } from "./views/public";
import { UserProvider } from "./context/UserContextProvider";
import { Topbar } from "./container/Topbar/Topbar";
import { ContentWrapper } from "./components/ContentWrapper/ContentWrapper";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Topbar />
      <ContentWrapper>
        <Router>
          <Public path="/public" />
          <UploadForm path="/upload" />
        </Router>
      </ContentWrapper>
    </UserProvider>
  );
};

export default App;
