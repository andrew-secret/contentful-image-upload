import React from "react";
import styles from "./FormRow.module.scss";

interface Props {
  id: string;
  label: React.ReactNode;
}

export const FormRow: React.FC<Props> = ({ id, label, children }) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
};
