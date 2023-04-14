import { BaseComponentProps } from '@/types';

interface Props extends BaseComponentProps {
  children: any;
}

const Container = ({ className, children }: Props) => {
  return <div className={`px-32 ${className}`}>{children}</div>;
};

export default Container;
