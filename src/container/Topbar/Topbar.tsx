import React, { useContext } from "react";
import { Topbar as TopbarUI } from "../../components/Topbar/Topbar";
import { UserContext } from "../../context/UserContext";
import { ProfileAvatar } from "../../components/ProfileAvatar/ProfileAvatar";
import { Login } from "../../views/login";

export const Topbar: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <TopbarUI
      leftArea={
        user && (
          <ProfileAvatar
            abbr={user.user_metadata.full_name.charAt(0)}
            userInformation={user.user_metadata.full_name}
          />
        )
      }
      rightArea={<Login />}
    ></TopbarUI>
  );
};
