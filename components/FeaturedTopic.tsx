'use client';

import { useState } from 'react';

import { MotionImage, VideoModal } from '.';
import { TopicProps } from './Topic';

const FeaturedTopic = ({
  img,
  title,
  amount,
  summary,
  link,
  amountText = 'min watch',
}: TopicProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="col-span-1 w-full p-4 bg-light border border-dark border-r-[12px] border-b-[12px] rounded-2xl relative dark:bg-dark dark:border-light">
      <div
        className="w-full inline-block overflow-hidden rounded-lg cursor-default lg:cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <MotionImage
          className="w-full h-auto"
          src={img}
          alt={title}
          priority
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className="mb-7">
        <div onClick={() => setIsOpen(true)}>
          <h2 className="capitalize text-lg sm:text-2xl font-bold my-2 mt-4 text-dark dark:text-light hover:underline underline-offset-4 cursor-default lg:cursor-pointer">
            {title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm mb-2 text-dark dark:text-light">
          {summary}
        </p>
      </div>
      <div className="text-primary text-sm sm:text-base dark:text-primaryDark font-semibold absolute bottom-3">
        {amount} {amountText}
      </div>
      <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} link={link} />
    </li>
  );
};

export default FeaturedTopic;
