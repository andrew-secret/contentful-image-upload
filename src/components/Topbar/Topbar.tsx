import React from "react";
import styles from "./Topbar.module.scss";

interface Props {
  leftArea: React.ReactNode;
  rightArea: React.ReactNode;
}

export const Topbar: React.FC<Props> = ({ leftArea, rightArea }) => {
  return (
    <header className={styles.root}>
      <div className={styles.leftArea}>{leftArea}</div>
      <div className={styles.rightArea}>{rightArea}</div>
    </header>
  );
};
