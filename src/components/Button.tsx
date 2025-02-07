import cn from "classnames";
import React from "react";

import styles from "./Button.module.css"

type ButtonBase = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

type Button = {
  as: 'button';
} & ButtonBase & React.ButtonHTMLAttributes<HTMLButtonElement>;

type Link = {
  as: 'a';
  href: string;
} & ButtonBase;

type ButtonProps = Button | Link;

export function Button({
  children,
  variant = "primary",
  as: Component = "button",
  ...props
}: ButtonProps) {
  const buttonStyle = cn(styles.button, styles[variant]);

  return (
    <Component className={buttonStyle} {...props}>
      {children}
    </Component>
  );
}
