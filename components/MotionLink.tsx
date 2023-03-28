'use client';

import { motion } from 'framer-motion';
import { BaseComponentProps } from '@/types';

interface Props extends BaseComponentProps {}

const MotionLink = ({ className, children, href }: Props) => {
  return (
    <motion.a
      className={`${className} w-6`}
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
