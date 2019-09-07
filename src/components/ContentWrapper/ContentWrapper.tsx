import React from "react";
import styles from "./ContentWrapper.module.scss";

export const ContentWrapper: React.FC = ({ children }) => {
  return <main className={styles.root}>{children}</main>;
};
