import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isInverted?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  isInverted,
  ...buttonProps
}) => {
  return (
    <button
      className={classNames(styles.root, {
        [styles.inverted]: isInverted
      })}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
