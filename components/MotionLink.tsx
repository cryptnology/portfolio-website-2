'use client';

import { motion } from 'framer-motion';
import { BaseComponentProps } from '@/types';

interface Props extends BaseComponentProps {
  width?: number;
}

const MotionLink = ({ className, children, href, width = 6 }: Props) => {
  return (
    <motion.a
      className={`${className} w-${width}`}
      href={href}
      target="_blank"
      whileHover={{
        y: -2,
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

export default MotionLink;
