'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

import { LiIcon } from '.';

interface Education {
  type: string;
  time: string;
  place: string;
  info: string;
}

interface CourseProps {
  details: Education;
}
interface EducationProps {
  education: Education[];
}

const Course = ({ details }: CourseProps) => {
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
          {details.type}{' '}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 text-sm sm:text-base">
          {details.time} | {details.place}
        </span>
        <p className="font-medium w-full text-sm sm:text-base">
          {details.info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = ({ education }: EducationProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-28 lg:my-36 w-full">
      <h2 className="font-bold text-4xl md:text-6xl lg:text-8xl mb-16 md:mb-32 w-full text-center text-dark dark:text-light">
        Education
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
          {education.map((course, i) => (
            <Course key={i} details={course} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
