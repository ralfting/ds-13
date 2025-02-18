import cn from "classnames";
import React from "react";

import styles from "./Button.module.css"

type Props<C extends React.ElementType> = {
  /**
   * Specifies the HTML element to render for the button.
   * It can be either `button` or `a`. When set to `a`, the button will be rendered as a link.
   * 
   * @param {C} [as] - The element to render as. Can be either `button` or `a`.
   * @example
   *   <Button as="a" href="www.example.com">Button</Button>
   */
  as?: C;
  /**
   * The color variant of the button.
   * @default "primary"
   * @example
   *  <Button variant="secondary">Button</Button>
  */
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

type ButtonProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

/**
 * Component to render a button possibility to change tag between button and a
 * @param {as} - Tag to choose which tag to render button or a
 * @example 
 *  <Button as="a" href="example.com" variant='secondary'>Button</Button>
 */
export default function Button<B extends "button" | "a" = "button">({
  children,
  variant = "primary",
  as,
  className,
  size = 'md',
  ...props
}: ButtonProps<B>) {
  const buttonStyle = cn(className, styles.button, styles[variant], styles[size]);
  const Component = as ?? 'button';

  return (
    // @ts-expect-error fix later
    <Component className={buttonStyle} {...props}>
      {children}
    </Component>
  );
}
