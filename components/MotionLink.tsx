'use client';

import { motion } from 'framer-motion';
import { BaseComponentProps } from '@/types';

interface Props extends BaseComponentProps {
  toggle?: () => void;
}

const MotionLink = ({ className, children, href, toggle }: Props) => {
  return (
    <motion.a
      onClick={toggle}
      className={className}
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
