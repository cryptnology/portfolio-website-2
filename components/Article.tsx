'use client';

import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

import { MovingImage } from '.';

export interface ArticleProps {
  img: StaticImageData;
  title: string;
  time?: string;
  summary?: string;
  link: string;
  date?: string;
}

const Article = ({ img, title, date, link }: ArticleProps) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
    >
      <MovingImage img={img} title={title} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">
        {date}
      </span>
    </motion.li>
  );
};

export default Article;
