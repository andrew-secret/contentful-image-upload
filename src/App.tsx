import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Login } from "./views/login";
import { UploadForm } from "./views/uploadForm";

const App: React.FC = () => {
  return (
    <Router>
      <Login path="/" />
      <UploadForm path="/upload" />
    </Router>
  );
};

export default App;
