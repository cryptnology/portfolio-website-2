import Link from 'next/link';
import { GitHub } from '@/Icons';

import { MotionImage, MotionLink } from '.';
import { ProjectProps } from './Project';

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-dark border-r-[12px] border-b-[12px] bg-light p-4 lg:p-10 xl:p-8 relative rounded-br-3xl dark:bg-dark dark:border-light flex-col xl:flex-row ">
      <Link
        className="w-full xl:w-1/2 cursor-pointer overflow-hidden rounded-lg"
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
      <div className="w-full xl:w-1/2 flex flex-col items-start justify-between pt-6 lg:pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-base sm:text-xl">
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-sm sm:text-4xl font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light text-sm sm:text-base">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <MotionLink className="w-9 sm:w-10" href={github}>
            <GitHub />
          </MotionLink>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-1.5 px-4 sm:px-6 text-base sm:text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
