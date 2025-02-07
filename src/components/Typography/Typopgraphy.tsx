import classNames from 'classnames';
import styles from './Typography.module.css'

type Props<C extends React.ElementType> = {
  /**
   * Specifies the HTML element to render for the typography.
   * @default "p"
   * @example
   *  <Typography as="h1">Hello World</Typography>
   */
  as?: C;
  /**
  * Size of the typography.
  * @param {size} [size] - The size of the typography. Can be either `sm`, `md`, or `lg`.
  * @default "md"
  * @example
  *   <Typography size="sm">Hello World</Typography>
 */
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

type TypographyProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

/**
 * Component to render a typography possibility to change tag between p, h1, h2, h3, h4, h5, h6
 * and its size
 */
export default function Typography<C extends React.ElementType = 'span'>({
  as,
  children,
  size = "md",
  className,
  ...others
}: TypographyProps<C>) {
  const TypographyStyle = classNames(className, styles.Typography, styles[size])
  const Component = as || 'p'

  return (
    <Component className={TypographyStyle} {...others}>
      {children}
    </Component>
  )
};
