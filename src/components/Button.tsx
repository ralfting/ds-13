import cn from "classnames";
import React from "react";

import styles from "./Button.module.css"

type Props<T extends React.ElementType = "button"> = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  as?: T;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  as: Component = "button",
  ...props
}: Props) {
  const buttonStyle = cn(styles.button, styles[variant]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.code === 'Enter' || event.code === "Space") {
      event.preventDefault();

      props.onClick?.(event as any);
    }

    props.onKeyDown?.(event);
  };

  return (
    <Component
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      className={buttonStyle}
      {...props}
    >
      {children}
    </Component>
  );
};
