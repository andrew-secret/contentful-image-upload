import React from "react";
import styles from "./Headline.module.scss";

export const Headline: React.FC = ({ children }) => {
  return <h1 className={styles.root}>{children}</h1>;
};
