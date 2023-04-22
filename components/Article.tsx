'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

import { MovingImage } from '.';

export interface ArticleProps {
  img: StaticImageData;
  title: string;
  time?: number;
  summary?: string;
  link: string;
  date?: string;
}

const Article = ({ img, title, date, link }: ArticleProps) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 mb-4 last:mb-0 rounded-xl flex flex-col md:flex-row items-center justify-between bg-light text-dark first:mt-0 border border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
    >
      <Link
        className="lg:hidden cursor-default lg:cursor-pointer"
        href={link}
        target="_blank"
      >
        <h2 className="capitalize text-lg sm:text-xl font-semibold hover:underline underline-offset-2 text-dark dark:text-light">
          {title}
        </h2>
      </Link>
      <MovingImage img={img} title={title} link={link} />
      <span className="text-primary text-sm sm:text-base dark:text-primaryDark font-semibold md:pl-4 self-start md:self-center min-w-max">
        {date}
      </span>
    </motion.li>
  );
};

export default Article;
