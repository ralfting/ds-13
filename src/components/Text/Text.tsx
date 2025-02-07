type Props<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
  color?: 'red' | 'black';
  font?: 'thin' | 'regular' | 'heavy';
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
}

type TextProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

export default function Text<C extends React.ElementType = 'span'>({
  as,
  children,
  // font = 'regular',
  // size = '4',
  // color = 'black',
  ...others
}: TextProps<C>) {
  // const classes = getClasses({ font, size, color })
  const Component = as || 'span'

  return (
    <Component {...others}>
      {children}
    </Component>
  )
};
