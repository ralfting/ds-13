import cn from "classnames";
import React from "react";

import styles from "./Button.module.css"

type Props<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

type ButtonProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

export default function Button<C extends "button" | "a" = "button">({
  children,
  variant = "primary",
  as,
  ...props
}: ButtonProps<C>) {
  const buttonStyle = cn(styles.button, styles[variant]);
  const Component = as ?? 'button';

  // TODO: fix it later
  return (
    <Component className={buttonStyle} {...props}>
      {children}
    </Component>
  );
}
