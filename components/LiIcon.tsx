'use client';

import { RefObject } from 'react';
import { motion, useScroll } from 'framer-motion';

interface Props {
  reference: RefObject<HTMLLIElement>;
}

const LiIcon = ({ reference }: Props) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
    layoutEffect: false,
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
          cx="75"
          cy="50"
          r="20"
        />
        <motion.circle
          className="stroke-[5px] fill-light dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
        />
        <circle
          className="stroke-1 fill-primary dark:fill-primaryDark animate-pulse"
          cx="75"
          cy="50"
          r="10"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
