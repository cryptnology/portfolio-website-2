'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BaseComponentProps } from '@/types';

interface Props extends BaseComponentProps {}

const MotionLink = motion(Link);

const Logo = ({ className, href }: Props) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-center">
        <MotionLink
          className="w-16 h-16 text-light bg-dark flex items-center justify-center rounded-full text-2xl font-bold border border-transparent dark:border-light"
          href={href as string}
          whileHover={{
            backgroundColor: [
              '#121212',
              'rgba(131,58,180,1)',
              'rgba(253,29,29,1)',
              'rgba(252,176,69,1)',
              'rgba(131,58,180,1)',
              '#121212',
            ],
            transition: {
              duration: 1,
              repeat: Infinity,
            },
          }}
        >
          JA
        </MotionLink>
      </div>
    </div>
  );
};

export default Logo;
