import React from "react";
import { RouteComponentProps } from "@reach/router";

export const UploadForm: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <form onSubmit={() => ""}>
        <button type="submit">Click me</button>
      </form>
      <div>hallo</div>
    </div>
  );
};
