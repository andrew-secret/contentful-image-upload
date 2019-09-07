import React, { useContext } from "react";
import { RouteComponentProps } from "@reach/router";
import { UserContext } from "../context/UserContext";
import { UploadForm as UploadFormContainer } from "../container/UploadForm/UploadForm";
import { Headline } from "../components/Headline/Headline";
import { Preview } from "../components/Preview/Preview";

export const UploadForm: React.FC<RouteComponentProps> = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <>
      {isAuthenticated ? (
        <UploadFormContainer />
      ) : (
        <>
          <Headline>No permission, please login first...</Headline>
          <Preview src={""} altAttr={""} />
        </>
      )}
    </>
  );
};
