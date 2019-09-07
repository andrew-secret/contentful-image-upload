import React from "react";
import { FormRow } from "../FormRow/FormRow";
import styles from "./UploadInput.module.scss";

export const UploadInput: React.FC = ({ children }) => {
  return (
    <FormRow
      id="upload"
      label={
        <>
          <p className={styles.label}>Select image</p>
          <span className={styles.root} tabIndex={0}>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
            </svg>
          </span>
        </>
      }
    >
      {children}
    </FormRow>
  );
};
