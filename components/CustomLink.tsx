'use client';

import { BaseComponentProps } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props extends BaseComponentProps {
  title: string;
  target?: string;
  underline?: boolean;
}

const CustomLink = ({ href, title, className, target, underline }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${className} relative group`}
      href={href as string}
      target={target}
    >
      {title}
      <div
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 ${
          underline ? 'w-full group-hover:w-0' : 'group-hover:w-full'
        } transition-[width] ease duration-300 ${
          pathname === href ? 'w-full' : 'w-0'
        }`}
      />
    </Link>
  );
};

export default CustomLink;
