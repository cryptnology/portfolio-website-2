'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

import { MovingImage, VideoModal } from '.';

export interface TopicProps {
  img: StaticImageData;
  title: string;
  amount: number;
  summary?: string;
  link: string;
  amountText?: string;
}

const Topic = ({
  img,
  title,
  amount,
  link,
  amountText = ' min watch',
}: TopicProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.li
      className="relative w-full p-4 py-6 mb-4 last:mb-0 rounded-xl flex flex-col md:flex-row items-center justify-between bg-light text-dark first:mt-0 border border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
    >
      <div className="lg:hidden" onClick={() => setIsOpen(true)}>
        <h2 className="capitalize text-lg sm:text-xl font-semibold hover:underline underline-offset-2 text-dark dark:text-light">
          {title}
        </h2>
      </div>
      <MovingImage
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        img={img}
        title={title}
        link={link}
      />
      <span className="text-primary text-sm sm:text-base dark:text-primaryDark font-semibold md:pl-4 self-start md:self-center min-w-max">
        {amount}
        {amountText}
      </span>
      <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} link={link} />
    </motion.li>
  );
};

export default Topic;
