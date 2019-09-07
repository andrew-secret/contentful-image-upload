import React from "react";
import styles from "./Input.module.scss";

interface Props extends React.HTMLProps<HTMLInputElement> {}

export const Input: React.FC<Props> = ({ ...inputProps }) => {
  return <input className={styles.root} {...inputProps} />;
};
