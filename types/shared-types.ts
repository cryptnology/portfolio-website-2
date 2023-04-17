export interface BaseComponentProps {
  className?: string;
  children?: JSX.Element;
  href?: string;
}

export interface LinkProps extends BaseComponentProps {
  title: string;
  target?: string;
  underline?: boolean;
}
