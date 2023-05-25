'use client';

import { useState } from 'react';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { GitHub } from '@/Icons';

import { CustomLink, MotionImage, MotionLink, VideoModal } from '.';

export interface ProjectProps {
  type: string;
  title: string;
  summary?: string;
  img: StaticImageData;
  link: string;
  github: string;
  demo: string;
}

const Project = ({ type, title, img, link, github, demo }: ProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-r-[12px] border-b-[12px] border-dark bg-light p-4 sm:p-6 relative dark:bg-dark dark:border-light">
      <Link
        className="w-full overflow-hidden rounded-lg cursor-default lg:cursor-pointer"
        href={link}
        target="_blank"
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
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-base lg:text-lg xl:text-xl">
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-2xl lg:text-3xl font-bold text-dark dark:text-light hover:underline underline-offset-4 cursor-default lg:cursor-pointer lg:line-clamp-1 ">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <div>
            <CustomLink
              title="Visit"
              className="text-base md:text-lg font-semibold text-dark dark:text-light cursor-default lg:cursor-pointer"
              href={link}
              target="_blank"
              underline
            />
          </div>
          {demo && (
            <div>
              <button
                title="Demo"
                className="text-base md:text-lg font-semibold text-dark dark:text-light cursor-default lg:cursor-pointer relative group"
                onClick={() => setIsOpen(true)}
              >
                Demo
                <div
                  className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 w-full group-hover:w-0 transition-[width] ease duration-300$`}
                />
              </button>
              <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} link={demo} />
            </div>
          )}
          <MotionLink
            className="w-6 md:w-8 cursor-default lg:cursor-pointer"
            href={github}
          >
            <GitHub />
          </MotionLink>
        </div>
      </div>
    </article>
  );
};

export default Project;
