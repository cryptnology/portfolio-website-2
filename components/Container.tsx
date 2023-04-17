import { BaseComponentProps } from '@/types';

interface Props extends BaseComponentProps {
  children: any;
}

const Container = ({ className, children }: Props) => {
  return (
    <div className={`px-5 2xl:px-40 lg:px-28 md:px-16 sm:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
