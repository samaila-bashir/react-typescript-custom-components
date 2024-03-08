import { type ReactNode, type ElementType, ComponentPropsWithRef } from 'react';

// ElementType wants the name of a component / HTML element e.g <ul>
// children: ReactNode; Use ReactNode to accept raw text or JSX

type ContainerProps<T extends ElementType> = {
  as?: T; // as: represents what kind of element we are creating
  children: ReactNode;
} & ComponentPropsWithRef<T>;

function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';

  return <Component {...props}>{children}</Component>;
}

export default Container;
