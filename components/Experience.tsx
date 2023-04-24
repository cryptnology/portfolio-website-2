'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

import { LiIcon } from '.';

interface Experience {
  position: string;
  company: string;
  time: string;
  address: string;
  work: string;
  companyLink: string;
}

interface PositionProps {
  details: Experience;
}

interface ExperienceProps {
  experience: Experience[];
}

const Position = ({ details }: PositionProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] sm:w-[75%] md:w-[70%] lg:w-[64%] xl:w-[60%] 2xl:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
          {details.position}{' '}
          <a
            className="text-primary dark:text-primaryDark capitalize"
            href={details.companyLink}
            target="_blank"
          >
            @{details.company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 text-sm sm:text-base">
          {details.time} | {details.address}
        </span>
        <p className="font-medium w-full">{details.work}</p>
      </motion.div>
    </li>
  );
};

const Experience = ({ experience }: ExperienceProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="w-full">
      <h2 className="font-bold text-4xl md:text-6xl lg:text-8xl mb-16 md:mb-32 w-full text-center text-dark dark:text-light">
        Experience
      </h2>
      <div
        ref={ref}
        className="w-[95%] sm:w-full md:w-[95%] lg:w-[85%] xl:w-[70%] 2xl:w-[70%] mx-auto relative"
      >
        <motion.div
          className="absolute left-[19px] md:left-[28px] top-0 w-[2px] md:w-[4px] h-full bg-dark origin-top dark:bg-light"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-2 sm:ml-4">
          {experience.map((position, i) => (
            <Position key={i} details={position} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
