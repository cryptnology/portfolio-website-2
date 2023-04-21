'use client';

import { useEffect, useRef } from 'react';
import { BaseComponentProps } from '@/types';

interface Props extends BaseComponentProps {
  children: JSX.Element;
  handleClick: () => void;
}

const CheckOutsideClick = ({ children, handleClick }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event?.target))
      handleClick && handleClick();
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default CheckOutsideClick;
