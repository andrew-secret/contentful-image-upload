import React from "react";
import styles from "./ProfileAvatar.module.scss";

interface Props {
  abbr: string;
  userInformation: string;
}

export const ProfileAvatar: React.FC<Props> = ({ abbr, userInformation }) => {
  return (
    <div className={styles.root}>
      <abbr className={styles.avatar}>{abbr}</abbr>
      <p className={styles.user}>{userInformation}</p>
    </div>
  );
};
