'use client';

import { LinkProps } from '@/types';
import { usePathname, useRouter } from 'next/navigation';

interface Props extends LinkProps {
  title: string;
  underline?: boolean;
  toggle: () => void;
}

const CustomMobileLink = ({
  href,
  title,
  className,
  underline,
  toggle,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    toggle();
    router.push(href as string);
  };

  return (
    <button
      className={`${className} relative group mt-2`}
      onClick={handleClick}
    >
      {title}
      <div
        className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 ${
          underline ? 'w-full group-hover:w-0' : 'group-hover:w-full'
        } transition-[width] ease duration-300 ${
          pathname === href ? 'w-full' : 'w-0'
        }`}
      />
    </button>
  );
};

export default CustomMobileLink;
